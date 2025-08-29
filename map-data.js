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
    midlands: {
        id: 'midlands',
        name: 'The Midlands',
        imageSrc: 'fullmap.png',
        order: 1,
        group: 'The Midlands',
        pointsOfInterest: midlandsData.pointsOfInterest,
        fogOfWar: midlandsData.fogOfWar,
        poiSourceFile: 'map-data/midlands-pois.js'
    },
     chramalot_kingdom: {
        id: 'chramalot_kingdom',
        name: 'Chramalot Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 2,
        group: 'The Midlands',
        pointsOfInterest: chramalotKingdomData.pointsOfInterest,
        fogOfWar: chramalotKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/chramalot-kingdom-pois.js'
    }
};