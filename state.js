import { LORE_DATA } from './lore.js';
import { TOAD_ABILITIES } from './abilities.js';
import { FOCUS_TREES } from './focus-tree.js';

// --- STATE MANAGEMENT ---

// Helper to generate a default intel object for the generic user
function generateGenericIntel() {
    const intel = {};
    for (const factionKey in LORE_DATA.factions) {
        intel[factionKey] = 30;
    }
    return intel;
}


export const state = {
    loggedInUser: localStorage.getItem('vigilanceTerminalUser') || 'generic',
    debugMode: false,
    intelLevels: {
        archie: {
            regal_empire: 95, iron_legion: 80, freelancer_underworld: 85,
            toad_gang: 50, toad_cult: 40, onyx_hand: 90, mages_guild: 95,
            rakasha_clans: 20, cosmic_jesters: 80, the_unchained: 70,
            silver_flame: 60, oathbound_judges: 65, ratchet_raiders: 75,
            koopa_troop: 50, rebel_clans: 60, crimson_fleet: 65,
            wario_land: 55, mushroom_regency: 45, peach_loyalists: 40,
            fawfuls_furious_freaks: 50, iron_fists: 85, moonfang_pack: 70,
            liberated_toads: 90, diamond_city_investigators: 70, goodstyle_artisans: 30
        },
        markop: {
            regal_empire: 70, iron_legion: 65, freelancer_underworld: 20,
            toad_gang: 30, toad_cult: 25, onyx_hand: 50, mages_guild: 40,
            rakasha_clans: 85, cosmic_jesters: 10, the_unchained: 75,
            silver_flame: 80, oathbound_judges: 85, ratchet_raiders: 30,
            koopa_troop: 35, rebel_clans: 50, crimson_fleet: 20,
            wario_land: 15, mushroom_regency: 60, peach_loyalists: 55,
            fawfuls_furious_freaks: 20, iron_fists: 60, moonfang_pack: 70,
            liberated_toads: 95, diamond_city_investigators: 40, goodstyle_artisans: 50
        },
        humpik: {
            koopa_troop: 95, toad_gang: 60, regal_empire: 25, iron_legion: 30,
            rakasha_clans: 40, rebel_clans: 30, moonfang_pack: 35,
            liberated_toads: 45, default: 20
        },
        bowser: {
            koopa_troop: 100, mushroom_regency: 75, peach_loyalists: 70,
            regal_empire: 65, iron_legion: 60, rebel_clans: 50,
            onyx_hand: 40, moonfang_pack: 45, crimson_fleet: 40,
            default: 30
        },
        generic: generateGenericIntel(),
    },
    party: ['archie', 'markop', 'humpik'],
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
    focusTreeState: {},
    inventories: {
        archie: { name: "Archie's Stash", items: [] },
        markop: { name: "Markop's Pack", items: [] },
        humpik: { name: "Humpik's Haul", items: [] },
        bowser: { name: "Bowser's Treasury", items: ["Princess Peach's Diary"] },
        shared: { name: "Liberated Toads' Items", items: ["Mushroom Kingdom History, Vol. III", "A Field Guide to Fungal Alchemy", "Koopa Troop Tactics"] }
    }
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
        humpik: { toad_gang: -80, regal_empire: -10, iron_legion: -50, ratchet_raiders: 10, koopa_troop: 50, mushroom_protectorate: -20, rakasha_clans: 10, rebel_clans: -5, liberated_toads: 20 },
        bowser: { regal_empire: -60, iron_legion: -40, toad_gang: -10, rebel_clans: 15, crimson_fleet: 5, koopa_troop: 100, mushroom_protectorate: -100, onyx_hand: 5, moonfang_pack: 10, ratchet_raiders: 5, liberated_toads: -10 }
    };
    const initialNotoriety = {
        archie: { mages_guild: 75, onyx_hand: 60, iron_fists: 50, the_unchained: 30, rakasha_clans: 40, regal_empire: 80, cosmic_jesters: 25, ratchet_raiders: 30 },
        markop: { iron_fists: 40, silver_flame: 30, rakasha_clans: 40, regal_empire: 20, oathbound_judges: 25 },
        humpik: { toad_gang: 60, koopa_troop: 50, iron_fists: 40 },
        bowser: { mushroom_protectorate: 100, koopa_troop: 100, regal_empire: 60, iron_legion: 50, crimson_fleet: 25 }
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

    // Common XP for all toads for initial liberation
    const allToads = ['dan', 'toad_lee', 'eager', 'ryan', 'roger', 'bones'];
    allToads.forEach(toadKey => {
        grantXP(toadKey, 25, "Participated in the liberation and survived the aftermath.");
    });

    // XP from X.O. & Syrup Confrontations
    grantXP('dan', 150, "Landed the final blow on X.O./Skylla.");
    grantXP('dan', 50, "Disarmed X.O. of her reality-bending staff.");
    grantXP('dan', 75, "Fought against Captain Syrup's forces.");
    grantXP('dan', 25, "Bravely asserted ownership of the staff against Archie.");
    grantXP('toad_lee', 50, "First to join the fight, showed immense courage.");
    grantXP('ryan', 50, "Assisted in the fight against Captain Syrup.");

    // XP from the "Vigilance" Aftermath
    grantXP('toad_lee', 100, "Knocked out a disguised Iron Legion kidnapper.");
    grantXP('eager', 50, "Tied up the captured Iron Legion kidnapper.");
    grantXP('bones', 25, "Survived the ship's crash and was revived by Wally.");
    grantXP('ryan', 15, "Attempted to secure Wally's powerful staff.");
    
    // XP for defending their group
    allToads.forEach(toadKey => {
        grantXP(toadKey, 30, "Fended off an attack from a kidnapper toad.");
    });
    
    // XP for surviving the Iron Legion fire attack
    grantXP('dan', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('toad_lee', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('eager', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('roger', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('ryan', 25, "Survived the Iron Legion fire attack.");
    grantXP('bones', 25, "Survived the Iron Legion fire attack.");

    // XP for uncovering the bomb plot
    grantXP('eager', 75, "Discovered the Iron Legion's bomb plot.");
    
    // Miscellaneous XP
    grantXP('dan', 25, "Accepted tutelage from the Rakasha shamans.");
}

export function initFocusTreeState() {
    const initialActiveFocuses = [];
    // Automatically start the first focus for each toad
    Object.keys(LORE_DATA.auxiliary_party).forEach(toadKey => {
        if (toadKey === 'traitor_toad' || !FOCUS_TREES[toadKey]) return;
        const tree = FOCUS_TREES[toadKey].tree;
        if (tree && tree.length > 0) {
            // Find the first node(s) with no prerequisites
            const startingNodes = tree.filter(node => node.prerequisites.length === 0);
            if (startingNodes.length > 0) {
                // For simplicity, we'll just start the first one found.
                // A more complex system could handle multiple starting paths.
                const firstFocus = startingNodes[0];
                 initialActiveFocuses.push({
                    toadKey: toadKey,
                    nodeId: firstFocus.id,
                    remainingDays: firstFocus.cost,
                    totalDays: firstFocus.cost
                });
            }
        }
    });

    state.focusTreeState = {
        buildVersionApplied: "2025-08-13-r1",
        day: 2,
        activeToad: "dan",
        groupInfluence: 27,
        unlocked: {
            dan: [], toad_lee: [], eager: [],
            ryan: [], roger: [], bones: [],
            group: []
        },
        activeFocuses: initialActiveFocuses,
        influences: {
            dan: 40, toad_lee: 25, eager: 10,
            ryan: 10, roger: 10, bones: 5
        },
        log: [
            { who: "System", what: "System online. Focus protocols initiated.", when: new Date().toISOString() },
            ...initialActiveFocuses.map(f => ({
                who: LORE_DATA.auxiliary_party[f.toadKey].name,
                what: `Began initial focus: "${FOCUS_TREES[f.toadKey].tree.find(n => n.id === f.nodeId).title}".`,
                when: new Date().toISOString()
            }))
        ],
        luckyItemCooldowns: {
            dan: 0, toad_lee: 0, eager: 0,
            ryan: 0, roger: 0, bones: 0
        },
        flags: { waluigiPending: false }
    };
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

    const propagationPasses = 1; // FIX: Reduced from 3 to 1 to prevent runaway values.
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
    state.debugMode = localStorage.getItem('vigilanceDebugMode') === 'true';
    const savedState = localStorage.getItem('vigilanceTerminalState');
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        // selectively assign properties to avoid overwriting the loggedInUser from the new session
        Object.keys(parsedState).forEach(key => {
            if (key !== 'loggedInUser' && key !== 'debugMode') { // also protect debugMode
                state[key] = parsedState[key];
            }
        });
        
        // Reset chart instances on load
        state.chartInstances = {};
        initReputation();

        // Ensure inventories exist in saved state, otherwise initialize
        if (!parsedState.inventories) {
             state.inventories = {
                archie: { name: "Archie's Stash", items: [] },
                markop: { name: "Markop's Pack", items: [] },
                humpik: { name: "Humpik's Haul", items: [] },
                bowser: { name: "Bowser's Treasury", items: ["Princess Peach's Diary"] },
                shared: { name: "Liberated Toads' Items", items: ["Mushroom Kingdom History, Vol. III", "A Field Guide to Fungal Alchemy", "Koopa Troop Tactics"] }
            };
        }
        
        if (state.focusTreeState && state.focusTreeState.inventory) {
            delete state.focusTreeState.inventory;
        }
        
        // Merge auxiliary party state to get latest statuses while preserving progress
        const savedAuxPartyState = parsedState.auxiliary_party_state;
        const freshAuxPartyData = LORE_DATA.auxiliary_party;
        if (savedAuxPartyState && Object.keys(savedAuxPartyState).length > 0) {
            const mergedAuxPartyState = {};
            for (const toadKey in freshAuxPartyData) {
                 if (Object.prototype.hasOwnProperty.call(freshAuxPartyData, toadKey)) {
                    const freshToad = structuredClone(freshAuxPartyData[toadKey]);
                    const savedToad = savedAuxPartyState[toadKey];

                    if (savedToad) {
                        freshToad.level = savedToad.level;
                        freshToad.xp = savedToad.xp;
                        freshToad.xp_to_next = savedToad.xp_to_next;
                        freshToad.log = savedToad.log || [];
                        freshToad.abilities = savedToad.abilities || [];
                    }
                    mergedAuxPartyState[toadKey] = freshToad;
                 }
            }
            state.auxiliary_party_state = mergedAuxPartyState;
        } else {
            processInitialXP();
        }

        initFocusTreeState();
    } else {
        initReputation();
        processInitialXP();
        initFocusTreeState();
    }
    calculateFinalReputations(); 
}
