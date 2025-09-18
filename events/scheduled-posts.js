// This file contains WAHbook posts for scripted events that trigger on specific in-game dates.
// The assembly-events-data.js file will check the current game date and load these posts accordingly.

export const SCHEDULED_POSTS = [
    // --- MONTH 1: HARVESTIDE, 1040 ---
    {
        id: 'event_war_onyx_vs_fawful',
        order: 300,
        scheduledDate: { year: 1040, monthIndex: 7, day: 5 },
        characterKey: 'lord_crimson',
        timestamp: 'Harvestide 5th',
        content: `A formal declaration from the Onyx Hand: The green nuisance known as Fawful has defiled a site of royal significance. His chaotic rule is an insult to all true monarchies. For the sake of stability in the Mushroom Kingdom, we shall intervene. Consider this an eviction notice.`,
        likes: 850
    },
    {
        id: 'event_war_fawful_responds',
        order: 301,
        scheduledDate: { year: 1040, monthIndex: 7, day: 5 },
        characterKey: 'fawful',
        timestamp: 'Harvestide 5th',
        content: `I HAVE CHORTLES! The spooky, cape-wearing bores think they can evict ME?! Fawful?! My castle has the fury of a thousand angry beans! Their eviction notice will be returned... with extra scorching!`,
        likes: 999
    },
    {
        id: 'event_war_onyx_vs_regal',
        order: 302,
        scheduledDate: { year: 1040, monthIndex: 7, day: 10 },
        characterKey: 'wah_media_collective',
        timestamp: 'Harvestide 10th',
        content: `**SHOCKING BETRAYAL!** Onyx Hand forces have launched a surprise assault on Regal Empire positions across the southern Midlands, shattering the centuries-old truce. Imperial command was caught completely off-guard. Reports indicate rapid vampire advances.`,
        image: 'banners/onyx_hand_banner.png',
        likes: 2100
    },
    {
        id: 'event_war_koopa_vs_onyx',
        order: 303,
        scheduledDate: { year: 1040, monthIndex: 7, day: 20 },
        characterKey: 'bowser',
        timestamp: 'Harvestide 20th',
        content: `These vampire pests are getting in the way of MY conquest! The Mushroom Kingdom is MINE to conquer! I'm not letting a bunch of fanged weirdos steal my prize! KOOPA TROOP, SMASH!`,
        likes: 1850
    },

    // --- MONTH 2: AETHEL, 1040 ---
    {
        id: 'event_war_regal_retreat',
        order: 304,
        scheduledDate: { year: 1040, monthIndex: 8, day: 8 },
        characterKey: 'general_marcus_ironhand',
        timestamp: 'Aethel 8th',
        content: `A tactical withdrawal from Port Toadstool West has been executed to consolidate our forces at Ironwood Forest. The vampire's cowardly surprise attack has cost them their credibility, but it will not grant them victory. The Legion will adapt, and the traitors will be hammered into dust.`,
        likes: 1200
    },
    {
        id: 'event_war_moonfang_victory',
        order: 305,
        scheduledDate: { year: 1040, monthIndex: 8, day: 15 },
        characterKey: 'alpha_bloodmaw',
        timestamp: 'Aethel 15th',
        content: `The leeches thought they could hold our lands in Lockerwood. They were wrong. We have driven them from our forests. Let this be a warning. The wild cannot be tamed by the undead. AWOOOO!`,
        likes: 980
    },
    {
        id: 'event_war_onyx_invasion',
        order: 306,
        scheduledDate: { year: 1040, monthIndex: 8, day: 25 },
        characterKey: 'wah_media_collective',
        timestamp: 'Aethel 25th',
        content: `**INVASION!** Onyx Hand naval forces have launched a massive, two-pronged assault, landing troops simultaneously in the western Mushroom Kingdom and the embattled Lockerwood province. Reports indicate their forces have already reached the outskirts of Ironwood Forest. The war has escalated dramatically.`,
        image: 'newspaper_airship.png',
        likes: 3500
    },

    // --- MONTH 3: DARKMOON, 1040 ---
    {
        id: 'event_war_bowser_victory_mk',
        order: 307,
        scheduledDate: { year: 1040, monthIndex: 9, day: 10 },
        characterKey: 'bowser',
        timestamp: 'Darkmoon 10th',
        content: `GWAHAHAHA! The fanged freaks have been stomped out of the Mushroom Kingdom! They thought they could challenge ME on MY turf?! Pathetic! This is just a warm-up for when I take back what's mine!`,
        likes: 2200
    },
    {
        id: 'event_war_regal_encirclement',
        order: 308,
        scheduledDate: { year: 1040, monthIndex: 9, day: 20 },
        characterKey: 'colonel_vera_steelstorm',
        timestamp: 'Darkmoon 20th',
        content: `The vampire forces at Ironwood Forest are now completely encircled. Their supply lines are cut. Their reckless advance has become their tomb. It is now a matter of time. Order will be restored.`,
        likes: 1800
    },
    {
        id: 'event_war_regency_collapse',
        order: 309,
        scheduledDate: { year: 1040, monthIndex: 9, day: 28 },
        characterKey: 'wah_media_collective',
        timestamp: 'Darkmoon 28th',
        content: `**MUSHROOM KINGDOM COLLAPSES!** In a stunning turn of events, the combined pressure from Fawful's army and Bowser's resurgent forces has led to the complete collapse of both the Mushroom Regency and the Peach Loyalist military. Fawful and Bowser now stand as the two dominant powers in the war-torn kingdom.`,
        likes: 4100
    }
];
