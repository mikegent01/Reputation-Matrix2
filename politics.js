import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';

const MUSHROOM_KINGDOM_DATA = {
    name: "Mushroom Kingdom",
    status: "CIVIL WAR",
    description: "Following the death of Princess Peach, the kingdom has shattered. The formal government, the Mushroom Regency, struggles to maintain control against a zealous military faction, the Peach Loyalists, who believe the Princess is still alive and the Regency is illegitimate. Complicating matters, the recently Liberated Toads have emerged as a new, independent political entity, distrustful of all monarchical systems.",
    factions: [
        { name: "Mushroom Regency", description: "The official, but weakened, government body led by Chancellor Toadsworth. Their goal is to restore stability and order.", factionId: "mushroom_regency" },
        { name: "Peach Loyalists", description: "A fanatical military splinter group led by Captain Toadette. They seek to find the 'true' heir and punish Bowser for his perceived crimes.", factionId: "peach_loyalists" },
        { name: "The Liberated Toads", description: "A new, independent community of former slaves led by the hero Dan. They are forging their own path, wary of outside rulers.", factionId: "liberated_toads" },
    ]
};

const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Stable",
    description: "The Midlands are governed by a parliamentary body known as the Diet, where representatives from various provinces vote on matters of state. Power is distributed unevenly, with the Capital Province holding significant sway. The primary political blocs are the traditionalist Human-Centric factions, the rising supernatural interests of Vampires and Werewolves, and the pragmatic, unaligned heartlands.",
    provinces: [
        { name: 'Capital Province', votes: 15, faction: 'regal_empire' },
        { name: 'Yal Belanor', votes: 4, faction: 'iron_legion' },
        { name: 'Vemilia', votes: 3, faction: 'unaligned' },
        { name: 'Province of Ironwood & Isle of Burbary', votes: 4, faction: ['iron_legion', 'moonfang_pack'] },
        { name: 'Lockerwood', votes: 8, faction: 'unaligned' },
        { name: 'Autumn Wood', votes: 5, faction: ['onyx_hand', 'mages_guild'] },
        { name: 'Dry County', votes: 1, faction: 'cosmic_jesters' },
        { name: 'Dulgra', votes: 3, faction: 'moonfang_pack' },
        { name: 'Dark Valley', votes: 3, faction: 'moonfang_pack' },
        { name: 'Southern Marchlands', votes: 7, faction: ['onyx_hand', 'regal_empire'] }
    ],
    coalitions: {
        imperial_concordat: { name: 'The Imperial Concordat', color: 'var(--major-powers-color)', factions: ['regal_empire', 'iron_legion'] },
        unseen_court: { name: 'The Unseen Court', color: 'var(--mystical-ancient-color)', factions: ['onyx_hand', 'mages_guild', 'moonfang_pack'] },
        heartland_alliance: { name: 'The Heartland Alliance', color: 'var(--neutral-color)', factions: ['unaligned'] },
        chaos_caucus: { name: 'The Chaos Caucus', color: 'var(--interdimensional-threat-color)', factions: ['cosmic_jesters', 'freelancer_underworld'] }
    }
};

// --- Panel Logic ---
const appContainer = document.getElementById('app');
const detailPanel = document.getElementById('detail-panel');
const detailPanelContent = document.getElementById('detail-panel-content');
const detailPanelClose = document.getElementById('detail-panel-close');
let selectedSeat = null;

function hideDetailPanel() {
    if (detailPanel) detailPanel.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        selectedSeat = null;
    }
}

function showDetailPanel(repData, seatElement) {
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

// --- Procedural Generation ---
const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider']
};
const PERSONALITIES = ['Stoic Traditionalist', 'Fiery Firebrand', 'Cunning Diplomat', 'Pragmatic Bureaucrat', 'Ambitious Schemer', 'Honorable Zealot', 'Jaded Cynic'];

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
    
    // Add named characters first
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
            power: 80 + Math.floor(Math.random() * 21) // Named chars are powerful
        });
    });

    const filledSeatsByProvince = reps.reduce((acc, rep) => {
        acc[rep.province] = (acc[rep.province] || 0) + 1;
        return acc;
    }, {});

    // Fill remaining seats with generic delegates
    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        const totalSeats = province.votes;
        const filledSeats = filledSeatsByProvince[province.name] || 0;
        
        for (let i = filledSeats; i < totalSeats; i++) {
            let faction;
            if (Array.isArray(province.faction)) {
                faction = province.faction[i % province.faction.length];
            } else {
                faction = province.faction;
            }
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames),
                province: province.name,
                factionId: faction,
                isNamed: false,
                personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
                power: 20 + Math.floor(Math.random() * 51) // Generated are less powerful
            });
        }
    });

    return reps;
}

const representatives = generateRepresentatives();

function renderMushroomKingdom() {
    const data = MUSHROOM_KINGDOM_DATA;
    return `
        <div class="politics-section">
            <div class="politics-section-header">
                <h3>${data.name}</h3>
                <span class="status status-civil-war">${data.status}</span>
            </div>
            <p class="section-description">${data.description}</p>
            <div class="mk-factions-grid">
                ${data.factions.map(faction => `
                    <div class="mk-faction-card">
                        <h4>
                            <img src="${LORE_DATA.factions[faction.factionId]?.logo || ''}" alt="${faction.name} logo">
                            ${faction.name}
                        </h4>
                        <p>${faction.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMidlandsDiet() {
    const data = MIDLANDS_DIET_DATA;
    const totalVotes = representatives.length;

    // Separate Speaker
    const speaker = representatives.find(r => r.name === "Lady Elara Veridia");
    const otherReps = representatives.filter(r => r.name !== "Lady Elara Veridia");

    const groupedByCoalition = otherReps.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => data.coalitions[key].factions.includes(rep.factionId));
        const key = coalitionKey || 'independent';
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(rep);
        return acc;
    }, {});

    const powerBalanceData = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = otherReps.filter(r => coalition.factions.includes(r.factionId));
        return { name: coalition.name, count: reps.length, color: coalition.color, key: key };
    });
    
    // Power Balance Chart
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
                <div class="seat-container">
                    ${reps.map(rep => `<div class="parliament-seat seat-${rep.factionId}" data-rep-id="${rep.id}"></div>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="politics-section" id="midlands-diet-section">
            <div class="politics-section-header">
                <h3>${data.name}</h3>
                <span class="status status-stable">${data.status}</span>
            </div>
            <p class="section-description">${data.description}</p>
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

function setupEventListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    if(!tooltip) return;
    
    const parliamentContainer = document.getElementById('midlands-diet-section'); 
    if (!parliamentContainer) return;

    parliamentContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                tooltip.innerHTML = `
                    <h4>${repData.name}</h4>
                    <p><strong>Province:</strong> ${repData.province}</p>
                    <p class="personality">${repData.personality}</p>
                    <p><strong>Power:</strong> ${repData.power}</p>
                `;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    parliamentContainer.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.left = `${e.clientX + 15}px`;
            tooltip.style.top = `${e.clientY + 15}px`;
        }
    });

    parliamentContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    parliamentContainer.addEventListener('click', e => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                showDetailPanel(repData, seat);
            }
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDetailPanel);
    }
}

function init() {
    const container = document.getElementById('politics-container');
    if (!container) return;

    container.innerHTML = `
        ${renderMushroomKingdom()}
        ${renderMidlandsDiet()}
    `;
    
    setupEventListeners();
}

init();