import { state, loadState } from './state.js';
import * as ui from './map-ui.js';
import * as renderer from './map-renderer.js';
import { playSound } from './common.js';

export let activeMapId = 'mushroom_kingdom_full'; 
export let activeMapMode = 'standard';

export function setActiveMapId(mapId) {
    activeMapId = mapId;
}

export function setActiveMapMode(mode) {
    activeMapMode = mode;
}

function init() {
    loadState();
    ui.renderTabs();
    renderer.renderMap(activeMapId);
    setupEventListeners();
}

function setupEventListeners() {
    ui.setupEventListeners();
    
    const displayArea = document.getElementById('map-display-area');
    if (displayArea) {
        displayArea.addEventListener('click', e => {
            const poiMarker = e.target.closest('.poi-marker');
            if (poiMarker) {
                playSound('click.mp3');
                renderer.renderDetailPanel(poiMarker.dataset.poiId);
            }
        });
    }
}

// Ensure this runs only on the map page
if (document.getElementById('maps-layout')) {
    init();
}
