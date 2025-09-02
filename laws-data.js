// laws-data.js
import { MILITARISTIC_CODES } from './laws-data-militaristic.js';
import { DEMOCRATIC_CODES } from './laws-data-democratic.js';
import { UNDERWORLD_CODES } from './laws-data-underworld.js';
import { MYSTICAL_CODES } from './laws-data-mystical.js';

export const LAW_DATA = {
    ...DEMOCRATIC_CODES,
    ...MILITARISTIC_CODES
};

export const UNRECOGNIZED_CODES = {
    ...UNDERWORLD_CODES,
    ...MYSTICAL_CODES
};

// New export for easy lookup
export const ALL_LEGAL_CODES = {
    ...LAW_DATA,
    ...UNRECOGNIZED_CODES
};