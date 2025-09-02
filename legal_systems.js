import { LEGAL_DATA } from './legal_data.js';
import { MAP_DATA } from './map-data.js';

const codexContainer = document.getElementById('codex-container');

// Helper to find a POI's name by its ID across all maps
function findPoiNameById(poiId) {
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        if (map.pointsOfInterest) {
            const poi = map.pointsOfInterest.find(p => p.id === poiId);
            if (poi) {
                return poi.name;
            }
        }
    }
    return poiId; // Fallback to ID if not found
}

// Helper to find a POI's parent landmass key
function getLandmassKeyForMap(mapId) {
    const mapInfo = MAP_DATA[mapId];
    if (!mapInfo || !mapInfo.group) return null;

    if (mapInfo.group.includes('Mushroom Kingdom') || mapInfo.group.includes('Islands')) return 'mushroom_kingdom_full';
    if (mapInfo.group.includes('The Midlands')) return 'midlands_full';
    if (mapInfo.group.includes('Other Dimensions')) return 'the_internet';
    
    return null;
}

/**
 * Builds a map where each key is a "law:variant" and the value is a list of all places that follow it.
 * This function calculates the *effective* law for every defined location.
 */
function buildFollowersMap() {
    const followersMap = {};
    const addFollower = (lawKey, variantKey, followerName) => {
        const key = `${lawKey}:${variantKey}`;
        if (!followersMap[key]) {
            followersMap[key] = new Set();
        }
        followersMap[key].add(followerName);
    };

    // Calculate effective laws for all locations
    const allLocations = {};

    // 1. Start with landmasses (base laws)
    Object.entries(LEGAL_DATA.landmass_laws).forEach(([id, data]) => {
        allLocations[id] = { name: data.name, effectiveLaws: { ...data.laws } };
    });

    // 2. Add regions, inheriting from their landmass
    Object.keys(MAP_DATA).forEach(mapKey => {
        const regionalOverride = LEGAL_DATA.region_laws[mapKey];
        const landmassKey = getLandmassKeyForMap(mapKey);
        const baseLaws = landmassKey ? allLocations[landmassKey]?.effectiveLaws : {};
        
        if (regionalOverride) {
            allLocations[mapKey] = { 
                name: regionalOverride.name, 
                effectiveLaws: { ...baseLaws, ...regionalOverride.laws }
            };
        } else if (landmassKey) {
            // If no override, the region still exists and follows landmass law
             allLocations[mapKey] = {
                name: MAP_DATA[mapKey].name,
                effectiveLaws: { ...baseLaws }
            };
        }
    });

    // 3. Add POIs, inheriting from their region
    Object.entries(MAP_DATA).forEach(([mapKey, mapData]) => {
        if (!mapData.pointsOfInterest) return;
        const regionLaws = allLocations[mapKey]?.effectiveLaws || {};

        mapData.pointsOfInterest.forEach(poi => {
            const poiOverride = LEGAL_DATA.poi_laws[poi.id];
            if (poiOverride) {
                 allLocations[poi.id] = {
                    name: poi.name,
                    effectiveLaws: { ...regionLaws, ...poiOverride.laws }
                };
            } else {
                 allLocations[poi.id] = {
                    name: poi.name,
                    effectiveLaws: { ...regionLaws }
                };
            }
        });
    });

    // 4. Populate the followersMap from the calculated effective laws
    Object.values(allLocations).forEach(location => {
        Object.entries(location.effectiveLaws).forEach(([lawKey, variantKey]) => {
            addFollower(lawKey, variantKey, location.name);
        });
    });
    
    // Convert Sets to sorted Arrays
    const finalMap = {};
    for (const key in followersMap) {
        finalMap[key] = Array.from(followersMap[key]).sort();
    }
    
    return finalMap;
}


function renderCodex() {
    if (!codexContainer) return;
    const followers = buildFollowersMap();

    codexContainer.innerHTML = Object.entries(LEGAL_DATA.law_definitions).map(([key, law]) => {
        
        const variantsHTML = Object.entries(law.variants).map(([variantKey, variant]) => {
            const followerMapKey = `${key}:${variantKey}`;
            const followersList = followers[followerMapKey] || [];

            let followersHTML = '';
            if (followersList.length > 0) {
                 followersHTML = `
                    <div class="followers-section">
                        <h5 class="followers-title">Followed By:</h5>
                        <ul class="followers-list">
                            ${followersList.map(name => `<li class="follower-tag">${name}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            return `
                <li class="variant-item">
                    <strong>${variant.name}</strong>
                    <p>${variant.description}</p>
                    ${followersHTML}
                </li>
            `;
        }).join('');

        return `
            <div class="law-category-card">
                <div class="law-category-header">
                    <span class="law-category-icon">${law.icon}</span>
                    <h3>${law.name}</h3>
                </div>
                <ul class="law-variants-list">
                    ${variantsHTML}
                </ul>
            </div>
        `;
    }).join('');
}


function init() {
    if (!codexContainer) return;
    renderCodex();
}

init();
