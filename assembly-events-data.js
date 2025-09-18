import { DINER_EVENT } from './events/diner-date-event.js';
import { state } from './state.js';
import { SCHEDULED_POSTS } from './events/scheduled-posts.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';


const BASE_EVENTS = [
    {
        id: 'democratic_summit',
        title: "The Democratic Summit",
        order: 1, // Newer event
        locationId: 'poi_mc_regency_parliament',
        description: "A major diplomatic summit intended to foster cooperation between the various democratic and independent states. The event was marred by an international incident, causing significant political and economic fallout.",
        attendees: [
            { characterKey: 'donkey_kong', justification: "Representing the DK Crew, a key independent economic power." },
            { characterKey: 'diddy_kong', justification: "Attending as Heir Apparent and a senior delegate for the DK Crew." },
            { characterKey: 'candy_kong', justification: "Attending as a senior advisor and diplomat for the DK Crew." },
            { characterKey: 'chunky_kong', justification: "Attending as a sergeant-at-arms and a symbol of the DK Crew's strength." },
            { characterKey: 'lanky_kong', justification: "Attending as a delegate, a decision now under heavy scrutiny." },
            { characterKey: 'captain_toad', host: true, justification: "Representing the Mushroom Regency, seeking aid and alliances amidst the civil war." },
            { characterKey: 'regal_empire_delegate', justification: "**[CONTROVERSIAL]** The Regal Empire, an autocracy, was granted observer status under the 'Hostile Actor De-escalation Mandate'. Their presence was intended to open dialogue and reduce regional tensions, a move that has been heavily criticized by pro-democracy advocates." },
            { characterKey: 'queen_bean', justification: "Representing the allied Beanbean Kingdom to strengthen ties with the Regency." },
            { characterKey: 'prince_florian', justification: "A diplomatic outreach from the newly-contacted Flower Kingdom, observing regional politics." },
            { characterKey: 'yoshi_elder', justification: "Representing the interests of the independent Yoshi Clans of Yoshi's Island." },
            { characterKey: 'king_chalmus_iii', justification: "Representing the chivalric kingdom of Chramalot, a traditional ally to the Mushroom Kingdom." },
            { characterKey: 'king_louen_leoncoeur', justification: "The King of Bretonnia, attending from 'The Fated Place' to assess the stability of his eastern neighbors and reinforce chivalric ideals." }
        ],
        news_ids: ['dk_crisis_news'],
        post_ids: ['summit_pre_1', 'summit_pre_2', 'diddy_post_1', 'dk_post_1', 'krool_post_1', 'lanky_post_1', 'candy_post_1', 'chunky_post_1', 'penny_post_1', 'captain_toad_post_1', 'summit_reaction_1', 'summit_reaction_2', 'summit_reaction_3', 'summit_reaction_4', 'summit_reaction_5']
    },
    {
        id: 'fawfuls_gala',
        title: "Fawful's Grand Gala",
        order: 2, // Older event
        locationId: 'poi_mk_castle',
        description: "A 'victory' party hosted by the villain Fawful following his seizure of Peach's Castle. The event was a gathering of various underworld figures and chaotic entities, and was infiltrated by a joint Koopa-Loyalist team.",
        attendees: [
            { characterKey: 'fawful', host: true, justification: "Host and self-proclaimed 'Master of Fury'." },
            { characterKey: 'evil_toad_god', justification: "Attending as the Guest of Honor, a display of chaotic solidarity." },
            { characterKey: 'giggling_pete', justification: "Representing the Servants of the Cosmic Jester, finding the entire affair hilarious." },
            { characterKey: 'chief_thornpaw', justification: "Infiltrated the event to gather intelligence, using his spiritual connection to remain unseen." }
        ],
        news_ids: ['fawful_gala_news'],
        post_ids: ['fawful_post_1']
    }
];

let allEvents = [...BASE_EVENTS];

// Conditionally add the Diner event (Day 14+)
if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
    allEvents.unshift(DINER_EVENT); // unshift to make it the newest event
}

// Conditionally add the Iron Hoof Day event (Day 15+)
if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
    const { IRON_HOOF_DAY_EVENT } = await import('./events/iron-hoof-day.js');
    allEvents.unshift(IRON_HOOF_DAY_EVENT);
}


export const WAHBOOK_EVENTS = allEvents;

// Function to dynamically load posts for active events
export async function loadEventPosts() {
    let posts = [];

    // --- Time-based scheduled posts ---
    const today = new Date(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    const scheduledPostsToShow = SCHEDULED_POSTS.filter(post => {
        const postDate = new Date(post.scheduledDate.year, post.scheduledDate.monthIndex, post.scheduledDate.day);
        return postDate <= today;
    });
    posts.push(...scheduledPostsToShow);

    // --- Dynamic event posts ---
    if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
        const { DINER_POSTS } = await import('./events/diner-date-event.js');
        posts.push(...DINER_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
        const { IRON_HOOF_DAY_POSTS } = await import('./events/iron-hoof-day.js');
        posts.push(...IRON_HOOF_DAY_POSTS);
    }
    return posts;
}