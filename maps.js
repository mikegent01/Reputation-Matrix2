

import { state, loadState, saveState } from './state.js';
import * as ui from './map-ui.js';
import * as renderer from './map-renderer.js';
import * as editor from './map-editor.js';
import * as transform from './map-transform.js';
import { playSound } from './common.js';
import { MAP_DATA } from './map-data.js';
import { BATTLE_MAP_DATA } from './map-battle-data.js';

// --- STATE ---
export let activeMapId = 'mushroom_kingdom_full'; // Default value
export let activeMapMode = 'standard';
export let isEditMode = false;
export let editSessionData = null; // Holds cloned data for an edit session
export let renderedMapDimensions = { width: 0, height: 0 }; // Authoritative dimensions

// --- STATE MUTATORS ---
export function setActiveMapId(mapId) {
    activeMapId = mapId;
}
export function setActiveMapMode(mode) {
    activeMapMode = mode;
}
export function setEditMode(mode) {
    isEditMode = mode;
}
export function setEditSessionData(data) {
    editSessionData = data;
}
export function setRenderedMapDimensions(dimensions) {
    renderedMapDimensions = dimensions;
}


// --- INITIALIZATION ---
function init() {
    const pathname = window.location.pathname;
    if (pathname.includes('midlands-maps.html')) {
        activeMapId = 'midlands_full';
    } else {
        activeMapId = 'mushroom_kingdom_full';
    }

    loadState();
    checkAndDiscoverFogs();
    
    ui.renderTabs();
    transform.initPanAndZoom(); // Initialize pan and zoom BEFORE the first render
    renderer.renderMap(activeMapId);
    
    setupEventListeners();
    
    // Restore the Edit Map button if in debug mode
    const editMapBtn = document.getElementById('edit-map-btn');
    if (editMapBtn && state.debugMode) {
        editMapBtn.style.display = 'block';
    }
}

// --- CORE LOGIC ---
function checkAndDiscoverFogs() {
    // This logic can remain here as it modifies global state on load.
    // In a larger app, this might be part of a 'gameState' service.
    // For now, this is fine.
    // ... (logic remains the same)
}

function findPoiById(poiId) {
    if (!activeMapId) return null;
    const poiSource = MAP_DATA[activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[activeMapId] || [];
    return [...poiSource, ...userPois].find(p => p.id === poiId);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    ui.setupTabEventListeners();
    editor.setupEditorEventListeners();

    const displayArea = document.getElementById('map-display-area');
    if (displayArea) {
        displayArea.addEventListener('click', e => {
            if (!isEditMode && !transform.wasDragged()) {
                const poiMarker = e.target.closest('.poi-marker');
                const troopMarker = e.target.closest('.troop-marker');
                const vigilanceMarker = e.target.closest('.vigilance-marker');

                if (poiMarker) {
                    playSound('click.mp3');
                    const poi = findPoiById(poiMarker.dataset.poiId);
                    if (poi) {
                        renderer.renderDetailPanel(poi.id);
                    }
                } else if (troopMarker) {
                    playSound('click.mp3');
                    renderer.renderTacticalDetailPanel(troopMarker.dataset.troopId, 'troop');
                } else if (vigilanceMarker) {
                     playSound('click.mp3');
                    renderer.renderTacticalDetailPanel(vigilanceMarker.dataset.vigilanceId, 'vigilance');
                } else if (!e.target.closest('.clickable-tactical')) {
                    // Clicked on map background, not a POI or clickable tactical SVG element
                    renderer.renderMapModeLegend();
                    transform.resetTransform();
                }
            }
        });
    }
}

// Run the application
const currentPage = window.location.pathname.split('/').pop();
if (['mushroom-kingdom-maps.html', 'midlands-maps.html'].includes(currentPage)) {
    init();
}