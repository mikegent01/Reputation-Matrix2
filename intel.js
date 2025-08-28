import { state, loadState } from './state.js';
import { LORE_DATA } from './lore.js';
import { getReputation, getDetailedFactionAssessment } from './reputation.js';
import { playSound } from './common.js';

const selectorContainer = document.getElementById('character-selector-container');
const dossierContainer = document.getElementById('dossier-display-container');

// Define the four main characters to always be available on this page.
const MAIN_CHARACTERS = ['archie', 'markop', 'humpik', 'bowser'];
let activeCharacterKey = state.loggedInUser !== 'generic' && MAIN_CHARACTERS.includes(state.loggedInUser) ? state.loggedInUser : 'archie';

function getIntelForFaction(factionKey) {
    if (!state.intelLevels || !factionKey) return 0;
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    if (!userIntel) return 0;
    const defaultIntel = userIntel.default ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;
    return userIntel[factionKey] ?? defaultIntel;
}


function init() {
    loadState(); // Ensure we have the latest data
    renderCharacterSelector();
    renderDossier(activeCharacterKey);
    setupEventListeners();
}

function renderCharacterSelector() {
    selectorContainer.innerHTML = MAIN_CHARACTERS.map(charKey => {
        const character = LORE_DATA.characters[charKey];
        return `<button class="char-select-btn ${charKey === activeCharacterKey ? 'active' : ''}" data-char-key="${charKey}">${character.name}</button>`;
    }).join('');
}

function renderDossier(characterKey) {
    activeCharacterKey = characterKey;
    const character = LORE_DATA.characters[characterKey];
    if (!character) {
        dossierContainer.innerHTML = `<p class="dossier-placeholder">Character data not found.</p>`;
        return;
    }

    const playerReps = state.finalReputations[characterKey].reputation;

    const topAllies = Object.entries(playerReps)
        .filter(([, rep]) => rep >= 25)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
        
    const topEnemies = Object.entries(playerReps)
        .filter(([, rep]) => rep <= -25)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 5);

    const alliesHTML = topAllies.length > 0 ? `<ul>${topAllies.map(([key, rep]) => {
        const faction = LORE_DATA.factions[key];
        if (!faction) {
            console.warn(`Intel Dossier: Faction data missing for key: ${key}`);
            return ''; // Skip if faction not found
        }
        return `<li>${faction.name} <span class="positive">(+${rep})</span></li>`;
    }).join('')}</ul>` : `<p>No significant allies.</p>`;
    
    const enemiesHTML = topEnemies.length > 0 ? `<ul>${topEnemies.map(([key, rep]) => {
        const faction = LORE_DATA.factions[key];
        if (!faction) {
            console.warn(`Intel Dossier: Faction data missing for key: ${key}`);
            return ''; // Skip if faction not found
        }
        return `<li>${faction.name} <span class="negative">(${rep})</span></li>`;
    }).join('')}</ul>` : `<p>No significant enemies.</p>`;

    const factionsHTML = Object.keys(LORE_DATA.factions).sort((a,b) => LORE_DATA.factions[a].name.localeCompare(LORE_DATA.factions[b].name)).map(factionKey => {
        const faction = LORE_DATA.factions[factionKey];
        const reputation = getReputation(characterKey, factionKey);
        const intel = getIntelForFaction(factionKey);
        const assessment = getDetailedFactionAssessment(factionKey, characterKey, 0, 0); // Notoriety not used here, simplifying display

        const repClass = reputation > 10 ? 'positive' : reputation < -10 ? 'negative' : 'neutral';
        const repBarWidth = Math.abs(reputation);

        return `
            <div class="faction-intel-card">
                <div class="faction-intel-header">
                    <img src="${faction.logo}" alt="${faction.name} Logo">
                    <h4>${faction.name}</h4>
                </div>
                <div class="intel-bars-container">
                    <div>
                        <div class="bar-label">
                            <span>Reputation</span>
                            <span class="${repClass}">${reputation}</span>
                        </div>
                        <div class="intel-bar-container">
                            <div class="intel-bar rep-bar ${repClass}" style="width: ${repBarWidth}%;"></div>
                        </div>
                    </div>
                     <div>
                        <div class="bar-label">
                            <span>Intel Level</span>
                            <span class="neutral">${intel}</span>
                        </div>
                        <div class="intel-bar-container">
                            <div class="intel-bar intel-level-bar" style="width: ${intel}%;"></div>
                        </div>
                    </div>
                </div>
                <p class="faction-assessment-text">${assessment}</p>
            </div>
        `;
    }).join('');

    dossierContainer.innerHTML = `
        <div class="dossier-header">
            <h3>Intel Dossier: ${character.name}</h3>
        </div>
        <div class="dossier-summary">
            <div class="summary-list allies">
                <h5>Key Allies</h5>
                ${alliesHTML}
            </div>
            <div class="summary-list enemies">
                <h5>Key Enemies</h5>
                ${enemiesHTML}
            </div>
        </div>
        <h4 class="faction-breakdown-header">Detailed Faction-by-Faction Analysis</h4>
        <div class="faction-intel-list">
            ${factionsHTML}
        </div>
    `;
}

function setupEventListeners() {
    selectorContainer.addEventListener('click', e => {
        const button = e.target.closest('.char-select-btn');
        if (button && !button.classList.contains('active')) {
            playSound('click.mp3');
            const charKey = button.dataset.charKey;
            activeCharacterKey = charKey;
            // Update active state on buttons
            selectorContainer.querySelectorAll('.char-select-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.charKey === charKey);
            });
            renderDossier(charKey);
        }
    });
}

// Initial call
if (document.getElementById('intel-layout')) {
    init();
}