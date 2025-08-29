
import { HISTORICAL_TIMELINE } from './calendar-data.js';
import { state } from './state.js';

/**
 * Calculates the intel level for a given faction based on the logged-in user.
 * @param {string} factionKey - The key of the faction.
 * @returns {number} The calculated intel level.
 */
function getIntelForFaction(factionKey) {
    if (!state.intelLevels || !factionKey) return 0;
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    if (!userIntel) return 0;
    const defaultIntel = userIntel.default ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;
    return userIntel[factionKey] ?? defaultIntel;
}

function renderTimeline() {
    const container = document.getElementById('timeline-page-container');
    if (!container) return;

    const getSortKey = (event) => {
        if (event.type === 'era_header') {
            if (event.title.includes('Distant Past')) return -10000; // Should appear first
            if (event.title.includes('Prophesied Era')) return 0.5; // Should appear between BF and AF events
            return 0; // Fallback
        }
        const dateStr = event.date;
        const isBF = dateStr.includes('BF');
        const isAF = dateStr.includes('AF');
        const year = parseInt(dateStr.replace(/[^0-9]/g, ''));

        if (isBF) return -year;
        if (isAF) return year;
        return -year; // Fallback for dateless entries if any
    };

    const sortedTimeline = [...HISTORICAL_TIMELINE].sort((a, b) => getSortKey(a) - getSortKey(b));

    let html = '';
    let eventCounter = 0;
    
    sortedTimeline.slice().reverse().forEach((event) => {
        if (event.type === 'era_header') {
            html += `<div class="timeline-era-header"><h2>${event.title}</h2></div>`;
        } else {
            const side = eventCounter % 2 === 0 ? 'left' : 'right';
            
            let description = event.description;
            if (event.intel_required && !state.debugMode) {
                const intel = getIntelForFaction(event.faction);
                if (intel < event.intel_required) {
                    description = `<p class="redacted-intel">[Intel Level ${event.intel_required} with ${event.faction_name} required to view details.]</p>`;
                }
            }

            html += `
                <div class="timeline-event ${side}">
                    <div class="timeline-content">
                        <div class="timeline-header">
                             <img src="${event.icon}" alt="${event.category} Icon" class="timeline-icon">
                             <div class="timeline-title-group">
                                <h4>${event.title}</h4>
                                <span class="timeline-date">${event.date}</span>
                             </div>
                        </div>
                        <p>${description}</p>
                    </div>
                </div>
            `;
            eventCounter++;
        }
    });

    container.innerHTML = html;
}

function init() {
    renderTimeline();
}

init();