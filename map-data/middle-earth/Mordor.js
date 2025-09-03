// map-data/middle-earth/Mordor.js

export const mordorData = {
    pointsOfInterest: [
        {
            id: 'poi_me_black_gate',
            x: 62.0, y: 65.0,
            type: 'fortress', subRegion: 'mordor', name: "The Black Gate (Morannon)",
            description: "The main entrance to Mordor, a massive gate of iron and stone set between two dark, jagged mountain ranges. It is guarded by legions of Orcs and the fearsome Towers of the Teeth.",
            factionId: 'unaligned', intelReq: 30, political_influence: 7, economic_value: 2, military_strength: 10, population: 10000,
            age_of_antiquity: 9, magical_resonance: 8, crime_rate: 10
        },
        {
            id: 'poi_me_barad_dur',
            x: 70.0, y: 75.0,
            type: 'fortress', subRegion: 'mordor', name: "Barad-dûr, The Dark Tower",
            description: "The fortress of Sauron, a tower of adamant and iron, crowned with the Great Eye. A place of absolute evil and immense power, from which the Dark Lord watches and commands his armies.",
            factionId: 'unaligned', intelReq: 80, political_influence: 10, economic_value: 5, military_strength: 10, population: 50000,
            age_of_antiquity: 9, magical_resonance: 10, crime_rate: 10
        },
        {
            id: 'poi_me_mount_doom',
            x: 67.0, y: 77.0,
            type: 'volcano', subRegion: 'mordor', name: "Mount Doom (Orodruin)",
            description: "A great, smoking volcano whose fires are the source of Sauron's power. Within its heart, in the Sammath Naur, the One Ring was forged, and only there can it be destroyed.",
            factionId: 'unaligned', intelReq: 40, political_influence: 5, economic_value: 6, military_strength: 7, population: 0,
            age_of_antiquity: 10, magical_resonance: 10, crime_rate: 10
        },
        {
            id: 'poi_me_minas_morgul',
            x: 60.5, y: 78.0,
            type: 'castle', subRegion: 'mordor', name: "Minas Morgul, The Dead City",
            description: "The former Gondorian fortress of Minas Ithil, now a dead city that glows with a sickly, pale light. It is the stronghold of the Nazgûl, a place of terror and black sorcery.",
            factionId: 'unaligned', intelReq: 50, political_influence: 8, economic_value: 3, military_strength: 9, population: 5000,
            age_of_antiquity: 9, magical_resonance: 9, crime_rate: 10
        },
        {
            id: 'poi_me_cirith_ungol',
            x: 62.0, y: 77.5,
            type: 'watchtower', subRegion: 'mordor', name: "The Tower of Cirith Ungol",
            description: "A tall, evil-looking tower that guards a high pass into Mordor. A place of great vigilance, manned by a quarrelsome garrison of Orcs.",
            factionId: 'unaligned', intelReq: 45, political_influence: 4, economic_value: 1, military_strength: 8, population: 300,
            age_of_antiquity: 9, magical_resonance: 7, crime_rate: 10
        },
        {
            id: 'poi_me_shelobs_lair',
            x: 61.5, y: 78.5,
            type: 'lair', subRegion: 'mordor', name: "Shelob's Lair (Torech Ungol)",
            description: "A network of foul, dark tunnels that serve as the lair of Shelob, the last child of Ungoliant, a monstrous spider of ancient evil. A place of absolute darkness and terror.",
            factionId: 'unaligned', intelReq: 60, political_influence: 2, economic_value: 2, military_strength: 9, population: 1,
            age_of_antiquity: 10, magical_resonance: 8, crime_rate: 10
        },
        {
            id: 'poi_me_gorgoroth',
            x: 68.0, y: 70.0,
            type: 'landmark', subRegion: 'mordor', name: "The Plateau of Gorgoroth",
            description: "A vast, barren plateau of ash and slag, the industrial heartland of Mordor. It is a land of forges, armories, and slave pits, where Sauron's great armies are supplied.",
            factionId: 'unaligned', intelReq: 35, political_influence: 5, economic_value: 8, military_strength: 7, population: 200000,
            age_of_antiquity: 9, magical_resonance: 7, crime_rate: 10
        }
    ]
};
