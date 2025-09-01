import { playSound } from './common.js';
import { MAP_DATA } from './map-data.js';
import * as map from './maps.js';
import * as renderer from './map-renderer.js';

const mapControls = document.getElementById('map-controls');
const modeSelector = document.getElementById('map-mode-selector');

export function renderTabs() {
    const tabsContainer = document.getElementById('map-tabs');
    if (!tabsContainer) return;

    const mapGroups = Object.values(MAP_DATA).reduce((acc, map) => {
        const group = map.group || 'Other';
        if (!acc[group]) acc[group] = [];
        acc[group].push(map);
        return acc;
    }, {});

    let tabsHTML = '';
    for (const group in mapGroups) {
        tabsHTML += `<div class="map-group-header">${group}</div>`;
        tabsHTML += mapGroups[group]
            .sort((a, b) => a.order - b.order)
            .map(m => `<button class="map-tab-btn ${m.id === map.activeMapId ? 'active' : ''}" data-map-id="${m.id}">${m.name}</button>`)
            .join('');
    }
    tabsContainer.innerHTML = tabsHTML;
}

export function setupEventListeners() {
    const mapControlsContainer = document.getElementById('map-controls');
    if (!mapControlsContainer) return;

    mapControlsContainer.addEventListener('click', e => {
        const tabButton = e.target.closest('.map-tab-btn');
        if (tabButton) {
            playSound('click.mp3');
            const mapId = tabButton.dataset.mapId;
            if (mapId !== map.activeMapId) {
                map.setActiveMapId(mapId);
                renderer.renderMap(mapId);
                document.querySelectorAll('.map-tab-btn').forEach(btn => btn.classList.remove('active'));
                tabButton.classList.add('active');
            }
            return;
        }

        const modeButton = e.target.closest('.mode-btn');
        if (modeButton && !modeButton.classList.contains('active')) {
            playSound('confirm.mp3', 0.5);
            map.setActiveMapMode(modeButton.dataset.mode);
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            modeButton.classList.add('active');
            renderer.renderPois(map.activeMapId);
            renderer.renderMapModeLegend();
        }
    });
}
