import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

export const WAHBOOK_POSTS = [
    {
        id: 'summit_pre_1',
        order: 21,
        characterKey: 'captain_toad',
        timestamp: '1 day ago',
        content: `Final preparations for the Democratic Summit are complete. This is a crucial moment for the Regency. Hoping for productive talks and new alliances. The security arrangements have been... stressful. Let's hope everything goes smoothly.`,
        likes: 310,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: "Your efforts are appreciated, Captain. The fate of the Kingdom may well rest on these talks." },
            { characterKey: 'queen_bean', text: "Looking forward to it, Captain! The Beanbean Kingdom stands with you." }
        ]
    },
    {
        id: 'summit_pre_2',
        order: 22,
        characterKey: 'lanky_kong',
        timestamp: '22 hours ago',
        content: `Headed to some big important meeting! They said I have to be on my best behavior. I'll try! Look at my new tie! It's a banana! 🍌 Heheheh.`,
        likes: 58,
        comments: [
            { characterKey: 'diddy_kong', text: "Lanky, just... please don't do anything weird." },
            { characterKey: 'donkey_kong', text: "He'll be fine. What's the worst that could happen?" }
        ]
    },
    {
        id: 'steelstorm_post_1',
        order: 10,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 week ago',
        content: "Imperial Law is not a suggestion. The individuals known as Green T and Lario are wanted for trial. The crew of the Vigilance has 24 standard hours to comply with Imperial Edict 77B-4. Order will be maintained.",
        likes: 152,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A lawful and necessary proclamation, Colonel. The Old Guard stands with you. There will be no deviation from the Hammer Code." },
            { characterKey: 'lario', text: "24 hours? I can strip an airship for parts in 6! You guys are slow. Also, do you pay for compliance? Asking for a friend." },
            { characterKey: 'ambassador_callista', text: "Colonel, perhaps a more... diplomatic approach would be prudent. This could escalate into an unfortunate international incident."}
        ],
        rumorId: 'iron_legion_ruse'
    },
    {
        id: 'waluigi_post_1',
        order: 8,
        characterKey: 'waluigi',
        timestamp: '1 week ago',
        content: "Some call it 'friendly fire'. I call it 'stylish crowd control'. WAH! The little frozen toad will thaw out eventually. Probably. He should be grateful he was part of my magnificent performance!",
        likes: 42,
        comments: [
            { characterKey: 'lario', text: "You left me to die, you purple cheat! And you froze one of the little guys! You're a menace!" },
            { characterKey: 'giggling_pete', text: "Magnificent! Freezing the small one was an unexpected punchline! The Jester applauds your commitment to beautiful, pointless chaos!" },
        ],
        rumorId: 'waluigi_friendly_fire'
    },
    {
        id: 'lario_post_1',
        order: 7,
        characterKey: 'lario',
        timestamp: '1 month ago',
        content: "This mysterious new client, 'Mr. Wario', pays well, but his demands are ridiculous! 'Needs more garlic!' 'Make it shinier!' Who does this guy think he is? At least his coin is good. Best not to ask questions.",
        likes: 88,
        comments: [
            { characterKey: 'captain_syrup', text: "You still owe me for that ship, you greasy little wrench-turner. I'll take payment in the form of your workshop." },
            { characterKey: 'detective_penny', text: "Interesting. A new, wealthy client? I'll be keeping an eye on your workshop, Lario. For 'business' purposes, of course." },
        ],
        rumorId: 'wario_escape'
    },
    {
        id: 'toadette_crusade_post',
        order: 36,
        characterKey: 'captain_toadette',
        timestamp: '55 minutes ago',
        content: "The reports from the so-called 'Gala' only strengthen my resolve. The Regency hobnobs with apes while monsters play with time itself. We are the ONLY ones fighting for true justice! For the Princess! Join the Loyalists today and fight for what's right!",
        likes: 241,
        comments: [
            { characterKey: 'generic_toad', text: "But the pay is better with the Regency Guard..." },
            { characterKey: 'mistveil', text: "For the Princess!" }
        ]
    },
    {
        id: 'lario_mr_wario_post',
        order: 37,
        characterKey: 'lario',
        timestamp: '48 minutes ago',
        content: "'Mr. Wario' now wants me to build a 'ghost-powered vacuum cleaner'. I swear, this guy gets weirder every day. Still, his coin is good. As long as he keeps paying, Lario keeps building! WAH-HA-HA... wait, that's not my laugh.",
        likes: 73,
        comments: [
            { characterKey: 'waluigi', text: "WAH! An imposter! There is only ONE magnificent laugh, and it is MINE!" },
        ]
    },
    {
        id: 'fawful_fury_post',
        order: 38,
        characterKey: 'fawful',
        timestamp: '30 minutes ago',
        content: "I HAVE FURY! The fools think they have seen my full genius? My gala was but an appetizer! The main course of my victory is yet to be served! It will have the chortles! And a side of doom!",
        likes: 712,
        comments: []
    },
    {
        id: 'penny_wario_clue',
        order: 39,
        characterKey: 'detective_penny',
        timestamp: '15 minutes ago',
        content: "My investigation into the mysterious 'Mr. Wario' continues. Found this strange, ectoplasmic residue at one of the old Wario Land warehouses. It smells faintly of garlic. Does anyone recognize this substance? #CaseOfTheGreedyGhost",
        image: 'clue.png',
        image_alt: "A blurry, close-up photo of a puddle of greenish, glowing goo on a warehouse floor.",
        likes: 198,
        comments: [
            { characterKey: 'master_goodstyle', text: "Disgusting. Whatever it is, it has no style." },
            { characterKey: 'fawful', text: "It is the goo of a fool! Not the goo of a genius, like my own magnificent goo!" }
        ]
    },
    ...WAHBOOK_INTEL_POSTS
];
