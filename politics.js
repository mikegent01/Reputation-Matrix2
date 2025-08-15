import { LORE_DATA } from './lore.js';

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
        { name: 'Capital Province', votes: 15, description: "Strongly Human-Centric, Orderly, Traditional", faction: 'regal_empire' },
        { name: 'Yal Belanor', votes: 4, description: "Human-Centric, Values Order", faction: 'iron_legion' },
        { name: 'Vemilia', votes: 3, description: "Leans Human, Prefers Stability", faction: 'unaligned' },
        { name: 'Province of Ironwood & Isle of Burbary', votes: 4, description: "Mixed: Human/Werewolf Interests", faction: ['iron_legion', 'moonfang_pack'] },
        { name: 'Lockerwood', votes: 8, description: "Productive & Pragmatic Heartland", faction: 'unaligned' },
        { name: 'Autumn Wood', votes: 5, description: "Pro-Vampire & Mage Interests", faction: ['onyx_hand', 'mages_guild'] },
        { name: 'Dry County', votes: 1, description: "Diverse & Unpredictable", faction: 'cosmic_jesters' },
        { name: 'Dulgra', votes: 3, description: "Pro-Werewolf, Values Strength", faction: 'moonfang_pack' },
        { name: 'Dark Valley', votes: 3, description: "Strongly Pro-Werewolf, Wild", faction: 'moonfang_pack' },
        { name: 'Southern Marchlands', votes: 7, description: "Complex: Pro-Vampire/Magic, Regal, Anti-Werewolf", faction: ['onyx_hand', 'regal_empire'] }
    ]
};

function generateRepresentatives() {
    let reps = [];
    let idCounter = 0;
    const totalSeatsByProvince = {};
    const filledSeatsByProvince = {};

    // Calculate total seats for each province
    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        totalSeatsByProvince[province.name] = province.votes;
        filledSeatsByProvince[province.name] = 0;
    });

    // Add named characters first
    const namedCharacters = Object.values(LORE_DATA.characters).filter(c => c.province);
    namedCharacters.forEach(char => {
        if (totalSeatsByProvince[char.province] > filledSeatsByProvince[char.province]) {
            reps.push({
                id: `rep-${idCounter++}`,
                name: char.name,
                province: char.province,
                factionId: char.factionId,
                isNamed: true // Flag for special handling
            });
            filledSeatsByProvince[char.province]++;
        }
    });

    // Fill remaining seats with generic delegates
    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        const remainingSeats = totalSeatsByProvince[province.name] - filledSeatsByProvince[province.name];
        for (let i = 0; i < remainingSeats; i++) {
             let faction;
            if (Array.isArray(province.faction)) {
                // This logic is a bit simplistic for mixed provinces with named characters, but will suffice.
                // It will fill remaining seats alternating between the assigned factions.
                faction = province.faction[(filledSeatsByProvince[province.name] + i) % province.faction.length];
            } else {
                faction = province.faction;
            }
            reps.push({
                id: `rep-${idCounter++}`,
                name: `${province.name} Delegate #${filledSeatsByProvince[province.name] + i + 1}`,
                province: province.name,
                factionId: faction,
                isNamed: false
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

    // Group representatives by faction
    const groupedByFaction = representatives.reduce((acc, rep) => {
        const factionId = rep.factionId || 'unaligned';
        if (!acc[factionId]) {
            acc[factionId] = [];
        }
        acc[factionId].push(rep);
        return acc;
    }, {});

    // Sort factions alphabetically for a consistent order
    const sortedFactionKeys = Object.keys(groupedByFaction).sort((a, b) => {
        const nameA = LORE_DATA.factions[a]?.name || 'Unaligned';
        const nameB = LORE_DATA.factions[b]?.name || 'Unaligned';
        return nameA.localeCompare(nameB);
    });

    const factionsHTML = sortedFactionKeys.map(factionId => {
        const reps = groupedByFaction[factionId];
        const factionName = LORE_DATA.factions[factionId]?.name || 'Unaligned';
        return `
            <div class="faction-group">
                <h4 class="faction-header">${factionName} (${reps.length} seats)</h4>
                <div class="seat-container">
                    ${reps.map(rep => `<div class="parliament-seat seat-${rep.factionId}" data-rep-id="${rep.id}"></div>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="politics-section">
            <div class="politics-section-header">
                <h3>${data.name}</h3>
                <span class="status status-stable">${data.status}</span>
            </div>
            <p class="section-description">${data.description}</p>
            <div class="parliament-container">
                <h4>Diet Composition (${totalVotes} Seats)</h4>
                <div class="faction-grid">
                    ${factionsHTML}
                </div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    if(!tooltip) return;

    const parliamentContainer = document.querySelector('.parliament-container');
    if (!parliamentContainer) return;

    parliamentContainer.addEventListener('mouseover', (e) => {
        const target = e.target;
        let contentHTML = '';

        if (target.matches('.parliament-seat')) {
            const repId = target.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                const factionName = LORE_DATA.factions[repData.factionId]?.name || 'Unaligned';
                const charData = repData.isNamed ? Object.values(LORE_DATA.characters).find(c => c.name === repData.name) : null;
                const description = charData ? `<p>${charData.description}</p>` : '';
                contentHTML = `
                    <h4>${repData.name}</h4>
                    <p><strong>Province:</strong> ${repData.province}</p>
                    <p><strong>Affiliation:</strong> ${factionName}</p>
                    ${description}
                `;
            }
        }

        if (contentHTML) {
            tooltip.innerHTML = contentHTML;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        }
    });

    parliamentContainer.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.left = `${e.clientX + 15}px`;
            tooltip.style.top = `${e.clientY + 15}px`;
        }
    });

    parliamentContainer.addEventListener('mouseout', (e) => {
        if (e.target.matches('.parliament-seat')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });
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