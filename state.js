import { LORE_DATA } from './lore.js';
import { TOAD_ABILITIES } from './abilities.js';

// --- STATE MANAGEMENT ---
export const state = {
    party: ['archie', 'markop', 'humpik', 'bowser'],
    activeRumors: [], 
    players: {
        archie: { name: 'Archie Miser', reputation: {}, notoriety: {} },
        markop: { name: 'Markop Judi', reputation: {}, notoriety: {} },
        humpik: { name: 'Humpik', reputation: {}, notoriety: {} },
        bowser: { name: 'Bowser', reputation: {}, notoriety: {} }
    },
    auxiliary_party_state: {},
    finalReputations: {}, 
    finalSubFactionReputations: {},
    calculationBreakdown: {},
    chartInstances: {},
    focusTreeState: {} // New state for the focus tree
};

function initReputation() {
    const factionKeys = Object.keys(LORE_DATA.factions);
    const characterKeys = Object.keys(LORE_DATA.characters);

    for (const charKey in state.players) {
        if (!state.players[charKey].reputation) {
            state.players[charKey].reputation = {};
        }
        if (!state.players[charKey].notoriety) {
            state.players[charKey].notoriety = {};
        }
        factionKeys.forEach(factionKey => {
            if (state.players[charKey].reputation[factionKey] === undefined) {
                state.players[charKey].reputation[factionKey] = 1; // Default to 1 instead of 0
            }
            if (state.players[charKey].notoriety[factionKey] === undefined) {
                state.players[charKey].notoriety[factionKey] = 1; // Default to 1 instead of 0
            }
        });
    }

    const initialRep = {
        archie: { freelancer_underworld: 35, regal_empire: -70, iron_legion: -50, mages_guild: -70, rakasha_clans: 40, cosmic_jesters: 10, toad_gang: -50, onyx_hand: 5, the_unchained: 15, iron_fists: -20, koopa_troop: 5, mushroom_protectorate: -15, moonfang_pack: 5, liberated_toads: 50 },
        markop: { regal_empire: -10, silver_flame: 20, iron_legion: -50, mages_guild: -15, rakasha_clans: 40, toad_gang: -30, oathbound_judges: 10, the_unchained: 10, mushroom_protectorate: 5, koopa_troop: -10, moonfang_pack: 10, liberated_toads: 50 },
        humpik: { toad_gang: -80, regal_empire: -10, da_krumperz: 15, iron_legion: -50, ratchet_raiders: 10, koopa_troop: 50, mushroom_protectorate: -20, rakasha_clans: 10, rebel_clans: -5, liberated_toads: 20 },
        bowser: { regal_empire: -60, iron_legion: -40, toad_gang: -10, rebel_clans: 15, da_krumperz: 30, crimson_fleet: 5, koopa_troop: 100, mushroom_protectorate: -100, onyx_hand: 5, moonfang_pack: 10, ratchet_raiders: 5, liberated_toads: -10 }
    };
    const initialNotoriety = {
        archie: { mages_guild: 75, onyx_hand: 60, iron_fists: 50, the_unchained: 30, rakasha_clans: 40, regal_empire: 80, cosmic_jesters: 25, ratchet_raiders: 30 },
        markop: { iron_fists: 40, silver_flame: 30, rakasha_clans: 40, regal_empire: 20, oathbound_judges: 25 },
        humpik: { toad_gang: 60, koopa_troop: 50, iron_fists: 40, da_krumperz: 15 },
        bowser: { mushroom_protectorate: 100, koopa_troop: 100, regal_empire: 60, da_krumperz: 40, iron_legion: 50, crimson_fleet: 25 }
    };

    for (const playerKey in initialRep) {
        if (state.players[playerKey]) { 
            for (const factionKey in initialRep[playerKey]) {
                state.players[playerKey].reputation[factionKey] = initialRep[playerKey][factionKey];
            }
        }
    }
    for (const playerKey in initialNotoriety) {
        if (state.players[playerKey]) {
            for (const factionKey in initialNotoriety[playerKey]) {
                state.players[playerKey].notoriety[factionKey] = initialNotoriety[playerKey][factionKey];
            }
        }
    }

    state.activeRumors = LORE_DATA.rumors.map(r => r.id);
}

function getAbilityForLevel(archetype, level) {
    if (level % 2 !== 0) return null; // Only on even levels
    return TOAD_ABILITIES[archetype]?.[level] || null;
}

