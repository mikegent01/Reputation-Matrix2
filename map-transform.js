// map-transform.js - Handles map panning and zooming using D3.js
import * as map from './maps.js';

let d3Zoom;
let wasDraggedFlag = false;

function zoomed({ transform }) {
    const wrapper = document.getElementById('map-zoom-wrapper');
    if (wrapper) {
        wrapper.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`;
    }
}

export function initPanAndZoom() {
    const svg = d3.select("#map-display-area");
    if (svg.empty()) return;

    d3Zoom = d3.zoom()
        .scaleExtent([0.5, 8]) // Min/max zoom levels
        .on("start", () => {
            wasDraggedFlag = false;
        })
        .on("zoom", (event) => {
            wasDraggedFlag = true;
            zoomed(event);
        })
        .on("end", () => {
            // Use a short timeout to reset the flag, allowing the click event to check it first
            setTimeout(() => { wasDraggedFlag = false; }, 10);
        });

    svg.call(d3Zoom);
}

export function wasDragged() {
    return wasDraggedFlag;
}


export function zoomToPoi(poi) {
    const svg = d3.select("#map-display-area");
    const displayArea = document.getElementById('map-display-area');
    if (svg.empty() || !displayArea || !poi || !map.renderedMapDimensions) return;
    
    const scale = 4;
    
    // Get the container's dimensions for centering.
    const containerRect = displayArea.getBoundingClientRect();
    
    // Get the authoritative, pre-calculated dimensions of the interactive layer
    const { width: baseLayerWidth, height: baseLayerHeight } = map.renderedMapDimensions;

    // 1. Find the POI's absolute pixel position within the BASE interactive layer
    const targetX = (poi.x / 100) * baseLayerWidth;
    const targetY = (poi.y / 100) * baseLayerHeight;
    
    // 2. Calculate the translation to bring this point to the center of the container, accounting for the new scale
    const x = (containerRect.width / 2) - (targetX * scale);
    const y = (containerRect.height / 2) - (targetY * scale);

    const transform = d3.zoomIdentity.translate(x, y).scale(scale);

    svg.transition()
        .duration(750)
        .call(d3Zoom.transform, transform);
}

export function resetTransform() {
    const svg = d3.select("#map-display-area");
    if (svg.empty() || !d3Zoom) return;

    svg.transition()
        .duration(500)
        .call(d3Zoom.transform, d3.zoomIdentity);
}