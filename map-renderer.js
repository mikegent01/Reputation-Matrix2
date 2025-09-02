import { state, saveState } from './state.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import { LEGAL_DATA } from './legal_data.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import * as map from './maps.js';
import { LORE_DATA } from './lore.js';
import { getIntelForFaction } from './systems/common.js';
import { resetTransform } from './map-transform.js';
import { QUEST_DATA } from './quests-data.js';
import { BATTLE_MAP_DATA } from './map-battle-data.js';

const displayArea = document.getElementById('map-display-area');
const detailPanel = document.getElementById('map-detail-content');
let tooltip; // To be created dynamically

function createTooltip() {
    if (document.getElementById('map-tooltip')) return;
    tooltip = document.createElement('div');
    tooltip.id = 'map-tooltip';
    displayArea.appendChild(tooltip);
}

function showTooltip(e, content) {
    if (!tooltip) return;
    tooltip.innerHTML = content;
    tooltip.classList.add('visible');
    
    const rect = displayArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    tooltip.style.left = `${x + 15}px`;
    tooltip.style.top = `${y + 15}px`;
}

function hideTooltip() {
    if (tooltip) tooltip.classList.remove('visible');
}

function hasSufficientIntel(requirement) {
    if (!requirement) return true;
    if (state.debugMode) return true;
    if (typeof requirement === 'number') { // Simple intel check
        return getIntelForFaction(map.activeMapId) >= requirement; // This might need refinement
    }
    if (typeof requirement.faction === 'string' && typeof requirement.level === 'number') {
        return getIntelForFaction(requirement.faction) >= requirement.level;
    }
    return true; // Fail open
}


export function renderMap(mapId) {
    map.setActiveMapId(mapId);
    const mapData = MAP_DATA[mapId];

    displayArea.innerHTML = ''; // Clear previous map content
    displayArea.classList.toggle('edit-mode', map.isEditMode);
    createTooltip();

    const zoomWrapper = document.createElement('div');
    zoomWrapper.id = 'map-zoom-wrapper';

    const mapImage = document.createElement('img');
    mapImage.id = 'map-image';
    mapImage.src = mapData.imageSrc;
    zoomWrapper.appendChild(mapImage);
    
    displayArea.appendChild(zoomWrapper);

    mapImage.onload = () => {
        const container = displayArea;
        const img = mapImage;
        const containerRatio = container.clientWidth / container.clientHeight;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        
        let renderedWidth, renderedHeight, top, left;
        if (containerRatio > imgRatio) { // Pillarboxed
            renderedHeight = container.clientHeight;
            renderedWidth = renderedHeight * imgRatio;
            top = 0;
            left = (container.clientWidth - renderedWidth) / 2;
        } else { // Letterboxed
            renderedWidth = container.clientWidth;
            renderedHeight = renderedWidth / imgRatio;
            top = (container.clientHeight - renderedHeight) / 2;
            left = 0;
        }

        const interactiveLayer = document.createElement('div');
        interactiveLayer.id = 'interactive-map-layer';
        interactiveLayer.style.position = 'absolute';
        interactiveLayer.style.width = `${renderedWidth}px`;
        interactiveLayer.style.height = `${renderedHeight}px`;
        interactiveLayer.style.top = `${top}px`;
        interactiveLayer.style.left = `${left}px`;
        zoomWrapper.appendChild(interactiveLayer);

        map.setRenderedMapDimensions({ width: renderedWidth, height: renderedHeight });

        renderPois();
        renderFog();
        
        if (map.activeMapMode === 'tactical') {
            renderBattleElements(mapId);
        }

        if (map.isEditMode) {
            const drawingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            drawingSvg.id = 'map-drawing-svg';
            drawingSvg.setAttribute('viewBox', '0 0 100 100');
            drawingSvg.setAttribute('preserveAspectRatio', 'none');
            interactiveLayer.appendChild(drawingSvg);
        }
    };

    renderMapModeLegend();
    resetTransform();
}

