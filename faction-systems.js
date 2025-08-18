import { state } from './state.js';
import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { getSubFactionReputation } from './reputation.js';
import { IRON_LEGION_DETAILS } from './iron-legion-details.js';
import { ONYX_HAND_DETAILS } from './onyx-hand-details.js';
import { MOONFANG_PACK_DETAILS } from './moonfang-pack-details.js';
import { MAGES_GUILD_DETAILS } from './mages-guild-details.js';

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
                ${Object.values(details.recruitment).map(item => `
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
                 ${Object.values(details.tactics).map(item => `
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

function renderOnyxHandDetailedSystem() {
    return buildDetailedSystemHTML(
        ONYX_HAND_DETAILS,
        "The Onyx Hand operates through layers of secrecy and centuries of accumulated influence. Their true power lies not in armies, but in the control they exert from the shadows."
    );
}

function renderMoonfangPackDetailedSystem() {
     return buildDetailedSystemHTML(
        MOONFANG_PACK_DETAILS,
        "The Moonfang Pack is a primal society where strength dictates status. Their structure is fluid, adapting to the needs of the hunt and the eternal war against their rivals."
    );
}

function renderMagesGuildDetailedSystem() {
     return buildDetailedSystemHTML(
        MAGES_GUILD_DETAILS,
        "The Mages' Guild is a nexus of immense power, but it is deeply divided. Its internal politics pit the forces of stability against the agents of chaotic innovation, with the balance of power constantly in flux."
    );
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


// --- DISPATCHER ---

/**
 * Selects and renders the appropriate unique system display for a given faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderSystemForFaction(factionKey, factionData, currentState) {
    const detailedSystems = ['iron_legion', 'onyx_hand', 'moonfang_pack', 'mages_guild', 'regal_empire'];
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
            return renderOnyxHandDetailedSystem();
        case 'moonfang_pack':
             return renderMoonfangPackDetailedSystem();
        case 'mages_guild':
             return renderMagesGuildDetailedSystem();
        case 'koopa_troop':
            return renderOrgChart(subFactions, factionData.leader);
        case 'freelancer_underworld':
            return renderNetworkGraph(subFactions);
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
    
    const detailedSystems = ['iron_legion', 'onyx_hand', 'moonfang_pack', 'mages_guild'];
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
function renderPurificationCrusade(subFactions) { return renderDefaultSubfactionList(subFactions, 'silver_flame', state); }
function renderScalesOfJustice(subFactions) { return renderDefaultSubfactionList(subFactions, 'oathbound_judges', state); }
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