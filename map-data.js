// map-data.js

import { BUILDING_TYPES } from './map-data/building-types.js';
import { mushroomKingdomData } from './map-data/mushroom-kingdom-pois.js';
import { mountainEnclaveData } from './map-data/mountain-enclave-pois.js';
import { dryDryDesertData } from './map-data/dry-dry-desert-pois.js';
import { banditsWayData } from './map-data/bandits-way-pois.js';
import { warioWoodsData } from './map-data/wario-woods-pois.js';
import { aridCoastData } from './map-data/arid-coast-pois.js';
import { boosWoodsData } from './map-data/boos-woods-pois.js';
import { theNorthData } from './map-data/the-north-pois.js';
import { mushroomCityData } from './map-data/mushroom-city-pois.js';
import { beanbeanKingdomData } from './map-data/beanbean-kingdom-pois.js';
import { barrelVolcanoData } from './map-data/barrel-volcano-pois.js';
import { sevenKingdomsData } from './map-data/seven-kingdoms-pois.js';
import { sunshineIslesData } from './map-data/sunshine-isles-pois.js';
import { flowerKingdomData } from './map-data/flower-kingdom-pois.js';
import { yoshiDkIslandsData } from './map-data/yoshi-dk-islands-pois.js';
import { waffleChestnutData } from './map-data/waffle-chestnut-pois.js';
import { neoBowserCityData } from './map-data/neo-bowser-city-pois.js';
import { iceIceOutpostData } from './map-data/ice-ice-outpost-pois.js';
import { chramalotKingdomData } from './map-data/chramalot-kingdom-pois.js';
import { piantaSeaData } from './map-data/pianta-sea-pois.js';
import midlandsData from './map-data/midlands-pois.js';
import { yalBelanorData } from './map-data/yal-belanor-pois.js';
import { vemilliaData } from './map-data/vemillia-pois.js';
import { ironwoodData } from './map-data/ironwood-pois.js';
import { lockerwoodData } from './map-data/lockerwood-pois.js';
import { dragonMountainData } from './map-data/dragon-mountain-pois.js';
import { autumnwoodData } from './map-data/autumnwood-pois.js';
import { dryCountyData } from './map-data/dry-county-pois.js';
import { ludorIslesData } from './map-data/ludor-isles-pois.js';
import { theghduralData } from './map-data/theghdural-pois.js';
import { jungleOfThornsData } from './map-data/jungle-of-thorns-pois.js';
import { baldoraPlainsData } from './map-data/baldora-plains-pois.js';
import { yaleShoresData } from './map-data/yale-shores-pois.js';
import { lowerHillsData } from './map-data/lower-hills-pois.js';
import { yalCentralData } from './map-data/yal-central-pois.js';
import { northernLandsData } from './map-data/northern-lands-pois.js';


// Re-export BUILDING_TYPES so other modules can access it from this central file
export { BUILDING_TYPES };