function getUnitIcon(unitType) {
    switch(unitType) {
        case 'garrison': return '⛫';
        case 'patrol': return '⬦';
        case 'main_force': return '●';
        case 'special_ops': return '★';
        case 'siege_unit': return '⌖';
        case 'ambush': return 'X';
        default: return '?';
    }
}

function renderBattleElements(mapId) {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '3';
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    interactiveLayer.appendChild(svg);

    // Render Front Lines
    const frontLines = BATTLE_MAP_DATA.front_lines.filter(fl => fl.mapId === mapId);
    frontLines.forEach(fl => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        line.setAttribute('points', fl.points);
        line.classList.add('front-line', 'clickable-tactical');
        line.addEventListener('click', () => {
            map.playSound('click.mp3');
            renderTacticalDetailPanel(fl.id, 'frontline');
        });
        svg.appendChild(line);
    });

    // Render Vigilance Journey
    if (BATTLE_MAP_DATA.vigilance_journey.mapId === mapId) {
        renderVigilance(interactiveLayer, svg);
    }

    // Render Troop Deployments
    const troopsOnThisMap = BATTLE_MAP_DATA.troop_deployments.filter(t => t.mapId === mapId);
    troopsOnThisMap.forEach(troop => {
        const faction = LORE_DATA.factions[troop.factionId];
        
        // Render Patrol Path
        if (troop.unitType === 'patrol' && troop.path) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', troop.path);
            path.classList.add('patrol-path');
            if (faction) {
                path.style.stroke = FACTION_COLORS[troop.factionId] || 'white';
            }
            svg.appendChild(path);
        }

        // Render Troop Marker
        const troopMarker = document.createElement('div');
        troopMarker.className = `troop-marker unit-type-${troop.unitType}`;
        if (troop.battlefront) troopMarker.classList.add('battlefront');
        troopMarker.style.left = `${troop.x}%`;
        troopMarker.style.top = `${troop.y}%`;
        troopMarker.dataset.troopId = troop.id;
        
        if (faction) {
            troopMarker.style.borderColor = FACTION_COLORS[troop.factionId] || 'white';
        } else {
            troopMarker.style.borderColor = 'grey'; // Fallback for unknown factions
        }
        troopMarker.innerHTML = `<div class="unit-type-icon">${getUnitIcon(troop.unitType)}</div>`;
        if (troop.unitType === 'patrol') {
            troopMarker.querySelector('.unit-type-icon').style.transform = 'rotate(-45deg)';
        }

        troopMarker.addEventListener('mouseover', e => {
            const hasIntel = hasSufficientIntel(troop.details.intelReq);
            
            let intelGatedHTML = '<p class="redacted" style="text-align:center;">[Further intel required]</p>';
            if (hasIntel) {
                const supplyStatus = troop.details.supply_level > 70 ? 'high' : troop.details.supply_level > 30 ? 'medium' : 'low';
                const moraleStatus = troop.details.morale > 70 ? 'high' : troop.details.morale > 30 ? 'medium' : 'low';
                const orgStatus = troop.details.organization > 70 ? 'high' : troop.details.organization > 30 ? 'medium' : 'low';

                intelGatedHTML = `
                    <p><strong>Status:</strong> ${troop.details.status}</p>
                    <p><strong>Supply Level:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${supplyStatus}" style="width: ${troop.details.supply_level}%"></div>
                    </div>
                    <p><strong>Morale:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${moraleStatus}" style="width: ${troop.details.morale}%"></div>
                    </div>
                    <p><strong>Organization:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${orgStatus}" style="width: ${troop.details.organization}%"></div>
                    </div>
                    <p class="tooltip-objective"><strong>Objective:</strong> ${troop.details.objective}</p>
                `;
            }

            const factionLogo = faction ? `<img src="${faction.logo}" alt="${faction.name}"/>` : '';
            
            const tooltipContent = `
                <div class="tooltip-header">
                    ${factionLogo}
                    <h5>${troop.name}</h5>
                </div>
                <div class="tooltip-section">
                    <p><strong>Strength:</strong> ${troop.strength}</p>
                    ${intelGatedHTML}
                </div>
            `;
            showTooltip(e, tooltipContent);
        });
        troopMarker.addEventListener('mouseout', hideTooltip);
        
        interactiveLayer.appendChild(troopMarker);
    });
}


