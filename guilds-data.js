import { GUILD_DATA as EXISTING_GUILDS, CHARTER_DATA as EXISTING_CHARTERS } from './guilds-data-old.js';
import { NEW_GUILDS, NEW_CHARTERS } from './guilds-data-new.js';

export const GUILD_DATA = { ...EXISTING_GUILDS, ...NEW_GUILDS };
export const CHARTER_DATA = { ...EXISTING_CHARTERS, ...NEW_CHARTERS };