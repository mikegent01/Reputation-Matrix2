import { state } from './state.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import { LAW_SYSTEM_ARCHETYPES, FACTION_LEGAL_SYSTEM_MAP } from './laws-categorization.js';
import * as map from './maps.js';
import { LORE_DATA } from './lore.js';

const displayArea = document.getElementById('map-display-area');
const detailPanel = document.getElementById('map-detail-content');

function hasSufficientIntel(requirement) {
    if (!requirement) return true;
    if (state.debugMode) return true;
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    return (userIntel[requirement.faction] || 0) >= requirement.level;
}

export function renderMap(mapId) {
    const mapData = MAP_DATA[mapId];
    if (!mapData) {
        console.error(`Map data for ${mapId} not found.`);
        return;
    }

    displayArea.innerHTML = ''; // Clear previous map
    const mapImage = document.createElement('img');
    mapImage.id = 'map-image';
    mapImage.src = mapData.imageSrc;
    displayArea.appendChild(mapImage);

    mapImage.onload = () => {
        renderPois(mapId);
        renderFog(mapId);
    };
    renderMapModeLegend();
}

export function renderPois(mapId) {
    const existingPois = document.querySelectorAll('.poi-marker');
    existingPois.forEach(poi => poi.remove());

    const mapData = MAP_DATA[mapId];
    if (!mapData.pointsOfInterest) return;

    mapData.pointsOfInterest.forEach(poi => {
        if (!hasSufficientIntel(poi.intelReq)) {
            return;
        }

        const marker = document.createElement('div');
        marker.className = 'poi-marker';
        marker.style.left = `${poi.x}%`;
        marker.style.top = `${poi.y}%`;
        marker.dataset.poiId = poi.id;
        marker.title = poi.name;

        switch (map.activeMapMode) {
            case 'laws':
                marker.classList.add('laws-view');
                const legalSystem = FACTION_LEGAL_SYSTEM_MAP[poi.factionId] || 'other';
                const archetype = LAW_SYSTEM_ARCHETYPES[legalSystem];
                marker.style.backgroundColor = archetype.color;
                marker.style.borderColor = archetype.color;
                marker.innerHTML = `<div class="icon-wrapper" title="${archetype.name}">📜</div>`;
                break;
            default: // standard
                marker.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
                break;
        }

        displayArea.appendChild(marker);
    });
}

function renderFog(mapId) {
    // Basic fog rendering logic can go here if needed later
}

export function renderDetailPanel(poiId) {
    const allPois = Object.values(MAP_DATA).flatMap(map => map.pointsOfInterest || []);
    const poi = allPois.find(p => p.id === poiId);
    if (!poi) return;

    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Unknown' };
    detailPanel.innerHTML = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.name}</p>
            <p class="poi-description">${poi.description || 'No further details available.'}</p>
        </div>
    `;
}

export function renderMapModeLegend() {
    let legendHTML = '';
    
    if (map.activeMapMode === 'laws') {
        legendHTML = `
            <div class="map-mode-legend">
                <h4>Laws & Governance</h4>
                <p>Regions are colored by their dominant legal philosophy.</p>
                <ul class="legend-list">
                    ${Object.values(LAW_SYSTEM_ARCHETYPES).map(archetype => `
                        <li class="legend-item">
                            <div class="legend-color-box" style="background-color: ${archetype.color};"></div>
                            <span>${archetype.name}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    } else {
        legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
    }
    
    detailPanel.innerHTML = legendHTML;
}
