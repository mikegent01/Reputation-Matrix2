// This file aggregates quest data from modular files.
import { MAIN_QUESTS } from './quests/quests-main.js';
import { MYSTERY_QUESTS } from './quests/quests-mysteries.js';
import { ARCHIE_QUESTS } from './quests/quests-archie.js';
import { MARKOP_QUESTS } from './quests/quests-markop.js';
import { HUMPIK_QUESTS } from './quests/quests-humpik.js';
import { BOWSER_QUESTS } from './quests/quests-bowser.js';
import { TOADS_QUESTS } from './quests/quests-toads.js';
import { WORLD_QUESTS } from './quests/quests-world.js';
import { GUILDS_QUESTS } from './quests/quests-guilds.js';

export const QUEST_DATA = {
    ...MAIN_QUESTS,
    ...MYSTERY_QUESTS,
    ...ARCHIE_QUESTS,
    ...MARKOP_QUESTS,
    ...HUMPIK_QUESTS,
    ...BOWSER_QUESTS,
    ...TOADS_QUESTS,
    ...WORLD_QUESTS,
    ...GUILDS_QUESTS,
};