export const MAP_DATA = {
    mushroom_kingdom_full: {
        id: 'mushroom_kingdom_full',
        name: 'Mushroom Kingdom (Full)',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 1,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: [
            ...mushroomKingdomData.pointsOfInterest,
            ...mountainEnclaveData.pointsOfInterest,
            ...dryDryDesertData.pointsOfInterest,
            ...banditsWayData.pointsOfInterest,
            ...warioWoodsData.pointsOfInterest,
            ...aridCoastData.pointsOfInterest,
            ...boosWoodsData.pointsOfInterest,
            ...theNorthData.pointsOfInterest,
            ...mushroomCityData.pointsOfInterest,
            ...beanbeanKingdomData.pointsOfInterest,
            ...barrelVolcanoData.pointsOfInterest,
            ...sevenKingdomsData.pointsOfInterest,
            ...sunshineIslesData.pointsOfInterest,
            ...flowerKingdomData.pointsOfInterest,
            ...yoshiDkIslandsData.pointsOfInterest,
            ...waffleChestnutData.pointsOfInterest,
            ...neoBowserCityData.pointsOfInterest,
            ...iceIceOutpostData.pointsOfInterest,
            ...chramalotKingdomData.pointsOfInterest,
            ...piantaSeaData.pointsOfInterest,
            ...yaleShoresData.pointsOfInterest,
        ],
        fogOfWar: [
            ...(mushroomKingdomData.fogOfWar || []),
            ...(mountainEnclaveData.fogOfWar || []),
            ...(dryDryDesertData.fogOfWar || []),
            ...(banditsWayData.fogOfWar || []),
            ...(warioWoodsData.fogOfWar || []),
            ...(aridCoastData.fogOfWar || []),
            ...(boosWoodsData.fogOfWar || []),
            ...(theNorthData.fogOfWar || []),
            ...(mushroomCityData.fogOfWar || []),
            ...(beanbeanKingdomData.fogOfWar || []),
            ...(barrelVolcanoData.fogOfWar || []),
            ...(sevenKingdomsData.fogOfWar || []),
            ...(sunshineIslesData.fogOfWar || []),
            ...(flowerKingdomData.fogOfWar || []),
            ...(yoshiDkIslandsData.fogOfWar || []),
            ...(waffleChestnutData.fogOfWar || []),
            ...(neoBowserCityData.fogOfWar || []),
            ...(iceIceOutpostData.fogOfWar || []),
            ...(chramalotKingdomData.fogOfWar || []),
            ...(piantaSeaData.fogOfWar || []),
            ...(yaleShoresData.fogOfWar || []),
        ],
        poiSourceFile: null 
    },
    mushroom_kingdom: {
        id: 'mushroom_kingdom',
        name: 'Mushroom Plains',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 2,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomKingdomData.pointsOfInterest,
        fogOfWar: mushroomKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-kingdom-pois.js'
    },
    the_north: {
        id: 'the_north',
        name: 'The North',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 3,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: theNorthData.pointsOfInterest,
        fogOfWar: theNorthData.fogOfWar || [],
        poiSourceFile: 'map-data/the-north-pois.js'
    },
    mushroom_city: {
        id: 'mushroom_city',
        name: 'Mushroom City',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 4,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomCityData.pointsOfInterest,
        fogOfWar: mushroomCityData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-city-pois.js'
    },
     beanbean_kingdom: {
        id: 'beanbean_kingdom',
        name: 'Beanbean Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 5,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: beanbeanKingdomData.pointsOfInterest,
        fogOfWar: beanbeanKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/beanbean-kingdom-pois.js'
    },
    mountain_enclave: {
        id: 'mountain_enclave',
        name: 'Mountain Enclave',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 6,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mountainEnclaveData.pointsOfInterest,
        fogOfWar: mountainEnclaveData.fogOfWar || [],
        poiSourceFile: 'map-data/mountain-enclave-pois.js'
    },
    dry_dry_desert: {
        id: 'dry_dry_desert',
        name: 'Dry Dry Desert',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 7,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: dryDryDesertData.pointsOfInterest,
        fogOfWar: dryDryDesertData.fogOfWar || [],
        poiSourceFile: 'map-data/dry-dry-desert-pois.js'
    },
    bandits_way: {
        id: 'bandits_way',
        name: 'Bandit\'s Way',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 8,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: banditsWayData.pointsOfInterest,
        fogOfWar: banditsWayData.fogOfWar || [],
        poiSourceFile: 'map-data/bandits-way-pois.js'
    },
    wario_woods: {
        id: 'wario_woods',
        name: 'Wario Woods',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 9,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: warioWoodsData.pointsOfInterest,
        fogOfWar: warioWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/wario-woods-pois.js'
    },
    arid_coast: {
        id: 'arid_coast',
        name: 'The Arid Coast',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 10,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: aridCoastData.pointsOfInterest,
        fogOfWar: aridCoastData.fogOfWar || [],
        poiSourceFile: 'map-data/arid-coast-pois.js'
    },
    boos_woods: {
        id: 'boos_woods',
        name: 'Boo\'s Woods',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 11,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: boosWoodsData.pointsOfInterest,
        fogOfWar: boosWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/boos-woods-pois.js'
    },
     pianta_sea: {
        id: 'pianta_sea',
        name: 'The Pianta Sea',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 12,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: piantaSeaData.pointsOfInterest,
        fogOfWar: piantaSeaData.fogOfWar || [],
        poiSourceFile: 'map-data/pianta-sea-pois.js'
    },
    yale_shores: {
        id: 'yale_shores',
        name: 'Yale Shores',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 13,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: yaleShoresData.pointsOfInterest,
        fogOfWar: yaleShoresData.fogOfWar || [],
        poiSourceFile: 'map-data/yale-shores-pois.js'
    },
    barrel_volcano: {
        id: 'barrel_volcano',
        name: 'Barrel Volcano',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 1,
        group: 'Islands & Outer Realms',
        pointsOfInterest: barrelVolcanoData.pointsOfInterest,
        fogOfWar: barrelVolcanoData.fogOfWar || [],
        poiSourceFile: 'map-data/barrel-volcano-pois.js'
    },
    seven_kingdoms: {
        id: 'seven_kingdoms',
        name: 'The Seven Kingdoms',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 2,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sevenKingdomsData.pointsOfInterest,
        fogOfWar: sevenKingdomsData.fogOfWar || [],
        poiSourceFile: 'map-data/seven-kingdoms-pois.js'
    },
    sunshine_isles: {
        id: 'sunshine_isles',
        name: 'Sunshine Isles',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 3,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sunshineIslesData.pointsOfInterest,
        fogOfWar: sunshineIslesData.fogOfWar || [],
        poiSourceFile: 'map-data/sunshine-isles-pois.js'
    },
    flower_kingdom: {
        id: 'flower_kingdom',
        name: 'Flower Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 4,
        group: 'Islands & Outer Realms',
        pointsOfInterest: flowerKingdomData.pointsOfInterest,
        fogOfWar: flowerKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/flower-kingdom-pois.js'
    },
    yoshi_dk_islands: {
        id: 'yoshi_dk_islands',
        name: 'Yoshi & DK\'s Islands',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 5,
        group: 'Islands & Outer Realms',
        pointsOfInterest: yoshiDkIslandsData.pointsOfInterest,
        fogOfWar: yoshiDkIslandsData.fogOfWar || [],
        poiSourceFile: 'map-data/yoshi-dk-islands-pois.js'
    },
    waffle_chestnut: {
        id: 'waffle_chestnut',
        name: 'Waffle & Chestnut',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 6,
        group: 'Islands & Outer Realms',
        pointsOfInterest: waffleChestnutData.pointsOfInterest,
        fogOfWar: waffleChestnutData.fogOfWar || [],
        poiSourceFile: 'map-data/waffle-chestnut-pois.js'
    },
    neo_bowser_city: {
        id: 'neo_bowser_city',
        name: 'Neo Bowser City',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 7,
        group: 'Islands & Outer Realms',
        pointsOfInterest: neoBowserCityData.pointsOfInterest,
        fogOfWar: neoBowserCityData.fogOfWar || [],
        poiSourceFile: 'map-data/neo-bowser-city-pois.js'
    },
    ice_ice_outpost: {
        id: 'ice_ice_outpost',
        name: 'Ice Ice Outpost',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 8,
        group: 'Islands & Outer Realms',
        pointsOfInterest: iceIceOutpostData.pointsOfInterest,
        fogOfWar: iceIceOutpostData.fogOfWar || [],
        poiSourceFile: 'map-data/ice-ice-outpost-pois.js'
    },
    midlands_full: {
        id: 'midlands_full',
        name: 'The Midlands (Full)',
        imageSrc: 'fullmap.png',
        order: 1,
        group: 'The Midlands',
        pointsOfInterest: [
            ...midlandsData.pointsOfInterest,
            ...yalBelanorData.pointsOfInterest,
            ...vemilliaData.pointsOfInterest,
            ...ironwoodData.pointsOfInterest,
            ...lockerwoodData.pointsOfInterest,
            ...dragonMountainData.pointsOfInterest,
            ...autumnwoodData.pointsOfInterest,
            ...dryCountyData.pointsOfInterest,
            ...ludorIslesData.pointsOfInterest,
            ...theghduralData.pointsOfInterest,
            ...jungleOfThornsData.pointsOfInterest,
            ...baldoraPlainsData.pointsOfInterest,
            ...lowerHillsData.pointsOfInterest,
            ...yalCentralData.pointsOfInterest,
            ...northernLandsData.pointsOfInterest,
        ],
        fogOfWar: [
            ...(midlandsData.fogOfWar || []),
            ...(yalBelanorData.fogOfWar || []),
            ...(vemilliaData.fogOfWar || []),
            ...(ironwoodData.fogOfWar || []),
            ...(lockerwoodData.fogOfWar || []),
            ...(dragonMountainData.fogOfWar || []),
            ...(autumnwoodData.fogOfWar || []),
            ...(dryCountyData.fogOfWar || []),
            ...(ludorIslesData.fogOfWar || []),
            ...(theghduralData.fogOfWar || []),
            ...(jungleOfThornsData.fogOfWar || []),
            ...(baldoraPlainsData.fogOfWar || []),
            ...(lowerHillsData.fogOfWar || []),
            ...(yalCentralData.fogOfWar || []),
            ...(northernLandsData.fogOfWar || []),
        ],
        poiSourceFile: null
    },
    midlands_capital: {
        id: 'midlands_capital',
        name: 'Regal Capital',
        imageSrc: 'fullmap.png',
        order: 2,
        group: 'The Midlands',
        pointsOfInterest: midlandsData.pointsOfInterest,
        fogOfWar: midlandsData.fogOfWar,
        poiSourceFile: 'map-data/midlands-pois.js'
    },
    yal_belanor: {
        id: 'yal_belanor',
        name: 'Yal Belanor',
        imageSrc: 'fullmap.png',
        order: 3,
        group: 'The Midlands',
        pointsOfInterest: yalBelanorData.pointsOfInterest,
        fogOfWar: yalBelanorData.fogOfWar,
        poiSourceFile: 'map-data/yal-belanor-pois.js'
    },
    vemillia: {
        id: 'vemillia',
        name: 'Vemilia',
        imageSrc: 'fullmap.png',
        order: 4,
        group: 'The Midlands',
        pointsOfInterest: vemilliaData.pointsOfInterest,
        fogOfWar: vemilliaData.fogOfWar,
        poiSourceFile: 'map-data/vemillia-pois.js'
    },
    ironwood: {
        id: 'ironwood',
        name: 'Ironwood',
        imageSrc: 'fullmap.png',
        order: 5,
        group: 'The Midlands',
        pointsOfInterest: ironwoodData.pointsOfInterest,
        fogOfWar: ironwoodData.fogOfWar,
        poiSourceFile: 'map-data/ironwood-pois.js'
    },
    lockerwood: {
        id: 'lockerwood',
        name: 'Lockerwood',
        imageSrc: 'fullmap.png',
        order: 6,
        group: 'The Midlands',
        pointsOfInterest: lockerwoodData.pointsOfInterest,
        fogOfWar: lockerwoodData.fogOfWar,
        poiSourceFile: 'map-data/lockerwood-pois.js'
    },
     dragon_mountain: {
        id: 'dragon_mountain',
        name: 'Dragon Mountain',
        imageSrc: 'fullmap.png',
        order: 7,
        group: 'The Midlands',
        pointsOfInterest: dragonMountainData.pointsOfInterest,
        fogOfWar: dragonMountainData.fogOfWar,
        poiSourceFile: 'map-data/dragon-mountain-pois.js'
    },
    autumnwood: {
        id: 'autumnwood',
        name: 'Autumnwood',
        imageSrc: 'fullmap.png',
        order: 8,
        group: 'The Midlands',
        pointsOfInterest: autumnwoodData.pointsOfInterest,
        fogOfWar: autumnwoodData.fogOfWar,
        poiSourceFile: 'map-data/autumnwood-pois.js'
    },
    dry_county: {
        id: 'dry_county',
        name: 'Dry County',
        imageSrc: 'fullmap.png',
        order: 9,
        group: 'The Midlands',
        pointsOfInterest: dryCountyData.pointsOfInterest,
        fogOfWar: dryCountyData.fogOfWar,
        poiSourceFile: 'map-data/dry-county-pois.js'
    },
    theghdural: {
        id: 'theghdural',
        name: 'Theghdural',
        imageSrc: 'fullmap.png',
        order: 10,
        group: 'The Midlands',
        pointsOfInterest: theghduralData.pointsOfInterest,
        fogOfWar: theghduralData.fogOfWar,
        poiSourceFile: 'map-data/theghdural-pois.js'
    },
    jungle_of_thorns: {
        id: 'jungle_of_thorns',
        name: 'Jungle of Thorns',
        imageSrc: 'fullmap.png',
        order: 11,
        group: 'The Midlands',
        pointsOfInterest: jungleOfThornsData.pointsOfInterest,
        fogOfWar: jungleOfThornsData.fogOfWar,
        poiSourceFile: 'map-data/jungle-of-thorns-pois.js'
    },
    ludor_isles: {
        id: 'ludor_isles',
        name: 'Ludor Isles',
        imageSrc: 'fullmap.png',
        order: 12,
        group: 'The Midlands',
        pointsOfInterest: ludorIslesData.pointsOfInterest,
        fogOfWar: ludorIslesData.fogOfWar,
        poiSourceFile: 'map-data/ludor-isles-pois.js'
    },
    baldora_plains: {
        id: 'baldora_plains',
        name: 'Baldora Plains',
        imageSrc: 'fullmap.png',
        order: 13,
        group: 'The Midlands',
        pointsOfInterest: baldoraPlainsData.pointsOfInterest,
        fogOfWar: baldoraPlainsData.fogOfWar,
        poiSourceFile: 'map-data/baldora-plains-pois.js'
    },
    lower_hills: {
        id: 'lower_hills',
        name: 'Lower Hills',
        imageSrc: 'fullmap.png',
        order: 14,
        group: 'The Midlands',
        pointsOfInterest: lowerHillsData.pointsOfInterest,
        fogOfWar: lowerHillsData.fogOfWar,
        poiSourceFile: 'map-data/lower-hills-pois.js'
    },
    yal_central: {
        id: 'yal_central',
        name: 'Yal Central',
        imageSrc: 'fullmap.png',
        order: 15,
        group: 'The Midlands',
        pointsOfInterest: yalCentralData.pointsOfInterest,
        fogOfWar: yalCentralData.fogOfWar,
        poiSourceFile: 'map-data/yal-central-pois.js'
    },
    northern_lands: {
        id: 'northern_lands',
        name: 'The Northern Lands',
        imageSrc: 'fullmap.png',
        order: 16,
        group: 'The Midlands',
        pointsOfInterest: northernLandsData.pointsOfInterest,
        fogOfWar: northernLandsData.fogOfWar,
        poiSourceFile: 'map-data/northern-lands-pois.js'
    },
    chramalot_kingdom: {
        id: 'chramalot_kingdom',
        name: 'Chramalot Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 9,
        group: 'Islands & Outer Realms',
        pointsOfInterest: chramalotKingdomData.pointsOfInterest,
        fogOfWar: chramalotKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/chramalot-kingdom-pois.js'
    }
};
