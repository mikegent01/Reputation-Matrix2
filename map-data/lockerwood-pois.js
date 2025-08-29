// map-data/lockerwood-pois.js

export const lockerwoodData = {
    pointsOfInterest: [
        {
            id: 'poi_lw_oakhaven',
            x: 35.0,
            y: 40.0,
            type: 'town',
            name: "Oakhaven",
            description: "The largest market town in Lockerwood, serving as the hub for the region's agricultural trade. It is the home of the pragmatic representative, Martha Oakhaven.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 7,
            economic_value: 9,
            military_strength: 4,
            population: 12000
        },
        {
            id: 'poi_lw_whisperwood',
            x: 32.0,
            y: 48.0,
            type: 'forest',
            name: "The Whisperwood",
            description: "A dark and ancient forest that dominates the southern part of the region. It is the primary territory of the Moonfang Pack and a place of dark rumors and dangerous beasts.",
            factionId: 'moonfang_pack',
            intelReq: 20,
            political_influence: 4,
            economic_value: 3,
            military_strength: 7,
            population: 500
        },
        {
            id: 'poi_lw_bloodmoon_manor',
            x: 38.0,
            y: 45.0,
            type: 'haunted_place',
            name: "Bloodmoon Manor",
            description: "An opulent, gothic manor that serves as a secret stronghold for the Onyx Hand. It is a place of decadent parties and dark rituals, from which the vampires extend their influence.",
            factionId: 'onyx_hand',
            intelReq: 50,
            political_influence: 6,
            economic_value: 5,
            military_strength: 6,
            population: 150
        },
        {
            id: 'poi_lw_great_granary',
            x: 37.0,
            y: 36.0,
            type: 'farm',
            name: "The Great Granary",
            description: "A massive complex of silos and storehouses that holds the grain reserves for the entire province. A key strategic asset for any faction in a time of war.",
            factionId: 'regal_empire',
            intelReq: 15,
            political_influence: 4,
            economic_value: 10,
            military_strength: 5,
            population: 300
        },
        {
            id: 'poi_lw_battle_of_ravencreek',
            x: 34.0,
            y: 44.0,
            type: 'battlefield',
            name: "Fields of Ravencreek",
            description: "The site of a recent, bloody battle between the Moonfang Pack and the Onyx Hand. The fields are scarred and littered with the dead, a grim testament to the shadow war.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 1,
            economic_value: 1,
            military_strength: 3,
            population: 0
        },
        {
            id: 'poi_lw_silver_flame_chapel',
            x: 40.0,
            y: 38.0,
            type: 'temple',
            name: "Chapel of the Silver Flame",
            description: "A small but heavily fortified chapel maintained by the Order of the Silver Flame. From here, they launch patrols into the Whisperwood, seeking to purge the supernatural threats.",
            factionId: 'silver_flame',
            intelReq: 35,
            political_influence: 4,
            economic_value: 2,
            military_strength: 6,
            population: 80
        },
        {
            id: 'poi_lw_crossroads_inn',
            x: 38.0,
            y: 41.0,
            type: 'inn',
            name: "The Crossroads Inn",
            description: "A large, popular inn that serves as a neutral ground for travelers of all sorts. A great place to gather rumors, but also a den of spies and assassins from the Freelancer Underworld.",
            factionId: 'freelancer_underworld',
            intelReq: 20,
            political_influence: 3,
            economic_value: 5,
            military_strength: 2,
            population: 100
        },
        {
            id: 'poi_lw_howling_den',
            x: 31.0,
            y: 50.0,
            type: 'cave_entrance',
            name: "The Howling Den",
            description: "The primary lair of a powerful Moonfang Pack warband. A network of caves deep in the Whisperwood, from which they launch their raids against the Onyx Hand.",
            factionId: 'moonfang_pack',
            intelReq: 40,
            political_influence: 3,
            economic_value: 1,
            military_strength: 8,
            population: 200
        },
        {
            id: 'poi_lw_imperial_garrison',
            x: 39.0,
            y: 34.0,
            type: 'barracks',
            name: "Lockerwood Garrison",
            description: "A small but professional Iron Legion garrison tasked with protecting the Great Granary and maintaining Imperial order in the region.",
            factionId: 'iron_legion',
            intelReq: 25,
            political_influence: 5,
            economic_value: 2,
            military_strength: 7,
            population: 500
        },
        {
            id: 'poi_lw_forgotten_shrine',
            x: 35.0,
            y: 52.0,
            type: 'shrine',
            name: "Forgotten Shrine",
            description: "An ancient, overgrown shrine to a forgotten nature deity deep within the Whisperwood. It is a place of quiet power, said to offer sanctuary to those who are lost.",
            factionId: 'unaligned',
            intelReq: 45,
            political_influence: 1,
            economic_value: 1,
            military_strength: 1,
            population: 0
        }
    ],
    fogOfWar: [
        {
            id: 'fog_lockerwood',
            points: "39.07,34.19 38.32,37.01 34.49,39.17 31.31,42.82 29.91,45.98 34.68,52.62 38.23,48.97 41.59,40.17 42.15,37.18 41.31,34.19"
        }
    ]
};
