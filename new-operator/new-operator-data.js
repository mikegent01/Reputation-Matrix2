// This file contains Waluigi's unique commentary and all data for the New Operator creation flow.

export const WALUIGI_INTRO_TEXT = [
    "INITIATING NEW OPERATOR PROTOCOL...",
    "ACCESSING... VIGILANCE_TERMINAL_WAH_EDITION_v4.2...",
    "SUCCESS!",
    "---",
    "WAH! So, you're the new blood, huh? Listen up! You've stumbled into the middle of my magnificent, chaotic world, and you're flying on my glorious airship, the 'Vigilance'!",
    "This world is a mess! The Mushroom Kingdom is having a civil war because their princess kicked the bucket. The big, shiny Regal Empire is trying to 'fix' everything with their boring 'order'.",
    "And everyone else? Vampires, werewolves, wizards, pirates... they're all fighting for their pathetic little piece of the pie.",
    "But ME, the great Waluigi, I see the big picture! This chaos? It's a masterpiece! And you're my newest paintbrush.",
    "So, tell me who you are. Don't be boring, or I'll replace you with a more interesting-looking rock!",
    "LET'S-A-GO! WAH-HA-HA!",
    "---",
    "LOADING CHARACTER CREATION MODULE..."
];


export const WALUIGI_REGION_TIPS = {
    // Mushroom Kingdom Regions
    'Mushroom Kingdom': "WAH! The main mushroom place! Full of boring Toads and a broken government. Perfect for a little chaos!",
    
    // The Midlands
    'The Midlands': "The big, shiny Empire! So full of itself! They have lots of valuable things to... 'borrow'. And their stuffy nobles are fun to prank!",

    // Other Dimensions
    'The Internet': "A crazy place made of lights and noise! It's like my brain, but with more cats! Full of secrets and weirdos! My kind of place!",
    'Middle-earth': "Full of pointy-eared snobs and grumpy short guys. They take everything so seriously! They need a good WAH-ck upside the head!",
    'The Fated Place': "WAH-HAMMER! Big guys with big armor hitting each other! It's great! So much fighting, so much to gain from the chaos! My favorite!",
    'Kivotos': "A city of schools where everyone has guns! It's beautiful! So many delinquents to hire for my magnificent schemes!",
    'The Doughnut Hole': "The best place in the universe! It's pure, beautiful chaos! You can do anything here! It's where I do my best thinking!",
};

export const REGION_STARTING_ITEMS = {
    'Mushroom Kingdom': [{ name: 'Slightly-Squashed Super Mushroom', effect: 'Heals a small amount of health when consumed.'}, { name: 'Map of Warp Pipe shortcuts', effect: 'Provides advantage on one navigation check within the Mushroom Kingdom.'}],
    'The Midlands': [{ name: 'Tarnished Imperial Ducat', effect: 'A single coin. Might be useful for a bribe or a lucky toss.' }, { name: 'Iron Legion Field Rations', effect: 'Tastes like rocks, but provides a full day\'s sustenance.' }],
    'The Internet': [{ name: 'Corrupted Data-Slate', effect: 'Plays an annoying, catchy song that can serve as a minor distraction.' }, { name: 'Firewall Bypass Key (single use)', effect: 'Automatically succeeds on one check to bypass a digital barrier.' }],
    'Middle-earth': [{ name: 'Lembas Bread Crumbs', effect: 'A few crumbs from Elven waybread. Restores a surprising amount of stamina.' }, { name: 'An old, slightly magical-looking ring', effect: 'It\'s probably worthless, but it glints nicely.' }],
    'The Fated Place': [{ name: 'Amulet of Sigmar (chipped)', effect: 'A symbol of faith. May provide a bonus when interacting with the faithful.' }, { name: 'Pouch of dried fungus', effect: 'Suspiciously tasty. Restores a small amount of health.' }],
    'Kivotos': [{ name: 'Expired Coupon for Angel 24', effect: 'A coupon for a free soda. It is expired. A social relic.' }, { name: 'A single, very durable school ID card', effect: 'Can be used to jimmy a simple lock in a pinch.' }],
    'The Doughnut Hole': [{ name: 'A pair of mismatched socks', effect: 'Comfortable, but a constant source of mild confusion.' }, { name: 'A rubber chicken', effect: 'Can be used to create a distraction. Squeaks when squeezed.' }],
};


