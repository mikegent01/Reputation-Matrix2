// This file contains all of Humpik's personal quests.
export const HUMPIK_QUESTS = {
    'humpik_honor_quest': {
        id: 'humpik_honor_quest',
        title: "The Honor of the Shell",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Iron Legion's elite mock Humpik for his 'barbaric' refusal of a duel, tarnishing the Koopa Troop's name. To restore his and the Koopa Troop's honor, Humpik must seek out a renowned Legion champion and defeat them in a formal, sanctioned duel.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik's identity is tied to his strength and the reputation of the Koopa Troop. The Legion's insults are not just personal; they are an attack on his ally and his people. He feels compelled to prove, in their own rigid way, that Koopa might is disciplined and honorable.",
        steps: [
            { id: 'step1', title: "Identify a Worthy Champion", status: 'active', description: "The most respected duelist among the Legion's progressive 'War-Forged' faction is Colonel Vera Steelstorm. Use underworld contacts or military intelligence to pinpoint her current location on the Midlands front." },
            { id: 'step2', title: "Issue a Formal Challenge", status: 'locked', description: "The Legion follows strict protocols for challenges of honor. Humpik must present a formal, written challenge to Colonel Steelstorm, adhering to their traditions to prove he is not a mere savage.", options: ["Consult with Markop on the proper etiquette.", "Bribe a Freelancer to draft the challenge.", "Just roar really loud and hope for the best."] },
            { id: 'step3', title: "The Gauntlet of Cinders", status: 'locked', description: "Steelstorm agrees to the duel, but only if Humpik can first prove his mettle by surviving the Legion's infamous training ground—a field of deadly traps, automated war machines, and scorching hazards." },
            { id: 'step4', title: "Duel of Fates", status: 'locked', description: "Face Colonel Vera Steelstorm in a one-on-one, sanctioned duel. The outcome will dramatically shift the Iron Legion's perception of the Koopa Troop and their new allies." }
        ]
    },
    'humpik_great_feast': {
        id: 'humpik_great_feast',
        title: "The Great Feast",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Hunt the legendary Titan-Turtle of the Whispering Marshes, whose shell is said to be impenetrable and whose meat, when cooked, grants temporary invincibility.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "For Humpik, this is the ultimate challenge. It's a test of strength against a legendary beast, and the reward is not just a trophy, but a feast that will be sung about in the Koopa war chants for generations.",
        steps: [
            { id: 'step1', title: "Find the Lair", status: 'active', description: "Track the Titan-Turtle to its hidden lair deep within the treacherous Whispering Marshes, a place known for its toxic fumes and aggressive flora." },
            { id: 'step2', title: "The Unbreakable Shell", status: 'locked', description: "The Titan-Turtle's shell is immune to all normal attacks. Humpik must find a weak point or an environmental hazard to crack it." },
            { id: 'step3', title: "The Feast of Champions", status: 'locked', description: "With the beast slain, Humpik must transport the massive carcass back to the Koopa Troop remnants and hold a feast to boost their morale and grant them its power for the next battle." }
        ]
    },
    'humpik_proper_waaagh': {
        id: 'humpik_proper_waaagh',
        title: "A Proper WAAAGH!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Koopa remnants are demoralized. Humpik decides the only cure is a good, old-fashioned, large-scale assault on a well-defended enemy position to remind them of their strength.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik believes that the soul of an army is found in battle. He wants to reignite the Koopa Troop's fighting spirit with a glorious, head-on charge against an impossible-looking target.",
        steps: [
            { id: 'step1', title: "Pick a Target", status: 'active', description: "Identify a suitable target for the assault, such as a fortified Peach Loyalist forward base or a major Toad Gang fortress." },
            { id: 'step2', title: "Rally the Troops", status: 'locked', description: "Give a series of loud, inspiring speeches, and lead by example in a few smaller skirmishes to get the Koopa Troop's blood pumping." },
            { id: 'step3', title: "Unleash the WAAAGH!", status: 'locked', description: "Lead the full-scale assault, focusing on overwhelming force and pure aggression to shatter the enemy's morale and claim victory." }
        ]
    },
    'humpik_waaaghluigi_axe': {
        id: 'humpik_waaaghluigi_axe',
        title: "The WAAAGH!-luigi Axe",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik wants an upgrade for his axe and commissions Lario to build the ultimate magitek weapon. Waluigi, seeing an opportunity for chaos, secretly 'improves' the design, turning it into a dangerously unpredictable artifact.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik desires a bigger, better axe. He hears Lario is the best mechanic for weird tech. Waluigi sees an opportunity to sow chaos, test a new invention, and annoy Lario, all at once.",
        steps: [
            { id: 'step1', title: "A Worthy Commission", status: 'active', description: "Gather a ridiculously large pile of high-quality scrap metal and a rare power source (like a capacitor from a downed Iron Legion walker) to pay Lario for the job." },
            { id: 'step2', title: "Waluigi's 'Help'", status: 'locked', description: "Waluigi secretly breaks into Lario's workshop and installs a 'Chaos Drive' into the axe's power matrix, claiming it will make it 'more flashy'." },
            { id: 'step3', title: "The Field Test", status: 'locked', description: "Lario, unaware of the sabotage, presents Humpik with the 'WAAAGH!-luigi Axe.' During its first field test, the axe proves to be incredibly powerful but also wildly unpredictable, randomly teleporting, changing size, or shouting 'WAH!'." }
        ]
    },
    'humpik_rivals_respect': {
        id: 'humpik_rivals_respect',
        title: "A Rival's Respect",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik clashes with Embercap, a particularly tough and resilient Toad soldier from the Peach Loyalists. Impressed by his courage, Humpik seeks him out for a non-lethal sparring match to test his mettle.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik respects strength and courage, regardless of the uniform. He sees a fellow warrior in Embercap and wishes to test his skills against him in a battle of pure strength, free from the politics of the war.",
        steps: [
            { id: 'step1', title: "The Challenge", status: 'active', description: "Find Embercap and issue a challenge for a duel of honor during a lull in the fighting, with the condition that it is a non-lethal match to first blood." },
            { id: 'step2', title: "The Duel", status: 'locked', description: "Meet Embercap at the agreed-upon location and engage in a one-on-one sparring match." },
            { id: 'step3', title: "A Moment of Understanding", status: 'locked', description: "Regardless of the outcome, the duel fosters a grudging respect between the two warriors, potentially opening a new, unofficial line of communication between the Koopa remnants and the Loyalists." }
        ]
    },
    'humpik_training_day': {
        id: 'humpik_training_day',
        title: "Training Day",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik notices the Liberated Toads are brave but undisciplined. He takes it upon himself to teach them the 'Koopa Way' of fighting: head down, charge hard.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees potential in the little guys and wants to help his allies. He believes his direct, no-nonsense training methods are exactly what they need to survive.",
        steps: [
            { id: 'step1', title: "The 'Lecture'", status: 'active', description: "Gather the toads for a 'lecture' which is mostly just Humpik shouting encouragement and demonstrating how to properly smash a training dummy." },
            { id: 'step2', title: "Live Fire Exercise", status: 'locked', description: "Take the trained toads on a mission to clear out a den of weak but numerous monsters to test their new skills." }
        ]
    },
    'humpik_loudest_roar': {
        id: 'humpik_loudest_roar',
        title: "The Loudest Roar",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik hears of the 'Roaring Peaks,' mountains that are said to echo a warrior's shout with the force of a landslide. He goes there to prove he has the loudest, most powerful roar in the world.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A simple, pure test of power. For Humpik, this is a spiritual journey to prove his own might against the very mountains themselves.",
        steps: [
            { id: 'step1', title: "The Climb", status: 'active', description: "Ascend the treacherous Roaring Peaks." },
            { id: 'step2', title: "The Echo", status: 'locked', description: "Unleash a roar so powerful it causes a minor avalanche, which conveniently blocks the path of a pursuing Iron Legion patrol." }
        ]
    },
    'humpik_scrap_heap_scramble': {
        id: 'humpik_scrap_heap_scramble',
        title: "The Scrap-Heap Scramble",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Lario is hosting a gladiatorial tournament in Wario City to attract clients. Humpik enters to prove he's the strongest, only to find the final round is against Lario's newest battle robot, with Waluigi running a crooked betting pool.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik hears of a tournament for the strongest fighters and must enter to uphold his and Bowser's honor.",
        steps: [
            { id: 'step1', title: "The Buy-In", status: 'active', description: "Enter the tournament by defeating one of the Iron Fists' enforcers, 'Iron Mike', in a preliminary match." },
            { id: 'step2', title: "The Bracket", status: 'locked', description: "Fight through a series of increasingly bizarre opponents in Lario's scrap-heap arena, from cybernetically enhanced Goombas to a rogue cleaning drone with saw blades." },
            { id: 'step3', title: "The Main Event", status: 'locked', description: "Face the final champion: The 'Wario-bot 9000'. During the fight, Humpik must also deal with Waluigi's attempts to cheat from the sidelines (e.g., dropping banana peels, using magnets)." }
        ]
    },
    'humpik_no_more_talk': {
        id: 'humpik_no_more_talk',
        title: "No More Talk!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik grows tired of a preening Imperial diplomat who has been stalling negotiations with Bowser. He decides to solve the diplomatic impasse his own way.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees the diplomat's endless talking as a sign of weakness and disrespect. He believes a direct, physical demonstration of Koopa strength is the best way to speed things up.",
        steps: [
            { id: 'step1', title: "The 'Negotiation'", status: 'active', description: "Crash the diplomatic meeting." },
            { id: 'step2', title: "The 'Counter-Offer'", status: 'locked', description: "Smash the negotiating table in half. The diplomat will suddenly become much more agreeable." }
        ]
    },
    'humpik_chef_challenge': {
        id: 'humpik_chef_challenge',
        title: "The Chef's Challenge",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "A famously arrogant chef in a neutral city claims he can cook any ingredient in the world. Humpik takes this as a personal challenge and decides to bring him the most dangerous, hard-to-acquire meat he can find.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik appreciates a good meal and respects skill. This is a quest born of a love for food and a desire to see if the fancy chef can back up his big talk.",
        steps: [
            { id: 'step1', title: "The Ingredient", status: 'active', description: "Hunt and kill a Basilisk from the petrified forests, a creature whose gaze can turn you to stone." },
            { id: 'step2', title: "The Presentation", status: 'locked', description: "Deliver the Basilisk carcass to the chef and challenge him to cook it." }
        ]
    },
    'humpik_rescue_mission': {
        id: 'humpik_rescue_mission',
        title: "Koopa Rescue Mission",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik learns a small squad of Koopa Troopas has been captured by the Peach Loyalists. He decides to launch a solo rescue mission to get them back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Loyalty. The Koopa Troop leaves no one behind. Humpik feels a personal duty to rescue his captured comrades.",
        steps: [
            { id: 'step1', title: "Locate the Prison", status: 'active', description: "Find the Loyalist-controlled prison camp where the troopas are being held." },
            { id: 'step2', title: "The Breakout", status: 'locked', description: "Create a massive diversion (likely involving smashing a wall) and free the captured Koopas." }
        ]
    },
    'humpik_lost_helmet': {
        id: 'humpik_lost_helmet',
        title: "The Lost Helmet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik lost his favorite horned helmet. It has sentimental value. He wants it back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "It's his favorite helmet. Simple as that.",
        steps: [
            { id: 'step1', title: "Retrace Your Steps", status: 'active', description: "Return to the last battlefield and search for the helmet." },
            { id: 'step2', title: "The New Owner", status: 'locked', description: "Discover that a particularly smug Goomba has found the helmet and is now wearing it, declaring himself 'King Goomba'. Convince him to return it." }
        ]
    },
    'humpik_pet_rock': {
        id: 'humpik_pet_rock',
        title: "Humpik's Pet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik finds a very large, nicely shaped rock. He decides it's his new pet, 'Rocky'. He now needs to build a suitable home for it on the Vigilance.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik is a simple soul who has found a simple friend. He wants to care for it.",
        steps: [
            { id: 'step1', title: "The Rock", status: 'active', description: "Find the perfect rock." },
            { id: 'step2', title: "The Nest", status: 'locked', description: "Build a comfortable nest for Rocky in the corner of the cargo bay, using soft materials like captured enemy uniforms." }
        ]
    },
    'humpik_gulp_shroom_getaway': {
        id: 'humpik_gulp_shroom_getaway',
        title: "The Gulp-Shroom Getaway",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Waluigi tricks Humpik into creating a diversion at Lario's workshop with the promise of finding a legendary, delicious 'Gulp-Shroom', allowing Waluigi to steal a valuable power core.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "The promise of the ultimate drink is enough for Humpik. He will follow Waluigi's 'plan' to get it.",
        steps: [
            { id: 'step1', title: "The 'Map'", status: 'active', description: "Waluigi gives Humpik a fake map and tells him the 'real' map is in a safe in Lario's workshop. Humpik's direct approach (smashing the wall) creates the perfect diversion for Waluigi." },
            { id: 'step2', title: "The Fungus Hunt", status: 'locked', description: "The stolen map leads Humpik on a wild goose chase through a swamp filled with aggressive flora, while Waluigi makes off with the real prize." },
            { id: 'step3', title: "The 'Reward'", status: 'locked', description: "Humpik finds a large, strange-looking mushroom. It's not the Gulp-Shroom, but when Waluigi meets him to share it, it has... unpredictable side effects (e.g., temporary flight, turning purple)." }
        ]
    },
    'humpik_no_like_spiders': {
        id: 'humpik_no_like_spiders',
        title: "Humpik No Like Spiders",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik discovers a nest of giant spiders in the lower decks of the Vigilance. He does not like them. They must go.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A deep-seated, personal dislike of spiders.",
        steps: [
            { id: 'step1', title: "Find Nest", status: 'active', description: "Track the spiders to their nest in the ventilation system." },
            { id: 'step2', title: "Smash Nest", status: 'locked', description: "Apply axe liberally to the nest and its inhabitants." }
        ]
    }
};