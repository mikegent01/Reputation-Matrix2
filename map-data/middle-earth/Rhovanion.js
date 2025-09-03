// map-data/middle-earth/Rhovanion.js

export const rhovanionData = {
    pointsOfInterest: [
        {
            id: 'poi_me_erebor',
            x: 60.0, y: 25.0,
            type: 'fortress', subRegion: 'rhovanion', name: "The Lonely Mountain (Erebor)",
            description: "The greatest of the Dwarf-kingdoms in the north, reclaimed from the dragon Smaug. Its halls are filled with treasure beyond measure, and its warriors are the best-equipped in all Middle-earth.",
            factionId: 'middle_earth_kingdoms', intelReq: 25, political_influence: 7, economic_value: 10, military_strength: 9, population: 20000,
            age_of_antiquity: 8, magical_resonance: 5, crime_rate: 2
        },
        {
            id: 'poi_me_dale',
            x: 61.0, y: 27.0,
            type: 'town', subRegion: 'rhovanion', name: "The City of Dale",
            description: "The city of Men, rebuilt in the shadow of the Lonely Mountain. A place of brisk trade between Men, Dwarves, and Elves, known for its skilled craftsmen and brave warriors.",
            factionId: 'unaligned', intelReq: 20, political_influence: 6, economic_value: 8, military_strength: 6, population: 15000,
            age_of_antiquity: 5, magical_resonance: 2, crime_rate: 3
        },
        {
            id: 'poi_me_esgaroth',
            x: 58.0, y: 30.0,
            type: 'port', subRegion: 'rhovanion', name: "Lake-town (Esgaroth)",
            description: "A town of Men built on wooden stilts over the surface of the Long Lake. A major hub for trade and river-traffic, though it is vulnerable to attack.",
            factionId: 'unaligned', intelReq: 15, political_influence: 5, economic_value: 9, military_strength: 4, population: 10000,
            age_of_antiquity: 6, magical_resonance: 1, crime_rate: 5
        },
        {
            id: 'poi_me_elvenking_halls',
            x: 55.0, y: 20.0,
            type: 'dungeon_entrance', subRegion: 'rhovanion', name: "The Elvenking's Halls",
            description: "The great subterranean palace of the Elvenking Thranduil, carved into a hillside in northern Mirkwood. A place of ancient magic, guarded by the wary and isolationist Silvan Elves.",
            factionId: 'middle_earth_kingdoms', intelReq: 40, political_influence: 7, economic_value: 6, military_strength: 7, population: 3000,
            age_of_antiquity: 10, magical_resonance: 9, crime_rate: 2
        },
        {
            id: 'poi_me_mirkwood',
            x: 53.0, y: 40.0,
            type: 'forest', subRegion: 'rhovanion', name: "Mirkwood the Great",
            description: "A vast and dark forest that has fallen under a shadow. Once known as Greenwood, it is now a tangled, dangerous place, filled with giant spiders, Orcs, and other foul creatures.",
            factionId: 'unaligned', intelReq: 20, political_influence: 2, economic_value: 3, military_strength: 6, population: 100,
            age_of_antiquity: 10, magical_resonance: 8, crime_rate: 9
        },
        {
            id: 'poi_me_dol_guldur',
            x: 50.0, y: 50.0,
            type: 'fortress', subRegion: 'rhovanion', name: "Dol Guldur, The Hill of Sorcery",
            description: "A great fortress of evil in southern Mirkwood, the stronghold of the Necromancer. A place of dark sorcery and gathering shadows, from which a new evil spreads across the Wilderland.",
            factionId: 'unaligned', intelReq: 60, political_influence: 8, economic_value: 4, military_strength: 9, population: 20000,
            age_of_antiquity: 8, magical_resonance: 10, crime_rate: 10
        },
        {
            id: 'poi_me_carrock',
            x: 48.0, y: 35.0,
            type: 'landmark', subRegion: 'rhovanion', name: "The Carrock",
            description: "A great, stony island in the middle of the River Anduin. It is the home of Beorn, the skin-changer, a powerful man who can take the form of a great bear. He does not welcome trespassers.",
            factionId: 'unaligned', intelReq: 45, political_influence: 3, economic_value: 1, military_strength: 7, population: 1,
            age_of_antiquity: 10, magical_resonance: 7, crime_rate: 4
        }
    ]
};
