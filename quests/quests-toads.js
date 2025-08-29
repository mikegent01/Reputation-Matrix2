// This file contains all side quests related to the Liberated Toads.
export const TOADS_QUESTS = {
    'toads_a_place_to_call_home': {
        id: 'toads_a_place_to_call_home',
        title: "A Place to Call Home",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads are a nomadic group, vulnerable to attack. They need to find and secure a permanent, defensible location to build a new home, 'Toad's Landing'.",
        assignee: "Liberated Toads",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Talk to Dan after he has established himself as a leader ('Hold a Council' focus).",
        steps: [
            { id: 'step1', title: "Scout Potential Locations", status: 'active', description: "Using the Vigilance for aerial reconnaissance, identify potential locations for a settlement. Eager will lead the scouting parties.", options: ["An abandoned Imperial watchtower.", "A hidden, fertile valley.", "A defensible cave system."] },
            { id: 'step2', title: "Clear the Dangers", status: 'locked', description: "The chosen location will not be uninhabited. Clear out any resident monsters, bandits, or hazards. Toad Lee will lead the assault." },
            { id: 'step3', title: "Found 'Toad's Landing'", status: 'locked', description: "With the location secured, begin construction on basic shelters, a well, and a palisade wall. Roger will oversee the logistics." }
        ]
    },
    'toads_first_harvest': {
        id: 'toads_first_harvest',
        title: "The First Harvest",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads need a stable food source to survive the coming season. They must find fertile ground, acquire seeds, and protect their first crops from the dangers of the world.",
        assignee: "Liberated Toads",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "This quest becomes available after founding 'Toad's Landing'.",
        steps: [
            { id: 'step1', title: "Find Arable Land", status: 'active', description: "Scout the area around Toad's Landing for a plot of land suitable for farming." },
            { id: 'step2', title: "Acquire Seeds", status: 'locked', description: "Seeds are scarce. The Toads must either trade with a nearby settlement, raid an abandoned farm, or find a cache of wild, edible plants.", options: ["Trade with the Mushroom Regency.", "Scavenge from the war-torn farmlands.", "Forage for wild seeds."] },
            { id: 'step3', title: "Protect the Crop", status: 'locked', description: "The growing crops will attract hungry wildlife and opportunistic bandits. The Toads must stand guard and protect their harvest until it's ready." }
        ]
    },
     'dan_rakasha_request': {
        id: 'dan_rakasha_request',
        title: "The Rakasha's Request",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Chief Thornpaw has sensed a corruption spreading from a nearby grove. He has asked Dan, as part of his training, to investigate and cleanse it.",
        assignee: "Dan",
        assigneeKey: 'markop', // Dan is an NPC, Markop is his guardian
        status: "available",
        start_condition: "Triggered after Dan begins his magical training with the Rakasha.",
        steps: [
            { id: 'step1', title: "Investigate the Whispering Grove", status: 'active', description: "Travel to the nearby grove and search for signs of the unnatural corruption Thornpaw spoke of." },
            { id: 'step2', title: "Identify the Source", status: 'locked', description: "Find the epicenter of the blight and determine what foul magic or creature is causing it." },
            { id: 'step3', title: "Perform the Cleansing Ritual", status: 'locked', description: "Using the teachings of the Rakasha, perform the ritual to purify the land and restore its balance." }
        ]
    },
    'dan_reclaim_the_staff': {
        id: 'dan_reclaim_the_staff',
        title: "The Staff's Burden",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Dan feels a deep connection to X.O.'s staff, the instrument of his victory. He believes its reality-bending power is too dangerous to be used as a simple battery for the Vigilance and seeks to reclaim it from Archie to protect it, or perhaps, to understand it better.",
        assignee: "Dan",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Dan sees the staff as both a symbol of his own newfound strength and a terrible danger. He feels a personal responsibility to ensure its power isn't misused, which puts him in direct conflict with Archie's pragmatic decision to use it to power the ship.",
        steps: [
            { id: 'step1', title: "A Question of Power", status: 'active', description: "Confront Archie about the staff's use. Dan must argue that the risk of the staff's magic corrupting the ship or attracting even more powerful enemies outweighs the benefit of having the Vigilance powered." },
            { id: 'step2', title: "An Alternative Source", status: 'locked', description: "To convince Archie, Dan must find a viable alternative power source for the Vigilance. This might involve trading with the Ratchet Raiders for a goblin-made engine or finding a stable arcane crystal." },
            { id: 'step3', title: "The Choice of a Hero", status: 'locked', description: "With the staff finally in his possession, Dan must decide what to do with it. Does he destroy it, hide it away, or attempt to learn to wield its power responsibly, risking the same corruption that took X.O.?" }
        ]
    },
    'dan_sword_and_spell': {
        id: 'dan_sword_and_spell',
        title: "The Sword and the Spell",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Dan feels pulled between his warrior training from Markop and his magical studies. He seeks to find a way to merge the two paths by finding the lost tomb of a legendary 'Spellsword' champion.",
        assignee: "Dan",
        assigneeKey: 'markop',
        status: "available",
        start_condition: "Dan reaches Level 3.",
        steps: [
            { id: 'step1', title: "Find the Tomb", status: 'active', description: "Research ancient legends to find the location of the Tomb of the Azure Knight, a warrior who perfectly blended swordplay and magic." },
            { id: 'step2', title: "Pass the Trials", status: 'locked', description: "The tomb is protected by trials that test both martial prowess and magical intellect. Dan must overcome them to prove his worth." },
            { id: 'step3', title: "Claim the Legacy", status: 'locked', description: "Claim the Azure Knight's enchanted blade, which allows the wielder to channel spells through their weapon strikes." }
        ]
    },
    'lee_firsts_legacy': {
        id: 'lee_firsts_legacy',
        title: "The First's Legacy",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Feeling overshadowed by Dan's magical destiny, Toad Lee seeks to prove his own worth as a warrior by taking on a dangerous mission alone: clearing out a nest of venomous Spidersaurs threatening Toad's Landing.",
        assignee: "Toad Lee",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "Toad Lee's identity is that of the protector, the first one who stood up. He needs to reaffirm that role and prove that brute strength and courage are just as valuable as flashy magic.",
        steps: [
            { id: 'step1', title: "The Lone Hunter", status: 'active', description: "Without telling the others, Toad Lee ventures into the nearby caves to hunt the Spidersaurs." },
            { id: 'step2', title: "The Broodmother", status: 'locked', description: "After clearing the lesser creatures, Toad Lee must face the massive Spidersaur Broodmother in a test of pure strength and endurance." }
        ]
    },
    'lee_axe_to_grind': {
        id: 'lee_axe_to_grind',
        title: "An Axe to Grind",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Toad Lee's axe is big but crudely made. He learns of a master Dwarven smith in the mountains of Middle Earth and seeks him out to have his weapon reforged into a true masterpiece.",
        assignee: "Toad Lee",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Toad Lee reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Mountain Forge", status: 'active', description: "Travel to the Dwarven forge and seek an audience with the legendary smith, Balin Stone-Shaper." },
            { id: 'step2', title: "A Worthy Price", status: 'locked', description: "Balin will not work for gold. Toad Lee must bring him a rare Adamantine nugget, found only in a dangerous, monster-infested mine." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Balin in the reforging, a process that requires both the smith's skill and the warrior's strength to complete." }
        ]
    },
    'eager_lost_caravan': {
        id: 'eager_lost_caravan',
        title: "The Lost Caravan",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Eager learns that a merchant caravan belonging to his family, which went missing years ago, was last seen in the treacherous Bandit's Pass. He wants to find the wreckage to recover a family heirloom and find peace.",
        assignee: "Eager",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "For Eager, this is about closure. He wants to know what happened to his family and recover the last memento he has of his past life before he was enslaved.",
        steps: [
            { id: 'step1', title: "Find Bandit's Pass", status: 'active', description: "Use old maps and underworld contacts to locate the infamous Bandit's Pass, now controlled by a ruthless gang of rogue mercenaries." },
            { id: 'step2', title: "The Ambush Site", status: 'locked', description: "Find the site of the ambush and the wreckage of the caravan, and piece together what happened." },
            { id: 'step3', title: "Recover the Locket", status: 'locked', description: "The heirloom, a simple silver locket, was taken by the bandit chief. Eager must infiltrate their camp and get it back." }
        ]
    },
    'eager_message_of_hope': {
        id: 'eager_message_of_hope',
        title: "A Message of Hope",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Believing other enslaved Toads exist, Eager wants to establish a secret 'Toadroad'—a network of hidden caches and coded messages to help others find their way to freedom at Toad's Landing.",
        assignee: "Eager",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Toad's Landing is established and secure.",
        steps: [
            { id: 'step1', title: "The First Post", status: 'active', description: "Establish the first dead-drop location in a nearby town with a known population of oppressed Toads." },
            { id: 'step2', title: "The Code", status: 'locked', description: "Develop a simple code, based on mushroom types, that can be used to pass messages without being deciphered by overlords." },
            { id: 'step3', title: "The First Escapee", status: 'locked', description: "A message is received! Eager must use the Toadroad to guide the first group of escaping toads safely to Toad's Landing." }
        ]
    },
    'ryan_glimmer_of_past': {
        id: 'ryan_glimmer_of_past',
        title: "A Glimmer of the Past",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Ryan's study of X.O.'s staff reveals a psychic echo within. He wants to perform a ritual to safely view the memories trapped inside, hoping to understand X.O.'s motivations.",
        assignee: "Ryan",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "Ryan's scholarly curiosity drives him. He believes that understanding an enemy is the first step to ensuring they can never rise again. He wants knowledge, not power, from the staff.",
        steps: [
            { id: 'step1', title: "The Ritual Components", status: 'active', description: "Gather the components for a 'psychometric resonance' ritual: a silver mirror, powdered dream-dust, and a magically attuned crystal." },
            { id: 'step2', title: "Perform the Ritual", status: 'locked', description: "Perform the dangerous ritual on the staff, opening a window into X.O.'s memories." },
            { id: 'step3', title: "The Vision", status: 'locked', description: "Witness a key memory from X.O.'s past that reveals her true motives and perhaps the source of her immense power." }
        ]
    },
    'ryan_unwritten_spell': {
        id: 'ryan_unwritten_spell',
        title: "The Unwritten Spell",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Ryan discovers a half-finished spellbook from a long-dead Mages' Guild Innovator. He believes he can complete the final, powerful spell, but it requires rare and dangerous components.",
        assignee: "Ryan",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Ryan reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Components", status: 'active', description: "Gather the three components for the spell: the tear of a ghost, the spark from a living storm, and a word of power spoken by a dragon." },
            { id: 'step2', title: "The Final Incantation", status: 'locked', description: "With the components gathered, Ryan must complete the spell's arcane matrix and attempt to cast it for the first time." }
        ]
    },
    'roger_one_last_job': {
        id: 'roger_one_last_job',
        title: "One Last Job",
        type: 'side',
        category: 'Liberated Toads',
        objective: "An old contact of Roger's from the Freelancer Underworld, a sly raccoon named 'Fingers', offers him a cut of a huge score: robbing a Regal Empire tax convoy. Roger is torn between his new life and the lure of a massive payday that could secure the Toads' future.",
        assignee: "Roger",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "Roger is a pragmatist. He sees the Toads struggling and believes this one heist could solve all their problems. It's a dangerous risk, but to him, it's a logical one.",
        steps: [
            { id: 'step1', title: "The Meeting", status: 'active', description: "Meet with 'Fingers' to get the details of the heist: the convoy's route, its defenses, and the potential payout." },
            { id: 'step2', title: "The Decision", status: 'locked', description: "Roger must decide whether to accept the job, and whether to tell the other Toads and the party about it.", options: ["Accept, and do it secretly.", "Accept, and try to convince the others to help.", "Refuse, and cut ties with his past."] }
        ]
    },
    'roger_a_better_bang': {
        id: 'roger_a_better_bang',
        title: "A Better Bang",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Roger's firearm is functional, but he's seen what real magitek weapons can do. He wants to find a Ratchet Raider gunsmith to upgrade his weapon with some serious, if unstable, firepower.",
        assignee: "Roger",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Roger witnesses a magitek weapon in action.",
        steps: [
            { id: 'step1', title: "The Gunsmith", status: 'active', description: "Find the workshop of 'Pip Klank-Sprocket', a goblin gunsmith known for her dangerously creative modifications." },
            { id: 'step2', title: "The Price of Power", status: 'locked', description: "Pip requires a rare power source for the upgrade: a still-sparking capacitor from a recently destroyed Imperial automaton." },
            { id: 'step3', title: "The Upgrade", status: 'locked', description: "Pip upgrades Roger's gun. It's now more powerful, but has a small chance to backfire spectacularly on any given shot." }
        ]
    },
    'bones_orcs_debt': {
        id: 'bones_orcs_debt',
        title: "The Orc's Debt",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Bones feels a debt of honor to the Orcs who kidnapped but ultimately spared him. He learns their clan is starving due to the war and decides to repay his debt by hijacking an Iron Legion supply convoy and delivering the food to them.",
        assignee: "Bones",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "Bones lives by a harsh, cynical code, and a debt is a debt. The Orcs showed him a strange kind of mercy, and he feels compelled to repay it in the only way he knows how: with violence directed at a common enemy.",
        steps: [
            { id: 'step1', title: "The Convoy", status: 'active', description: "Gather intelligence on an upcoming Iron Legion food convoy, including its route and guard detail." },
            { id: 'step2', title: "The Heist", status: 'locked', description: "Ambush the convoy and secure the supplies." },
            { id: 'step3', title: "The Delivery", status: 'locked', description: "Deliver the supplies to the Orc clan, an act that will certainly gain their respect, but also the ire of the Iron Legion." }
        ]
    },
    'bones_facing_the_mirror': {
        id: 'bones_facing_the_mirror',
        title: "Facing the Mirror",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Bones' grotesque appearance has made him an outcast his whole life. He hears a rumor of a magical spring in a fey-touched grove that is said to change a person's appearance to reflect their inner self. He seeks it out, both terrified and hopeful of what he might become.",
        assignee: "Bones",
        assigneeKey: 'full_party',
        status: "available",
        motivation: "This is a quest for self-acceptance. Bones has always been judged by his monstrous exterior. He wants to know, once and for all, if there is something different underneath, or if he truly is the monster everyone sees.",
        steps: [
            { id: 'step1', title: "The Whispering Grove", status: 'active', description: "Find the location of the legendary Grove of Reflection, a place where the barrier to the Feywild is thin." },
            { id: 'step2', title: "The Guardian's Riddle", status: 'locked', description: "The spring is guarded by a fey creature who will only grant access to those who can answer a riddle about the nature of identity and appearance." },
            { id: 'step3', title: "The Reflection", status: 'locked', description: "Drink from the spring and face the consequences, for better or worse." }
        ]
    },
};
