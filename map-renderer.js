import { state, saveState } from './state.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import * as map from './maps.js';
import { LORE_DATA } from './lore.js';
import { getIntelForFaction } from './systems/common.js';
import { resetTransform } from './map-transform.js';

const displayArea = document.getElementById('map-display-area');
const detailPanel = document.getElementById('map-detail-content');

export function renderMap(mapId) {
    map.setActiveMapId(mapId);
    const mapData = MAP_DATA[mapId];

    displayArea.innerHTML = ''; // Clear previous map content
    displayArea.classList.toggle('edit-mode', map.isEditMode);

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

        // Report dimensions back to the controller
        map.setRenderedMapDimensions({ width: renderedWidth, height: renderedHeight });


        renderPois();
        renderFog();

        // Add drawing overlay for edit mode
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

export function renderPois() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;
    
    interactiveLayer.querySelectorAll('.poi-marker').forEach(el => el.remove());

    const poiSource = map.isEditMode ? map.editSessionData.pois : (MAP_DATA[map.activeMapId]?.pointsOfInterest || []);

    let allPois = poiSource.filter(poi => {
        if (map.isEditMode) return true;
        if (map.activeMapMode === 'political' && !poi.factionId) return false;
        if (!poi.intelReq) return true;
        if (state.debugMode) return true;
        
        const poiFactionId = poi.factionId;
        if(!poiFactionId) return true;
        
        return getIntelForFaction(poiFactionId) >= poi.intelReq;
    });

    allPois.forEach(poi => {
        const marker = document.createElement('div');
        marker.className = 'poi-marker';
        marker.style.left = `${poi.x}%`;
        marker.style.top = `${poi.y}%`;
        marker.dataset.poiId = poi.id;
        marker.title = poi.name;

        marker.classList.remove('political-view', 'economic-view', 'military-view', 'population-view');
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';
        marker.appendChild(iconWrapper);

        switch(map.activeMapMode) {
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
            case 'standard':
            default:
                iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
                break;
        }

        if (map.isEditMode) {
            marker.draggable = true;
            marker.classList.add('draggable-poi');
        }

        interactiveLayer.appendChild(marker);
    });
}

function getPopulationColor(population) {
    if (population <= 50) return '#4575b4';   // Blue (low)
    if (population <= 500) return '#91bfdb';  // Light Blue
    if (population <= 2000) return '#e0f3f8'; // Lighter Blue
    if (population <= 5000) return '#fee090'; // Yellow
    if (population <= 10000) return '#fdae61';// Orange
    return '#f46d43';                         // Red (high)
}

export function renderFog() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    interactiveLayer.querySelectorAll('#map-fog-overlay').forEach(el => el.remove());

    const fogSource = map.isEditMode ? map.editSessionData.fogs : (MAP_DATA[map.activeMapId]?.fogOfWar || []);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'map-fog-overlay';
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    
    fogSource.forEach(fog => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.id = fog.id;
        polygon.setAttribute('points', fog.points);
        if (state.mapState.discoveredFogs.includes(fog.id) && !map.isEditMode) {
            polygon.classList.add('discovered');
        }
        svg.appendChild(polygon);
    });
    interactiveLayer.appendChild(svg);
}

export function renderDrawingPreview(points) {
    const drawingSvg = document.getElementById('map-drawing-svg');
    if (!drawingSvg) return;

    drawingSvg.innerHTML = ''; // Clear previous preview

    if (points.length === 0) return;

    // Draw points
    points.forEach(p => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', p.x);
        circle.setAttribute('cy', p.y);
        circle.setAttribute('r', '0.5'); // Small radius in SVG units
        circle.classList.add('draw-point');
        drawingSvg.appendChild(circle);
    });

    // Draw connecting line/polygon
    if (points.length > 1) {
        const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polyline.setAttribute('points', pointsString);
        polyline.classList.add('draw-line');
        drawingSvg.appendChild(polyline);
    }
}


export function renderDetailPanel(poiId) {
    const poiSource = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[map.activeMapId] || [];
    const poi = [...poiSource, ...userPois].find(p => p.id === poiId);

    if (!poi) return;

    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Unknown' };
    const faction = LORE_DATA.factions[poi.factionId];

    let intelReqHTML = '';
    if (poi.intelReq && faction) {
        intelReqHTML = `<p class="poi-intel-req"><strong>Intel Source:</strong> Requires ${poi.intelReq} Intel with ${faction.name}.</p>`;
    }

    detailPanel.innerHTML = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.name}</p>
            <p class="poi-description">${poi.description || 'No further details available.'}</p>
            ${intelReqHTML}
        </div>
    `;
}

export function renderMapModeLegend() {
    let legendHTML = '';
    let currentPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    
    switch(map.activeMapMode) {
        case 'political':
            const visibleFactions = [...new Set(currentPois
                .map(p => p.factionId)
                .filter(id => id && id !== 'unaligned' && FACTION_COLORS[id]))];

            const sortedFactions = visibleFactions.sort((a,b) => LORE_DATA.factions[a].name.localeCompare(LORE_DATA.factions[b].name));

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
        case 'population':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Population View</h4>
                    <p>Color and size indicate population density, from sparse (blue) to dense (red).</p>
                </div>`;
            break;
        default:
             legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
            break;
    }
    detailPanel.innerHTML = legendHTML;
}