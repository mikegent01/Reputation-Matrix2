// laws-data.js
import { MILITARISTIC_CODES } from './laws-data-militaristic.js';
import { DEMOCRATIC_CODES } from './laws-data-democratic.js';
import { UNDERWORLD_CODES } from './laws-data-underworld.js';
import { MYSTICAL_CODES } from './laws-data-mystical.js';
import { MIDDLE_EARTH_CODES } from './laws-data-middle-earth.js';
import { INTERNET_CODES } from './laws-data-internet.js';
import { WARHAMMER_CODES, WARHAMMER_UNRECOGNIZED } from './laws-data-warhammer.js';
import { KIVOTOS_CODES, KIVOTOS_UNRECOGNIZED } from './laws-data-kivotos.js';

export const LAW_DATA = {
    ...DEMOCRATIC_CODES,
    ...MILITARISTIC_CODES,
    ...MIDDLE_EARTH_CODES,
    ...INTERNET_CODES,
    ...WARHAMMER_CODES,
    ...KIVOTOS_CODES,
};

export const UNRECOGNIZED_CODES = {
    ...UNDERWORLD_CODES,
    ...MYSTICAL_CODES,
    ...WARHAMMER_UNRECOGNIZED,
    ...KIVOTOS_UNRECOGNIZED,
};

// New export for easy lookup
export const ALL_LEGAL_CODES = {
    ...LAW_DATA,
    ...UNRECOGNIZED_CODES,
    kingdom_of_gondor: MILITARISTIC_CODES.kingdom_of_gondor, // Ensure it's here too
};
