import { state } from './state.js';
import { LORE_DATA } from './lore.js';
import { getSubFactionReputation } from './reputation.js';

// --- DISPATCHER ---

/**
 * Selects and renders the appropriate unique system display for a given faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderSystemForFaction(factionKey, factionData, currentState) {
    if (!factionData.internal_politics?.sub_factions && factionKey !== 'liberated_toads') {
        return '';
    }
    const systemHTML = getSystemHTML(factionKey, factionData, currentState);
    
    return `
        <div class="unique-system-container">
            <h5>Internal Faction Dynamics</h5>
            ${systemHTML}
        </div>
    `;
}

/**
 * Calls the correct rendering function based on the faction key.
 */
function getSystemHTML(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;
    switch (factionKey) {
        case 'regal_empire':
            return renderRegalEmpire(subFactions);
        case 'iron_legion':
        case 'koopa_troop':
            return renderOrgChart(subFactions, factionData.leader);
        case 'freelancer_underworld':
            return renderNetworkGraph(subFactions);
        case 'toad_gang':
             return renderTurfWar(subFactions);
        case 'toad_cult':
            return renderProphecyTracker(subFactions);
        case 'onyx_hand':
            return renderGenerationalView(subFactions);
        case 'mages_guild':
            return renderMagicalStability(subFactions);
        case 'rakasha_clans':
            return renderSpiritualBalance(subFactions);
        case 'cosmic_jesters':
            return renderChaosIndex();
        case 'the_unchained':
            return renderLiberationNetwork(subFactions);
        case 'silver_flame':
            return renderPurificationCrusade(subFactions);
        case 'oathbound_judges':
            return renderScalesOfJustice(subFactions);
        case 'da_krumperz':
            return renderWaaaghMeter(subFactions);
        case 'ratchet_raiders':
            return renderScrapTechTree(subFactions);
        case 'rebel_clans':
            return renderUnityMeter(subFactions);
        case 'crimson_fleet':
            return renderFleetStatus(subFactions);
        case 'wario_land':
            return renderGreedOMeter(subFactions);
        case 'mushroom_regency':
            return renderCivilWarMap();
        case 'peach_loyalists':
            return renderCrusadeTargets();
        case 'fawfuls_furious_freaks':
            return renderFuryEngine();
        case 'iron_fists':
            return renderCriminalEnterprise(subFactions);
        case 'moonfang_pack':
            return renderLunarCycle(subFactions);
        case 'diamond_city_investigators':
            return renderCaseBoard(subFactions);
        case 'goodstyle_artisans':
            return renderCulturalHeritage(subFactions);
        case 'liberated_toads':
            return renderLiberatedToads(factionKey, factionData, currentState);
        default:
            return `<div class="system-content"><p>No unique system data available for this faction.</p></div>`;
    }
}

/**
 * Initializes any dynamic JS for a system after it has been rendered.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 */
export function initSystem(factionKey, factionData) {
    if (factionKey === 'regal_empire') {
        initRegalEmpireChart(factionData.internal_politics.sub_factions);
    }
    if (factionKey === 'cosmic_jesters') {
        initChaosIndex();
    }
     if (factionKey === 'diamond_city_investigators') {
        initCaseBoardLines();
    }
}

// --- UNIQUE SYSTEM RENDERERS ---

function renderRegalEmpire(subFactions) {
    return `
        <p class="system-description">The Empire is a careful balance of four pillars. The Imperial Core holds traditional power, but the technocratic Magitek Ascension gains influence. In the shadows, the Silent Service gathers intelligence, while the Diplomatic Corps manages external affairs. This chart reflects their current influence within the Imperial Diet.</p>
        <div class="system-content regal-empire-system">
            <div class="system-chart-container">
                <canvas id="system-chart-regal-empire"></canvas>
            </div>
        </div>
    `;
}

