import { LAW_DATA, UNRECOGNIZED_CODES } from './laws-data.js';
import { LORE_DATA } from './lore.js';
import { playSound } from './common.js';

const recognizedGrid = document.getElementById('recognized-nations-grid');
const unrecognizedGrid = document.getElementById('unrecognized-codes-grid');

const ICONS = {
    political: '🏛️',
    military: '⚔️',
    economic: '💰',
    social: '❤️‍🩹',
    penal: '⚖️'
};

function renderFactionOpinions(opinions) {
    if (!opinions || Object.keys(opinions).length === 0) {
        return '';
    }

    const opinionsHTML = Object.entries(opinions).map(([factionKey, opinion]) => {
        const faction = LORE_DATA.factions[factionKey];
        if (!faction) return '';
        const stanceClass = opinion.stance.toLowerCase() === 'support' ? 'stance-support' : 'stance-oppose';
        return `
            <div class="faction-opinion">
                <strong>${faction.name} (<span class="${stanceClass}">${opinion.stance}</span>):</strong>
                <p>"${opinion.reason}"</p>
            </div>
        `;
    }).join('');

    return `
        <details class="law-opinions-details">
            <summary>View Faction Opinions</summary>
            <div class="law-opinions-content">
                ${opinionsHTML}
            </div>
        </details>
    `;
}

function renderPolicySpectrum(law) {
    return `
        <div class="policy-spectrum-container">
            ${law.spectrum.map((policy, index) => {
                const isCurrent = index === law.current;
                let trendIndicator = '';
                if (isCurrent) {
                    if (law.trend === 1) trendIndicator = '<span class="trend-arrow" style="color: var(--positive-color);">▲</span>';
                    if (law.trend === -1) trendIndicator = '<span class="trend-arrow" style="color: var(--negative-color);">▼</span>';
                }
                return `<div class="spectrum-step ${isCurrent ? 'current' : ''}" title="${policy.description}">${policy.name}${trendIndicator}</div>`;
            }).join('')}
        </div>
    `;
}

function renderLawCard(data) {
    const tabs = ['political', 'military', 'economic', 'social', 'penal'];
    
    const availableTabs = tabs.filter(tab => data[tab] && data[tab].length > 0);
    if (availableTabs.length === 0) return ''; // Don't render card if no laws are defined

    const tabsHTML = availableTabs.map((tab, index) => `
        <button class="law-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${tab}">
            ${tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
    `).join('');

    const contentHTML = availableTabs.map((tab, index) => `
        <div class="law-tab-content ${index === 0 ? 'active' : ''}" data-tab-content="${tab}">
            <ul class="law-list">
                ${(data[tab] || []).map(law => `
                    <li class="law-item">
                        <div class="law-item-header">
                            <span class="law-item-icon">${law.icon || ICONS[tab]}</span>
                            <h5 class="law-item-name">${law.name}</h5>
                        </div>
                        <p class="current-policy-description">${law.description}</p>
                        ${renderPolicySpectrum(law)}
                        ${renderFactionOpinions(law.opinions)}
                    </li>
                `).join('')}
            </ul>
        </div>`).join('');
    
    const supportersHTML = (data.supporters || []).map(key => `<li>${LORE_DATA.factions[key]?.name || key}</li>`).join('');
    const opponentsHTML = (data.opponents || []).map(key => `<li>${LORE_DATA.factions[key]?.name || key}</li>`).join('');

    return `
        <div class="law-card" id="law-${data.name.toLowerCase().replace(/\s/g, '-')}">
            <div class="law-card-header">
                <img src="${data.logo}" alt="${data.name} Logo" class="law-card-logo">
                <div class="law-card-title">
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                </div>
            </div>
            <div class="law-supporters-opponents">
                <div class="supporter-list">
                    <h6>Supporters</h6>
                    <ul>${supportersHTML || '<li>None</li>'}</ul>
                </div>
                <div class="opponent-list">
                    <h6>Opponents</h6>
                    <ul>${opponentsHTML || '<li>None</li>'}</ul>
                </div>
            </div>
            <div class="law-tabs">${tabsHTML}</div>
            <div class="law-content-container">${contentHTML}</div>
        </div>
    `;
}

function renderAllLaws() {
    if (recognizedGrid) {
        recognizedGrid.innerHTML = Object.values(LAW_DATA).map(renderLawCard).join('');
    }
    if (unrecognizedGrid) {
        unrecognizedGrid.innerHTML = Object.values(UNRECOGNIZED_CODES).map(renderLawCard).join('');
    }
}

function setupEventListeners() {
    const container = document.getElementById('laws-container');
    if (!container) return;

    container.addEventListener('click', e => {
        const tabBtn = e.target.closest('.law-tab-btn');
        if (tabBtn) {
            playSound('click.mp3', 0.6);
            const card = tabBtn.closest('.law-card');
            const tabName = tabBtn.dataset.tab;

            card.querySelectorAll('.law-tab-btn').forEach(btn => btn.classList.remove('active'));
            card.querySelectorAll('.law-tab-content').forEach(content => content.classList.remove('active'));

            tabBtn.classList.add('active');
            const activeContent = card.querySelector(`.law-tab-content[data-tab-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
        
        if (e.target.tagName === 'SUMMARY') {
            playSound('click.mp3', 0.5);
        }
    });
}

function init() {
    if (!document.getElementById('laws-container')) return;
    renderAllLaws();
    setupEventListeners();
}

init();