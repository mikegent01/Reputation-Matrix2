import { state } from './state.js';
import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { getSubFactionReputation } from './reputation.js';
import { IRON_LEGION_DETAILS } from './iron-legion-details.js';
import { ONYX_HAND_DETAILS } from './onyx-hand-details.js';
import { MOONFANG_PACK_DETAILS } from './moonfang-pack-details.js';
import { MAGES_GUILD_DETAILS } from './mages-guild-details.js';
import { SILVER_FLAME_DETAILS } from './silver-flame-details.js';
import { OATHBOUND_JUDGES_DETAILS } from './oathbound-judges-details.js';
import { KOOPA_TROOP_DETAILS } from './koopa-troop-details.js';

// --- HELPER FUNCTIONS ---
const findCharKeyByName = (name) => {
    return Object.keys(LORE_DATA.characters).find(key => LORE_DATA.characters[key].name === name);
};

// --- GENERIC DETAILED SYSTEM BUILDER ---
function buildDetailedSystemHTML(details, description) {
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


// --- FACTION-SPECIFIC RENDERERS ---

function renderIronLegionDetailedSystem() {
    return buildDetailedSystemHTML(
        IRON_LEGION_DETAILS,
        "The Iron Legion is a well-oiled machine of conquest, with a rigid hierarchy and distinct operational doctrines for different territories. Explore their structure and methods below."
    );
}

function renderOnyxHandCovenSystem() {
    const data = ONYX_HAND_DETAILS;
    const radius = 140; // Radius of the circle
    const numNodes = data.covens.length;
    const angleStep = (2 * Math.PI) / numNodes;

    const covenNodesHTML = data.covens.map((coven, i) => {
        const angle = i * angleStep - (Math.PI / 2); // Start from the top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return `
            <div class="coven-node" data-coven-id="${coven.id}" style="transform: translate(${x}px, ${y}px);">
                <img src="faction_onyx_hand.png" alt="${coven.name} Sigil">
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content onyx-hand-coven-system">
            <div class="coven-circle-container">
                <div class="coven-patriarch" title="${data.patriarch.title}: ${data.patriarch.name}">
                    <img src="faction_onyx_hand.png" alt="Patriarch Sigil">
                </div>
                ${covenNodesHTML}
            </div>
            <div class="coven-info-panel" id="onyx-hand-info-panel">
                <!-- Info will be populated by JS -->
            </div>
        </div>
    `;
}


function renderMagesGuildMageThemedSystem() {
    const data = MAGES_GUILD_DETAILS;
    const networkHTML = data.influence_network.map(node => `
        <li class="influence-node">
            <strong>${node.label}</strong>
            <p>${node.description}</p>
        </li>
    `).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="mages-guild-magic-system">
            <div class="scrying-orb-container">
                <div class="scrying-orb"></div>
                <div class="scrying-orb-info">
                    <h6>${data.scrying_orb.title}</h6>
                    <p><strong>Plot:</strong> <span class="active-plot">${data.scrying_orb.active_plot}</span></p>
                    <p>${data.scrying_orb.current_focus}</p>
                </div>
            </div>
            <div class="influence-details-container">
                <div class="influence-chart-container">
                    <h5>Distribution of Influence</h5>
                    <div id="mages-guild-chart-wrapper">
                        <canvas id="mages-guild-chart"></canvas>
                    </div>
                </div>
                <div class="influence-network-container">
                    <h5>Arcane Network</h5>
                    <ul class="influence-network">
                        ${networkHTML}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function initMagesGuildChart() {
    const canvas = document.getElementById('mages-guild-chart');
    if (!canvas) return;

    const data = MAGES_GUILD_DETAILS.influence_distribution;
    if (state.chartInstances['mages-guild']) {
        state.chartInstances['mages-guild'].destroy();
    }
    
    state.chartInstances['mages-guild'] = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Influence %',
                data: data.data,
                backgroundColor: [
                    'rgba(138, 43, 226, 0.7)', // Purple
                    'rgba(218, 54, 51, 0.7)',  // Red
                    'rgba(240, 185, 11, 0.7)', // Yellow
                    'rgba(139, 148, 158, 0.7)'// Grey
                ],
                borderColor: 'var(--sidebar-bg)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--text-secondary)',
                        font: {
                            family: "'Roboto Mono', monospace"
                        }
                    }
                }
            }
        }
    });
}


function renderMoonfangPackDetailedSystem() {
    const data = MOONFANG_PACK_DETAILS;
    const currentPhaseData = data.moon_phases.phases.find(p => p.name === data.moon_phases.current_phase) || data.moon_phases.phases[0];

    const tabsAndContentHTML = buildDetailedSystemHTML(
        data,
       "The Moonfang Pack is a primal society where strength dictates status. Their structure is fluid, adapting to the needs of the hunt and the eternal war against their rivals."
    );

    const moonPhaseHTML = `
        <div class="moon-phase-container">
            <div class="moon-display" title="${currentPhaseData.name}">${currentPhaseData.icon}</div>
            <div class="moon-info">
                <h6>Current Phase: ${currentPhaseData.name}</h6>
                <p>${currentPhaseData.effect}</p>
            </div>
        </div>
    `;
    
    return moonPhaseHTML + tabsAndContentHTML;
}

function renderSilverFlameEdictsSystem() {
    const data = SILVER_FLAME_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content silver-flame-edicts-system">
            <div class="edicts-section">
                <h6>Core Tenets of the Flame</h6>
                ${data.tenets.map(tenet => `
                    <div class="tenet-card">
                        <h6>${tenet.title}</h6>
                        <p>${tenet.text}</p>
                    </div>
                `).join('')}
            </div>
            <div class="edicts-section">
                <h6>Active Edicts</h6>
                ${data.active_edicts.map(edict => `
                    <div class="edict-card">
                        <h6>${edict.title}</h6>
                        <p>${edict.text}</p>
                        <span class="edict-status">Status: ${edict.status}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderOathboundJudgesVerdictSystem() {
    const data = OATHBOUND_JUDGES_DETAILS;
    const verdictClasses = {
        "Guilty on all counts. Sentence pending capture.": "verdict-guilty",
        "Judgment deferred. Under observation by the Arbiters of Intent.": "verdict-deferred",
        "Guilty. His entire kingdom is declared a rogue state operating outside cosmic law.": "verdict-guilty"
    };
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content oathbound-verdicts-system">
            <div class="verdict-log">
                ${data.recent_verdicts.map(v => `
                    <div class="verdict-card">
                        <div class="verdict-header">${v.case}</div>
                        <div class="verdict-details">
                            <p><strong>Defendant:</strong> ${v.defendant}</p>
                            <p><strong>Charge(s):</strong> ${v.charge}</p>
                            <p><strong>Presiding:</strong> ${v.presiding_judge}</p>
                        </div>
                        <div class="verdict-result ${verdictClasses[v.verdict] || ''}">${v.verdict}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderKoopaTroopHierarchySystem() {
    const data = KOOPA_TROOP_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content koopa-troop-system">
            <div class="koopa-hierarchy">
                <h6>Chain of Command</h6>
                ${data.hierarchy.map(level => `
                    <div class="hierarchy-level">
                        <strong>${level.rank}: ${level.leader}</strong>
                        <span>Key Units: ${level.units}</span>
                    </div>
                `).join('')}
            </div>
            <div class="koopa-war-status">
                <h6>${data.civil_war_status.title}</h6>
                <p><strong>Commander on Site:</strong> ${data.civil_war_status.commander_on_site}</p>
                <p><strong>Objective:</strong> ${data.civil_war_status.current_objective}</p>
                <p>${data.civil_war_status.disposition}</p>
            </div>
        </div>
    `;
}

// --- HOLY MIDLANDS DIET - VISUALIZATION ---

const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Fractured",
    description: "The Midlands are governed by a parliamentary body where provincial representatives vote on state matters. The Diet is currently highly fractured. The traditional Imperial Concordat faces opposition from multiple, hostile supernatural blocs: the manipulative Sanguine Covenant of vampires, the territorial Territorial Pact of werewolves, and the isolationist Arcane Congress of mages. With these factions refusing to cooperate, the pragmatic Heartland Alliance holds the decisive swing vote in an increasingly unstable political landscape.",
    provinces: [
        { name: 'Capital Province', votes: 15, bias: 'strong human', loyalty: 70, faction: 'regal_empire' },
        { name: 'Yal Belanor', votes: 4, bias: 'human', loyalty: 60, faction: 'regal_empire' },
        { name: 'Vemilia', votes: 3, bias: 'lean human', loyalty: 55, faction: 'regal_empire' },
        { name: 'Ironwood & Isle of Burbary', votes: 4, bias: 'lean human', loyalty: 50, faction: 'regal_empire' },
        { name: 'Lockerwood', votes: 3, bias: 'human', loyalty: 60, faction: 'unaligned' },
        { name: 'Yal Central', votes: 3, bias: 'human', loyalty: 65, faction: 'regal_empire' },
        { name: 'Dark Shores', votes: 2, bias: 'mixed', loyalty: 45, faction: 'unaligned' },
        { name: 'Autumnwood', votes: 5, bias: 'vampire', loyalty: 40, faction: 'onyx_hand' },
        { name: 'Dry County', votes: 1, bias: 'mixed', loyalty: 50, faction: 'cosmic_jesters' },
        { name: 'Dulgra', votes: 3, bias: 'werewolf', loyalty: 45, faction: 'moonfang_pack' },
        { name: 'Dark Valley', votes: 3, bias: 'strong werewolf', loyalty: 35, faction: 'moonfang_pack' },
        { name: 'Gehnsha Glade', votes: 3, bias: 'lean vampire', loyalty: 50, faction: 'onyx_hand' },
        { name: 'Jungle de Thorn', votes: 2, bias: 'regal', loyalty: 60, faction: 'regal_empire' },
        { name: 'Yale Shores', votes: 2, bias: 'magic', loyalty: 55, faction: 'mages_guild' }
    ],
    coalitions: {
        imperial_concordat: {
            name: 'The Imperial Concordat',
            color: 'var(--major-powers-color)',
            factions: ['regal_empire', 'iron_legion'],
            description: "A coalition representing the old guard of the Regal Empire, championing order, tradition, and human supremacy. They seek to expand Imperial borders, increase military funding, and restrict the rights of supernatural beings."
        },
        sanguine_covenant: {
            name: 'The Sanguine Covenant',
            color: 'var(--negative-color)',
            factions: ['onyx_hand'],
            description: "The political arm of the ancient vampire covens. They operate through shadow, blackmail, and centuries of accumulated influence, voting to legalize their shadow economy and subtly expand their power, viewing mortal politics as a trivial game to be played for their own amusement and gain."
        },
        territorial_pact: {
            name: 'The Territorial Pact',
            color: 'var(--regional-powers-color)',
            factions: ['moonfang_pack'],
            description: "Representing the fierce werewolf clans, this bloc is concerned with one thing: sovereignty. They vote to protect their ancestral hunting grounds, oppose any Imperial or vampiric encroachment, and uphold the right to govern themselves by their own laws of strength and honor."
        },
        arcane_congress: {
            name: 'The Arcane Congress',
            color: 'var(--mystical-ancient-color)',
            factions: ['mages_guild'],
            description: "The Mages' Guild acts as its own independent and influential voting bloc. They are isolationist and focused on magical regulation, voting to protect Guild autonomy, fund arcane research, and contain any magical threats—regardless of who wields them."
        },
        heartland_alliance: {
            name: 'The Heartland Alliance',
            color: 'var(--neutral-color)',
            factions: ['unaligned'],
            description: "This pragmatic bloc represents the interests of the common folk from unaligned agricultural and trade provinces. Their votes are often the deciding factor in the Diet, traded not for coin, but for policies that ensure prosperity and provincial autonomy."
        },
        chaos_caucus: {
            name: 'The Chaos Caucus',
            color: 'var(--interdimensional-threat-color)',
            factions: ['cosmic_jesters', 'freelancer_underworld'],
            description: "Less a political party and more a force of pure disruption. Led by the unpredictable Servants of the Cosmic Jester, their goal is not to gain power, but to undermine the very concept of organized government through absurdity and randomness."
        }
    }
};

const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider']
};
const PERSONALITIES = ['Stoic Traditionalist', 'Fiery Firebrand', 'Cunning Diplomat', 'Pragmatic Bureaucrat', 'Ambitious Schemer', 'Honorable Zealot', 'Jaded Cynic'];
let selectedSeat = null;

function generateUniqueName(existingNames) {
    let name;
    do {
        const first = NAME_PARTS.first[Math.floor(Math.random() * NAME_PARTS.first.length)];
        const last = NAME_PARTS.last[Math.floor(Math.random() * NAME_PARTS.last.length)];
        name = `${first} ${last}`;
    } while (existingNames.has(name));
    existingNames.add(name);
    return name;
}

function generateRepresentatives() {
    let reps = [];
    let idCounter = 0;
    const existingNames = new Set();
    
    const namedCharacters = Object.values(LORE_DATA.characters).filter(c => c.province && c.factionId);
    namedCharacters.forEach(char => {
        existingNames.add(char.name);
        reps.push({
            id: `rep-${idCounter++}`,
            name: char.name,
            province: char.province,
            factionId: char.factionId,
            isNamed: true,
            personality: char.role.includes('Speaker') ? 'Authoritative & Respected' : PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
            power: 80 + Math.floor(Math.random() * 21)
        });
    });

    const filledSeatsByProvince = reps.reduce((acc, rep) => {
        acc[rep.province] = (acc[rep.province] || 0) + 1;
        return acc;
    }, {});

    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        const totalSeats = province.votes;
        const filledSeats = filledSeatsByProvince[province.name] || 0;
        
        for (let i = filledSeats; i < totalSeats; i++) {
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames),
                province: province.name,
                factionId: province.faction,
                isNamed: false,
                personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
                power: 20 + Math.floor(Math.random() * 51)
            });
        }
    });
    return reps;
}