function renderVigilance(container, svg) {
    const journey = BATTLE_MAP_DATA.vigilance_journey;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', journey.path);
    path.classList.add('vigilance-path');
    svg.appendChild(path);

    // Calculate position
    const pathElForLength = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElForLength.setAttribute('d', journey.path);
    const pathLength = pathElForLength.getTotalLength();
    const progress = journey.currentDay / journey.totalDays;
    const currentPoint = pathElForLength.getPointAtLength(pathLength * progress);

    const marker = document.createElement('div');
    marker.className = 'vigilance-marker';
    marker.style.left = `${currentPoint.x}%`;
    marker.style.top = `${currentPoint.y}%`;
    marker.title = "The 'Vigilance'";
    marker.dataset.vigilanceId = 'vigilance';
    
    const label = document.createElement('div');
    label.className = 'vigilance-label';
    label.textContent = `${journey.daysRemaining} days to Capital`;
    marker.appendChild(label);
    
    container.appendChild(marker);
}

export function renderPois() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;
    
    interactiveLayer.querySelectorAll('.poi-marker').forEach(el => el.remove());

    const poiSource = map.isEditMode ? map.editSessionData.pois : (MAP_DATA[map.activeMapId]?.pointsOfInterest || []);

    let allPois = poiSource.filter(poi => {
        if (map.isEditMode) return true;
        if (map.activeMapMode === 'political' && !poi.factionId) return false;
        return hasSufficientIntel(poi.intelReq);
    });

    allPois.forEach(poi => {
        const marker = document.createElement('div');
        marker.className = 'poi-marker';
        marker.style.left = `${poi.x}%`;
        marker.style.top = `${poi.y}%`;
        marker.dataset.poiId = poi.id;
        marker.title = poi.name;

        marker.classList.remove('political-view', 'economic-view', 'military-view', 'population-view', 'laws-view');
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';
        marker.appendChild(iconWrapper);

        const hasRequest = Object.values(QUEST_DATA).some(q => q.locationId === poi.id && q.status === 'available');
        if (hasRequest && !map.isEditMode) {
            const requestIndicator = document.createElement('div');
            requestIndicator.className = 'poi-request-indicator';
            requestIndicator.textContent = '!';
            marker.appendChild(requestIndicator);
        }

        if (map.activeMapMode === 'tactical') {
            marker.style.opacity = '0.5';
            marker.style.width = '16px';
            marker.style.height = '16px';
            iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
            iconWrapper.style.fontSize = '10px';
        } else {
             marker.style.opacity = '1';
             marker.style.width = '32px';
             marker.style.height = '32px';
             iconWrapper.style.fontSize = '18px';
            switch (map.activeMapMode) {
                case 'political':
                    marker.classList.add('political-view');
                    marker.style.backgroundColor = FACTION_COLORS[poi.factionId] || 'var(--text-secondary)';
                    const politicalSize = 16 + (poi.political_influence || 1) * 2;
                    marker.style.width = `${politicalSize}px`;
                    marker.style.height = `${politicalSize}px`;
                    iconWrapper.innerHTML = '';
                    break;
                case 'economic':
                    marker.classList.add('economic-view');
                    const economicSize = 16 + (poi.economic_value || 1) * 2;
                    marker.style.width = `${economicSize}px`;
                    marker.style.height = `${economicSize}px`;
                    iconWrapper.innerHTML = poi.economic_value || '?';
                    break;
                case 'military':
                    marker.classList.add('military-view');
                    const militarySize = 16 + (poi.military_strength || 1) * 2;
                    marker.style.width = `${militarySize}px`;
                    marker.style.height = `${militarySize}px`;
                    iconWrapper.innerHTML = poi.military_strength || '?';
                    break;
                case 'population':
                    marker.classList.add('population-view');
                    const popSize = 12 + Math.log2(Math.max(1, poi.population || 1)) * 2.5;
                    marker.style.width = `${popSize}px`;
                    marker.style.height = `${popSize}px`;
                    marker.style.backgroundColor = getPopulationColor(poi.population || 0);
                    marker.style.opacity = poi.population > 0 ? '0.9' : '0.5';
                    break;
                case 'laws':
                    marker.classList.add('laws-view');
                    if (LEGAL_DATA.poi_laws[poi.id]) {
                        iconWrapper.innerHTML = '📜'; // Special icon for POIs with custom laws
                    } else {
                        marker.style.opacity = '0.4'; // Dim POIs without specific laws
                        iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
                    }
                    break;
                case 'standard':
                default:
                    iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
                    break;
            }
        }

        if (map.isEditMode) {
            marker.draggable = true;
            marker.classList.add('draggable-poi');
        }

        interactiveLayer.appendChild(marker);
    });
}

