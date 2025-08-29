// map-data/midlands-pois.js

const midlandsData = {
    pointsOfInterest: [
        {
            id: 'poi_mid_capital',
            x: 81.28,
            y: 4.29,
            type: 'capital_city',
            name: "Regal Capital",
            description: "The heart of the Regal Empire and seat of Emperor Elagabalus.",
            factionId: 'regal_empire',
            intelReq: 5
        },
        {
            id: 'poi_mid_ravencreek',
            x: 33.01,
            y: 47.33,
            type: 'town',
            name: "Ravencreek",
            description: "A key town in the contested territory between the Onyx Hand and the Moonfang Pack.",
            factionId: 'freelancer_underworld',
            intelReq: 15
        },
        {
            id: 'poi_mid_iron_citadel',
            x: 65.0,
            y: 18.0,
            type: 'fortress',
            name: "The Iron Citadel",
            description: "The massive, industrial fortress-city that serves as the headquarters of the Iron Legion. Its forges burn day and night, equipping the Empire's armies for their endless campaigns of expansion.",
            factionId: 'iron_legion',
            intelReq: 70
        },
        {
            id: 'poi_mid_obsidian_sanctum',
            x: 15.0,
            y: 88.0,
            type: 'dungeon_entrance',
            name: "The Obsidian Sanctum",
            description: "A hidden, subterranean cathedral of black basalt that serves as the secret seat of power for the Onyx Hand coven. From here, the vampire lords plot their centuries-long games of manipulation.",
            factionId: 'onyx_hand',
            intelReq: 80
        },
        {
            id: 'poi_mid_argent_tower',
            x: 45.0,
            y: 35.0,
            type: 'mages_tower',
            name: "The Argent Tower",
            description: "The soaring, magically-shielded headquarters of the Mages' Guild in the neutral city of Silverhaven. It is a center of arcane learning and a fortress against those who would seek to control magic.",
            factionId: 'mages_guild',
            intelReq: 75
        }
    ],
    fogOfWar: [
        { id: 'fog_mid_1', points: "0,0 100,0 100,15 80,15 80,40 0,40", factionId: 'regal_empire', intelReq: 30 },
        { id: 'fog_mid_2', points: "0,80 100,80 100,100 0,100", factionId: 'onyx_hand', intelReq: 40 }
    ]
};

export default midlandsData;