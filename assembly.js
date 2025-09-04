import { MIDLANDS_PROVINCES_DEMOGRAPHICS } from './assembly-data.js';
import { playSound } from './common.js';

const DEMOGRAPHICS_COLORS = [
    '#58a6ff', // Blue (Human)
    '#f85149', // Red (Vampire/Chaos)
    '#3fb950', // Green (Rakasha/Fey)
    '#e3b341', // Yellow (Dwarf/Goblin)
    '#a371f7', // Purple (Mage/Elf)
    '#7d8590'  // Grey (Other)
];

function renderDemographics() {
    const grid = document.getElementById('demographics-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(MIDLANDS_PROVINCES_DEMOGRAPHICS).map(([key, province]) => {
        return `
            <div class="province-card" id="province-${key}">
                <div class="province-header">
                    <h3>${province.name}</h3>
                    <p>Population: ${province.population.toLocaleString()}</p>
                </div>
                <div class="province-body">
                    <div class="province-chart-container">
                        <canvas id="chart-${key}"></canvas>
                    </div>
                    <div class="province-stats">
                        <ul>
                            <li><strong>Economy:</strong> ${province.economy}</li>
                            <li><strong>Primary Export:</strong> ${province.primaryExport}</li>
                        </ul>
                    </div>
                </div>
                <div class="province-notes">
                    <p>${province.notes}</p>
                </div>
            </div>
        `;
    }).join('');

    // Now, initialize charts
    Object.entries(MIDLANDS_PROVINCES_DEMOGRAPHICS).forEach(([key, province]) => {
        const canvas = document.getElementById(`chart-${key}`);
        if (canvas) {
            new Chart(canvas, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(province.demographics),
                    datasets: [{
                        label: 'Population %',
                        data: Object.values(province.demographics),
                        backgroundColor: DEMOGRAPHICS_COLORS,
                        borderColor: 'var(--sidebar-bg)',
                        borderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += context.parsed + '%';
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }
    });
}


function init() {
    if (!document.getElementById('demographics-grid')) return;
    renderDemographics();
}

init();