export function renderFog() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    const existingFog = document.getElementById('map-fog-overlay');
    if (existingFog) existingFog.remove();

    const fogSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    fogSvg.id = 'map-fog-overlay';
    fogSvg.setAttribute('viewBox', '0 0 100 100');
    fogSvg.setAttribute('preserveAspectRatio', 'none');

    const fogSource = map.isEditMode ? map.editSessionData.fogs : (MAP_DATA[map.activeMapId]?.fogOfWar || []);
    
    // In a real game, userFogs would be added, but for the editor they are part of the session
    const allFogs = [...fogSource]; 

    allFogs.forEach(fog => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', fog.points);
        polygon.id = fog.id;

        if (state.mapState.discoveredFogs.includes(fog.id)) {
            polygon.classList.add('discovered');
        }
        fogSvg.appendChild(polygon);
    });

    interactiveLayer.appendChild(fogSvg);
}


function getPopulationColor(population) {
    if (population <= 50) return '#4575b4';
    if (population <= 500) return '#91bfdb';
    if (population <= 2000) return '#e0f3f8';
    if (population <= 5000) return '#fee090';
    if (population <= 10000) return '#fdae61';
    return '#f46d43';
}

function getLandmassKey(mapId) {
    const mapInfo = MAP_DATA[mapId];
    if (!mapInfo || !mapInfo.group) return null;

    if (mapInfo.group.includes('Mushroom Kingdom')) return 'mushroom_kingdom_full';
    if (mapInfo.group.includes('The Midlands')) return 'midlands_full';
    if (mapInfo.group.includes('Other Dimensions')) return 'the_internet';
    if (mapInfo.group.includes('Islands')) return 'mushroom_kingdom_full';
    
    return null;
}