const representatives = generateRepresentatives();

function showDietDetailPanel(repData, seatElement) {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const detailPanelContent = document.getElementById('detail-panel-content');
    if (!detailPanel || !detailPanelContent) return;

    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
    }
    selectedSeat = seatElement;
    selectedSeat.classList.add('selected');

    const faction = LORE_DATA.factions[repData.factionId] || { name: 'Unaligned', logo: '' };
    const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => c.factions.includes(repData.factionId));

    let opinionsHTML = '';
    if (repData.isNamed) {
        const charKey = Object.keys(LORE_DATA.characters).find(key => LORE_DATA.characters[key].name === repData.name);
        let opinionsByHTML = '';
        if (CHARACTER_RELATIONS[charKey]) {
            opinionsByHTML = Object.entries(CHARACTER_RELATIONS[charKey]).map(([targetKey, relation]) => {
                const targetChar = LORE_DATA.characters[targetKey];
                if (!targetChar) return '';
                const opinionText = relation.text.split(':').slice(1).join(':').trim();
                return `<div class="opinion-quote"><strong>On ${targetChar.name}:</strong><p>"${opinionText}"</p></div>`;
            }).join('');
        }
        if (opinionsByHTML) {
            opinionsHTML = `<div class="panel-section"><h4>Dossier: Personal Opinions</h4>${opinionsByHTML}</div>`;
        }
    }

    detailPanelContent.innerHTML = `
        <div class="panel-header">
            ${faction.logo ? `<img src="${faction.logo}" alt="${faction.name} Logo">` : ''}
            <h3>${repData.name}</h3>
        </div>
        <div class="panel-section">
            <p><strong>Province:</strong> ${repData.province}</p>
            <p><strong>Affiliation:</strong> ${faction.name}</p>
            <p><strong>Coalition:</strong> ${coalition ? coalition.name : 'Independent'}</p>
            <p><strong>Personality:</strong> <span class="personality">${repData.personality}</span></p>
            <p><strong>Political Power:</strong> ${repData.power}</p>
        </div>
        ${opinionsHTML}
    `;

    detailPanel.classList.add('visible');
    appContainer.classList.add('panel-visible');
}

