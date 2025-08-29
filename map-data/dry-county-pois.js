// map-data/dry-county-pois.js

export const dryCountyData = {
    pointsOfInterest: [
        {
            id: 'poi_dc_tumble',
            x: 65.00,
            y: 60.00,
            type: 'town',
            name: "The Town of Tumble",
            description: "A bewildering town that, due to a localized reality warp, physically tumbles to a new location within the county every sunrise. Navigating to it is a daily challenge.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 4,
            economic_value: 5,
            military_strength: 2,
            population: 1200
        },
        {
            id: 'poi_dc_finks_office',
            x: 70.00,
            y: 55.00,
            type: 'capital_city',
            name: "Jester Fink's 'Office'",
            description: "The official seat of the provincial representative is not a building, but a massive, garishly-colored bouncy castle. Political meetings are often interrupted for mandatory fun-time.",
            factionId: 'cosmic_jesters',
            intelReq: 10,
            political_influence: 7,
            economic_value: 3,
            military_strength: 1,
            population: 10
        },
        {
            id: 'poi_dc_whispering_canyon',
            x: 60.00,
            y: 70.00,
            type: 'mountain_pass',
            name: "Whispering Canyon",
            description: "The wind blowing through this canyon sounds exactly like a crowd whispering terrible, unfunny jokes. Lingering too long can cause intense psychic annoyance.",
            factionId: 'unaligned',
            intelReq: 15,
            political_influence: 1,
            economic_value: 1,
            military_strength: 2,
            population: 0
        },
        {
            id: 'poi_dc_nihilist_commune',
            x: 75.00,
            y: 70.00,
            type: 'lair',
            name: "Giggling Nihilists' Commune",
            description: "A hidden commune of Cosmic Jester cultists who believe the universe is a meaningless joke. They spend their days painting smiley faces on cacti and plotting acts of pointless absurdity.",
            factionId: 'cosmic_jesters',
            intelReq: 40,
            political_influence: 3,
            economic_value: 1,
            military_strength: 3,
            population: 50
        },
        {
            id: 'poi_dc_random_bridge',
            x: 68.00,
            y: 65.00,
            type: 'bridge',
            name: "The Random Bridge",
            description: "This bridge over the Sand River changes its construction material every day at dawn. It might be sturdy steel one day and flimsy licorice the next. Crossing is always a gamble.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 1,
            economic_value: 2,
            military_strength: 1,
            population: 0
        },
        {
            id: 'poi_dc_impossible_arch',
            x: 78.00,
            y: 60.00,
            type: 'landmark',
            name: "Impossible Rock Arch",
            description: "A gravity-defying, corkscrewing arch of sandstone that should have collapsed centuries ago. Physicists from the Mages' Guild are baffled and infuriated by its existence.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 1,
            economic_value: 1,
            military_strength: 1,
            population: 0
        },
        {
            id: 'poi_dc_unmine',
            x: 58.00,
            y: 55.00,
            type: 'mine',
            name: "The Un-Mine",
            description: "A deep hole in the ground from which fully-formed, bizarre objects (like rubber chickens, grandfather clocks, and pet rocks) are slowly pushed out, rather than being extracted.",
            factionId: 'unaligned',
            intelReq: 45,
            political_influence: 1,
            economic_value: 6,
            military_strength: 2,
            population: 20
        },
        {
            id: 'poi_dc_sheriffs_office',
            x: 65.00,
            y: 50.00,
            type: 'village',
            name: "Sheriff Cactus's Town",
            description: "A small, surprisingly orderly town where the sheriff is a large, sentient, and unfailingly polite Saguaro cactus. Crime is low, because nobody wants to disappoint him.",
            factionId: 'unaligned',
            intelReq: 30,
            political_influence: 5,
            economic_value: 4,
            military_strength: 3,
            population: 500
        },
        {
            id: 'poi_dc_clock_that_runs_backwards',
            x: 62.00,
            y: 75.00,
            type: 'watchtower',
            name: "The Clock That Runs Backwards",
            description: "A tall, rickety clock tower in the middle of nowhere. Its hands spin counter-clockwise, and locals claim that spending time near it can cause you to un-learn things.",
            factionId: 'unaligned',
            intelReq: 35,
            political_influence: 1,
            economic_value: 1,
            military_strength: 1,
            population: 0
        },
        {
            id: 'poi_dc_oathbound_outpost',
            x: 82.00,
            y: 65.00,
            type: 'outpost',
            name: "Oathbound Judges' Outpost of Futility",
            description: "A small, perpetually frustrated outpost of the Oathbound Judges. They were sent here to impose cosmic law on the county, an impossible and soul-crushing task.",
            factionId: 'oathbound_judges',
            intelReq: 50,
            political_influence: 3,
            economic_value: 1,
            military_strength: 5,
            population: 40
        }
    ],
    fogOfWar: [
        {
            id: 'fog_dry_county',
            points: "58.32,48.14 55.79,50.47 56.17,56.11 56.63,64.75 56.73,71.73 59.34,77.04 63.46,78.04 67.19,75.22 70.84,71.73 74.67,68.74 79.06,73.55 82.05,75.05 84.29,71.89 82.98,67.74 83.17,61.26 79.62,57.61 79.53,53.12 75.70,47.81 68.31,48.31 62.33,45.81 60.65,45.65"
        }
    ]
};