export function showLawsPopup(poi) {
    const mapId = map.activeMapId;
    const landmassKey = getLandmassKey(mapId);

    // BUG FIX: Check if landmassKey and the corresponding law data exist before proceeding.
    if (!landmassKey || !LEGAL_DATA.landmass_laws[landmassKey]) {
        map.showMapModal('Law Data Unavailable', '<p>Could not determine the base legal system for this region.</p>');
        return;
    }
    const baseLaws = LEGAL_DATA.landmass_laws[landmassKey];

    // Determine the governing law for the currently viewed region, applying overrides.
    let governingLawSet = structuredClone(baseLaws);
    const regionalOverride = LEGAL_DATA.region_laws[mapId];
    if (regionalOverride) {
        governingLawSet.name = regionalOverride.name;
        governingLawSet.description = regionalOverride.description;
        governingLawSet.laws = { ...governingLawSet.laws, ...regionalOverride.laws };
    }

    if (!poi) {
        // Map background clicked, show the governing law for the current map view.
        const lawsHTML = Object.entries(governingLawSet.laws).map(([lawKey, variantKey]) => {
            const lawDef = LEGAL_DATA.law_definitions[lawKey];
            const variantDef = lawDef?.variants[variantKey];
            if (!variantDef) return '';
            return `
                <div class="law-popup-item">
                    <h5>${lawDef.icon} ${lawDef.name}</h5>
                    <p><strong>${variantDef.name}:</strong> ${variantDef.description}</p>
                </div>
            `;
        }).join('');
        const content = `
            <div class="law-popup-content">
                <div class="law-popup-header"><p>${governingLawSet.description}</p></div>
                <div class="law-popup-list">${lawsHTML}</div>
            </div>`;
        map.showMapModal(governingLawSet.name, content);
        return;
    }

    // A POI was clicked. Check for specific local laws.
    const localLaws = LEGAL_DATA.poi_laws[poi.id];
    if (localLaws && localLaws.popup_summary) {
        // POI has specific overrides.
        let finalLaws = { ...governingLawSet.laws, ...localLaws.laws };
        const lawsHTML = Object.entries(finalLaws).map(([lawKey, variantKey]) => {
            const lawDef = LEGAL_DATA.law_definitions[lawKey];
            const variantDef = lawDef?.variants[variantKey];
            if (!variantDef) return '';
            return `
                <div class="law-popup-item">
                    <h5>${lawDef.icon} ${lawDef.name}</h5>
                    <p><strong>${variantDef.name}:</strong> ${variantDef.description}</p>
                </div>
            `;
        }).join('');

        const traditionsHTML = (localLaws.custom_traditions || []).map(tradition => `
            <div class="law-popup-item">
                <h5>📜 ${tradition.name}</h5>
                <p>${tradition.description}</p>
            </div>
        `).join('');

        const content = `
            <div class="law-popup-content">
                <div class="law-popup-header"><p>${localLaws.popup_summary}</p></div>
                <div class="law-popup-list">${lawsHTML}</div>
                ${traditionsHTML ? `<div class="law-popup-traditions"><h4>Local Customs & Traditions</h4><div class="law-popup-list">${traditionsHTML}</div></div>` : ''}
            </div>`;
        map.showMapModal(`Laws of ${poi.name}`, content);
    } else {
        // POI follows the regional law. Display a simple message with a hyperlink.
        const content = `
            <div class="law-popup-content">
                <div class="law-popup-header">
                    <p>This location adheres to the standard <a href="legal_systems.html" class="character-link">${governingLawSet.name}</a>.</p>
                </div>
            </div>`;
        map.showMapModal(`Laws of ${poi.name}`, content);
    }
}


export async function showLibraryPopup(poi) {
    const { LIBRARY_STOCKS } = await import('./books/library_stocks.js');
    const { BOOK_DESCRIPTIONS } = await import('./books/book_descriptions.js');
    
    const bookKeys = LIBRARY_STOCKS[poi.libraryStockKey] || [];
    let booksHTML = '';

    if (bookKeys.length > 0) {
        booksHTML = bookKeys.map(key => {
            const book = BOOK_DESCRIPTIONS[key];
            return book ? `
                <div class="library-popup-book">
                    <strong>${key}</strong>
                    <p>${book.summary}</p>
                </div>
            ` : '';
        }).join('');
    } else {
        booksHTML = `<p class="panel-placeholder">No books are currently catalogued for this library.</p>`;
    }

    const summaryHTML = poi.library_summary 
        ? `<p class="library-popup-summary">${poi.library_summary}</p>` 
        : '';
    
    const content = `${summaryHTML}<div class="library-popup-list">${booksHTML}</div>`;
    map.showMapModal(`Books in Stock: ${poi.name}`, content);
}