function initRegalEmpireChart(subFactions) {
    const chartId = 'system-chart-regal-empire';
    const ctx = document.getElementById(chartId)?.getContext('2d');
    if (!ctx) return;

    const labels = Object.values(subFactions).map(sf => sf.name);
    const data = Object.values(subFactions).map(sf => sf.influence);

    state.chartInstances[chartId] = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Influence',
                data: data,
                fill: true,
                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                borderColor: 'rgb(138, 43, 226)',
                pointBackgroundColor: 'rgb(138, 43, 226)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(138, 43, 226)'
            }]
        },
        options: {
             scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' },
                    pointLabels: { color: 'var(--text-color)', font: { family: 'Roboto Mono' } },
                    ticks: {
                        color: 'var(--text-color)',
                        backdropColor: 'rgba(0,0,0,0.5)',
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderOrgChart(subFactions, leaderKey) {
     const leader = LORE_DATA.characters[leaderKey];
     return `
        <p class="system-description">A rigid hierarchy defines this faction, with absolute authority flowing from the top down. Each sub-group has a specific role and operates within a strict chain of command.</p>
        <div class="system-content">
            <div class="org-chart">
                <div class="leader">${leader.name}</div>
                <div class="sub-groups">
                    ${Object.values(subFactions).map(sf => `
                        <div class="group">
                            <div class="group-title">${sf.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
     `;
}

function renderNetworkGraph(subFactions) {
     return `
        <p class="system-description">The Underworld is not a monolith, but a web of competing and cooperating interests. Syndicates provide stability, Independents thrive on chaos, Brokers trade information, and Cleaners handle the messy results. Their influence is a constant flux.</p>
        <div class="system-content">
            <div class="network-graph" id="freelancer-network">
                ${Object.entries(subFactions).map(([key, sf]) => `<div class="network-node ${key}">${sf.name} (${sf.influence}%)</div>`).join('')}
            </div>
        </div>
     `;
}

function renderTurfWar(subFactions) {
    const totalInfluence = Object.values(subFactions).reduce((sum, sf) => sum + sf.influence, 0);
    return `
        <p class="system-description">Power in the Toad Gang is measured in street corners and controlled rackets. After Big T's fall, the radical Mushroom Skulls have seized the most influence, but other factions still control significant portions of the criminal enterprise.</p>
        <div class="system-content turf-war-bars">
             ${Object.values(subFactions).map(sf => `
                <div class="bar-item">
                    <div class="bar-label">
                        <span>${sf.name}</span>
                        <span>${sf.influence}%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${sf.influence / totalInfluence * 100}%;"></div>
                    </div>
                </div>
             `).join('')}
        </div>
    `;
}

function renderMagicalStability(subFactions) {
    const conservatorInfluence = subFactions.conservators.influence;
    const innovatorInfluence = subFactions.innovators.influence;
    // Scale is -50 (Unstable) to +50 (Stable). Center is 0.
    const stability = conservatorInfluence - innovatorInfluence;
    const indicatorPosition = 50 + stability; // As a percentage

    return `
         <p class="system-description">The Mages' Guild is torn between the traditionalist Conservators who seek control and stability, and the radical Innovators who push magical boundaries, risking chaos for progress. The Aegis Magi enforce the will of the dominant faction.</p>
         <div class="system-content">
            <div class="stability-meter-container">
                <span class="stability-label negative">Chaotic</span>
                <div class="stability-meter">
                    <div class="stability-indicator" style="left: ${indicatorPosition}%;"></div>
                </div>
                <span class="stability-label positive">Stable</span>
            </div>
         </div>
    `;
}

function renderWaaaghMeter(subFactions) {
     const totalInfluence = Object.values(subFactions).reduce((sum, sf) => sum + sf.influence, 0);
     return `
        <p class="system-description">The power of Da Krumperz is driven by raw WAAAGH! energy. The more the clans fight (each other or enemies), the more powerful they become. The Big Bosses lead, the Mekaniaks build, and the Weirdboyz channel the strange green lightning.</p>
        <div class="system-content waaagh-meter">
            <div class="waaagh-bar-container">
                <div class="waaagh-bar-fill" style="width: ${totalInfluence}%;">WAAAGH!</div>
            </div>
        </div>
     `;
}

function renderCaseBoard(subFactions) {
    return `
        <p class="system-description">The DCI operates on active cases. Their current focus is the sprawling criminal enterprise of Wario and his associates. Evidence is gathered, leads are followed, and a network of suspects is slowly drawn together on the case board.</p>
        <div class="system-content">
            <div class="case-board" id="dci-case-board">
                <div class="case-item person"><strong>SUSPECT:</strong> Wario</div>
                <div class="case-item evidence1"><strong>EVIDENCE:</strong> Recovered Stolen Artifact</div>
                <div class="case-item evidence2"><strong>EVIDENCE:</strong> Ghostly energy readings in Cargo Bay 3</div>
                <div class="case-item lead"><strong>LEAD:</strong> Connection to Lario's Workshop</div>
            </div>
        </div>
    `;
}

function initCaseBoardLines() {
    const board = document.getElementById('dci-case-board');
    if(!board) return;

    const items = Array.from(board.children);
    if(items.length < 2) return;
    
    const connections = [ [0,1], [0,2], [0,3] ];

    connections.forEach(([startIndex, endIndex]) => {
        const start = items[startIndex];
        const end = items[endIndex];
        
        const x1 = start.offsetLeft + start.offsetWidth / 2;
        const y1 = start.offsetTop + start.offsetHeight / 2;
        const x2 = end.offsetLeft + end.offsetWidth / 2;
        const y2 = end.offsetTop + end.offsetHeight / 2;

        const length = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;

        const line = document.createElement('div');
        line.className = 'case-board-line';
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        board.appendChild(line);
    });
}


function renderChaosIndex() {
    return `
        <p class="system-description">To measure the Jesters is to measure madness. Their "influence" is a fiction, their "goals" a paradox. This display attempts to quantify the current level of cosmic absurdity. It is not guaranteed to be accurate, or even sensical.</p>
        <div class="system-content chaos-system">
             <div id="chaos-index-display" style="font-family: var(--font-display); text-align: center; font-size: 1.5rem;">Calculating...</div>
        </div>
    `;
}

function initChaosIndex() {
    const display = document.getElementById('chaos-index-display');
    if (!display) return;
    const outcomes = ["Probability: Mauve", "42%", "Error: Success!", "Cheese Found", "The Punchline Approaches", "WAAH!"];
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        display.textContent = outcomes[randomIndex];
        display.style.color = randomColor;
        display.style.textShadow = `0 0 10px ${randomColor}`;
    }, 1500);
}


// Fallback for factions without a fully unique system yet, to show subfaction list
function renderDefaultSubfactionList(subFactions, factionKey, state) {
     const subFactionListHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
            const playerRepHTML = state.party.map(playerKey => {
                const subRep = getSubFactionReputation(playerKey, factionKey, subKey);
                const repClass = subRep > 10 ? 'positive' : subRep < -10 ? 'negative' : 'neutral';
                    return `<div class="subfaction-player-rep">
                            <span class="char-name">${LORE_DATA.characters[playerKey].name}:</span>
                            <span class="rep-value ${repClass}">${subRep}</span>
                        </div>`;
            }).join('');
        return `<li class="subfaction-item">
                    <div class="subfaction-header">
                        <span class="subfaction-name">${subFaction.name}</span>
                        <span class="subfaction-influence">(${subFaction.influence || '??'}% Influence)</span>
                    </div>
                    <p class="subfaction-description">${subFaction.description}</p>
                    <div class="subfaction-reps-container">${playerRepHTML}</div>
                </li>`;
    }).join('');
    return `<div class="system-content"><ul class="subfaction-list">${subFactionListHTML}</ul></div>`;
}

// All other factions will get a simplified list for now
function renderProphecyTracker(subFactions) { return renderDefaultSubfactionList(subFactions, 'toad_cult', state); }
function renderGenerationalView(subFactions) { return renderDefaultSubfactionList(subFactions, 'onyx_hand', state); }
function renderSpiritualBalance(subFactions) { return renderDefaultSubfactionList(subFactions, 'rakasha_clans', state); }
function renderLiberationNetwork(subFactions) { return renderDefaultSubfactionList(subFactions, 'the_unchained', state); }
function renderPurificationCrusade(subFactions) { return renderDefaultSubfactionList(subFactions, 'silver_flame', state); }
function renderScalesOfJustice(subFactions) { return renderDefaultSubfactionList(subFactions, 'oathbound_judges', state); }
function renderScrapTechTree(subFactions) { return renderDefaultSubfactionList(subFactions, 'ratchet_raiders', state); }
function renderUnityMeter(subFactions) { return renderDefaultSubfactionList(subFactions, 'rebel_clans', state); }
function renderFleetStatus(subFactions) { return renderDefaultSubfactionList(subFactions, 'crimson_fleet', state); }
function renderGreedOMeter(subFactions) { return renderDefaultSubfactionList(subFactions, 'wario_land', state); }
function renderCivilWarMap() { return `<div class="system-content"><p>A full overview of the Mushroom Kingdom Civil War is available on the <a href="politics.html">Political Systems</a> page.</p></div>`; }
function renderCrusadeTargets() { return `<div class="system-content"><p>The Loyalists are currently focused on two primary objectives: finding evidence of the 'true' heir to the throne, and bringing Bowser to justice for his crimes against the kingdom.</p></div>`;}
function renderFuryEngine() { return `<div class="system-content"><p>Fawful's primary focus is bolstering the defenses of his new castle with bizarre and furious technology, while repelling the constant assaults from the Peach Loyalists.</p></div>`; }
function renderCriminalEnterprise(subFactions) { return renderDefaultSubfactionList(subFactions, 'iron_fists', state); }
function renderLunarCycle(subFactions) { return renderDefaultSubfactionList(subFactions, 'moonfang_pack', state); }
function renderCulturalHeritage(subFactions) { return renderDefaultSubfactionList(subFactions, 'goodstyle_artisans', state); }


/**
 * Renders the unique opinion list for the Liberated Toads.
 */
function renderLiberatedToads(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;
    const subFactionListHTML = Object.values(subFactions).map(subFaction => {
        const playerRepHTML = currentState.party.map(playerKey => {
            const opinionText = subFaction.opinion?.[playerKey] || "No strong opinion.";
            return `<div class="subfaction-opinion">
                        <span class="char-name">${LORE_DATA.characters[playerKey].name}:</span>
                        <p>"${opinionText}"</p>
                    </div>`;
        }).join('');
        
        let extraMechanicHTML = '';
         if (subFaction.current_focus) {
            extraMechanicHTML = `
                <div class="subfaction-details">
                    <h6>Current Focus</h6>
                    <p>${subFaction.current_focus}</p>
                </div>
            `;
        }
        return `<li class="subfaction-item">
                    <div class="subfaction-header">
                        <span class="subfaction-name">${subFaction.name}</span>
                        <span class="subfaction-influence">(${subFaction.influence || '??'}% Influence)</span>
                    </div>
                    <p class="subfaction-description">${subFaction.description}</p>
                    ${extraMechanicHTML}
                    <div class="subfaction-opinions-container">
                        ${playerRepHTML}
                    </div>
                </li>`;
    }).join('');

    return `
        <p class="system-description">The Liberated Toads are not a monolithic bloc, but a diverse group of individuals with strong opinions shaped by their recent trauma and newfound freedom. Their support is personal and must be earned. Their development is tracked on the <a href="focus.html">Toad Focus</a> page.</p>
        <div class="system-content">
            <ul class="subfaction-list">
                ${subFactionListHTML}
            </ul>
        </div>
    `;
}