export const RACE_QUESTS = {
    // Human Quests
    'human_debt': { title: "A Noble's Debt", description: "You owe a significant debt to a minor noble in the Midlands Capital. You boarded the Vigilance as a mercenary, seeking enough pay to clear your name before his collectors find you." },
    'human_family': { title: "A Lost Heirloom", description: "Your family's ancestral home was seized by the Regal Empire. The last piece of your heritage, a signet ring, is rumored to be in an antique shop in the capital. You seek to reclaim it." },
    // Elf Quests
    'elf_lore': { title: "The Faded Text", description: "You are a scholar seeking a rare, untranslated Elven text. The only known copy is held in the Grand Library of Mighdural in the Midlands Capital. The Vigilance was the fastest way to get there." },
    'elf_vision': { title: "A Fading Vision", description: "You received a cryptic vision of a great library burning. You believe this vision points to the Mages' Guild Spire in the capital, and you must travel there to prevent this loss of knowledge." },
    // Dwarf Quests
    'dwarf_grudge': { title: "A Grudge to Settle", description: "A rival Dwarven clan disgraced your family name. Their leader, a wealthy merchant, now resides in the Midlands Capital. You travel to confront him and restore your honor, by words or by axe." },
    'dwarf_craft': { title: "The Master Smith", description: "You seek to become the apprentice of a legendary Dwarven smith who is said to work with Mycelian Steel. His forge is located deep within the industrial district of the Imperial Capital." },
    // Orc Quests
    'orc_challenge': { title: "A Worthy Challenge", description: "You've heard tales of the Iron Legion's greatest champions in the Imperial Capital. You seek to challenge one in an honorable duel to prove the strength of your clan." },
    'orc_freedom': { title: "Liberate the Pits", description: "One of your kin was captured and is now a gladiator in 'The Grinder', an illegal fighting pit in the capital's underbelly. You intend to free them, and anyone else you can." },
    // Goblin Quests
    'goblin_schematic': { title: "The Ultimate Schematic", description: "You 'acquired' a map leading to a legendary magitek schematic, but it's written in a code you can't break. The only expert is an artificer at the Imperial University in the capital." },
    'goblin_heist': { title: "The Big Score", description: "You're part of a crew planning to heist the Imperial Mint. The Vigilance is your transport to the capital and your planned getaway vehicle." },
    // Toad Quests
    'toad_refugee': { title: "Refugee's Hope", description: "Your village was destroyed in the Mushroom Kingdom civil war. You're traveling to the capital to petition the Regal Empire for aid and sanctuary for your people." },
    'toad_spy': { title: "A Spy in the Big City", description: "You are an agent of the Mushroom Regency, sent to infiltrate the capital and gather intelligence on the Empire's plans regarding the ongoing civil war." },
    // Koopa Quests
    'koopa_commander': { title: "Find the Commander", description: "A high-ranking Koopa Troop commander went missing during the last war. His last known location was a clandestine meeting in the Imperial Capital. You must find him to help rally the scattered troops." },
    'koopa_sabotage': { title: "Industrial Sabotage", description: "Your mission from Kamek is simple: infiltrate the Magitek Foundries in the capital and sabotage their production of new war machines that threaten the Koopa Kingdom." },
    // Rakasha Quests
    'rakasha_spirit': { title: "A Corrupted Spirit", description: "The spirits of your ancestral lands are troubled. A vision from your elders has shown you that the source of the corruption is a decadent noble in the Imperial Capital who hoards stolen magical artifacts." },
    'rakasha_hunt': { title: "The Great Hunt", description: "An Imperial general who led a campaign that despoiled your homeland has retired to the capital. You have sworn an oath to hunt this man down and bring him to justice before your clan." },
};


