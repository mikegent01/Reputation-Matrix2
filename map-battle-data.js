// This file contains the data for troop deployments and other dynamic battle elements on the world maps.

export const BATTLE_MAP_DATA = {
    // The journey of the party's airship
    vigilance_journey: {
        mapId: 'midlands_full',
        path: "M 41,46 C 45,50 60,20 81.28,4.29", // Path: Starts at Crimson Wing, detours towards Orcs/Lario's, then course corrects to Capital
        totalDays: 14,
        currentDay: 5,
        get daysRemaining() {
            return this.totalDays - this.currentDay;
        }
    },
    // Deployments of troop battalions in various conflicts
    troop_deployments: [
        // --- Mushroom Kingdom Civil War ---
        {
            id: 'mk_loyalist_siege',
            mapId: 'mushroom_kingdom_full',
            x: 46.5,
            y: 33.5,
            factionId: 'peach_loyalists',
            name: "Loyalist Siege Force",
            unitType: 'infantry', // ⚔️
            strength: "Approx. 500 zealous fighters",
            battlefront: true,
        },
        {
            id: 'mk_fawful_defense',
            mapId: 'mushroom_kingdom_full',
            x: 50.0,
            y: 32.0,
            factionId: 'fawfuls_furious_freaks',
            name: "Fawful's Minion Horde",
            unitType: 'special', // 🤖
            strength: "Unknown number of minions and machines",
            battlefront: true,
        },
        {
            id: 'mk_regency_garrison',
            mapId: 'mushroom_kingdom_full',
            x: 52.5,
            y: 26.0,
            factionId: 'mushroom_regency',
            name: "Toad Town Garrison",
            unitType: 'infantry', // 🛡️
            strength: "Approx. 800 guardsmen",
            battlefront: false,
        },
        {
            id: 'mk_koopa_scavengers',
            mapId: 'mushroom_kingdom_full',
            x: 51.5,
            y: 20.0,
            factionId: 'koopa_troop',
            name: "Kamek's Remnants",
            unitType: 'special', // ✨
            strength: "Scattered forces, magically augmented",
            battlefront: false,
        },

        // --- Battle of Ravencreek (Midlands) ---
        {
            id: 'mid_werewolf_vanguard',
            mapId: 'midlands_full',
            x: 33.0,
            y: 42.0,
            factionId: 'moonfang_pack',
            name: "Moonfang Pack Vanguard",
            unitType: 'cavalry', // 🐺 (using as a proxy)
            strength: "Approx. 450 warriors",
            battlefront: true,
        },
        {
            id: 'mid_vampire_legion',
            mapId: 'midlands_full',
            x: 35.0,
            y: 45.0,
            factionId: 'onyx_hand',
            name: "Sanguine Legion",
            unitType: 'infantry', // 🦇 (using as a proxy)
            strength: "Approx. 300 thralls, 50 knights",
            battlefront: true,
        },
        {
            id: 'mid_regal_observers',
            mapId: 'midlands_full',
            x: 38.0,
            y: 33.0,
            factionId: 'regal_empire',
            name: "Imperial Observers",
            unitType: 'infantry', // 🛡️
            strength: "120 Legionnaires",
            battlefront: false,
        }
    ]
};