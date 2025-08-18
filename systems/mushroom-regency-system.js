import { state } from '../state.js';

const REGENCY_DATA = {
    influence: { regency: 35, loyalists: 20, warlords: 15, criminals: 15, fawful: 15 },
    events: [
        { status: "Siege of Peach's Castle", details: "Peach Loyalists continue their siege against Fawful's forces." },
        { status: "Warlord Activity", details: "Koopa Remnants under Kamek are scavenging for resources." },
        { status: "Criminal Opportunism", details: "The Toad Gang is expanding its protection rackets in lawless territories." },
        { status: "Regency Decree", details: "Chancellor Toadsworth has issued a decree for increased Guard recruitment." },
    ]
};

export function renderMushroomRegencySystem() {
    const eventsHTML = REGENCY_DATA.events.map(event => `<li><strong>${event.status}:</strong> ${event.details}</li>`).join('');

    return `
        <div class="system-content mushroom-regency-system">
            <div class="regency-chart-container">
                <canvas id="regency-influence-chart"></canvas>
            </div>
            <div class="regency-status-panel">
                <h6>Civil War Status</h6>
                <ul>${eventsHTML}</ul>
            </div>
        </div>
    `;
}

export function initMushroomRegencySystem() {
    const ctx = document.getElementById('regency-influence-chart');
    if (!ctx) return;

    const chartData = REGENCY_DATA.influence;

    // Destroy existing chart if it exists
    if (state.chartInstances['regency-influence-chart']) {
        state.chartInstances['regency-influence-chart'].destroy();
    }

    state.chartInstances['regency-influence-chart'] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(chartData).map(k => k.charAt(0).toUpperCase() + k.slice(1)),
            datasets: [{
                label: 'Influence',
                data: Object.values(chartData),
                backgroundColor: [
                    'var(--major-powers-color)', // Regency
                    'var(--accent-color)', // Loyalists
                    'var(--neutral-color)', // Warlords
                    'var(--underworld-fringe-color)', // Criminals
                    'var(--positive-color)' // Fawful
                ],
                borderColor: 'var(--main-bg)',
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
                        font: {
                            family: 'var(--font-primary)'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Factional Influence in the Kingdom',
                    color: 'var(--text-color)',
                    font: {
                        family: 'var(--font-display)',
                        size: 16
                    }
                }
            }
        }
    });
}