function grantXP(charKey, amount, reason) {
    const character = state.auxiliary_party_state[charKey];
    if (!character) return;

    character.xp += amount;
    character.log.push({ reason: reason, xp: amount });

    while (character.xp >= character.xp_to_next) {
        character.xp -= character.xp_to_next;
        character.level++;
        character.xp_to_next = character.level * 100; // Next level requires more XP
        character.log.push({ reason: `Level Up! Reached Level ${character.level}`, xp: 0, isLevelUp: true });

        // Check for new abilities
        const weaponArchetypes = {
            "Axe": "axe",
            "Longsword & Magic": "magic",
            "Whip": "whip",
            "Spellcaster": "spellcaster",
            "Gun": "gun",
            "Grotesque": "grotesque",
            "Dagger & Deceit": "deceit"
        };
        const archetype = weaponArchetypes[character.weapon];
        if (archetype) {
            const newAbility = getAbilityForLevel(archetype, character.level);
            if (newAbility) {
                character.abilities.push(newAbility);
                character.log.push({ reason: `Learned Ability: ${newAbility.name}`, xp: 0, isAbility: true });
            }
        }
    }
}

function processInitialXP() {
    state.auxiliary_party_state = structuredClone(LORE_DATA.auxiliary_party);

    // Grant XP based on lore events
    grantXP('dan', 150, "Landed the final blow on X.O./Skylla.");
    grantXP('dan', 50, "Disarmed X.O. of her reality-bending staff.");
    grantXP('dan', 50, "Survived a journey to the Tree of Woe.");
    grantXP('dan', 25, "Accepted tutelage from the Rakasha shamans.");
    grantXP('toad_lee', 50, "First to join the fight, showed immense courage.");
    
    const otherToads = ['toad_lee', 'eager', 'ryan', 'roger', 'bones'];
    otherToads.forEach(toadKey => {
        grantXP(toadKey, 25, "Participated in the liberation and survived the aftermath.");
    });

    grantXP('dan', 75, "Defended against the Orc uprising.");
    grantXP('archie', 50, "Discovered the injured Dan and the kidnapped Bones.");
    grantXP('markop', 75, "Saved Lario from an Orc sneak attack.");
    grantXP('bones', 25, "Survived the Orc kidnapping attempt.");

    // XP from Syrup confrontation
    grantXP('dan', 75, "Fought against Captain Syrup's forces.");
    grantXP('ryan', 50, "Assisted in the fight against Captain Syrup.");
    grantXP('archie', 75, "Key player in the Syrup confrontation.");
    grantXP('markop', 50, "Freed, then fought Captain Syrup.");
    grantXP('humpik', 25, "Stopped Waluigi's escape.");
    grantXP('humpik', 100, "Disabled the entire airship with one axe throw."); // It's an achievement, of a sort.

}

export function initFocusTreeState() {
    state.focusTreeState = {
        buildVersionApplied: "2025-08-12-r7",
        day: 1,
        activeToad: "dan",
        groupInfluence: 27,
        unlocked: {
            dan: [], toad_lee: [], eager: [],
            ryan: [], roger: [], bones: [],
            group: []
        },
        activeFocuses: [],
        influences: {
            dan: 40, toad_lee: 25, eager: 10,
            ryan: 10, roger: 10, bones: 5
        },
        log: [
            { who: "System", what: "System online. Focus protocols initiated.", when: new Date().toISOString() }
        ],
        luckyItemCooldowns: {
            dan: 0, toad_lee: 0, eager: 0,
            ryan: 0, roger: 0, bones: 0
        },
        inventory: {
            mundane: ["Polished Brass Sun", "Pressure Gauge Needle"],
            lucky: {}
        },
        flags: { waluigiPending: false }
    };
    // Initialize with some default focuses for demonstration
    state.focusTreeState.activeFocuses = [
        { toadKey: "dan", nodeId: "dan_t1_influence", remainingDays: 21, totalDays: 21 },
        { toadKey: "toad_lee", nodeId: "lee_t1_command", remainingDays: 19, totalDays: 19 }
    ];
}


export function saveState() {
    localStorage.setItem('vigilanceTerminalState', JSON.stringify(state));
}

