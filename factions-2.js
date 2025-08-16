export const FACTIONS_2 = {
    oathbound_judges: {
        name: "The Oathbound Judges",
        description: "An impartial and unyielding order dedicated to upholding cosmic law.",
        logo: 'faction_oathbound_judges.png',
        relations: { 
            allies: ['regal_empire', 'diamond_city_investigators'], 
            enemies: ['iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "judge_eternal_korven",
        category: "Regional Powers",
        region: "The Midlands (Citadel of Law)",
        notable_people: [
            { name: "Judge Eternal Korven", role: "Supreme Arbiter", description: "The immortal leader of the Truthbearers, known for his unwavering dedication to law." },
            { name: "Arbitrix Mira", role: "Intent Reader", description: "A younger judge who considers the spirit of the law as much as the letter." }
        ],
        waluigi_tip: "These guys are no fun at all. They only care about their precious 'Law'. The best way to deal with them is to frame someone else! It's a classic for a reason. WAH!",
        internal_politics: {
            ruling_faction: "truthbearers",
            sub_factions: {
                truthbearers: {
                    name: "The Truthbearers",
                    description: "The core of the order, who believe in absolute, impartial justice. The law is the law, and all are subject to it.",
                    opinion: "The party, particularly Archie, has a long list of crimes to answer for. Markop, as a former paladin, should know better. Justice will be served.",
                    influence: 60,
                    reputation_modifiers: { archie: -30, markop: -20, humpik: -10, bowser: -15 }
                },
                arbiters_of_intent: {
                    name: "Arbiters of Intent",
                    description: "A faction that believes the spirit of the law is more important than the letter. They consider motive and consequence when passing judgment.",
                    opinion: "While their methods are criminal, the party often brings about a greater good, such as stopping X.O. or dismantling smuggling rings. Their case is... complex.",
                    influence: 40,
                    reputation_modifiers: { archie: 5, markop: 10, humpik: 5, bowser: 0 }
                }
            }
        }
    },
    da_krumperz: {
        name: "Da Krumperz",
        description: "A powerful Greenskin WAAAGH! that loves a good fight.",
        logo: 'faction_greenskin.png',
        relations: { 
            allies: ['cosmic_jesters'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'goodstyle_artisans']
        },
        power_level: 6,
        leader: "warboss_skarjaw",
        category: "Regional Powers",
        region: "Wastelands & Borderlands",
        notable_people: [
            { name: "Warboss Skarjaw", role: "Big Boss", description: "The biggest, meanest Ork who leads Da Krumperz through pure brutality." },
            { name: "Big Mek Ironteef", role: "Mekaniaks Leader", description: "The genius engineer who builds the most explosive war machines." }
        ],
        waluigi_tip: "Greenskins are simple. If you're strong, they respect you. If you're weak, they krump you. Bowser gets it. Find their biggest boss and punch him in the face. It's called 'diplomacy'!",
        internal_politics: {
            ruling_faction: "da_big_bosses",
            sub_factions: {
                da_big_bosses: {
                    name: "Da Big Bosses",
                    description: "The biggest, strongest Orks who rule through brute force and intimidation. They respect only strength.",
                    opinion: "Bowser's a good scrapper! That Archie git makes big explosions! Humpik is strong! The centaur is a bit stuffy, but he can fight. They're good for a WAAAGH!",
                    influence: 40,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 10, bowser: 20 }
                },
                da_mekaniaks: {
                    name: "Da Mekaniaks",
                    description: "Ork engineers who build noisy, unreliable, and incredibly destructive war machines from scrap.",
                    opinion: "That little goblin Lario's workshop has some nice bitz! And the party blows up fancy Imperial tech all the time! More scrap for us!",
                    influence: 20,
                    reputation_modifiers: { archie: 15, markop: 0, humpik: 5, bowser: 10 }
                },
                da_weirdboyz: {
                    name: "Da Weirdboyz",
                    description: "Ork psykers whose minds are unstable conduits for raw WAAAGH! energy. They are unpredictable and feared.",
                    opinion: "That three-eyed git... his head is full of loud noises! Good noises! Makes our heads go all tingly!",
                    influence: 20,
                    reputation_modifiers: { archie: 20, markop: -5, humpik: 0, bowser: 5 }
                },
                da_shadow_waagh: {
                    name: "Da Shadow-WAAAGH!",
                    description: "A splinter group that secretly allied with X.O., believing her reality-bending power was 'Da Best Kunnin'. They are now trying to salvage her plan by force.",
                    opinion: "Da party krumped our secret boss! Now we gotta finish the job and get a good scrap out of it! WAAAGH!",
                    influence: 20,
                    reputation_modifiers: { archie: -25, markop: -25, humpik: -25, bowser: -25 }
                }
            }
        }
    },
    ratchet_raiders: {
        name: "The Ratchet Raiders",
        description: "Goblin mechanics and pilots with a love for dangerous, ramshackle technology.",
        logo: 'faction_ratchet_raiders.png',
        relations: { 
            allies: ['cosmic_jesters'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'goodstyle_artisans']
        },
        power_level: 4,
        leader: "lario",
        category: "Underworld & Fringe",
        region: "Wastelands & Borderlands",
        notable_people: [
            { name: "Lario", role: "Workshop Owner", description: "Wario's brother who runs a questionable workshop with 'toad-powered polishing' services." },
            { name: "Captain Zipwire", role: "Speed Freek Leader", description: "The fastest goblin pilot who leads the adrenaline junkies." }
        ],
        waluigi_tip: "Goblins love two things: explosions and shiny things. Archie is their hero! If you want their help, promise them a chance to loot a crashed Imperial airship. They can't resist!",
        internal_politics: {
            ruling_faction: "scrap_barons",
            sub_factions: {
                scrap_barons: {
                    name: "The Scrap Barons",
                    description: "The richest goblins who control the workshops and junkyards. They profit from the chaos created by others. Currently in turmoil over the Lario/Syrup situation.",
                    opinion: "Lario holding a pirate captain captive? Bad for business! Now there's infighting. This party creates expensive problems... but also profitable scrap.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -10, humpik: 0, bowser: 0 }
                },
                speed_freeks: {
                    name: "The Speed Freeks",
                    description: "Adrenaline-junkie pilots who live to fly fast, loud, and dangerously. They modify their vehicles for speed above all else.",
                    opinion: "A pirate captain breakout on an airship? Sounds like a good time! We respect the guts of anyone who pulls off a stunt like that. Lario is an idiot for getting caught.",
                    influence: 35,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 10 }
                },
                da_boomers: {
                    name: "Da Boomers",
                    description: "Demolition experts who believe that any problem can be solved with enough explosives. Usually, their own.",
                    opinion: "Archie's got the right idea! Big booms! We like his style. That Humpik fella throwing an axe in the engine? Genius!",
                    influence: 25,
                    reputation_modifiers: { archie: 20, markop: -5, humpik: 10, bowser: 5 }
                },
                syrup_sympathizers: {
                    name: "Syrup Sympathizers",
                    description: "A new splinter group of goblins who are impressed by Captain Syrup's cunning and want to join her pirate crew, abandoning the Raiders.",
                    opinion: "That Captain Syrup is the real deal! She's got style, she's got a ship, and she's not afraid to betray anyone. That's the life for us!",
                    influence: 10,
                    reputation_modifiers: { archie: 15, markop: 5, humpik: 0, bowser: 5 }
                }
            }
        }
    },
    koopa_troop: {
        name: "Koopa Troop",
        description: "Bowser's personal army, fiercely loyal to their warlord king.",
        logo: 'faction_koopa_troop.png',
        relations: { 
            allies: ['onyx_hand', 'moonfang_pack'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "bowser",
        category: "Regional Powers",
        region: "Darklands",
        notable_people: [
            { name: "Bowser", role: "King", description: "The supreme ruler of the Koopa Kingdom and commander of the Troop." },
            { name: "Kamek", role: "Chief Advisor", description: "The wise Magikoopa who serves as Bowser's primary magical advisor." }
        ],
        waluigi_tip: "Loyalty is a weakness! The 'Kamek Cabal' are the only ones with any brains. Convince them that Bowser's plans are bad for them, and the whole troop will fall apart. WAH HAH!",
        internal_politics: {
            ruling_faction: "bowsers_elite",
            sub_factions: {
                bowsers_elite: {
                    name: "Bowser's Elite",
                    description: "The command structure of the Troop, including the Koopalings and other high-ranking officers. They are fanatically loyal to Bowser.",
                    opinion: "The King is testing his new allies. We trust his judgment. Humpik is a loyal servant. The others are tools to be used for the King's glory.",
                    influence: 50,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 25, bowser: 100 }
                },
                kamek_cabal: {
                    name: "The Kamek Cabal",
                    description: "The Magikoopa advisors who see the bigger picture. They are loyal, but prioritize the long-term stability and power of the Koopa Kingdom.",
                    opinion: "The King's current alliance is... risky. The three-eyed one is a liability, and the paladin is untrustworthy. This could endanger the Kingdom.",
                    influence: 30,
                    reputation_modifiers: { archie: -10, markop: -10, humpik: 10, bowser: 100 }
                },
                the_horde: {
                    name: "The Horde",
                    description: "The rank-and-file Goombas, Koopa Troopas, and Shy Guys. They follow orders and love their King.",
                    opinion: "King Bowser is great! He's hanging out with cool new friends! One of them makes big explosions!",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 15, bowser: 100 }
                }
            }
        }
    },
    rebel_clans: {
        name: "The Rebel Clans",
        description: "A coalition of disparate clans united against the Regal Empire's expansion.",
        logo: 'faction_rebel_clans.png',
        relations: { 
            allies: ['the_unchained', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 6,
        leader: "clan_chief_redmane",
        category: "Regional Powers",
        region: "Wilderlands",
        notable_people: [
            { name: "Clan Chief Redmane", role: "Old Clans Leader", description: "A traditionalist leader who fights to preserve ancient clan ways." },
            { name: "Young Wolf Kara", role: "New Wave Commander", description: "A fierce young warrior who embraces any method to defeat the Empire." }
        ],
        waluigi_tip: "A rebellion of convenience! The 'Old Clans' want their traditions back, but the 'New Wave' just wants to stick it to the Empire. Give the New Wave some Imperial tech to play with and watch the Old Clans get mad!",
        internal_politics: {
            ruling_faction: "old_clans",
            sub_factions: {
                old_clans: {
                    name: "The Old Clans",
                    description: "Clan leaders who fight to preserve their traditions and sovereignty from Imperial assimilation. They are wary of outsiders.",
                    opinion: "Bowser is a monarch, no better than the Emperor. The party are dangerous mercenaries. We do not trust them.",
                    influence: 45,
                    reputation_modifiers: { archie: -10, markop: -5, humpik: -5, bowser: -15 }
                },
                new_wave_rebels: {
                    name: "New Wave Rebels",
                    description: "Younger members who have grown up under Imperial rule and embrace any method or ally that can hurt the Empire.",
                    opinion: "Anyone who fights the Empire is a friend! The party's actions on the 'Vigilance' were legendary! They are heroes!",
                    influence: 35,
                    reputation_modifiers: { archie: 20, markop: 10, humpik: 10, bowser: 10 }
                },
                the_outlanders: {
                    name: "The Outlanders",
                    description: "Exiles and refugees from lands already conquered by the Empire. They are desperate and fight for survival.",
                    opinion: "The party represents chaos, and chaos is hope. Any disruption to the Empire gives us breathing room.",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    crimson_fleet: {
        name: "The Crimson Fleet",
        description: "A notorious pirate fleet led by the cunning and ruthless Captain Syrup. They value freedom, treasure, and holding a grudge.",
        logo: 'faction_crimson_fleet.png',
        relations: { 
            allies: ['freelancer_underworld'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 5,
        leader: "captain_syrup",
        category: "Underworld & Fringe",
        region: "Skies & Seas",
        notable_people: [
            { name: "Captain Syrup", role: "Fleet Captain", description: "A cunning pirate captain with a grudge against Waluigi and the party after being freed, then immediately attacked." },
            { name: "First Mate Jones", role: "Quartermaster", description: "The loyal and pragmatic second-in-command of the Crimson Fleet." }
        ],
        waluigi_tip: "WAH! Pirates! They only care about treasure. She's mad now, but dangle something shiny in front of her and she'll forget all about it. Or, you know, just frame someone else for her problems. That always works!",
        internal_politics: {
            ruling_faction: "captain_syrup",
            sub_factions: {
                captain_syrup: {
                    name: "Captain Syrup's Crew",
                    description: "The core crew of the flagship, fiercely loyal to their captain and her quest for revenge and treasure.",
                    opinion: "The Captain was betrayed by Waluigi and Lario, and then the party attacked her right after freeing her! They are all untrustworthy landlubbers who owe us big time.",
                    influence: 70,
                    reputation_modifiers: { archie: -20, markop: -30, humpik: -10, bowser: -15 },
                     key_figures: [
                        { name: "Captain Syrup", role: "Captain", description: "Vengeful and cunning leader." },
                     ]
                },
                the_free_captains: {
                    name: "The Free Captains",
                    description: "Other pirate captains loosely allied with Syrup. They respect her strength but are ultimately out for themselves.",
                    opinion: "Syrup getting free is good for the Fleet's reputation. The party that did it is powerful, but chaotic. They are either a great opportunity or a huge liability.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 5 },
                    key_figures: [
                         { name: "Captain 'Cutlass' Kael", role: "Ally Captain", description: "A notoriously fickle pirate lord." },
                    ]
                }
            }
        }
    },
    wario_land: {
        name: "Wario Land",
        description: "Wario's personal kingdom of greed, built on plunder and the scent of garlic. Secretly led by the ghost of Wario, they are obsessed with accumulating wealth by any means necessary.",
        logo: 'wario.png',
        relations: { 
            allies: ['freelancer_underworld'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 4,
        leader: "wario",
        category: "Underworld & Fringe",
        region: "Diamond City (Greed Pits)",
        notable_people: [
            { name: "Wario", role: "Secret Leader", description: "The ghostly mastermind pulling the strings, driven by insatiable greed." },
            { name: "Lario", role: "Public Leader", description: "Wario's brother, the public face of the gang and a skilled, if cowardly, mechanic." }
        ],
        waluigi_tip: "WAH! My old partner... He only cares about money. Wave a big enough bag of coins and he'll do anything. Or better yet, tell him someone else has a bigger bag of coins. His jealousy will do the rest!",
        internal_politics: {
            ruling_faction: "wario_ghost",
            sub_factions: {
                wario_ghost: {
                    name: "Wario's Ghostly Ambition",
                    description: "The secret leadership of Wario himself, who pulls the strings from the ethereal plane. His motives are pure, insatiable greed.",
                    influence: 50,
                    reputation_modifiers: { archie: 10, markop: -10, humpik: 0, bowser: -10 },
                    key_figures: [{ name: "Wario", role: "Ghostly Mastermind", description: "The true leader, obsessed with treasure." }]
                },
                lario_workshop: {
                    name: "Lario's Workshop",
                    description: "The public face of the operation. Lario and his mechanics are more interested in tinkering and 'acquiring' tech than grand schemes.",
                    influence: 30,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 5, bowser: 5 },
                    key_figures: [{ name: "Lario", role: "Public Face", description: "Wario's brother and a skilled mechanic." }]
                },
                goldgrubber_gang: {
                    name: "The Goldgrubber Gang",
                    description: "Wario's old crew of loyal-to-the-coin treasure hunters. They are direct, brutish, and effective at smash-and-grab operations.",
                    influence: 20,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: 5, bowser: 0 }
                }
            }
        }
    },
    mushroom_regency: {
        name: "Mushroom Regency",
        description: "The official but fractured government of the Mushroom Kingdom, struggling to maintain order after the death of Princess Peach.",
        logo: 'faction_mushroom_regency.png',
        relations: { 
            allies: ['liberated_toads', 'goodstyle_artisans'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'peach_loyalists']
        },
        power_level: 5,
        leader: "chancellor_toadsworth",
        category: "Regional Powers",
        region: "Mushroom Kingdom (Heartlands)",
        notable_people: [
            { name: "Chancellor Toadsworth", role: "Head of the Regency", description: "The elderly, overwhelmed leader trying to hold the kingdom together." },
            { name: "Captain Toad", role: "Commander of the Toadstool Guard", description: "The brave but beleaguered commander of the official military forces." }
        ],
        waluigi_tip: "They're falling apart! Toadsworth is a worrier. Just convince him there's a new, imaginary threat, and he'll waste all his resources preparing for it. Easy!"
    },
    peach_loyalists: {
        name: "Peach Loyalists",
        description: "A well-armed military faction that has split from the Mushroom Regency, refusing to accept Princess Peach's death. They are zealous and aggressive.",
        logo: 'faction_peach_loyalists.png',
        relations: { 
            allies: [], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency']
        },
        power_level: 4,
        leader: "captain_toadette",
        category: "Regional Powers",
        region: "Mushroom Kingdom (Militarized Zones)",
        notable_people: [
            { name: "Captain Toadette", role: "Faction Leader", description: "A fanatical commander who believes the Princess is alive and the Regency is illegitimate." },
            { name: "Sergeant Piantissimo", role: "Chief Scout", description: "A swift and dedicated scout tasked with finding clues to the Princess's 'true' whereabouts." }
        ],
        waluigi_tip: "Fanatics are the easiest to fool. Plant some fake 'evidence' of the princess being alive somewhere dangerous, and they'll charge right into a trap. WAH-HA-HA!"
    },
    iron_fists: {
        name: "The Iron Fists",
        description: "A brutal and aggressive criminal gang known for smuggling and extortion.",
        logo: 'faction_iron_fists.png',
        relations: { 
            allies: [], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators']
        },
        power_level: 5,
        leader: "boss_knuckles",
        category: "Underworld & Fringe",
        region: "Widespread (Urban Centers)",
        notable_people: [
            { name: "Boss Knuckles", role: "Gang Leader", description: "The ruthless leader of the Old Bosses who wants revenge on the party." },
            { name: "Iron Mike", role: "Enforcer Captain", description: "The strongest fighter in the gang, known for his metal gauntlets." }
        ],
        waluigi_tip: "A bunch of thugs. The 'Old Bosses' are predictable, but the 'Upstarts' are hungry. Help an Upstart whack an Old Boss, and you'll have a friend for life... or at least until he tries to whack you.",
        internal_politics: {
            ruling_faction: "old_bosses",
            sub_factions: {
                old_bosses: {
                    name: "The Old Bosses",
                    description: "The established leaders of the gang who control the most lucrative rackets. They are cautious and ruthless.",
                    opinion: "The three-eyed meddler and his paladin friend cost us a fortune. They are dead men walking. A bounty is on their heads.",
                    influence: 50,
                    reputation_modifiers: { archie: -25, markop: -15, humpik: -5, bowser: -5 }
                },
                the_upstarts: {
                    name: "The Upstarts",
                    description: "Younger, more ambitious members who think the Old Bosses are too soft. They want to expand the gang's territory through open warfare.",
                    opinion: "The party showed the Old Bosses are vulnerable. Good. Their chaos is an opportunity for us to seize power.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 0 }
                },
                the_enforcers: {
                    name: "The Enforcers",
                    description: "The muscle of the Iron Fists. They are loyal to whoever pays them the most and lets them break the most heads.",
                    opinion: "They fight good. Especially the paladin and the big turtle guy. We'd love a chance to test our metal against theirs.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 10 }
                }
            }
        }
    },
    moonfang_pack: {
        name: "Moonfang Pack",
        description: "Territorial werewolf packs who clash with the city's ancient vampire covens.",
        logo: 'faction_moonfang.png',
        relations: { 
            allies: ['rakasha_clans', 'koopa_troop'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "alpha_bloodmaw",
        category: "Mystical & Ancient",
        region: "The Midlands (Dark Valley)",
        notable_people: [
            { name: "Alpha Bloodmaw", role: "Pack Leader", description: "The strongest werewolf who leads the pack through dominance and fury." },
            { name: "Shaman Moonwhisper", role: "Spirit Guide", description: "The pack's spiritual leader who communes with lunar spirits." }
        ],
        waluigi_tip: "Werewolves are just angry dogs. The 'Alphas' are all about territory, but the 'Spirit-Walkers' are the ones to watch. They see things. Confuse them with a disguise and they won't know who to bite!",
        internal_politics: {
            ruling_faction: "alphas",
            sub_factions: {
                alphas: {
                    name: "The Alphas",
                    description: "The leaders of the packs, who rule through strength and combat prowess. They are fiercely territorial and aggressive.",
                    opinion: "The city is our hunting ground. The party's war with the Onyx Hand is our war. We don't trust them, but any enemy of the leeches is a temporary ally.",
                    influence: 55,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 0, bowser: 5 }
                },
                spirit_walkers: {
                    name: "The Spirit-Walkers",
                    description: "The shamans of the pack, who commune with the moon and the spirits of the hunt. They see the bigger picture.",
                    opinion: "A great change is upon us. The party are catalysts, their chaos upsetting the balance between predator and prey. We must watch them closely.",
                    influence: 25,
                    reputation_modifiers: { archie: 0, markop: 5, humpik: 0, bowser: 0 }
                },
                young_bloods: {
                    name: "The Young Bloods",
                    description: "Newly turned werewolves who are reckless, violent, and eager to prove themselves in battle.",
                    opinion: "Fighting! We love fighting! The party fights vampires! Let's go fight vampires with them!",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 10 }
                }
            }
        }
    },
    liberated_toads: {
        name: "The Liberated Toads",
        description: "A group of former slaves freed by the party. Led by the heroic Dan, they are finding their place in a dangerous world.",
        logo: 'faction_liberated_toads.png',
        relations: { 
            allies: ['rakasha_clans', 'the_unchained', 'rebel_clans', 'mushroom_regency'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'peach_loyalists']
        },
        power_level: 2,
        leader: "dan",
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Nomadic)",
        notable_people: [
            { name: "Dan", role: "Hero Leader", description: "The brave toad who defeated X.O. and now leads his fellow liberated toads." },
            { name: "Toad Lee", role: "First Warrior", description: "The first toad to join the party, wielding a surprisingly large axe." },
            { name: "Bones", role: "The Survivor", description: "A grotesque but resilient toad who owes a debt to the Orcs who kidnapped and then spared him." }
        ],
        waluigi_tip: "WAH! These toads are surprisingly tough! Dan is their heart, but Toad Lee is their history. Turn them against each other by reminding Toad Lee that a newcomer is getting all the glory! A classic Waluigi move!",
        internal_politics: {
            ruling_faction: "dan",
            sub_factions: {
                dan: {
                    name: "Dan, The Hero",
                    description: "His incredible bravery in the face of X.O. has made him the de facto leader and hero of the group. He is learning magic from the Rakasha.",
                    influence: 40,
                    opinion: {
                        archie: "He's scary, and I don't understand him... but he helped free us. I owe him for that.",
                        markop: "My teacher and protector. I trust him completely. He showed me that we didn't have to be victims.",
                        humpik: "He's big and loud, but he fought for us. He has a good heart, I think.",
                        bowser: "A King? He seems just as bad as the ones who enslaved us. I don't trust him."
                    },
                    events: {
                        peach_death: "The Princess is dead? But... she was a symbol of hope for so many. This is a tragedy, and Bowser's aggression is surely to blame."
                    },
                    current_focus: "Mastering his new magical abilities under the Rakasha's guidance and recovering from his injuries."
                },
                toad_lee: {
                    name: "Toad Lee, The First",
                    description: "The first toad to join the party and a powerful warrior. He acts as the group's enforcer and protector.",
                    influence: 25,
                    opinion: {
                        archie: "He's a madman. A useful madman, for now. As long as he points his explosions away from us.",
                        markop: "A true leader. He gave us weapons and a fighting chance. I'd follow him into battle any day.",
                        humpik: "Good sparring partner. Strong. Loyal to his boss, which I can respect.",
                        bowser: "I don't like kings. They're all the same. He's just another master."
                    },
                    events: {
                        peach_death: "Another ruler falls. It proves we can only rely on our own strength, not on monarchs."
                    },
                    current_focus: "Training the other toads in basic combat and ensuring their immediate safety."
                },
                eager: {
                    name: "Eager, The Swift",
                    description: "A nimble and quick-witted toad who prefers to keep his distance, using his whip to control the battlefield.",
                    influence: 10,
                    opinion: {
                        archie: "He creates the best distractions! When he starts yelling, nobody is looking at me. It's great!",
                        markop: "He's a bit too... noble. Always talking about 'honor'. But he's a good shield to hide behind.",
                        humpik: "So big! He must be slow. Easy to stay away from. He seems okay, though.",
                        bowser: "I don't want to get stepped on. I'll stay far away from him, thanks."
                    },
                    events: {
                        peach_death: "Oh no! That's terrible! Does this mean more fighting? I don't like fighting."
                    },
                    current_focus: "Scouting safe locations for the toads to rest and gather supplies."
                },
                roger: {
                    name: "Roger, The Pragmatist",
                    description: "A practical toad who sees the world for what it is. He found a gun and has become a crack shot.",
                    influence: 10,
                    opinion: {
                        archie: "He has firepower. I respect firepower. But he's a loose cannon. Unreliable.",
                        markop: "He has a plan. I like plans. His plans are usually 'charge', but it's better than nothing.",
                        humpik: "A walking pile of muscle. Good for drawing fire. He seems to be loyal to the big boss, which is smart.",
                        bowser: "He's the one with the gold and the army. For now, we're on his side. It's just good sense."
                    },
                    events: {
                        peach_death: "A power vacuum. This is bad for stability. Bad for business. Bowser's fault, probably."
                    },
                    current_focus: "Maintaining their limited equipment and trying to acquire more ammunition."
                },
                ryan: {
                    name: "Ryan, The Studious",
                    description: "A quiet toad with a natural, if untrained, affinity for magic. He watches Dan's training with intense focus.",
                    influence: 10,
                    opinion: {
                        archie: "His magic is... loud. Unfocused. Powerful, yes, but dangerous. I prefer Dan's way.",
                        markop: "He sees the potential in Dan, so he must be wise. He protects us.",
                        humpik: "He doesn't seem to understand magic at all. Just shouting.",
                        bowser: "His Magikoopas are interesting. Their magic is different. I want to learn more."
                    },
                    events: {
                        peach_death: "Her magic was said to be protective, a light in the darkness. For that light to be extinguished... it's a great loss for the world."
                    },
                    current_focus: "Trying to decipher a spell scroll they recovered during their escape."
                },
                bones: {
                    name: "Bones, The Hardened",
                    description: "A tough, grotesque toad who has seen the worst of the world and survived. He is resilient and cynical.",
                    influence: 5,
                    opinion: {
                        archie: "He's seen things. I can tell. He's broken, like me. I trust that.",
                        markop: "He talks of hope. Hope gets you killed. But he can fight, so he's useful.",
                        humpik: "He's never been hungry. Never been beaten. He doesn't understand.",
                        bowser: "Another boss. Another cage. I'll fight for him, but I won't serve him."
                    },
                    events: {
                        peach_death: "She was a princess in a castle. Never knew real suffering. Her death changes nothing for toads like us."
                    },
                    current_focus: "Wrestling with the 'debt' he owes to the Orcs who kidnapped and then spared him."
                },
                wallys_toad: {
                    name: "Wally's Toad (Traitor)",
                    description: "A Waluigi loyalist who infiltrated the group. His discovery has sown seeds of distrust among the toads.",
                    influence: 0,
                    opinion: {
                       archie: "The three-eyed fool is too chaotic to control. A liability to the Master's plan.",
                       markop: "This paladin's 'honor' is a weakness to be exploited.",
                       humpik: "A simple-minded brute. Easily distracted.",
                       bowser: "A rival to the Master. Must be undermined."
                    },
                    events: {
                        peach_death: "Good. One less monarch to complicate things. All according to the WAH-ster plan!"
                    },
                    current_focus: "Interrogation and imprisonment."
                }
            }
        }
    },
    diamond_city_investigators: {
        name: "Diamond City Investigators",
        description: "A private detective agency specializing in high-stakes treasure recovery, often finding themselves at odds with Wario's avaricious schemes.",
        logo: 'icon_dossier.png',
        relations: {
            allies: ['oathbound_judges', 'mushroom_regency'],
            enemies: ['wario_land', 'freelancer_underworld', 'iron_fists', 'crimson_fleet']
        },
        power_level: 3,
        leader: "detective_penny",
        category: "Underworld & Fringe",
        region: "Diamond City (Metropolis)",
        notable_people: [
            { name: "Detective Penny", role: "Lead Investigator", description: "A sharp-witted detective with a passion for puzzles and justice. She has made it her personal mission to dismantle Wario's criminal empire." }
        ],
        waluigi_tip: "These do-gooders are so predictable. Just leave a fake clue leading to a 'bigger' crime, and they'll drop everything to chase the shiny new mystery. WAH!",
        internal_politics: {
            ruling_faction: "the_puzzlers",
            sub_factions: {
                the_puzzlers: {
                    name: "The Puzzlers",
                    description: "The core group of detectives led by Penny. They are dedicated to solving crimes through logic and deduction, and view the party as chaotic lawbreakers.",
                    influence: 60,
                    reputation_modifiers: { archie: -20, markop: -10, humpik: -5, bowser: -15 },
                    key_figures: [{ name: "Detective Penny", role: "Lead Investigator", description: "A brilliant detective with a passion for justice." }]
                },
                forensics_and_artifacts: {
                    name: "Forensics & Artifacts",
                    description: "Specialists who analyze crime scenes and recovered items. They value preservation and despise the party's destructive methods.",
                    influence: 25,
                    reputation_modifiers: { archie: -15, markop: -5, humpik: -5, bowser: -5 }
                },
                informant_network: {
                    name: "The Informant Network",
                    description: "The shadowy side of the agency that deals with underworld contacts. They see the party's chaos as a useful source of information.",
                    influence: 15,
                    reputation_modifiers: { archie: 10, markop: 0, humpik: 0, bowser: 0 }
                }
            }
        }
    },
    goodstyle_artisans: {
        name: "The Goodstyle Artisans",
        description: "A collective of the world's finest artisans and creators, dedicated to preserving beauty and culture from the grubby hands of plunderers like Wario.",
        logo: 'icon_focus.png',
        relations: {
            allies: ['mushroom_regency', 'mages_guild'],
            enemies: ['wario_land', 'da_krumperz', 'ratchet_raiders', 'crimson_fleet']
        },
        power_level: 2,
        leader: "master_goodstyle",
        category: "Regional Powers",
        region: "Diamond City (Cultural Sector)",
        notable_people: [
            { name: "Master Goodstyle", role: "Patron of the Arts", description: "An ancient and revered artisan who believes that beauty is the world's most valuable currency. He despises Wario for his crude materialism." }
        ],
        waluigi_tip: "Artists! So emotional! Just commission them to make a statue of ME, Waluigi, and while they're busy, you can rob them blind! It's a masterpiece of a plan!",
        internal_politics: {
            ruling_faction: "master_patrons",
            sub_factions: {
                master_patrons: {
                    name: "The Master Patrons",
                    description: "Led by Master Goodstyle, this is the core of the collective. They believe beauty is the world's most important currency and despise those who destroy it for profit or power.",
                    influence: 60,
                    reputation_modifiers: { archie: -30, markop: 5, humpik: -10, bowser: -20 },
                    key_figures: [{ name: "Master Goodstyle", role: "Patron of the Arts", description: "An ancient artisan who despises crude materialism." }]
                },
                the_preservationists: {
                    name: "The Preservationists",
                    description: "A group of archivists and restorers dedicated to protecting cultural heritage. They see the party as a walking catastrophe for historical artifacts.",
                    influence: 40,
                    reputation_modifiers: { archie: -20, markop: 0, humpik: -15, bowser: -15 }
                }
            }
        }
    }
};