function hideDietDetailPanel() {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) detailPanel.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        selectedSeat = null;
    }
}

function renderHolyMidlandsDiet() {
    const data = MIDLANDS_DIET_DATA;
    const totalVotes = representatives.length;

    const speaker = representatives.find(r => r.name === "Lady Elara Veridia");
    const otherReps = representatives.filter(r => r.name !== "Lady Elara Veridia");

    const groupedByCoalition = otherReps.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => data.coalitions[key].factions.includes(rep.factionId));
        const key = coalitionKey || 'independent';
        if (!acc[key]) acc[key] = [];
        acc[key].push(rep);
        return acc;
    }, {});

    const powerBalanceData = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = otherReps.filter(r => coalition.factions.includes(r.factionId));
        return { name: coalition.name, count: reps.length, color: coalition.color, key: key };
    });

    const powerBalanceHTML = `
        <div id="diet-power-balance">
            <h4>Diet Power Balance (${totalVotes} Seats)</h4>
            <div class="power-balance-chart">
                ${powerBalanceData.map(c => `
                    <div class="power-balance-bar coalition-${c.key}" title="${c.name}: ${c.count} seats" style="width: ${(c.count / totalVotes) * 100}%; background-color: ${c.color};">
                        <span>${c.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const coalitionsHTML = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = groupedByCoalition[key] || [];
        if (reps.length === 0) return '';
        return `
            <div class="coalition-block">
                <h4 class="coalition-header" style="border-left: 4px solid ${coalition.color}; padding-left: 8px;">${coalition.name} (${reps.length} seats)</h4>
                ${coalition.description ? `<p class="coalition-description">${coalition.description}</p>` : ''}
                <div class="seat-container">
                    ${reps.map(rep => `<div class="parliament-seat seat-${rep.factionId}" data-rep-id="${rep.id}"></div>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content">
            ${powerBalanceHTML}
            <div class="parliament-container">
                 <div class="speaker-section">
                    <h4>Speaker of the Diet</h4>
                    <div class="speaker-seat seat-regal_empire" data-rep-id="${speaker.id}"></div>
                 </div>
                <div class="coalition-grid">
                    ${coalitionsHTML}
                </div>
            </div>
        </div>
    `;
}

function initHolyMidlandsDietListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    const dietContainer = document.querySelector('.unique-system-container');
    const detailPanelClose = document.getElementById('detail-panel-close');

    if (!tooltip || !dietContainer) return;

    dietContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                tooltip.innerHTML = `<h4>${repData.name}</h4><p><strong>Province:</strong> ${repData.province}</p><p class="personality">${repData.personality}</p>`;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    dietContainer.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.left = `${e.clientX + 15}px`;
            tooltip.style.top = `${e.clientY + 15}px`;
        }
    });

    dietContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    dietContainer.addEventListener('click', e => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                showDietDetailPanel(repData, seat);
            }
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDietDetailPanel);
    }
}

function initFreelancerNetworkCanvas() {
    const canvas = document.getElementById('freelancer-network-canvas');
    const tooltip = document.getElementById('freelancer-tooltip');
    if (!canvas || !tooltip) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    // Resize canvas to fit container
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const subFactions = LORE_DATA.factions.freelancer_underworld.internal_politics.sub_factions;
    
    const nodes = {
        syndicates: { x: canvas.width * 0.5, y: canvas.height * 0.2, data: subFactions.syndicates },
        independents: { x: canvas.width * 0.2, y: canvas.height * 0.75, data: subFactions.independents },
        brokers: { x: canvas.width * 0.8, y: canvas.height * 0.75, data: subFactions.information_brokers },
        cleaners: { x: canvas.width * 0.25, y: canvas.height * 0.45, data: subFactions.the_cleaners },
    };

    const connections = [
        { from: 'syndicates', to: 'independents' },
        { from: 'syndicates', to: 'brokers' },
        { from: 'syndicates', to: 'cleaners' },
        { from: 'independents', to: 'brokers' },
        { from: 'brokers', to: 'cleaners' }
    ];

    let particles = [];
    let mouse = { x: -1, y: -1 };
    let hoveredNode = null;
    
    // Particle creation
    const particleInterval = setInterval(() => {
        if (!document.getElementById('freelancer-network-canvas')) {
            clearInterval(particleInterval);
            return;
        }
        connections.forEach(conn => {
            const startNode = nodes[conn.from];
            const endNode = nodes[conn.to];
            const angle = Math.atan2(endNode.y - startNode.y, endNode.x - startNode.x);
            const speed = 1;
            particles.push({
                x: startNode.x,
                y: startNode.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: Math.hypot(endNode.x - startNode.x, endNode.y - startNode.y) / speed,
            });
        });
    }, 250);

    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        hoveredNode = null;
        for (const key in nodes) {
            const node = nodes[key];
            const radius = node.data.influence / 2 + 10;
            const dist = Math.hypot(mouse.x - node.x, mouse.y - node.y);
            if (dist < radius) {
                hoveredNode = key;
                break;
            }
        }
        
        if (hoveredNode) {
            const nodeData = nodes[hoveredNode].data;
            tooltip.style.display = 'block';
            tooltip.style.left = `${mouse.x + 15}px`;
            tooltip.style.top = `${mouse.y}px`;
            tooltip.innerHTML = `<strong>${nodeData.name}</strong><em>Influence: ${nodeData.influence}%</em>`;
        } else {
            tooltip.style.display = 'none';
        }
    });
    
    canvas.addEventListener('mouseout', () => {
        mouse = { x: -1, y: -1 };
        hoveredNode = null;
        tooltip.style.display = 'none';
    });

    let animationFrameId;
    function animate() {
        if (!document.getElementById('freelancer-network-canvas')) {
             if (animationFrameId) cancelAnimationFrame(animationFrameId);
             return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for(let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        ctx.fillStyle = 'rgba(240, 185, 11, 0.6)'; // neutral-color
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });


        // Draw connections
        connections.forEach(conn => {
            const startNode = nodes[conn.from];
            const endNode = nodes[conn.to];
            const isHovered = hoveredNode && (conn.from === hoveredNode || conn.to === hoveredNode);
            
            ctx.beginPath();
            ctx.moveTo(startNode.x, startNode.y);
            ctx.lineTo(endNode.x, endNode.y);
            ctx.strokeStyle = isHovered ? 'var(--accent-color)' : 'var(--border-color)';
            ctx.lineWidth = isHovered ? 1.5 : 1;
            ctx.stroke();
        });

        // Draw nodes
        for (const key in nodes) {
            const node = nodes[key];
            const radius = node.data.influence / 2 + 10;
            const isHovered = key === hoveredNode;

            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            
            ctx.fillStyle = 'var(--main-bg)';
            ctx.fill();
            
            ctx.strokeStyle = isHovered ? 'var(--accent-color)' : 'var(--underworld-fringe-color)';
            ctx.lineWidth = isHovered ? 2.5 : 1.5;
            ctx.stroke();

            ctx.fillStyle = 'var(--text-color)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bold 11px "Roboto Mono"';
            ctx.fillText(node.data.name, node.x, node.y);
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// --- DISPATCHER ---

/**
 * Selects and renders the appropriate unique system display for a given faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderSystemForFaction(factionKey, factionData, currentState) {
    const detailedSystems = ['iron_legion', 'onyx_hand', 'moonfang_pack', 'mages_guild', 'regal_empire', 'silver_flame', 'oathbound_judges', 'koopa_troop'];
    if (!detailedSystems.includes(factionKey) && !factionData.internal_politics?.sub_factions && factionKey !== 'liberated_toads') {
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
    const subFactions = factionData.internal_politics?.sub_factions;
    switch (factionKey) {
        case 'regal_empire':
            return renderHolyMidlandsDiet();
        case 'iron_legion':
            return renderIronLegionDetailedSystem();
        case 'onyx_hand':
            return renderOnyxHandCovenSystem();
        case 'moonfang_pack':
             return renderMoonfangPackDetailedSystem();
        case 'mages_guild':
             return renderMagesGuildMageThemedSystem();
        case 'koopa_troop':
            return renderKoopaTroopHierarchySystem();
        case 'silver_flame':
            return renderSilverFlameEdictsSystem();
        case 'oathbound_judges':
            return renderOathboundJudgesVerdictSystem();
        case 'freelancer_underworld':
            return `
                <p class="system-description">The Underworld is not a monolith, but a web of competing and cooperating interests. Influence and resources flow constantly between the major players. This is a live representation of that network.</p>
                <div class="freelancer-network-container">
                    <canvas id="freelancer-network-canvas"></canvas>
                    <div id="freelancer-tooltip"></div>
                </div>
            `;
        case 'toad_gang':
             return renderTurfWar(subFactions);
        case 'toad_cult':
            return renderProphecyTracker(subFactions);
        case 'rakasha_clans':
            return renderSpiritualBalance(subFactions);
        case 'cosmic_jesters':
            return renderChaosIndex();
        case 'the_unchained':
            return renderLiberationNetwork(subFactions);
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
        case 'diamond_city_investigators':
            return renderCaseBoard(subFactions);
        case 'goodstyle_artisans':
            return renderCulturalHeritage(subFactions);
        case 'liberated_toads':
            return renderLiberatedToads(factionKey, factionData, currentState);
        default:
            if(subFactions) return renderDefaultSubfactionList(subFactions, factionKey, state);
            return `<div class="system-content"><p>No unique system data available for this faction.</p></div>`;
    }
}

/**
 * Initializes any dynamic JS for a system after it has been rendered.
 * @param {string} factionKey - The key of the faction.
 */
export function initSystem(factionKey) {
    if (factionKey === 'regal_empire') {
        initHolyMidlandsDietListeners();
    }
    if (factionKey === 'cosmic_jesters') {
        initChaosIndex();
    }
     if (factionKey === 'diamond_city_investigators') {
        initCaseBoardLines();
    }
    if (factionKey === 'mages_guild') {
        initMagesGuildChart();
    }
    if (factionKey === 'freelancer_underworld') {
        initFreelancerNetworkCanvas();
    }
    if (factionKey === 'onyx_hand') {
        const infoPanel = document.getElementById('onyx-hand-info-panel');
        const systemContainer = document.querySelector('.onyx-hand-coven-system');
        if (!infoPanel || !systemContainer) return;

        // Set initial state
        const patriarch = ONYX_HAND_DETAILS.patriarch;
        infoPanel.innerHTML = `
            <h6>${patriarch.name}</h6>
            <p class="info-specialty">${patriarch.title}</p>
            <p>${patriarch.description}</p>
        `;
        infoPanel.classList.add('hidden');

        systemContainer.addEventListener('mouseover', (e) => {
            const node = e.target.closest('.coven-node');
            if (node) {
                // Deactivate others
                systemContainer.querySelectorAll('.coven-node').forEach(n => n.classList.remove('active'));
                node.classList.add('active');

                const covenId = node.dataset.covenId;
                const covenData = ONYX_HAND_DETAILS.covens.find(c => c.id === covenId);
                if (covenData) {
                    infoPanel.innerHTML = `
                        <h6>${covenData.name}</h6>
                        <p class="info-specialty">${covenData.specialty}</p>
                        <p>${covenData.description}</p>
                        <p><strong>Leader:</strong> ${covenData.leader}</p>
                        <p><strong>Operation:</strong> ${covenData.operation}</p>
                    `;
                    infoPanel.classList.remove('hidden');
                }
            }
        });
        
        systemContainer.addEventListener('mouseout', (e) => {
             const node = e.target.closest('.coven-node');
             if(node) {
                node.classList.remove('active');
                infoPanel.innerHTML = `
                    <h6>${patriarch.name}</h6>
                    <p class="info-specialty">${patriarch.title}</p>
                    <p>${patriarch.description}</p>
                `;
                infoPanel.classList.add('hidden');
             }
        });
    }
    
    const detailedSystems = ['iron_legion', 'moonfang_pack', 'mages_guild'];
    if (detailedSystems.includes(factionKey)) {
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
}

// --- OTHER UNIQUE SYSTEM RENDERERS ---

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
function renderSpiritualBalance(subFactions) { return renderDefaultSubfactionList(subFactions, 'rakasha_clans', state); }
function renderLiberationNetwork(subFactions) { return renderDefaultSubfactionList(subFactions, 'the_unchained', state); }
function renderScrapTechTree(subFactions) { return renderDefaultSubfactionList(subFactions, 'ratchet_raiders', state); }
function renderUnityMeter(subFactions) { return renderDefaultSubfactionList(subFactions, 'rebel_clans', state); }
function renderFleetStatus(subFactions) { return renderDefaultSubfactionList(subFactions, 'crimson_fleet', state); }
function renderGreedOMeter(subFactions) { return renderDefaultSubfactionList(subFactions, 'wario_land', state); }
function renderCivilWarMap() { return `<div class="system-content"><p>A full overview of the Mushroom Kingdom Civil War is available on the Balance of Power page (coming soon).</p></div>`; }
function renderCrusadeTargets() { return `<div class="system-content"><p>The Loyalists are currently focused on two primary objectives: finding evidence of the 'true' heir to the throne, and bringing Bowser to justice for his crimes against the kingdom.</p></div>`;}
function renderFuryEngine() { return `<div class="system-content"><p>Fawful's primary focus is bolstering the defenses of his new castle with bizarre and furious technology, while repelling the constant assaults from the Peach Loyalists.</p></div>`; }
function renderCriminalEnterprise(subFactions) { return renderDefaultSubfactionList(subFactions, 'iron_fists', state); }
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