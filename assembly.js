import { WORLD_ASSEMBLY_DATA, POWER_BLOCS, GLOBAL_ISSUES } from './assembly-data.js';
import { playSound } from './common.js';

let activeNationId = null;

function renderAssemblyChamber() {
    const chamber = document.getElementById('assembly-chamber-container');
    if (!chamber) return;
    chamber.innerHTML = '<div id="assembly-chamber"></div>';
    const assemblyChamber = document.getElementById('assembly-chamber');

    const nations = Object.values(WORLD_ASSEMBLY_DATA);
    const totalDelegates = nations.reduce((sum, n) => sum + n.delegateCount, 0);

    const radius = 280; // Semicircle radius
    const angleStep = Math.PI / (totalDelegates -1); // Distribute pods evenly along the semicircle
    let currentAngle = 0;

    nations.sort((a,b) => a.delegateCount - b.delegateCount); // Place smaller nations first

    nations.forEach(nation => {
        const pod = document.createElement('div');
        pod.className = 'delegation-pod';
        pod.dataset.nationId = nation.id;
        
        const delegatesForPod = nation.delegateCount;
        const podAngleWidth = delegatesForPod * angleStep;
        
        // Calculate position
        const angle = currentAngle + podAngleWidth / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        pod.style.transform = `translate(${x}px, ${-y}px) rotate(${90 - (angle * 180 / Math.PI)}deg)`;

        const delegateIcons = nation.delegates.map(delegate => 
            `<div class="delegate-icon" style="background-color: ${POWER_BLOCS[delegate.bloc]?.color || '#8b949e'}" title="${POWER_BLOCS[delegate.bloc]?.name || 'Unknown'}"></div>`
        ).join('');

        pod.innerHTML = `
            <div class="delegate-icons-container">${delegateIcons}</div>
            <div class="pod-label">${nation.name}</div>
        `;

        assemblyChamber.appendChild(pod);
        currentAngle += podAngleWidth;
    });
}


function renderDetailPanel(nationId) {
    const detailContent = document.getElementById('assembly-detail-content');
    const nation = WORLD_ASSEMBLY_DATA[nationId];
    if (!nation) {
        detailContent.innerHTML = '<p class="panel-placeholder">Error: Nation data not found.</p>';
        return;
    }
    activeNationId = nationId;
    updateActivePod();

    const leaningCounts = nation.delegates.reduce((acc, delegate) => {
        acc[delegate.bloc] = (acc[delegate.bloc] || 0) + 1;
        return acc;
    }, {});

    // Sort leanings to show primary bloc first
    const sortedLeanings = Object.entries(leaningCounts).sort(([blocA], [blocB]) => {
        if (blocA === nation.bloc) return -1;
        if (blocB === nation.bloc) return 1;
        return 0;
    });

    const leaningsHTML = `
        <div class="delegate-leanings-container">
            ${sortedLeanings.map(([bloc, count]) => {
                const isPrimary = bloc === nation.bloc;
                const blocData = POWER_BLOCS[bloc];
                if (!blocData) return '';

                let rationaleHTML = '';
                if (isPrimary) {
                    rationaleHTML = `
                        <div class="bloc-description">
                            <h6>Bloc Ideology: ${blocData.name}</h6>
                            <p>${blocData.description}</p>
                        </div>
                        <div class="nation-rationale">
                            <h6>Nation's Rationale:</h6>
                            <p>${nation.bloc_rationale}</p>
                        </div>
                    `;
                } else {
                    const leaningData = nation.leanings && nation.leanings[bloc];
                    if (leaningData && leaningData.rationale) {
                         rationaleHTML = `
                            <div class="leaning-rationale">
                                <h6>Minority Rationale:</h6>
                                <p>${leaningData.rationale}</p>
                            </div>
                         `;
                    }
                }

                return `
                    <div class="leaning-item">
                        <div class="leaning-header">
                            <div class="leaning-color-box" style="background-color: ${blocData.color || '#8b949e'}"></div>
                            <span>${blocData.name || 'Unknown'}: ${count} delegate(s)</span>
                        </div>
                        ${rationaleHTML}
                    </div>
                `;
            }).join('')}
        </div>
    `;

    const statsHTML = `
        <ul class="nation-stats">
            <li><strong>Population:</strong> ${nation.pop}M</li>
            <li><strong>GDP:</strong> $${nation.gdp}B</li>
            <li><strong>Political System:</strong> ${nation.politicalSystem}</li>
        </ul>
    `;

    const delegatesHTML = `
        <ul class="delegate-list">
            ${nation.delegates.map(d => `<li><strong>${d.name}:</strong> <em>${d.stance}</em></li>`).join('')}
        </ul>
    `;
    
    detailContent.innerHTML = `
        <div class="nation-detail-header">
            <h3>${nation.name}</h3>
            <p>Led by ${nation.leader}</p>
        </div>
        <div class="nation-detail-section">
            <h5>Nation Profile</h5>
            ${statsHTML}
        </div>
        <div class="nation-detail-section">
            <h5>Assembly Bloc Leanings</h5>
            ${leaningsHTML}
        </div>
        <div class="nation-detail-section">
            <h5>Delegation (${nation.delegateCount} Seats)</h5>
            ${delegatesHTML}
        </div>
    `;
}

function updateActivePod() {
    document.querySelectorAll('.delegation-pod').forEach(pod => {
        pod.classList.toggle('active', pod.dataset.nationId === activeNationId);
    });
}

function renderPowerBalanceChart() {
    const container = document.getElementById('power-balance-container');
    if (!container) return;

    container.innerHTML = `
        <h4>Assembly Power Blocs</h4>
        <div id="power-balance-chart-wrapper">
            <canvas id="power-balance-chart"></canvas>
        </div>
    `;

    const blocCounts = Object.keys(POWER_BLOCS).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {});

    // Accurately count every delegate's individual alignment
    for (const nation of Object.values(WORLD_ASSEMBLY_DATA)) {
        for (const delegate of nation.delegates) {
            if (blocCounts[delegate.bloc] !== undefined) {
                blocCounts[delegate.bloc]++;
            }
        }
    }

    const labels = Object.values(POWER_BLOCS).map(b => b.name);
    const data = Object.keys(POWER_BLOCS).map(key => blocCounts[key]);
    const colors = Object.values(POWER_BLOCS).map(b => b.color);

    const canvas = document.getElementById('power-balance-chart');
    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Delegates',
                data: data,
                backgroundColor: colors,
                borderColor: 'var(--sidebar-bg)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--text-secondary)',
                        font: { family: "'Roboto Mono', monospace" },
                        boxWidth: 12
                    }
                }
            }
        }
    });
}

function renderGlobalIssues() {
    const list = document.getElementById('global-issues-list');
    if (!list) return;

    list.innerHTML = GLOBAL_ISSUES.map(issue => `
        <div class="issue-card">
            <h6>${issue.title}</h6>
            <p>${issue.description}</p>
        </div>
    `).join('');
}

function setupEventListeners() {
    const chamber = document.getElementById('assembly-chamber');
    if (chamber) {
        chamber.addEventListener('click', e => {
            const pod = e.target.closest('.delegation-pod');
            if (pod) {
                const nationId = pod.dataset.nationId;
                playSound('click.mp3');
                renderDetailPanel(nationId);
            }
        });
    }
}


function init() {
    if (!document.getElementById('assembly-layout')) return;
    renderAssemblyChamber();
    renderPowerBalanceChart();
    renderGlobalIssues();
    setupEventListeners();
}

init();