export const RACES = [
    // --- Universal Races ---
    { name: "Human", region: "Universal", ability: "Adaptable Learner: Gain one extra skill proficiency.", standing: "Everywhere, and involved in everything.", keyAttribute: "STR", baseStats: { str: 13, dex: 12, con: 12, int: 11, wis: 10, cha: 10 }, baseHp: 10, baseAc: 10, skillBonuses: { persuasion: 1, survival: 1, athletics: 1, technology: 1 }, availableQuests: ['human_debt', 'human_family'], waluigiCommentary: "WAH! A human! So boringly average! But I guess that means you can fit in anywhere. Try not to be too predictable, okay?", startingItems: [{ name: "Practical Traveling Clothes", effect: "Standard issue, non-magical clothing." }, { name: "A half-eaten sandwich", effect: "It's a sandwich. What more do you want?"}] },
    { name: "Elf", region: "Universal", ability: "Fey Ancestry: Advantage on saves vs. charm.", standing: "Respected for their grace and knowledge, but seen as aloof.", keyAttribute: "DEX", baseStats: { str: 10, dex: 14, con: 10, int: 12, wis: 12, cha: 11 }, baseHp: 9, baseAc: 11, skillBonuses: { perception: 2, acrobatics: 1, stealth: 1 }, availableQuests: ['elf_lore', 'elf_vision'], waluigiCommentary: "An elf! So graceful, so elegant... SO BORING! All that talk about trees and stars. At least you're hard to hit. That's useful.", startingItems: [{ name: "Elven-made Cloak", effect: "Grants advantage on Stealth checks in forests." }, { name: "A book of sad poetry", effect: "Can be read to bore a single target into a state of drowsiness." }] },
    { name: "Dwarf", region: "Universal", ability: "Dwarven Resilience: Advantage on saves vs. poison.", standing: "Known as master crafters and stubborn warriors.", keyAttribute: "CON", baseStats: { str: 13, dex: 9, con: 14, int: 11, wis: 12, cha: 9 }, baseHp: 11, baseAc: 10, skillBonuses: { technology: 2, athletics: 2 }, availableQuests: ['dwarf_grudge', 'dwarf_craft'], waluigiCommentary: "A dwarf! Good for hitting things and making shiny stuff. A bit too obsessed with grudges, but who am I to talk? WAH HAH HAH!", startingItems: [{ name: "A sturdy hammer", effect: "A well-balanced tool and a decent weapon." }, { name: "A small pouch of uncut gems", effect: "Worth a small amount of money to the right buyer." }] },
    { name: "Orc", region: "Universal", ability: "Aggressive: Can use a bonus action to move toward an enemy.", standing: "Feared as savage brutes, respected for martial prowess.", keyAttribute: "STR", baseStats: { str: 15, dex: 10, con: 13, int: 8, wis: 9, cha: 8 }, baseHp: 12, baseAc: 9, skillBonuses: { intimidation: 2, athletics: 2 }, availableQuests: ['orc_challenge', 'orc_freedom'], waluigiCommentary: "An orc! Now we're talking! Big, strong, and loves a good fight! My kind of minion. Just point and yell 'WAAAGH!'. Simple and effective.", startingItems: [{ name: "A jagged axe", effect: "Deals an extra point of damage on a critical hit due to its jagged edge." }, { name: "A necklace of questionable teeth", effect: "Grants advantage on Intimidation checks against small, furry animals." }] },

    // --- Mushroom Kingdom Races ---
    { name: "Toad", region: "Mushroom Kingdom", ability: "Unassuming Presence: Advantage on checks to blend into a crowd.", standing: "The common folk of the Kingdom. Often underestimated.", keyAttribute: "CHA", baseStats: { str: 9, dex: 12, con: 10, int: 11, wis: 12, cha: 14 }, baseHp: 9, baseAc: 10, skillBonuses: { persuasion: 2, perception: 1, survival: 1 }, availableQuests: ['toad_refugee', 'toad_spy'], waluigiCommentary: "A Toad! You're small and look harmless. That's perfect for sneaking! Just try not to get stepped on.", startingItems: [{ name: "Heavy Backpack (mostly empty)", effect: "You can carry more stuff, but it makes you look like a tourist." }] },
    { name: "Koopa Troopa", region: "Mushroom Kingdom", ability: "Shell Defense: Can withdraw into your shell for +4 AC.", standing: "Feared soldiers of a fallen army, now mercenaries and warlords.", keyAttribute: "STR", baseStats: { str: 13, dex: 10, con: 12, int: 10, wis: 11, cha: 10 }, baseHp: 11, baseAc: 11, skillBonuses: { athletics: 2, intimidation: 2 }, availableQuests: ['koopa_commander', 'koopa_sabotage'], waluigiCommentary: "A Koopa! Tough shell, tough attitude. Good for defense. But can you be stylish? That is the real question!", startingItems: [{ name: "Polishing cloth for your shell", effect: "A clean shell is a happy shell. And slightly more aerodynamic." }] },
    { name: "Shy Guy", region: "Mushroom Kingdom", ability: "Masked Mystery: Advantage on checks to hide your identity or emotions.", standing: "Enigmatic and mischievous beings of unknown origin.", keyAttribute: "DEX", baseStats: { str: 8, dex: 15, con: 10, int: 11, wis: 10, cha: 12 }, baseHp: 8, baseAc: 12, skillBonuses: { stealth: 2, acrobatics: 2 }, availableQuests: ['toad_spy', 'goblin_heist'], waluigiCommentary: "A Shy Guy! I love the mask! So mysterious! Are you shy, or just plotting something magnificent? Don't tell me, it's more fun that way.", startingItems: [{ name: "Collection of 3 extra masks", effect: "Allows you to quickly change your expression to happy, sad, or angry." }] },
    
    // --- The Midlands Races ---
    { name: "Rakasha", region: "The Midlands", ability: "Honorable Combatant: You can use your reaction to impose disadvantage on an attack roll against an ally within 5 feet of you.", standing: "Tribal beast-folk who value honor, strength, and the natural world.", keyAttribute: "WIS", baseStats: { str: 13, dex: 12, con: 12, int: 10, wis: 14, cha: 9 }, baseHp: 10, baseAc: 11, skillBonuses: { survival: 2, perception: 2 }, faction: "rakasha_clans", availableQuests: ['rakasha_spirit', 'rakasha_hunt'], waluigiCommentary: "A Rakasha! All about 'honor' and 'spirits'. A bit stuffy for my taste, but you're good fighters. And your shamans can do some weird stuff! That could be useful.", startingItems: [{ name: "A tribal totem", effect: "Grants a minor bonus to saves against fear." }, { name: "Ceremonial face paint", effect: "Looks very intimidating. Or silly. It's a fine line." }] },
    
    // ... other races with baseStats and updated items ...

    // Custom
    { name: "Custom", region: "Universal", ability: "Unique Path: Work with the DM to create your own unique racial ability.", standing: "Your place in the world is yet to be defined. You are an anomaly, a mystery waiting to be unfurled.", keyAttribute: "STR", baseStats: { str: 12, dex: 12, con: 12, int: 12, wis: 12, cha: 12 }, baseHp: 10, baseAc: 10, skillBonuses: {}, availableQuests: [], waluigiCommentary: "WAH? Custom? You think you're more creative than ME, Waluigi?! Fine! Let's see what you've got. Don't be boring!", startingItems: [{ name: "An empty notebook", effect: "For recording your magnificent deeds." }, { name: "A pencil with a question mark for an eraser", effect: "For correcting your inevitable mistakes." }] }
];


