// This file contains all the core narrative, character, and faction data for the application.
// It imports data from smaller, more manageable files.

import { CHARACTERS_1 } from './characters-1.js';
import { CHARACTERS_2 } from './characters-2.js';
import { CHARACTERS_3 } from './characters-3.js';
import { MIDLANDS_FACTIONS } from './factions/midlands.js';
import { MUSHROOM_KINGDOM_FACTIONS } from './factions/mushroom-kingdom.js';
import { WIDESPREAD_FACTIONS } from './factions/widespread.js';
import { WILDERLANDS_FACTIONS } from './factions/wilderlands.js';
import { EXPANDED_REALMS_AUREA_TO_FAERUN } from './factions/expanded-realms-aurea-to-faerun.js';
import { EXPANDED_REALMS_ZOOTOPIA_TO_DIVIDED } from './factions/expanded-realms-zootopia-to-divided.js';
import { EXPANDED_REALMS_KNOWN_TO_INTERNET } from './factions/expanded-realms-known-to-internet.js';


import { AUXILIARY_PARTY, RUMORS, TIMELINE } from './party-and-events.js';
import { PARLIAMENT_MEMBERS } from './parliament-members.js';
import { RAKASHA_DETAILS } from './rakasha-clans-details.js';
import { REBEL_CLANS_DETAILS } from './rebel-clans-details.js';
import { FAWFUL_DETAILS } from './fawful-details.js';
import { COSMIC_JESTERS_DETAILS } from './cosmic-jesters-details.js';

export { CHARACTER_RELATIONS } from './character-relations.js';

const combinedCharacters = {
    ...CHARACTERS_1,
    ...CHARACTERS_2,
    ...CHARACTERS_3,
    ...PARLIAMENT_MEMBERS
};

const combinedFactions = {
    ...MIDLANDS_FACTIONS,
    ...MUSHROOM_KINGDOM_FACTIONS,
    ...WIDESPREAD_FACTIONS,
    ...WILDERLANDS_FACTIONS,
    ...EXPANDED_REALMS_AUREA_TO_FAERUN,
    ...EXPANDED_REALMS_ZOOTOPIA_TO_DIVIDED,
    ...EXPANDED_REALMS_KNOWN_TO_INTERNET
};

export const LORE_DATA = {
    characters: combinedCharacters,
    auxiliary_party: { ...AUXILIARY_PARTY, group: { name: "Group Focuses" } },
    factions: combinedFactions,
    rumors: RUMORS,
    timeline: TIMELINE,
    faction_details: {
        rakasha_clans: RAKASHA_DETAILS,
        rebel_clans: REBEL_CLANS_DETAILS,
        fawfuls_furious_freaks: FAWFUL_DETAILS,
        cosmic_jesters: COSMIC_JESTERS_DETAILS
    }
};