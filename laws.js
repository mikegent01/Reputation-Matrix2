import { LAW_DATA, UNRECOGNIZED_CODES } from './laws-data.js';
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

function renderPolicySpectrum(law) {
    return `
        <div class="policy-spectrum-container">
            ${law.spectrum.map((policy, index) => {
                const isCurrent = index === law.current;
                let trendClass = '';
                if (isCurrent) {
                    if (law.trend === 1) trendClass = 'trending-up';
                    if (law.trend === -1) trendClass = 'trending-down';
                }
                return `<div class="spectrum-step ${isCurrent ? 'current' : ''} ${trendClass}" title="${policy}">${policy}</div>`;
            }).join('')}
        </div>
    `;
}

function renderLawCard(data) {
    const tabs = ['political', 'military', 'economic', 'social', 'penal'];
    
    const tabsHTML = tabs.map((tab, index) => {
        if (!data[tab] || data[tab].length === 0) return '';
        return `<button class="law-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${tab}">
            ${tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>`;
    }).join('');

    const contentHTML = tabs.map((tab, index) => {
        if (!data[tab] || data[tab].length === 0) return '';
        return `
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
                    </li>
                `).join('')}
            </ul>
        </div>`;
    }).join('');

    return `
        <div class="law-card" id="law-${data.name.toLowerCase().replace(/\s/g, '-')}">
            <div class="law-card-header">
                <img src="${data.logo}" alt="${data.name} Logo" class="law-card-logo">
                <div class="law-card-title">
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
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
    });
}

function init() {
    if (!document.getElementById('laws-container')) return;
    renderAllLaws();
    setupEventListeners();
}

init();