export const FACTIONS = {
    regal_empire: { skillBonuses: { technology: 1, intimidation: 1 } },
    iron_legion: { skillBonuses: { athletics: 2 } },
    onyx_hand: { skillBonuses: { stealth: 1, persuasion: 1 } },
    mages_guild: { skillBonuses: { investigation: 2 } },
    silver_flame: { skillBonuses: { perception: 1, intimidation: 1 } },
    oathbound_judges: { skillBonuses: { investigation: 1, persuasion: 1 } },
    moonfang_pack: { skillBonuses: { survival: 1, athletics: 1 } },
    toad_gang: { skillBonuses: { intimidation: 2 } },
    toad_cult: { skillBonuses: { persuasion: 1, stealth: 1 } },
    mushroom_regency: { skillBonuses: { persuasion: 2 } },
    peach_loyalists: { skillBonuses: { athletics: 1, intimidation: 1 } },
    fawfuls_furious_freaks: { skillBonuses: { technology: 2 } },
    liberated_toads: { skillBonuses: { survival: 2 } },
    freelancer_underworld: { skillBonuses: { stealth: 1, persuasion: 1 } },
    cosmic_jesters: { skillBonuses: { acrobatics: 2 } },
    the_unchained: { skillBonuses: { survival: 1, stealth: 1 } },
    ratchet_raiders: { skillBonuses: { technology: 2 } },
    crimson_fleet: { skillBonuses: { acrobatics: 1, intimidation: 1 } },
    wario_land: { skillBonuses: { technology: 1, intimidation: 1 } },
    iron_fists: { skillBonuses: { intimidation: 2 } },
    diamond_city_investigators: { skillBonuses: { investigation: 2 } },
    goodstyle_artisans: { skillBonuses: { persuasion: 2 } },
    rakasha_clans: { skillBonuses: { survival: 2 } },
    koopa_troop: { skillBonuses: { athletics: 2 } },
    rebel_clans: { skillBonuses: { stealth: 1, survival: 1 } },
    unaligned: { skillBonuses: { survival: 2 } }
};