export async function showDetailPanel(poiId) {
    const poiSource = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[map.activeMapId] || [];
    const poi = [...poiSource, ...userPois].find(p => p.id === poiId);

    if (!poi) return;
    
    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Unknown' };
    
    let intelReqHTML = '';
    if (poi.intelReq) {
         if (typeof poi.intelReq === 'number') { // Old simple format
            intelReqHTML = `<p class="poi-intel-req"><strong>Intel Source:</strong> Requires Intel Level ${poi.intelReq}.</p>`;
        } else if (typeof poi.intelReq === 'object') { // New detailed format
            const faction = LORE_DATA.factions[poi.intelReq.faction];
            if (faction) {
                intelReqHTML = `<p class="poi-intel-req"><strong>Intel Source:</strong> Requires ${poi.intelReq.level} Intel with ${faction.name}.</p>`;
            }
        }
    }

    const availableRequests = Object.values(QUEST_DATA).filter(q => q.locationId === poiId && q.status === 'available');
    let requestsHTML = '';
    if (availableRequests.length > 0) {
        requestsHTML = `
            <div class="poi-requests-section">
                <h4>Available Requests</h4>
                ${availableRequests.map(req => `
                    <div class="poi-request-item">
                        <strong>${req.title}</strong>
                        <p>${req.objective}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    detailPanel.innerHTML = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.name}</p>
            <p class="poi-description">${poi.description || 'No further details available.'}</p>
            ${intelReqHTML}
        </div>
        ${requestsHTML}
    `;
}

export function renderTacticalDetailPanel(itemId, itemType) {
    let html = '';
    
    if (itemType === 'troop') {
        const troop = BATTLE_MAP_DATA.troop_deployments.find(t => t.id === itemId);
        if (!troop) return;
        const faction = LORE_DATA.factions[troop.factionId];
        const hasIntel = hasSufficientIntel(troop.details.intelReq);

        const supplyStatus = troop.details.supply_level > 70 ? 'high' : troop.details.supply_level > 30 ? 'medium' : 'low';
        const moraleStatus = troop.details.morale > 70 ? 'high' : troop.details.morale > 30 ? 'medium' : 'low';
        const orgStatus = troop.details.organization > 70 ? 'high' : troop.details.organization > 30 ? 'medium' : 'low';
        
        let intelGatedHTML;
        if (hasIntel) {
            intelGatedHTML = `
                <div class="tactical-stat"><strong>Status:</strong> ${troop.details.status}</div>
                <div class="tactical-stat"><strong>Supply:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${supplyStatus}" style="width: ${troop.details.supply_level}%"></div></div>
                </div>
                <div class="tactical-stat"><strong>Morale:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${moraleStatus}" style="width: ${troop.details.morale}%"></div></div>
                </div>
                <div class="tactical-stat"><strong>Organization:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${orgStatus}" style="width: ${troop.details.organization}%"></div></div>
                </div>
                <div class="tactical-objective">
                    <h5>Current Objective</h5>
                    <p>${troop.details.objective}</p>
                </div>
            `;
        } else {
             const req = troop.details.intelReq;
             const reqFaction = LORE_DATA.factions[req.faction]?.name || 'a relevant faction';
             intelGatedHTML = `<p class="poi-intel-req"><strong>Intel Required:</strong> Requires Level ${req.level} with ${reqFaction} to view detailed operational status.</p>`;
        }
        
        html = `
            <div class="tactical-detail-panel">
                <h3>${troop.name}</h3>
                <p class="tactical-faction">
                    <img src="${faction?.logo || 'icon_focus.png'}" alt="Faction Logo">
                    ${faction?.name || 'Unknown Faction'}
                </p>
                <div class="tactical-info">
                    <p><strong>Unit Type:</strong> ${troop.unitType.replace(/_/g, ' ')}</p>
                    <p><strong>Strength:</strong> ${troop.strength}</p>
                </div>
                ${intelGatedHTML}
            </div>
        `;
    } else if (itemType === 'vigilance') {
        const journey = BATTLE_MAP_DATA.vigilance_journey;
        html = `
            <div class="tactical-detail-panel">
                <h3>The 'Vigilance'</h3>
                <p class="tactical-faction">
                    <img src="newspaper_airship.png" alt="Vigilance">
                    Unaligned (Party Controlled)
                </p>
                <div class="tactical-info">
                    <p><strong>Status:</strong> En route to Imperial Capital</p>
                    <p><strong>Journey Progress:</strong> Day ${journey.currentDay} of ${journey.totalDays}</p>
                    <p><strong>Time Remaining:</strong> ${journey.daysRemaining} days</p>
                </div>
                <div class="tactical-objective">
                    <h5>Mission</h5>
                    <p>Travel to the heart of the Regal Empire to confront Emperor Elagabalus.</p>
                </div>
            </div>
        `;
    } else if (itemType === 'frontline') {
        const line = BATTLE_MAP_DATA.front_lines.find(l => l.id === itemId);
        if(!line) return;
         html = `
            <div class="tactical-detail-panel">
                <h3>Contested Front Line</h3>
                <p class="tactical-faction">
                    <img src="icon_focus.png" alt="Conflict">
                    Active War Zone
                </p>
                <div class="tactical-objective">
                    <h5>Situation</h5>
                    <p>${line.description}</p>
                </div>
            </div>
        `;
    }

    detailPanel.innerHTML = html;
}

export function renderMapModeLegend() {
    let legendHTML = '';
    let currentPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    
    switch(map.activeMapMode) {
        case 'political':
            const visibleFactions = [...new Set(currentPois
                .map(p => p.factionId)
                .filter(id => id && id !== 'unaligned' && FACTION_COLORS[id]))];

            const sortedFactions = visibleFactions.sort((a,b) => LORE_DATA.factions[a].name.localeCompare(b.name));

            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Political View</h4>
                    <p>Locations are colored by their controlling faction. Size indicates political influence.</p>
                    ${sortedFactions.length > 0 ? `
                    <ul class="legend-list">
                        ${sortedFactions.map(factionId => `
                            <li class="legend-item">
                                <div class="legend-color-box" style="background-color: ${FACTION_COLORS[factionId]};"></div>
                                <span>${LORE_DATA.factions[factionId].name}</span>
                            </li>
                        `).join('')}
                    </ul>
                    ` : `<p class="panel-placeholder">No politically aligned factions in current view.</p>`}
                </div>
            `;
            break;
        case 'economic':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Economic View</h4>
                    <p>The size and number indicate relative economic importance.</p>
                </div>`;
            break;
        case 'military':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Military View</h4>
                    <p>The size and number indicate relative strategic strength.</p>
                </div>`;
            break;
        case 'tactical':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Tactical Legend</h4>
                    <p>Shows dynamic troop movements and key strategic assets.</p>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="troop-marker-legend unit-type-main_force">●</div><span>Main Force</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-garrison" style="border-radius: 4px;">⛫</div><span>Garrison</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-patrol" style="border-radius: 0; transform: rotate(45deg);"><div style="transform: rotate(-45deg);">⬦</div></div><span>Patrol</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-special_ops" style="border-style: dashed; border-radius: 50%;">★</div><span>Special Ops</span></li>
                         <li class="legend-item"><div class="troop-marker-legend unit-type-siege_unit" style="border-radius: 2px;">⌖</div><span>Siege Unit</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-ambush" style="border-style: dotted; border-radius: 50%; border-color: var(--negative-color)">X</div><span>Ambush Force</span></li>
                        <li class="legend-item"><div class="front-line-legend"></div><span>Active Front Line</span></li>
                        <li class="legend-item"><div class="patrol-path-legend"></div><span>Projected Patrol Path</span></li>
                        <li class="legend-item"><div class="vigilance-marker-legend"></div><span>The Vigilance</span></li>
                        <li class="legend-item"><div class="vigilance-path-legend"></div><span>Vigilance Flight Path</span></li>
                    </ul>
                </div>
            `;
            break;
        case 'population':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Population View</h4>
                    <p>Color and size indicate population density, from sparse (blue) to dense (red).</p>
                </div>`;
            break;
        case 'laws':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Laws & Traditions</h4>
                    <p>POIs with unique local laws or customs are highlighted with a scroll icon (📜). Click on them to view the specific legal code.</p>
                </div>`;
            break;
        default:
             legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
            break;
    }
    detailPanel.innerHTML = legendHTML;
}