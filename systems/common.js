import { state } from '../state.js';
import { LORE_DATA } from '../lore.js';
import { getSubFactionReputation } from '../reputation.js';

/**
 * Calculates the intel level for a given faction based on the logged-in user.
 * @param {string} factionKey - The key of the faction.
 * @returns {number} The calculated intel level.
 */
export function getIntelForFaction(factionKey) {
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    const defaultIntel = userIntel.default ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;
    return userIntel[factionKey] ?? defaultIntel;
}

/**
 * Builds a generic tabbed interface for factions with detailed, structured information.
 * @param {object} details - The data object containing hierarchy, recruitment, etc.
 * @param {string} description - The introductory text for the system.
 * @returns {string} The complete HTML for the tabbed system.
 */
export function buildDetailedSystemHTML(details, description) {
    const tabs = [];
    const contents = [];

    if (details.hierarchy) {
        tabs.push({ id: 'hierarchy', label: 'Hierarchy' });
        const hierarchyHTML = `
            <div class="system-org-chart">
                ${details.hierarchy.map(level => `
                    <div class="org-chart-level">
                        <div class="org-rank">${level.rank}</div>
                        <div class="org-leader">${level.leader}</div>
                        <p class="org-description">${level.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        contents.push({ id: 'hierarchy', html: hierarchyHTML });
    }

    if (details.recruitment) {
        tabs.push({ id: 'recruitment', label: 'Recruitment' });
        const recruitmentHTML = `
            <div class="info-card-grid">
                ${Object.values(details.recruitment).filter(item => typeof item === 'object').map(item => `
                    <div class="info-card">
                        <h6>${item.title}</h6>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>`;
        contents.push({ id: 'recruitment', html: recruitmentHTML });
    }

    if (details.tactics) {
        tabs.push({ id: 'tactics', label: 'Tactics' });
        const tacticsHTML = `
            <div class="info-card-grid">
                 ${Object.values(details.tactics).filter(item => typeof item === 'object').map(item => `
                    <div class="info-card">
                        <h6>${item.title}</h6>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>`;
        contents.push({ id: 'tactics', html: tacticsHTML });
    }
    
    if (details.ideology) {
        tabs.push({ id: 'ideology', label: 'Ideology & Culture' });
        const ideologyHTML = `
            <div class="info-card">
                 <h6>${details.ideology.title}</h6>
                 <p>${details.ideology.description}</p>
            </div>
        `;
        contents.push({ id: 'ideology', html: ideologyHTML });
    }
    
    if (details.shared_mechanic) {
        tabs.push({ id: 'mechanic', label: details.shared_mechanic.tab_title || 'Unique Mechanic' });
        const mechanicHTML = `
            <div class="mechanic-container">
                 ${Object.values(details.shared_mechanic.cards).map(card => `
                    <div class="mechanic-card ${card.css_class}">
                         <h6>${card.title}</h6>
                         <p>${card.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        contents.push({ id: 'mechanic', html: mechanicHTML });
    }

    const tabsHTML = tabs.map((tab, index) => `<button class="system-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${tab.id}">${tab.label}</button>`).join('');
    const contentsHTML = contents.map((content, index) => `<div id="${content.id}" class="system-tab-content ${index === 0 ? 'active' : ''}">${content.html}</div>`).join('');

    return `
        <p class="system-description">${description}</p>
        <div class="faction-detailed-system">
            <div class="system-tabs">${tabsHTML}</div>
            ${contentsHTML}
        </div>
    `;
}

/**
 * Initializes the event listeners for a generic tabbed system.
 */
export function initTabbedSystem() {
    const systemContainer = document.querySelector('.faction-detailed-system');
    if (systemContainer) {
        const tabsContainer = systemContainer.querySelector('.system-tabs');
        const tabs = tabsContainer.querySelectorAll('.system-tab-btn');
        const contents = systemContainer.querySelectorAll('.system-tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                contents.forEach(content => {
                    content.classList.toggle('active', content.id === tab.dataset.tab);
                });
            });
        });
    }
}

/**
 * Renders subfactions using a generic, card-based layout.
 * @param {object} subFactions - The subfaction data object.
 * @param {string} factionKey - The key of the parent faction.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML for the subfaction card grid.
 */
export function renderDefaultSubfactionList(subFactions, factionKey, currentState) {
    const faction = LORE_DATA.factions[factionKey];
    if (!faction) return '';

    const subFactionCardsHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        
        const keyFiguresHTML = subFaction.key_figures && subFaction.key_figures.length > 0 ? `
            <div class="generic-subfaction-details-block">
                <h6>Key Figures</h6>
                <ul class="key-figures-list">
                    ${subFaction.key_figures.map(f => `<li><strong>${f.role}:</strong> ${f.name}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        let opinionHTML = '';
        if (subFaction.opinion) {
            opinionHTML = `
                <div class="generic-subfaction-details-block">
                    <h6>Overall Opinion</h6>
                    <p class="generic-subfaction-opinion-text">"${subFaction.opinion}"</p>
                </div>
            `;
        } else {
            const playerRepHTML = currentState.party.map(playerKey => {
                const subRep = getSubFactionReputation(playerKey, factionKey, subKey);
                const repClass = subRep > 10 ? 'positive' : subRep < -10 ? 'negative' : 'neutral';
                return `<div class="generic-subfaction-player-rep">
                            <span class="char-name">${LORE_DATA.characters[playerKey].name}:</span>
                            <span class="rep-value ${repClass}">${subRep}</span>
                        </div>`;
            }).join('');
            opinionHTML = `
                <div class="generic-subfaction-details-block">
                    <h6>Party Standing</h6>
                    <div class="generic-subfaction-reps-container">${playerRepHTML}</div>
                </div>
            `;
        }
        
        return `
            <div class="generic-subfaction-card">
                <div class="generic-subfaction-header">
                    <img src="${faction.logo}" alt="${faction.name}" class="generic-subfaction-portrait">
                    <div class="generic-subfaction-title-group">
                        <h4 class="generic-subfaction-name">${subFaction.name}</h4>
                        <div class="generic-subfaction-stats">
                            <span>⭐ Influence: <strong>${subFaction.influence || '??'}%</strong></span>
                        </div>
                    </div>
                </div>
                <p class="generic-subfaction-description">${subFaction.description}</p>
                ${keyFiguresHTML}
                ${opinionHTML}
            </div>
        `;

    }).join('');

    const description = "The faction's power is not monolithic. Various internal groups, or sub-factions, vie for influence, each with their own agenda and opinion of the party.";

    return `
        <p class="system-description">${description}</p>
        <div class="generic-subfaction-grid">
            ${subFactionCardsHTML}
        </div>
    `;
}