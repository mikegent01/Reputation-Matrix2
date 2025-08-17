// This file contains all the core narrative, character, and faction data for the application.
// It imports data from smaller, more manageable files.

import { CHARACTERS_1 } from './characters-1.js';
import { CHARACTERS_2 } from './characters-2.js';
import { CHARACTERS_3 } from './characters-3.js';
import { FACTIONS_1 } from './factions-1.js';
import { FACTIONS_2 } from './factions-2.js';
import { FACTIONS_3 } from './factions-3.js';
import { AUXILIARY_PARTY, RUMORS, TIMELINE } from './party-and-events.js';
import { PARLIAMENT_MEMBERS } from './parliament-members.js';

export { CHARACTER_RELATIONS } from './character-relations.js';

const combinedCharacters = {
    ...CHARACTERS_1,
    ...CHARACTERS_2,
    ...CHARACTERS_3,
    ...PARLIAMENT_MEMBERS
};

const combinedFactions = {
    ...FACTIONS_1,
    ...FACTIONS_2,
    ...FACTIONS_3
};

export const LORE_DATA = {
    characters: combinedCharacters,
    auxiliary_party: AUXILIARY_PARTY,
    factions: combinedFactions,
    rumors: RUMORS,
    timeline: TIMELINE
};