// map-data/yal-belanor-pois.js

export const yalBelanorData = {
    pointsOfInterest: [
        {
            id: 'poi_yb_belanor_city',
            x: 55.0,
            y: 15.0,
            type: 'major_city',
            name: "City of Belanor",
            description: "The provincial capital, known for its white marble architecture and the prestigious Belanorian Knightly Academy. It is a bastion of Imperial nobility and high culture.",
            factionId: 'regal_empire',
            intelReq: 10,
            political_influence: 9,
            economic_value: 8,
            military_strength: 7,
            population: 45000
        },
        {
            id: 'poi_yb_silverstream',
            x: 48.5,
            y: 19.0,
            type: 'river',
            name: "Silverstream River",
            description: "A wide, placid river that flows through the heart of the province. Its waters are said to run with unusual purity, making the surrounding lands exceptionally fertile.",
            factionId: 'unaligned',
            intelReq: 5,
            political_influence: 2,
            economic_value: 6,
            military_strength: 1,
            population: 0
        },
        {
            id: 'poi_yb_veridia_estate',
            x: 60.0,
            y: 8.0,
            type: 'village',
            name: "Veridia Estate",
            description: "The ancestral home of Lady Elara Veridia, Speaker of the Diet. A sprawling estate known for its immaculate gardens and political galas.",
            factionId: 'regal_empire',
            intelReq: 40,
            political_influence: 8,
            economic_value: 7,
            military_strength: 4,
            population: 800
        },
        {
            id: 'poi_yb_elven_ruins',
            x: 42.5,
            y: 12.0,
            type: 'ruins',
            name: "Ruins of Aeridor",
            description: "The crumbling, vine-choked ruins of an ancient elven city. It is a place of quiet melancholy and is rumored to be haunted by the spirits of its former inhabitants.",
            factionId: 'unaligned',
            intelReq: 50,
            political_influence: 2,
            economic_value: 4,
            military_strength: 2,
            population: 0
        },
        {
            id: 'poi_yb_knightly_academy',
            x: 57.0,
            y: 17.0,
            type: 'academy',
            name: "Belanorian Knightly Academy",
            description: "A prestigious military academy where the sons and daughters of Imperial nobles are trained in the arts of war and command.",
            factionId: 'regal_empire',
            intelReq: 25,
            political_influence: 6,
            economic_value: 3,
            military_strength: 8,
            population: 2000
        },
        {
            id: 'poi_yb_whisperwood_edge',
            x: 41.0,
            y: 20.0,
            type: 'forest',
            name: "Whisperwood Glade",
            description: "The easternmost edge of the vast Whisperwood. While calmer than the deeper forest, it is still a place of eerie sounds and is occasionally scouted by Moonfang Pack werewolves.",
            factionId: 'moonfang_pack',
            intelReq: 30,
            political_influence: 2,
            economic_value: 2,
            military_strength: 3,
            population: 0
        },
        {
            id: 'poi_yb_stonebridge_keep',
            x: 65.0,
            y: 5.0,
            type: 'fortress',
            name: "Stonebridge Keep",
            description: "The personal fortress of Sir Reginald Stonebridge. A formidable bastion of the Iron Legion that guards the northern approach to the province.",
            factionId: 'iron_legion',
            intelReq: 35,
            political_influence: 5,
            economic_value: 2,
            military_strength: 9,
            population: 1200
        },
        {
            id: 'poi_yb_sunstone_vineyards',
            x: 52.0,
            y: 8.0,
            type: 'farm',
            name: "Sunstone Vineyards",
            description: "Famous vineyards that produce the exquisite Sunstone White, a wine favored by the Imperial court. A significant source of the province's wealth.",
            factionId: 'regal_empire',
            intelReq: 15,
            political_influence: 4,
            economic_value: 9,
            military_strength: 2,
            population: 600
        },
        {
            id: 'poi_yb_wayfinders_lodge',
            x: 45.0,
            y: 8.0,
            type: 'outpost',
            name: "Wayfinders' Lodge",
            description: "A remote lodge that serves as a base of operations for the Wayfinders' Guild, who use it to launch expeditions into the nearby ruins and mountains.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 3,
            economic_value: 3,
            military_strength: 3,
            population: 40
        },
        {
            id: 'poi_yb_hermits_cave',
            x: 69.0,
            y: 18.0,
            type: 'cave_entrance',
            name: "Hermit's Cave",
            description: "A secluded cave said to be home to a reclusive sage who possesses knowledge of the region's ancient history. He does not welcome visitors.",
            factionId: 'unaligned',
            intelReq: 55,
            political_influence: 1,
            economic_value: 1,
            military_strength: 1,
            population: 1
        }
    ],
    fogOfWar: [
        {
            id: 'fog_yal_belanor',
            points: "54.49,3.12 64.39,1.96 68.50,1.96 68.78,6.78 72.05,16.41 71.68,20.56 68.69,23.55 66.17,26.88 56.91,28.37 49.16,29.04 47.48,28.54 45.24,26.88 45.24,23.55 41.78,16.91 40.10,12.59 37.01,7.77 37.11,4.62 42.90,-0.03 56.07,2.13 64.58,2.29"
        }
    ]
};