function calculateFinalReputations() {
    const finalReps = structuredClone(state.players); 
    const finalSubFactionReps = {};
    const calculationBreakdown = {};

    const factionKeys = Object.keys(LORE_DATA.factions);

    for (const playerKey in finalReps) {
        calculationBreakdown[playerKey] = {};
        for (const factionKey in finalReps[playerKey].reputation) {
            let rumorRepModifier = 0;
            let rumorNotorietyModifier = 0;
            
            calculationBreakdown[playerKey][factionKey] = {
                base: state.players[playerKey].reputation[factionKey],
                rumors: [],
                propagation: []
            };

            LORE_DATA.rumors.forEach(rumor => {
                if (state.activeRumors.includes(rumor.id)) {
                    const isTarget = rumor.targets.includes('party') ? state.party.includes(playerKey) : rumor.targets.includes(playerKey);
                    if (isTarget && rumor.effects[factionKey]) {
                        const effect = rumor.effects[factionKey];
                        rumorRepModifier += effect;
                        rumorNotorietyModifier += Math.abs(effect) / 2;
                        calculationBreakdown[playerKey][factionKey].rumors.push({ title: rumor.title, value: effect });
                    }
                }
            });

            finalReps[playerKey].reputation[factionKey] = state.players[playerKey].reputation[factionKey] + rumorRepModifier;
            finalReps[playerKey].notoriety[factionKey] = (state.players[playerKey].notoriety[factionKey] || 0) + rumorNotorietyModifier;
        }
    }

    const propagationPasses = 3;
    for (let i = 0; i < propagationPasses; i++) {
        const repsBeforePropagation = structuredClone(finalReps);

        for (const playerKey in finalReps) {
            for (const factionKey in finalReps[playerKey].reputation) {
                const faction = LORE_DATA.factions[factionKey];

                if (!faction) {
                    console.warn(`Faction "${factionKey}" found in reputation data but not in LORE_DATA. Skipping propagation.`);
                    continue; 
                }

                let propagatedRep = 0;
                let passPropagationEffects = [];

                faction.relations?.allies?.forEach(allyKey => {
                    const allyRep = repsBeforePropagation[playerKey].reputation[allyKey] || 0;
                    if (Math.abs(allyRep) > 20) {
                        const effect = Math.round(allyRep / 8);
                        propagatedRep += effect;
                        if (i === 0 && effect !== 0) passPropagationEffects.push({ source: LORE_DATA.factions[allyKey].name, value: effect });
                    }
                });
                faction.relations?.enemies?.forEach(enemyKey => {
                    const enemyRep = repsBeforePropagation[playerKey].reputation[enemyKey] || 0;
                     if (enemyRep > 20) { 
                        const effect = -Math.round(enemyRep / 10);
                        propagatedRep += effect;
                         if (i === 0 && effect !== 0) passPropagationEffects.push({ source: LORE_DATA.factions[enemyKey].name, value: effect });
                     }
                     if (enemyRep < -20) { 
                        const effect = Math.round(Math.abs(enemyRep) / 10);
                        propagatedRep += effect;
                         if (i === 0 && effect !== 0) passPropagationEffects.push({ source: LORE_DATA.factions[enemyKey].name, value: effect });
                     }
                });

                if (playerKey === 'humpik') {
                    const bowserRep = repsBeforePropagation['bowser'].reputation[factionKey] || 0;
                    if (Math.abs(bowserRep) > 30) { 
                        const effect = Math.round(bowserRep / 4);
                        propagatedRep += effect;
                        if (i === 0 && effect !== 0) passPropagationEffects.push({ source: "Bowser's Influence", value: effect });
                    }
                }

                finalReps[playerKey].reputation[factionKey] += propagatedRep;
                if (i === 0) {
                    calculationBreakdown[playerKey][factionKey].propagation = passPropagationEffects;
                }
            }
        }
    }

    for (const playerKey in finalReps) {
        for (const factionKey in finalReps[playerKey].reputation) {
             finalReps[playerKey].reputation[factionKey] = Math.round(Math.max(-100, Math.min(100, finalReps[playerKey].reputation[factionKey])));
             finalReps[playerKey].notoriety[factionKey] = Math.round(Math.max(0, Math.min(100, finalReps[playerKey].notoriety[factionKey])));
        }
    }

    // Calculate Sub-Faction Reputations
    for (const playerKey in state.players) {
        finalSubFactionReps[playerKey] = {};
        for (const factionKey in LORE_DATA.factions) {
            const faction = LORE_DATA.factions[factionKey];
            if (faction.internal_politics?.sub_factions) {
                finalSubFactionReps[playerKey][factionKey] = {};
                for (const subFactionKey in faction.internal_politics.sub_factions) {
                    const subFaction = faction.internal_politics.sub_factions[subFactionKey];
                    const baseRep = finalReps[playerKey].reputation[factionKey] || 0;
                    const modifier = subFaction.reputation_modifiers?.[playerKey] || 0;
                    const finalSubRep = Math.round(Math.max(-100, Math.min(100, baseRep + modifier)));
                    finalSubFactionReps[playerKey][factionKey][subFactionKey] = finalSubRep;
                }
            }
        }
    }

    state.finalReputations = finalReps;
    state.finalSubFactionReputations = finalSubFactionReps;
    state.calculationBreakdown = calculationBreakdown;
}

export function loadState() {
    const savedState = localStorage.getItem('vigilanceTerminalState');
    if (savedState) {
        Object.assign(state, JSON.parse(savedState));
        // Reset chart instances on load
        state.chartInstances = {};
        initReputation();
        
        if (!state.auxiliary_party_state || Object.keys(state.auxiliary_party_state).length === 0) {
             processInitialXP();
        }
        if (!state.focusTreeState || Object.keys(state.focusTreeState).length === 0) {
            initFocusTreeState();
        }
    } else {
        initReputation();
        processInitialXP();
        initFocusTreeState();
    }
    calculateFinalReputations(); 
}