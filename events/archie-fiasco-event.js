
// events/archie-fiasco-event.js

export const ARCHIE_FIASCO_POSTS = [
    {
        id: 'archie_recruitment_fiasco_post',
        order: 251, // Newest post
        characterKey: 'archie',
        timestamp: 'Just Now',
        content: `Dang man, I admire the conviction but that seems pretty harsh dont you think? With that being said, here's a propasition. Toads, why don't you join MY army...or rather the other toad army instead? Yes, you'll still have fight for your lives...at least you won't be preasured into it right? Sounds more benefital yeah?; 🙂`,
        likes: 12,
        comments: [
            { characterKey: 'captain_toadette', text: "You dare attempt to poach my soldiers after they have faced a trial of loyalty? You are a parasite, Miser, feeding on the chaos of a war you do not comprehend. This insult will be remembered." },
            { characterKey: 'embercap', text: "We fight for a cause, for the memory of our Princess. You fight for nothing but your own amusement. Your offer is an insult to every soldier who has bled for this crusade." },
            { characterKey: 'dan', text: "@Archie We're not an 'army' to be recruited. We're a family, trying to build a safe home. We fight to protect that, not for the thrill. I thought you understood that. This is... disappointing." },
            { characterKey: 'toad_lee', text: "You think we are your pawns to be moved around a board. We are not. We are free toads. Try to use us again and you will find my axe is not so friendly." },
            { characterKey: 'bowser', text: "MY army is fighting alongside these fanatics, and you're trying to start a THIRD army?! Made of TOADS?! Stop playing general, you three-eyed disaster, before you ruin everything!" },
            { characterKey: 'skull_cap_murphy', text: "Heh. I like this guy's style. Come join the Mushroom Skulls instead, little toads! We'll show ya real power." }
        ],
        eventId: 'archie_fiasco'
    }
];

export const ARCHIE_FIASCO_EVENT = {
    id: 'archie_fiasco',
    title: "Archie's Recruitment Fiasco",
    order: -1, // Newest event
    locationId: 'poi_mk_toadtown',
    description: "In a stunning lack of tactical awareness, anarchist Archie Miser publicly responded to Captain Toadette's post about her loyalty test. He criticized her methods and attempted to recruit her soldiers and the Liberated Toads into a rival 'army'. The move triggered a massive flame war, alienating nearly all of his allies and amusing his enemies.",
    attendees: [
        { characterKey: 'archie', host: true, justification: "Initiated the incident with a single, ill-advised post." },
        { characterKey: 'captain_toadette', justification: "Primary target of the insult; responded with cold fury." },
        { characterKey: 'liberated_toads', justification: "The target of the recruitment attempt; universally rejected the offer." },
        { characterKey: 'bowser', justification: "Archie's supposed ally; was infuriated by the attempt to create a rival army." },
    ],
    news_ids: [],
    post_ids: ['archie_recruitment_fiasco_post']
};
