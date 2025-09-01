import { BUILDING_TYPES as ALL_BUILDING_TYPES } from './map-data/building-types.js';

export const BUILDING_TYPES = ALL_BUILDING_TYPES;

export const MAP_DATA = {
    mushroom_kingdom_full: {
        id: 'mushroom_kingdom_full',
        name: 'Mushroom Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 1,
        group: 'Overview',
        pointsOfInterest: [
            { id: 'poi_mk_castle', x: 50.54, y: 30.88, type: 'castle', name: "Peach's Castle", description: "The heart of the Mushroom Kingdom, currently occupied by the maniacal Fawful.", factionId: 'fawfuls_furious_freaks', intelReq: { faction: 'mushroom_regency', level: 5 } },
            { id: 'poi_mk_toadtown', x: 52.0, y: 24.5, type: 'town', name: "Toad Town", description: "A town under siege, controlled by the Mushroom Regency but contested by multiple factions.", factionId: 'mushroom_regency', intelReq: { faction: 'mushroom_regency', level: 5 } },
            { id: 'poi_mk_loyalist_camp', x: 45.00, y: 35.00, type: 'siege_camp', name: "Loyalist Camp 'Vengeance'", description: "The main staging ground for the Peach Loyalists' crusade against Fawful.", factionId: 'peach_loyalists', intelReq: { faction: 'peach_loyalists', level: 15 } },
            { id: 'poi_mk_koopa_outpost', x: 44.00, y: 28.00, type: 'outpost', name: "Koopa Remnant Post", description: "A hidden outpost where Kamek directs the Koopa Remnants' intelligence operations.", factionId: 'koopa_troop', intelReq: { faction: 'koopa_troop', level: 30 } },
            { id: 'poi_me_rogueport', x: 25.00, y: 44.00, type: 'port', name: "Rogueport", description: "A wretched hive of scum and villainy. The unofficial capital of the Freelancer Underworld.", factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 40 } },
        ]
    },
    midlands_full: {
        id: 'midlands_full',
        name: 'The Midlands',
        imageSrc: 'fullmap.png',
        order: 2,
        group: 'Overview',
        pointsOfInterest: [
             { id: 'poi_mid_capital_district', x: 81.28, y: 4.29, type: 'capital_city', name: "Imperial Capital", description: "The administrative and symbolic heart of the Regal Empire.", factionId: 'regal_empire', intelReq: { faction: 'regal_empire', level: 5 } },
             { id: 'poi_iw_fort_ironhand', x: 35.0, y: 15.0, type: 'fortress', name: "Fort Ironhand", description: "A massive, grim fortress that serves as the headquarters for the Iron Legion's western divisions.", factionId: 'iron_legion', intelReq: { faction: 'iron_legion', level: 20 } },
             { id: 'poi_lw_bloodmoon_manor', x: 38.0, y: 45.0, type: 'haunted_place', name: "Bloodmoon Manor", description: "An opulent, gothic manor that serves as a secret stronghold for the Onyx Hand.", factionId: 'onyx_hand', intelReq: { faction: 'onyx_hand', level: 50 } },
             { id: 'poi_tg_alphas_maw', x: 75.00, y: 85.00, type: 'capital_city', name: "Alpha's Maw", description: "The de facto capital of the werewolf territories and seat of power for the Moonfang Pack.", factionId: 'moonfang_pack', intelReq: { faction: 'moonfang_pack', level: 30 } },
             { id: 'poi_aw_mages_spire', x: 35.00, y: 65.00, type: 'mages_tower', name: "Spire of the Mages' Guild", description: "The provincial headquarters of the Mages' Guild. A center for arcane research and magical law.", factionId: 'mages_guild', intelReq: { faction: 'mages_guild', level: 10 } },
        ]
    }
};
