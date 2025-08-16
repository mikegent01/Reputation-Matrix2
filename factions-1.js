export const FACTIONS_1 = {
    regal_empire: { 
        name: "The Regal Empire",
        description: "The orderly, magitek-obsessed creators of the 'Vigilance', seeking to suppress chaos.",
        logo: 'faction_regal_empire.png',
        relations: { 
            allies: ['iron_legion', 'oathbound_judges'], 
            enemies: ['freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans'] 
        },
        power_level: 10,
        category: "Major Powers",
        region: "The Midlands (Capital)",
        leader: "emperor_elagabalus",
        notable_people: [
            { name: "Emperor Elagabalus", role: "Supreme Ruler", description: "The divine ruler of the Empire, believed to be immortal and all-knowing." },
            { name: "High Artificer Construct", role: "Magitek Leader", description: "A powerful artificial being that leads the Magitek Ascension faction." }
        ],
        waluigi_tip: "WAH! The Empire is full of stuffed shirts! The 'Magitek Ascension' nerds secretly love chaos, and the 'Silent Service' spies can be bought. Use their own secrets against them! It's what I would do!",
        internal_politics: {
            ruling_faction: "imperial_core",
            sub_factions: {
                imperial_core: {
                    name: "The Imperial Core",
                    description: "Traditionalist nobles who believe in order, heritage, and the divine right of the Emperor. They view magitek as a tool, not a replacement for strong leadership.",
                    opinion: "The party represents the exact kind of chaos that threatens the Imperial peace. They are criminals and anarchists who must be brought to justice.",
                    influence: 45,
                    reputation_modifiers: { archie: -20, markop: -5, humpik: -5, bowser: -15 },
                    key_figures: [
                        { name: "Duke Tiberius", role: "Speaker of the Noble Houses", description: "Represents the interests of the old, landed aristocracy." },
                        { name: "Lady Seraphina", role: "Keeper of Traditions", description: "Ensures that Imperial protocol is strictly followed." }
                    ]
                },
                magitek_ascension: {
                    name: "The Magitek Ascension",
                    description: "A rising faction of technocrats and artificers who believe technology is the key to perfecting the Empire. They secretly admire X.O.'s power.",
                    opinion: "While their methods are crude, the party's interactions with powerful artifacts and individuals are a valuable source of data. They are test subjects, not enemies.",
                    influence: 25,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Artificer Prime Kael", role: "Head of Research", description: "A brilliant but ruthless scientist pushing the boundaries of magitek." },
                        { name: "X.O.", role: "Former Member (Disgraced)", description: "Once a rising star, now a cautionary tale of ambition." }
                    ]
                },
                the_silent_service: {
                    name: "The Silent Service",
                    description: "The Empire's vast and secretive intelligence network. They value information and stability above all, using blackmail, sabotage, and assassination as needed.",
                    opinion: "The party is a chaotic variable that is both a threat and an opportunity. We have assets observing them and will leverage their actions to our advantage.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 0, bowser: 0 },
                    key_figures: [
                        { name: "Spymaster Varrus", role: "Director", description: "A shadowy figure whose face is unknown even to most of the Imperial court." },
                        { name: "Agent Nightingale", role: "Top Operative", description: "A master of disguise and infiltration." }
                    ]
                },
                diplomatic_corps: {
                    name: "The Diplomatic Corps",
                    description: "The face of the Empire abroad. They work to form treaties and maintain alliances, often cleaning up the messes made by the Iron Legion.",
                    opinion: "The party's actions have caused multiple diplomatic incidents. Their alliance with Bowser, a foreign warlord, is particularly problematic. They are an obstacle to peace.",
                    influence: 10,
                    reputation_modifiers: { archie: -15, markop: -10, humpik: -10, bowser: -20 },
                    key_figures: [
                        { name: "Ambassador Callista", role: "Chief Diplomat", description: "A patient and sharp-witted negotiator." }
                    ]
                }
            }
        }
    },
    iron_legion: {
        name: "The Iron Legion",
        description: "Militaristic hardliners who believe in order through force and imperial expansion.",
        logo: 'faction_iron_legion.png',
        relations: { 
            allies: ['regal_empire'], 
            enemies: ['freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 9,
        category: "Major Powers",
        region: "The Midlands (Imperial Borders)",
        leader: "general_marcus_ironhand",
        notable_people: [
            { name: "General Marcus Ironhand", role: "Supreme Commander", description: "The veteran leader of the Legion's Old Guard, known for his tactical brilliance." },
            { name: "Colonel Vera Steelstorm", role: "War-Forged Leader", description: "A young, ambitious officer who leads the Legion's progressive faction." }
        ],
        waluigi_tip: "WAH! These legionnaires are so predictable. The 'Old Guard' hate chaos, but the younger 'War-Forged' officers are hungry for glory. Give them a chance to prove themselves in a big, flashy fight, and they'll love you for it!",
        internal_politics: {
            ruling_faction: "old_guard",
            sub_factions: {
                old_guard: {
                    name: "The Old Guard",
                    description: "Veteran officers who value discipline, proven tactics, and loyalty to the Empire above all. They are suspicious of radical new technologies and unconventional allies.",
                    opinion: "They see the party as a collection of undisciplined rogues. Markop's fall from grace is a tragedy, and Archie's chaos is a threat to military order.",
                    influence: 50,
                    reputation_modifiers: { archie: -15, markop: -10, humpik: -5, bowser: -10 },
                    key_figures: [
                        { name: "General Marcus Ironhand", role: "Supreme Commander", description: "The veteran leader of the Legion, known for his tactical brilliance and stubbornness." }
                    ]
                },
                war_forged: {
                    name: "The War-Forged",
                    description: "Younger, ambitious officers who advocate for aggressive expansion and the use of any tool that brings victory, including dangerous artifacts and unsavory alliances.",
                    opinion: "They are pragmatists. While the party is chaotic, their ability to get results (like defeating a dragon or disrupting the Iron Fists) is undeniable. They see potential for using them as deniable assets.",
                    influence: 25,
                    reputation_modifiers: { archie: 10, markop: 10, humpik: 5, bowser: 15 },
                    key_figures: [
                        { name: "Colonel Vera Steelstorm", role: "Rising Star", description: "A young, ambitious officer who leads the Legion's progressive faction." }
                    ]
                },
                the_garrison: {
                    name: "The Garrison",
                    description: "Legionnaires stationed in occupied territories, focused more on policing and maintaining supply lines than frontline combat. They are pragmatic and often overworked.",
                    opinion: "The party's actions stir up local resistance, making our job harder. We wish they would take their chaos elsewhere.",
                    influence: 15,
                    reputation_modifiers: { archie: -5, markop: 0, humpik: 0, bowser: -5 },
                    key_figures: [
                        { name: "Prefect Valerius", role: "Administrator of 'The Boiling Pot'", description: "A weary official trying to keep a rebellious province from exploding." }
                    ]
                },
                siege_engineers: {
                    name: "The Siege Engineers",
                    description: "The artillery and engineering corps of the Legion. They believe any problem can be solved with sufficient application of explosive force.",
                    opinion: "Archie's destructive capabilities are impressive, if uncontrolled. Bowser's siege weaponry is crude but effective. There is much to learn and counter.",
                    influence: 10,
                    reputation_modifiers: { archie: 10, markop: 0, humpik: 5, bowser: 10 },
                    key_figures: [
                        { name: "Master Engineer Tiber", role: "Artillery Chief", description: "Creator of the 'Sun-Breaker' cannon." }
                    ]
                }
            }
        }
    },
    freelancer_underworld: {
        name: "Freelancer Underworld",
        description: "A shadowy network of smugglers, assassins, and thieves operating for profit.",
        logo: 'faction_freelancer.png',
        relations: { 
            allies: ['crimson_fleet', 'wario_land'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'onyx_hand', 'mages_guild', 'the_unchained', 'silver_flame', 'oathbound_judges', 'iron_fists', 'liberated_toads', 'toad_cult', 'rakasha_clans', 'cosmic_jesters', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'moonfang_pack', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators']
        },
        power_level: 7,
        category: "Underworld & Fringe",
        region: "Widespread (Shadows)",
        leader: "the_broker",
        notable_people: [
            { name: "The Broker", role: "Information Kingpin", description: "A mysterious figure who trades in secrets and favors." },
            { name: "Silent Sam", role: "Assassin Leader", description: "The most feared hitman in the underworld." }
        ],
        waluigi_tip: "Everyone has a price here! The 'Syndicates' are all about stability, but the 'Independents' love chaos. If you want to make friends, break something valuable that belongs to a Syndicate boss. The little guys will love you for it!",
        internal_politics: {
            ruling_faction: "syndicates",
            sub_factions: {
                syndicates: {
                    name: "The Syndicates",
                    description: "A loose cabal of established criminal families who control major smuggling routes and assassination contracts. They value stability and profit over chaos.",
                    opinion: "The party is a disruptive force that upsets the delicate balance of power. Their high-profile actions attract unwanted attention from the law.",
                    influence: 40,
                    reputation_modifiers: { archie: -10, markop: -5, humpik: 0, bowser: -5 },
                    key_figures: [
                        { name: "Don Valeriano", role: "Head of the Valeriano Family", description: "The most powerful and traditionalist of the Syndicate bosses." }
                    ]
                },
                independents: {
                    name: "The Independents",
                    description: "A larger, disorganized group of lone operatives, small-time crooks, and spies who thrive on chaos and the opportunities it creates.",
                    opinion: "The party's chaos creates jobs! Every time they smash a rival's operation or start a gang war, there's money to be made in the aftermath.",
                    influence: 30,
                    reputation_modifiers: { archie: 15, markop: 0, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Nimble Jack", role: "Master Thief", description: "A legendary cat burglar who enjoys the chaos the party creates." }
                    ]
                },
                information_brokers: {
                    name: "The Information Brokers",
                    description: "A neutral faction of spies and whisper-merchants who trade in secrets. They pride themselves on knowing everything about everyone.",
                    opinion: "The party is a font of valuable secrets. Their alliances, their true motives, their weaknesses... all have a high price.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 },
                    key_figures: [
                        { name: "The Broker", role: "Information Kingpin", description: "The enigmatic figure who runs the network." }
                    ]
                },
                the_cleaners: {
                    name: "The Cleaners",
                    description: "Specialists who handle the aftermath of underworld violence. They dispose of bodies, scrub crime scenes, and ensure loose ends are tied up. They are discreet and expensive.",
                    opinion: "This party is messy. Very messy. It's good for business, but their lack of professionalism is offensive.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Mother Mop", role: "Proprietor", description: "A surprisingly cheerful woman who runs the most efficient cleaning service in the underworld." }
                    ]
                }
            }
        }
    },
    toad_gang: { 
        name: "The Toad Gang", 
        description: "Led by the tyrannical Big T, they seek to expand their 'Toadification' campaign.",
        logo: 'faction_toad_gang.png',
        relations: { 
            allies: ['toad_cult'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'fawfuls_furious_freaks'] 
        },
        power_level: 4,
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Underbelly)",
        leader: "skull_cap_murphy",
        notable_people: [
            { name: "Big T", role: "Former Leader", description: "The tyrannical toad supremacist whose body has mysteriously vanished." },
            { name: "Skull-Cap Murphy", role: "Mushroom Skulls Leader", description: "The violent leader of the radical faction that seized power after Big T's defeat." }
        ],
        waluigi_tip: "This gang is a mess! The 'Mushroom Skulls' think Big T was weak! If you want to take over, challenge the Skulls' leader to a fight. Or, even better, trick them into fighting the 'Big T Loyalists'. More chaos for me! WAH!",
        internal_politics: {
            ruling_faction: "mushroom_skulls",
            sub_factions: {
                big_t_loyalists: {
                    name: "Big T Loyalists",
                    description: "The remnants of Big T's inner circle, who believe he will one day return. They are focused on revenge against the party.",
                    opinion: "The party are scum who attacked the great Big T! They must be crushed to pave the way for his glorious return!",
                    influence: 25,
                    reputation_modifiers: { archie: -10, markop: -10, humpik: -10, bowser: -10 },
                    key_figures: [
                        { name: "Knuckles", role: "Chief Enforcer", description: "Big T's former right-hand man, now leading the search for his body." }
                    ]
                },
                mushroom_skulls: {
                    name: "The Mushroom Skulls",
                    description: "A more radical and violent faction that saw Big T's defeat as a sign of weakness. They want to escalate the 'Toadification' to all-out war.",
                    opinion: "Big T got soft! The party did us a favor by removing him. Now, under our lead, we can show the world true Toad power!",
                    influence: 45,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: -5, bowser: 0 },
                    key_figures: [
                        { name: "Skull-Cap Murphy", role: "New Leader", description: "The violent toad who seized power after Big T's defeat." }
                    ]
                },
                the_extortionists: {
                    name: "The Extortionists",
                    description: "The 'business' arm of the gang, focused on running protection rackets and smuggling operations. They care more about profit than ideology.",
                    opinion: "The party's fight with Big T was bad for business. All that chaos disrupted our income streams. We want them gone so we can get back to making coin.",
                    influence: 20,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: -5, bowser: -5 },
                    key_figures: [
                        { name: "Fingers", role: "Accountant", description: "The bean-counter of the gang, obsessed with the bottom line." }
                    ]
                },
                new_bloods: {
                    name: "The New Bloods",
                    description: "Young, reckless recruits who joined the gang for the thrill of violence and mayhem, with little loyalty to any specific leader.",
                    opinion: "That three-eyed guy is cool! He just blows stuff up! We should be more like that! Why are we fighting him again?",
                    influence: 10,
                    reputation_modifiers: { archie: 10, markop: 0, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Spike", role: "Aspiring Thug", description: "A young toad with more bravado than sense." }
                    ]
                }
            }
        }
    },
    toad_cult: {
        name: "The Toad Cult",
        description: "Fanatical schismatics who worship 'The Ascended One' and seek revenge.",
        logo: 'faction_toad_cult.png',
        relations: { 
            allies: ['toad_gang'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists'] 
        },
        power_level: 3,
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Fringe)",
        leader: "high_spore_speaker",
        notable_people: [
            { name: "The Ascended One", role: "Deity", description: "The mysterious toad god worshipped by the cult, whose return is prophesied." },
            { name: "High Spore Speaker", role: "Cult Leader", description: "The main prophet who interprets the will of The Ascended One." }
        ],
        waluigi_tip: "These weirdos are a joke! But the 'New Bloom' fanatics are dangerous. If you want to discredit the whole cult, just give the New Bloom guys some explosives and point them at something important. They'll do the rest!",
        internal_politics: {
            ruling_faction: "ascended_chosen",
            sub_factions: {
                ascended_chosen: {
                    name: "The Ascended's Chosen",
                    description: "The original followers of 'The Ascended One', who believe in subtle conversion and prophecy. They see the party as unwitting tools.",
                    opinion: "They are signs. Their chaos is part of the Great Prophecy, clearing the way for the Ascended One's true return. We must watch them, not fight them.",
                    influence: 50,
                    reputation_modifiers: { archie: 5, markop: 0, humpik: 0, bowser: 0 }
                },
                new_bloom_schismatics: {
                    name: "New Bloom Schismatics",
                    description: "A radical offshoot that believes prophecy must be forced. They advocate for direct action, terrorism, and sacrifice to hasten the coming of their god.",
                    opinion: "Prophecy is a path, not a destination! The party are heretics who must be sacrificed to nourish the New Bloom!",
                    influence: 25,
                    reputation_modifiers: { archie: -20, markop: -20, humpik: -20, bowser: -20 }
                },
                quiet_converts: {
                    name: "The Quiet Converts",
                    description: "Secret members of the cult operating within mainstream society. They subtly spread the cult's influence and gather information.",
                    opinion: "The party's high-profile actions make our work of subtle conversion much harder. They draw too much attention to the 'weirder' elements of the world.",
                    influence: 15,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: -5, bowser: -5 }
                },
                spore_seekers: {
                    name: "The Spore-Seekers",
                    description: "Cultist archaeologists and explorers who search for holy sites and lost relics related to The Ascended One.",
                    opinion: "The party's dimension-hopping could lead them to a lost temple or relic by accident! We must follow them and see what secrets they unearth.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    onyx_hand: {
        name: "The Onyx Hand",
        description: "Ancient vampire covens from the dark heart of the Midlands, playing the long game for political power and influence.",
        logo: 'faction_onyx_hand.png',
        relations: { 
            allies: ['koopa_troop'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 8,
        leader: "lord_crimson",
        category: "Mystical & Ancient",
        region: "The Midlands (Southern Marchlands)",
        notable_people: [
            { name: "Lord Crimson", role: "Elder Vampire", description: "An ancient vampire who orchestrated Archie's trial to weaken the Mages' Guild." },
            { name: "Lady Nightshade", role: "Sanguine Blades Leader", description: "A younger vampire who leads the aggressive faction within the Hand." }
        ],
        waluigi_tip: "Vampires think they're so clever. The 'Elders' are patient, but the young 'Sanguine Blades' are itching for a fight. If you want to start a vampire civil war—and who wouldn't?—just insult an Elder in front of a Blade. WAH-HAH-HAH!",
        internal_politics: {
            ruling_faction: "elders",
            sub_factions: {
                elders: {
                    name: "The Council of Elders",
                    description: "Ancient, patient vampires who prefer subtle manipulation and political maneuvering over open conflict. They orchestrated Archie's trial to weaken the Mages' Guild.",
                    opinion: "Archie is a fascinating, unpredictable pawn. His trial was a resounding success, sowing discord among their rivals. They see him as a useful tool to be observed from a safe distance.",
                    influence: 55,
                    reputation_modifiers: { archie: 15, markop: -5, humpik: 0, bowser: 0 },
                    key_figures: [
                        { name: "Lord Crimson", role: "Ancient Mastermind", description: "He orchestrated Archie's trial to weaken the Mages' Guild." },
                        { name: "Matron Volkov", role: "Keeper of Secrets", description: "The oldest and most cautious member of the council." }
                    ]
                },
                sanguine_blades: {
                    name: "The Sanguine Blades",
                    description: "A younger, more aggressive faction of vampires who believe in ruling through fear and direct power. They see the Elders' subtlety as weakness.",
                    opinion: "The party is a threat to our dominance, but we must admit, they are intriguing. We will wait and see how they develop.",
                    influence: 20,
                    reputation_modifiers: { archie: -5, markop: -10, humpik: -5, bowser: 5 },
                    key_figures: [
                        { name: "Lady Nightshade", role: "Faction Leader", description: "A charismatic and violent leader who challenges the Elders' authority." }
                    ]
                },
                archivists_of_blood: {
                    name: "The Archivists of Blood",
                    description: "Vampiric scholars who obsessively track genealogies and bloodlines, believing a pure bloodline is the source of true power.",
                    opinion: "The party members have... interesting lineages. The centaur, the warlord... their blood could hold secrets. They are subjects for study.",
                    influence: 15,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 10 },
                    key_figures: [
                        { name: "Scribe Alaric", role: "Chief Genealogist", description: "He can trace a single drop of blood back a thousand years." }
                    ]
                },
                whispering_courtiers: {
                    name: "The Whispering Courtiers",
                    description: "Vampires who have infiltrated mortal courts and institutions. They are spies and agents of influence, focused on long-term societal control.",
                    opinion: "The party's actions are destabilizing the mortal institutions we have spent centuries controlling. They are a threat to our long-term plans.",
                    influence: 10,
                    reputation_modifiers: { archie: -10, markop: -5, humpik: -5, bowser: -15 },
                    key_figures: [
                        { name: "The Veiled Counselor", role: "Imperial Advisor", description: "A vampire who has the Emperor's ear." }
                    ]
                }
            }
        }
    },
    mages_guild: {
        name: "Mages' Guild",
        description: "A powerful and secretive organization dedicated to the control and study of magic.",
        logo: 'faction_mages_guild.png',
        relations: { 
            allies: ['goodstyle_artisans'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 8,
        leader: "archmage_theron",
        category: "Mystical & Ancient",
        region: "The Midlands (Autumn Wood)",
        notable_people: [
            { name: "Archmage Theron", role: "Guild Leader", description: "The stern leader of the Conservator faction, dedicated to magical tradition." },
            { name: "X.O.", role: "Former Member", description: "The powerful rogue mage who betrayed the guild and was recently defeated." }
        ],
        waluigi_tip: "The Guild is a snake pit of rivalries. The 'Conservators' hate new magic, the 'Innovators' love it, and the 'Aegis' just wants to blow things up. Play them against each other for maximum chaos! WAH!",
        internal_politics: {
            ruling_faction: "conservators",
            sub_factions: {
                conservators: {
                    name: "The Conservators",
                    description: "An old guard of archmages who believe in tradition and strict control over magic. They see unsanctioned magic as a grave threat.",
                    opinion: "The party's chaotic use of magic is an affront to the Guild's authority. X.O. was a product of this reckless mindset, and Archie is just as bad.",
                    influence: 40,
                    reputation_modifiers: { archie: -20, markop: -5, humpik: 0, bowser: -10 },
                    key_figures: [
                        { name: "Archmage Theron", role: "Guild Leader", description: "The stern leader of the Guild, dedicated to magical tradition." }
                    ]
                },
                innovators: {
                    name: "The Innovators",
                    description: "A faction of younger mages and artificers pushing the boundaries of what's possible, often in ethically gray areas.",
                    opinion: "The party, while crude, is a fascinating case study in practical, high-stakes magical application. Dan the Toad's nascent abilities are of particular interest.",
                    influence: 25,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 5 },
                    key_figures: [
                        { name: "Janna Brightspark", role: "Lead Researcher", description: "A brilliant mind fascinated by dangerous and forbidden lore." }
                    ]
                },
                aegis_magi: {
                    name: "The Aegis Magi",
                    description: "The military wing of the Guild, specializing in battle magic and defending Guild interests with overwhelming force.",
                    opinion: "The party are either potential assets or priority targets, depending on who they are fighting. Their raw power is undeniable.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: 0, humpik: 0, bowser: 10 },
                    key_figures: [
                        { name: "Battle-Mage Kovar", role: "Commander", description: "A hardened warrior who leads the Guild's combat forces." }
                    ]
                },
                lorekeepers: {
                    name: "The Lorekeepers",
                    description: "Librarians and researchers who believe knowledge is the truest form of power. They are neutral and seek only to preserve magical history.",
                    opinion: "The party stumbles upon ancient artifacts and forgotten lore with alarming frequency. We must document their discoveries, even if we disapprove of their methods.",
                    influence: 15,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 },
                    key_figures: [
                        { name: "Master Librarian Elara", role: "Head Archivist", description: "Protector of the Great Library of the Guild." }
                    ]
                }
            }
        }
    },
    rakasha_clans: {
        name: "Rakasha Clans",
        description: "Tribal beast-folk who value honor, strength, and the natural world.",
        logo: 'faction_rakasha.png',
        relations: { 
            allies: ['moonfang_pack', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 6,
        leader: "chief_thornpaw",
        category: "Regional Powers",
        region: "Wilderlands",
        notable_people: [
            { name: "Chief Thornpaw", role: "Spirit-Walker Leader", description: "The wise shaman who guides the clans and now teaches Dan magic." },
            { name: "Warchief Ironmane", role: "Beast-Rider Champion", description: "The strongest warrior among the Beast-Riders, known for his massive tiger mount." }
        ],
        waluigi_tip: "The Rakasha are all about 'honor'. The Spirit-Walkers are the real power. Befriend them, and you can get the hot-headed Beast-Riders to do anything you want!",
        internal_politics: {
            ruling_faction: "spirit_walkers",
            sub_factions: {
                spirit_walkers: {
                    name: "The Spirit-Walkers",
                    description: "The shamanistic leaders of the clans who commune with spirits and guide their people. They are wise and cautious.",
                    opinion: "Markop's quest for redemption is honorable. Dan the Toad's connection to the world is strong. We will guide them, but Archie's chaotic nature is a blight.",
                    influence: 40,
                    reputation_modifiers: { archie: -15, markop: 15, humpik: 5, bowser: 0 }
                },
                beast_riders: {
                    name: "The Beast-Riders",
                    description: "The warrior caste of the Rakasha, who form deep bonds with their animal mounts. They are proud and quick to anger.",
                    opinion: "Markop is a strong warrior, and Humpik's loyalty is respectable. Archie is an unpredictable madman. Bowser is a worthy challenger.",
                    influence: 35,
                    reputation_modifiers: { archie: -5, markop: 10, humpik: 10, bowser: 10 }
                },
                huntmasters: {
                    name: "The Huntmasters",
                    description: "Scouts and trackers who know the wilderness better than anyone. They are pragmatic and value survival above all.",
                    opinion: "The party is good at surviving, we'll give them that. They bring both trouble and opportunity. We watch from the shadows.",
                    influence: 25,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    cosmic_jesters: {
        name: "Servants of the Cosmic Jester",
        description: "An unpredictable cult that worships a chaotic, unknowable entity of madness.",
        logo: 'faction_jester.png',
        relations: { 
            allies: ['da_krumperz', 'ratchet_raiders'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'the_unchained', 'silver_flame', 'oathbound_judges', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 5,
        leader: "the_jester",
        category: "Mystical & Ancient",
        region: "Everywhere & Nowhere",
        notable_people: [
            { name: "The Cosmic Jester", role: "Chaotic Deity", description: "The unknowable entity of madness and chaos worshipped by the cult." },
            { name: "Giggling Pete", role: "High Fool", description: "The most devoted servant of chaos, known for his reality-bending pranks." }
        ],
        waluigi_tip: "These guys are almost as brilliant as me! You can't reason with them. Just do something completely illogical and they'll think you're their new prophet. WAH!",
        internal_politics: {
            ruling_faction: "agents_of_chaos",
            sub_factions: {
                agents_of_chaos: {
                    name: "The Agents of Chaos",
                    description: "True believers who seek to unravel reality by spreading randomness and madness. They see chaos as a form of prayer.",
                    opinion: "Archie is a divine instrument! His every action is a hilarious stroke of genius that brings the Jester's punchline closer!",
                    influence: 60,
                    reputation_modifiers: { archie: 30, markop: -10, humpik: 5, bowser: 10 }
                },
                the_unnerving: {
                    name: "The Unnerving",
                    description: "Cultists who believe the path to enlightenment is through subtle, reality-bending pranks and psychological warfare.",
                    opinion: "The party's antics are amusing, but lack subtlety. The memory-wipe plot by X.O., however... that was a masterpiece of the craft.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 0 }
                },
                the_giggling_nihilists: {
                    name: "The Giggling Nihilists",
                    description: "A small, fatalistic offshoot that believes the only logical response to the universe is to laugh as it all burns down.",
                    opinion: "They're trying so hard! It's adorable. Let's see what they break next. It's all meaningless anyway, so let's enjoy the show.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: 0, humpik: 0, bowser: 5 }
                }
            }
        }
    },
    the_unchained: {
        name: "The Unchained",
        description: "A revolutionary movement of freed slaves and rebels fighting against tyranny.",
        logo: 'faction_the_unchained.png',
        relations: { 
            allies: ['rebel_clans', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Widespread (Rebel Territories)",
        leader: "free_name_sarah",
        notable_people: [
            { name: "Free-Name Sarah", role: "Revolutionary Leader", description: "A former slave who leads the Ideologues with inspiring speeches." },
            { name: "Breaker Marcus", role: "Vindicator Commander", description: "A brutal ex-gladiator who leads the militant wing of the movement." }
        ],
        waluigi_tip: "Rebels are so emotional. The 'Ideologues' will believe any sob story, while the 'Vindicators' just want to fight. Tell the Vindicators that an Imperial noble insulted their mother. Instant distraction!",
        internal_politics: {
            ruling_faction: "ideologues",
            sub_factions: {
                ideologues: {
                    name: "The Ideologues",
                    description: "The core of the movement, focused on building a new, equitable society and spreading their message of freedom for all.",
                    opinion: "Freeing the toad slaves was a noble act. The party, especially Archie and Markop, are powerful symbols of liberation, whether they know it or not.",
                    influence: 40,
                    reputation_modifiers: { archie: 15, markop: 15, humpik: 5, bowser: -10 }
                },
                the_vindicators: {
                    name: "The Vindicators",
                    description: "A militant wing composed of former soldiers and pit fighters who believe freedom can only be won through violence against their former masters.",
                    opinion: "Talk is cheap. The party fights the Empire and its dogs. That makes them friends. Their methods are effective, and we respect their strength.",
                    influence: 35,
                    reputation_modifiers: { archie: 15, markop: 10, humpik: 5, bowser: 5 }
                },
                the_silent_network: {
                    name: "The Silent Network",
                    description: "The intelligence arm of the Unchained, operating an underground railroad for escaped slaves and spreading revolutionary propaganda.",
                    opinion: "The party creates chaos that we can exploit to move our people. Their actions against the Iron Fists and the Empire are a welcome distraction.",
                    influence: 25,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 0, bowser: 0 }
                }
            }
        }
    },
    silver_flame: {
        name: "Order of the Silver Flame",
        description: "Zealous paladins and clerics dedicated to eradicating supernatural evil.",
        logo: 'faction_silver_flame.png',
        relations: { 
            allies: [], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'oathbound_judges', 'da_krumperz', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "high_inquisitor_vale",
        category: "Mystical & Ancient",
        region: "The Midlands (Holy Enclaves)",
        notable_people: [
            { name: "High Inquisitor Vale", role: "Purifier Leader", description: "A zealous paladin who sees all supernatural creatures as abominations." },
            { name: "Templar Captain Dorn", role: "Torch Bearer", description: "A more moderate leader who believes in redemption before destruction." }
        ],
        waluigi_tip: "So self-righteous! The 'Purifiers' are easy to manipulate. Just point them at something you want destroyed and yell 'Vampire!'. The 'Templars' are tougher, they might actually investigate first. Boring!",
        internal_politics: {
            ruling_faction: "purifiers",
            sub_factions: {
                purifiers: {
                    name: "The Purifiers",
                    description: "The militant core of the order, who believe in destroying supernatural evil without mercy or question. They are zealous and uncompromising.",
                    opinion: "Markop has fallen from the light, consorting with criminals and monsters. He is a lost cause. The rest of the party are simply heretics to be purged.",
                    influence: 50,
                    reputation_modifiers: { archie: -25, markop: -20, humpik: -10, bowser: -10 }
                },
                templars_of_the_torch: {
                    name: "Templars of the Torch",
                    description: "Investigators and diplomats who believe in understanding an enemy and redeeming those who have strayed before passing judgment.",
                    opinion: "Markop's path is troubled, but there may yet be hope for his soul. We must observe him and see if he can be guided back to the light.",
                    influence: 35,
                    reputation_modifiers: { archie: -10, markop: 10, humpik: 0, bowser: -5 }
                },
                keepers_of_the_flame: {
                    name: "Keepers of the Flame",
                    description: "A monastic branch dedicated to protecting holy sites and relics. They are scholars and guardians, not frontline fighters.",
                    opinion: "The party's actions have unearthed several sites of interest. They are a chaotic force, but their path crosses with things we must protect.",
                    influence: 15,
                    reputation_modifiers: { archie: 0, markop: 5, humpik: 0, bowser: 0 }
                }
            }
        }
    },
};