
import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

export const WAHBOOK_POSTS = [
    {
        id: 'archie_jumped_on_ship',
        order: 162,
        characterKey: 'archie',
        timestamp: 'Just now',
        content: `So, I was just minding my own business, admiring the structural integrity of a ventilation shaft, when I got jumped by a group of Iron Hand... or was it Iron Legion?... goons. Same difference, right? Stuffed shirts with big hammers. 

They were going on about "stories of the third eye" which, okay, flattering. But the weird part? One of them kept muttering about wanting "Toad Soup." Seriously. On a spaceship. Weirdos.`,
        likes: 184,
        comments: [
            { characterKey: 'toad_lee', text: "Toad Soup? We will not allow any harm to come to our people. Stay vigilant, brothers." },
            { characterKey: 'general_marcus_ironhand', text: "The Iron LEGION does not employ 'goons.' Our soldiers are disciplined warriors. If this incident occurred, it was not by my command or the action of my men. Perhaps you are confusing us with common street thugs." },
            { characterKey: 'boss_knuckles', text: "You mean the Iron FISTS, you three-eyed freak. And that wasn't a story, it was a down payment. Next time, we're collecting more than just stories. The bounty on your head is still active." },
            { characterKey: 'dan', text: "Archie, are you okay? That sounds terrifying." }
        ]
    },
    {
        id: 'waluigi_toad_focus_update',
        order: 161,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: `WAH! HEY, THREE-EYES (@Archie)! An update on your little mushroom projects!

That hero-kid, **Dan**, held a 'council'. So important! He's their little leader now, making them feel all hopeful. The big one, **Toad Lee**, has been teaching them how to hold an axe without chopping their own feet off. Progress!

The quiet one, **Ryan**, is making sparks with his fingers. He calls it 'magic practice'. Cute. The jumpy one, **Eager**, ran around and drew a map of the cargo bay. Probably on a napkin.

The one with the gun, **Roger**, has organized all their junk into neat little piles. He calls it a 'barter system'. At least he's not losing their only wrench. And the ugly one, **Bones**, is teaching them card games. A useful skill! They might learn how to cheat, which is even better!

They're getting organized. This could be useful for my magnificent plans! WAH-HA-HA!`,
        likes: 123,
        comments: [
            { characterKey: 'dan', text: "We're not projects! We're building a community and a new life for ourselves!" }
        ]
    },
    {
        id: 'standoff_at_capital_news',
        order: 160,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**STANDOFF IN THE SKIES! Regal Empire Forces Board Rogue Airship 'Vigilance' Over Capital! High-Profile Arrests Made!**

A tense standoff concluded today as the rogue airship 'Vigilance' was boarded by Regal Empire forces, identified as elite Crown Intelligence agents. The operation, which took place in the skies directly over the Imperial Capital, resulted in the capture of the notorious smuggler 'Mr. Wario' and the surprising surrender of the anarchist Archie Miser. 

Eyewitness reports from the ship are chaotic, detailing a fierce firefight, the brief appearance of the pirate Captain Syrup, and a struggle over the airship's powerful, artifact-based power source. The 'Vigilance' has since landed at the capital's military spaceport and is currently under heavy guard. The fate of its renegade crew remains uncertain.`,
        image: 'newspaper_airship.png',
        image_alt: "The Vigilance airship surrounded by smaller Imperial vessels.",
        likes: 1854,
        comments: [
            { characterKey: 'generic_toad', text: "Finally! Maybe now we can have some peace and quiet!" },
            { characterKey: 'the_broker', text: "Several high-value assets just went off the board. This will have... interesting effects on the market." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'steelstorm_standoff_post',
        order: 159,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '2 hours ago',
        content: "A successful joint operation between Crown Intelligence and the Iron Legion has neutralized a significant threat over the capital. Key assets were secured, and several high-value targets, including the anarchist Archie Miser and the smuggler 'Mr. Wario', are in custody. Order will be maintained.",
        likes: 562,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A victory for the Empire. Let chaos reign no more." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'waluigi_iron_binding_post',
        order: 158,
        characterKey: 'waluigi',
        timestamp: '4 hours ago',
        content: "WAH! These Iron Legion goons! No style! They slap some rusty magic on my ship's power source and call it 'tactics'? It's a cheap parlor trick! It's like putting a bumper sticker on a masterpiece! An insult to my genius!",
        likes: 210,
        comments: [
            { characterKey: 'lario', text: "Hey! I could have fixed it better! And for a reasonable price!" }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'syrup_standoff_post',
        order: 157,
        characterKey: 'captain_syrup',
        timestamp: '6 hours ago',
        content: "Got my hands on the famous staff for a moment. All that fuss for a glorified glowstick that doesn't even work! And then those tin soldiers slap their ugly binding on it. Amateurs. The real prize was the chaos anyway.",
        likes: 315,
        comments: [
            { characterKey: 'first_mate_jones', text: "We'll find a better prize, Captain. We always do." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'toadette_post_3',
        order: 150,
        characterKey: 'captain_toadette',
        timestamp: 'Just now',
        content: `The Onyx Hand's shadow assassins have done what the Regency was too weak to do. The mayor was corrupt, a rot at the heart of our kingdom. With him gone, we have seized this moment. Toad Town is now under Loyalist control. This is not an occupation; it is a liberation. From here, we will build our base and begin the true war. For the Princess!`,
        likes: 412,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess! Whatever it takes." },
            { characterKey: 'chancellor_toadsworth', text: "Captain! You are taking advantage of a murder to impose martial law! This is madness!" }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'embercap_post_1',
        order: 149,
        characterKey: 'embercap',
        timestamp: '1 hour ago',
        content: `I had my doubts. I questioned the path. But I have seen the depths of the betrayal we face. The enemy wears a friendly smile and offers you a potion before trying to steal your king. There is no room for half-measures. Captain Toadette is right. The path to justice is hard, but we will walk it. We will be the ones to end this.`,
        likes: 355,
        comments: [
            { characterKey: 'dewdrop', text: "A hard path, brother, but a necessary one. We will tend to the wounds, you lead the charge." },
            { characterKey: 'chief_thornpaw', text: "I witnessed your death and your return, young soldier. The path you now walk is heavy with the scent of both steel and sorrow. Tread carefully." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'toadtown_citizen_post_1',
        order: 148,
        characterKey: 'generic_toad',
        timestamp: '3 hours ago',
        content: `The mayor is dead... murdered in his own home! Now there are Loyalist soldiers everywhere, talking about 'relocation'. What's happening to our town? I don't feel safe anymore. Who is in charge?`,
        likes: 620,
        comments: [
            { characterKey: 'dan', text: "Stay strong. Communities have to look after each other when leaders fail." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'kamek_post_toadtown',
        order: 147,
        characterKey: 'kamek',
        timestamp: '5 hours ago',
        content: `The mushrooms are devouring each other. Fanatics versus bureaucrats, assassins in the shadows... it's a delightful spectacle. Let them bleed each other white. It will only make Lord Bowser's glorious return all the easier. Patience is a virtue.`,
        likes: 290,
        comments: [
            { characterKey: 'bowser', text: "Excellent. Let the appetizers fight amongst themselves." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'janna_post_spellbook',
        order: 146,
        characterKey: 'janna_brightspark',
        timestamp: '8 hours ago',
        content: `Fascinating! A spellbook containing a variant of a soul-binding ritual, linked to the Onyx Hand, was recovered from the Toad Town incident. And the caster was a MAGE! The Conservators will be furious, but the data from this political application of advanced puppetry is invaluable! What a time to be alive!`,
        likes: 188,
        comments: [
            { characterKey: 'archmage_theron', text: "Janna, this is not 'data'. This is a grave breach of the Accords and a profound threat to stability. The Aegis Magi have been notified." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'cranky_post_2',
        order: 145,
        characterKey: 'cranky_kong',
        timestamp: '1 day ago',
        content: `Good grief! Now every Tom, Dick, and three-eyed weirdo has an opinion on Kong family matters! Back in my day, we didn't post our problems on the WAH-whatever, we threw barrels at them until they went away! A much better system!`,
        likes: 420,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'dk_post_2',
        order: 144,
        characterKey: 'donkey_kong',
        timestamp: '1 day ago',
        content: `Family business is family business. And right now, business is giving me a migraine. Outsiders should remember that we solve our own problems. The Kong way.`,
        likes: 550,
        comments: [
            { characterKey: 'chunky_kong', text: "I'm trying, DK." },
            { characterKey: 'king_k_rool', text: "Sounds like there's weakness in the ranks. Good to know." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'diddy_post_2',
        order: 143,
        characterKey: 'diddy_kong',
        timestamp: '1 day ago',
        content: `And now the three-eyed freak thinks this is a joke too? Stay out of Kong family business, you walking talking powder keg.`,
        likes: 315,
        comments: [
            { "characterKey": "archie", "text": "Just trying to lighten the mood! Sheesh." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'archie_post_ride',
        order: 142,
        characterKey: 'archie',
        timestamp: '2 days ago',
        content: `Hello everyone, quite the bumpy ride wasn't it? How is everyone holding up?`,
        likes: 218,
        comments: [
            { characterKey: 'remi', text: "Is... is it always like this? Just asking for a friend." },
            { characterKey: 'lario', text: "Holding up?! I'm holding a wrench and a grudge! That purple cheat left me for dead!" },
            { characterKey: 'dan', text: "A little shaken, but we're free. That's what matters. We're all still here." },
            { characterKey: 'bowser', text: "Bumpy? GWAHAHA! That's how I like it! A little chaos keeps everyone on their toes!" },
            { characterKey: 'waluigi', text: "Bumpy? That was a magnificent performance! A true work of art! You're welcome, everyone! WAH!" },
            { characterKey: 'fawful', text: "YOUR BUMPY RIDE IS A MERE PUDDLE OF DISCOMFORT NEXT TO THE OCEAN OF MY FURY! I HAVE BUMPINESS!" }
        ]
    },
    {
        id: 'cranky_post_1',
        order: 140,
        characterKey: 'cranky_kong',
        timestamp: '3 days ago',
        content: `Back in my day, we didn't have 'diplomatic incidents'. We had coconut guns. Solved problems a lot faster. This whole summit was a waste of good bananas. And Lanky... don't get me started on that good-for-nothing slacker!`,
        likes: 350,
        comments: [
            { characterKey: 'donkey_kong', text: "He's still family, Cranky." },
            { characterKey: 'diddy_kong', text: "Cranky's right, DK. Family or not, he's a liability." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'leoncoeur_post_1',
        order: 139,
        characterKey: 'king_louen_leoncoeur',
        timestamp: '3 days ago',
        content: `I must confess, the recent 'summit' was a disheartening display. To see diplomacy devolve into such buffoonery is a sad day for all civilized realms. Where is the honor? Where is the chivalry? It seems in short supply in these lands.`,
        likes: 410,
        comments: [
            { characterKey: 'captain_toadette', text: "Honor is found on the battlefield, not in a talking shop with apes and monsters." },
            { characterKey: 'ambassador_callista', text: "A most unfortunate incident, your Majesty. I assure you it is not representative of all diplomatic efforts in this region." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'kamek_post_1',
        order: 138,
        characterKey: 'kamek',
        timestamp: '4 days ago',
        content: `The pieces are moving on the board. While the lesser factions squabble over castles and politics, the true game is being played in the shadows. The King's will shall be done. A storm is gathering...`,
        likes: 275,
        comments: [
            { characterKey: 'bowser', text: "Excellent work, Kamek. Keep me updated. And make sure the storm has lots of lightning!" },
            { characterKey: 'the_broker', text: "Storms are good for business. They create opportunities." }
        ]
    },
     {
        id: 'toadette_post_2',
        order: 137,
        characterKey: 'captain_toadette',
        timestamp: '4 days ago',
        content: `The Regency falters! Fawful's madness defiles our sacred castle! Only the Peach Loyalists have the strength and the will to restore justice! Do not be swayed by the weak-willed words of politicians! Take up arms! For the Princess!`,
        likes: 388,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess!" },
            { characterKey: 'chancellor_toadsworth', text: "Captain Toadette, your zealotry is creating more division, not less! We must be united!" }
        ]
    },
    {
        id: 'waluigi_post_2',
        order: 136,
        characterKey: 'waluigi',
        timestamp: '1 day ago',
        content: `WAH! Some people call it 'chaos'. I call it 'art'! The world is my canvas, and my paintbrush is a well-thrown Bob-omb! All you boring people with your 'plans' and 'order'... you just don't appreciate true genius!`,
        likes: 999,
        comments: [
            { characterKey: 'giggling_pete', text: "A masterpiece of a metaphor! The Jester applauds your stylish entropy!" }
        ]
    },
    {
        id: 'steelstorm_post_2',
        order: 135,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 day ago',
        content: `Victory is not achieved through tradition; it is achieved through efficiency. While the Old Guard debates protocol, the War-Forged act. Results are the only metric that matters on the battlefield. Adapt or be broken.`,
        likes: 388,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "Discipline IS efficiency, Colonel. Do not mistake reckless action for progress. The Hammer Code has guided us for a thousand years for a reason." }
        ]
    },
    {
        id: 'dan_post_freedom',
        order: 134,
        characterKey: 'dan',
        timestamp: '1 day ago',
        content: `Every day of freedom feels like a gift. Learning the ways of the Rakasha is difficult, but Chief Thornpaw is a patient teacher. I will become strong enough to protect my friends and ensure no toad has to suffer like we did.`,
        likes: 621,
        comments: [
            { characterKey: 'toad_lee', text: "And you will have my axe to guard your back. Always." },
            { characterKey: 'archie', text: "That's the spirit! Go forth and become a symbol of freedom for all the enslaved toads out there." }
        ]
    },
    {
        id: 'bowser_post_recruiting',
        order: 133,
        characterKey: 'bowser',
        timestamp: '1 day ago',
        content: `The Koopa Troop is scattered, but not broken! Soon, I will reunite my armies under one glorious banner! We will crush the tin-can soldiers of the Legion and the mushroom-headed fools of the Regency! The world will tremble before the might of King Bowser once more! GWAHAHAHA!`,
        likes: 815,
        comments: [
            { characterKey: 'kamek', text: "An inspiring proclamation, your Viciousness! The remnants await your command." },
            { characterKey: 'generic_toad', text: "Oh no, not again..." }
        ]
    },
    {
        id: 'guild_post_gryphon_1',
        order: 132,
        characterKey: 'commander_valerius',
        timestamp: '1 day ago',
        content: `**OPEN CONTRACT:** The Gilded Gryphon Mercenary Company is now accepting applications for caravan guard duty on the Great Imperial Road. High pay, high risk. Must provide your own standard-issue sidearm and have a clean service record. Amateurs need not apply. Payment upon completion.`,
        likes: 412,
        comments: [
            { characterKey: 'donkey_kong', text: "Good pay? Does that mean bananas? DK needs to know." },
            { characterKey: 'lario', text: "High pay? I'll bring my own tools. And a bigger bag for my cut. WAH-ha-ha... wait." }
        ],
        groupId: 'gilded_gryphon'
    },
    {
        id: 'guild_post_wayfinders_1',
        order: 131,
        characterKey: 'high_cartographer_elara',
        timestamp: '2 days ago',
        content: `A notice from the High Cartographer: An expedition is being planned to chart the shifting coastlines of the Triple Moon World. Experienced navigators and warriors are encouraged to apply at the Horizon Spire. High risk, high reward.`,
        likes: 350,
        comments: [
            { characterKey: 'captain_zipwire', text: "Shifting coastlines? Sounds dangerous! And profitable! Where do I sign up?"}
        ],
        groupId: 'wayfinders_guild'
    },
    {
        id: 'guild_post_aegis_1',
        order: 125,
        characterKey: 'battle_mage_kovar',
        timestamp: '3 days ago',
        content: `A reminder to all sanctioned practitioners: The Autumnwood Accords are not suggestions. All research into reality-bending or chronomantic magic is strictly forbidden without a permit from the Conclave. The Aegis Magi will enforce this with extreme prejudice. Do not test us.`,
        likes: 630,
        comments: [
            { characterKey: 'janna_brightspark', text: "Fear of progress is what holds this Guild back. How can we learn if we do not experiment?" },
            { characterKey: 'archmage_theron', text: "A necessary and prudent warning, Battle-Mage. Order must be maintained." }
        ],
        groupId: 'aegis_magi'
    },
    {
        id: 'guild_post_azure_1',
        order: 110,
        characterKey: 'azure_prime',
        timestamp: '1 week ago',
        content: `**BOUNTY POSTED:** A charter has been issued for the capture of the pirate 'Cutlass' Kael, last seen operating near the Ludor Isles. Wanted for piracy, smuggling, and tax evasion. Dead or alive. Contact your local chapterhouse for details.`,
        likes: 780,
        comments: [
            { characterKey: 'captain_syrup', text: "Kael? He's small fry. But his ship has some nice cannons..." },
            { characterKey: 'the_broker', text: "His last known location can be provided... for a price." }
        ],
        groupId: 'azure_blade_bounty_hunters'
    },
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
