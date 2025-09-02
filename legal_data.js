// legal_data.js

export const LEGAL_DATA = {
    law_definitions: {
        political_parties: {
            name: "Political Parties Policy",
            icon: "🏛️",
            variants: {
                non_partisan: { name: "Non-Partisan System", description: "Formal political parties are discouraged or banned; candidates run as individuals." },
                one_party: { name: "One Party State", description: "A single political party holds all power and all other parties are illegal." },
                controlled_opposition: { name: "Controlled Opposition", description: "Multiple parties exist, but the ruling party secretly controls the 'opposition' to give an illusion of choice." },
                dominant_party: { name: "Dominant-Party System", description: "Other parties are legal, but one party consistently wins elections and holds power." },
                multi_party: { name: "Multi-Party System", description: "Multiple political parties have the capacity to gain control of government offices." },
            }
        },
        religious_rights: {
            name: "Religious Rights Policy",
            icon: "⛪",
            variants: {
                state_religion: { name: "State Religion", description: "A single religion is officially endorsed by the state, often granting it privileges." },
                pluralism: { name: "Pluralism", description: "The state is neutral towards all religions and protects the right to worship freely." },
                secularism: { name: "Secularism", description: "The state and religious institutions are kept separate; religion is a private matter." },
                laicism: { name: "Laicism", description: "The state actively restricts the influence of religion in public life and government." },
                church_suppression: { name: "Church Suppression", description: "The state actively persecutes and suppresses religious organizations." },
                state_atheism: { name: "State Atheism", description: "The state officially promotes atheism and discourages religious belief." },
            }
        },
        trade_unions: {
            name: "Trade Unions Policy",
            icon: "🛠️",
            variants: {
                illegal: { name: "Illegal", description: "Trade unions and all forms of independent worker organization are banned." },
                state_controlled: { name: "State Controlled", description: "Workers are organized into state-run guilds that serve the government's interests." },
                non_political: { name: "Non-Political Allowed", description: "Craft and trade guilds are permitted, but they are forbidden from engaging in political activity." },
                all_allowed: { name: "All Allowed", description: "All forms of worker organization, including political unions, are permitted." },
            }
        },
        immigration: {
            name: "Immigration Policy",
            icon: "🛂",
            variants: {
                closed_borders: { name: "Closed Borders", description: "Immigration is completely forbidden to maintain cultural or political purity." },
                skilled_labor: { name: "Skilled Labor Only", description: "Only immigrants with specific, in-demand skills are permitted entry." },
                quota: { name: "Quota Immigration", description: "A strict quota limits the number of immigrants allowed per year." },
                open_immigration: { name: "Open Immigration", description: "All immigrants are welcome, regardless of origin or skill." },
                encouraged: { name: "Encouraged Immigration", description: "The state actively encourages immigration to fuel growth and expansion." },
                ethnic: { name: "Ethnic Immigration", description: "Immigration is restricted to specific racial or cultural groups." },
            }
        },
        forced_labor: {
            name: "Forced Labor Policy",
            icon: "⛓️",
            variants: {
                chattel_slavery: { name: "Chattel Slavery", description: "Sentient beings are legally considered property and can be bought and sold." },
                corvee_slavery: { name: "Corvée Slavery", description: "Citizens are required to perform unpaid labor for the state for a certain number of days per year." },
                penal_labor: { name: "Penal Labor", description: "Convicted criminals are forced to work, often in dangerous conditions, as part of their sentence." },
                work_programs: { name: "Work Programs", description: "The unemployed are required to participate in state-run work programs." },
                pow_only: { name: "POW Only", description: "Only captured enemy combatants are subjected to forced labor." },
                complete_ban: { name: "Complete Ban", description: "All forms of forced labor and slavery are completely outlawed." },
            }
        },
        public_meetings: {
            name: "Public Meetings Policy",
            icon: "🗣️",
            variants: {
                outlawed: { name: "Outlawed", description: "Public assembly is banned to prevent dissent and rebellion." },
                regulated: { name: "Regulated", description: "Public meetings require a state-issued permit and are often monitored." },
                allowed: { name: "Allowed", description: "Freedom of assembly is a protected right for all citizens." },
            }
        },
        press_rights: {
            name: "Press Rights Policy",
            icon: "📰",
            variants: {
                propaganda_press: { name: "Propaganda Press", description: "The press is a direct mouthpiece of the state, publishing only officially approved narratives." },
                state_press_only: { name: "State Press Only", description: "Only state-owned and operated media outlets are permitted." },
                censored: { name: "Censored Press", description: "Private media exists, but is subject to state censorship and approval before publication." },
                free_press: { name: "Free Press", description: "The press is independent of the government and free to report on all matters." },
            }
        },
        voter_franchise: {
            name: "Voter Franchise Policy",
            icon: "🗳️",
            variants: {
                no_voting: { name: "No Voting", description: "The state is not a democracy; citizens have no say in their governance." },
                elite_voting: { name: "Elite Voting", description: "Only the nobility or a select elite are permitted to vote." },
                inequal_voting: { name: "Inequal Voting", description: "Voting rights are restricted based on factors like property, race, or gender." },
                registered_voting: { name: "Registered Voting", description: "Only citizens who have formally registered are allowed to vote." },
                universal_voting: { name: "Universal Voting", description: "All adult citizens have the right to vote." },
                promoted_voting: { name: "Promoted Voting", description: "The state actively encourages or requires all eligible citizens to vote." },
            }
        },
        conscription: {
            name: "Conscription Policy",
            icon: "⚔️",
            variants: {
                scraping_barrel: { name: "Scraping the Barrel", description: "In a desperate measure, almost the entire population, regardless of age or skill, is conscripted." },
                all_adults: { name: "All Adults Serve", description: "All able-bodied adults are required to serve in the military." },
                service_by_requirement: { name: "Service by Requirement", description: "Conscription is based on specific state requirements, such as a lottery or specific age groups." },
                extensive: { name: "Extensive Conscription", description: "A large-scale draft is in place to maintain a massive standing army." },
                broadened: { name: "Broadened Conscription", description: "Conscription laws are expanded to include a wider range of the population." },
                limited: { name: "Limited Conscription", description: "A small, limited draft is used to supplement a professional army." },
                volunteer_only: { name: "Volunteer Only", description: "The military is composed entirely of volunteers." },
                disarmed: { name: "Disarmed Nation", description: "The nation has no standing army and relies on diplomacy or militias for defense." },
            }
        },
        supervision: {
            name: "Military Supervision",
            icon: "👁️",
            variants: {
                encouraged_brutality: { name: "Encouraged Brutality", description: "Acts of brutality are encouraged to demoralize the enemy and enforce discipline." },
                no_restrictions: { name: "No Restrictions", description: "The military operates with no oversight, and the ends always justify the means." },
                rules_of_engagement: { name: "Rules of Engagement", description: "Soldiers must follow a strict set of rules governing their conduct in combat." },
                watchdog_groups: { name: "Watchdog Groups", description: "Independent civilian groups are allowed to monitor the military for abuses." },
                total_supervision: { name: "Total Supervision", description: "The military is under complete control of political authorities, limiting its effectiveness." },
            }
        },
        training: {
            name: "Military Training Policy",
            icon: "🎯",
            variants: {
                trial_by_fire: { name: "Trial by Fire", description: "Recruits are given minimal training and sent directly into combat; the survivors are considered trained." },
                minimal: { name: "Minimal Training", description: "Recruits learn the basics of marching and how to hold a weapon." },
                basic: { name: "Basic Training", description: "All soldiers receive a standardized and comprehensive basic training program." },
                combat_schooling: { name: "Combat Schooling", description: "Soldiers are sent to specialized schools to learn advanced tactics and weapon use." },
                advanced: { name: "Advanced Methods", description: "The military uses the most advanced training simulations and methods available." },
            }
        },
        draft_exemptions: {
            name: "Draft Exemptions Policy",
            icon: "📜",
            variants: {
                no_exemptions: { name: "No Draft Exemptions", description: "No one is exempt from military service, regardless of status or profession." },
                elite: { name: "Elite Exemptions", description: "The nobility and other elites are exempt from conscription." },
                educational: { name: "Educational Deferment", description: "Students, particularly in vital fields, can defer their service." },
                civil_service: { name: "Civil Service Opt-out", description: "Service in a critical civilian role can be substituted for military service." },
                generous: { name: "Generous Exemptions", description: "Numerous exemptions exist, significantly weakening the available manpower pool." },
            }
        },
        trade_law: {
            name: "Trade Law Policy",
            icon: "💹",
            variants: {
                free_trade: { name: "Free Trade", description: "No tariffs or restrictions are placed on trade with other nations." },
                strategic_tariffs: { name: "Strategic Tariffs", description: "Tariffs are placed on specific goods to protect key domestic industries." },
                heavy_protectionism: { name: "Heavy Protectionism", description: "High tariffs and restrictions are used to protect all domestic industries from foreign competition." },
                closed_economy: { name: "Closed Economy", description: "All foreign trade is banned to achieve self-sufficiency." },
            }
        },
        income_tax: {
            name: "Income Taxation Policy",
            icon: "💰",
            variants: {
                no_tax: { name: "No Income Taxation", description: "The state does not levy a tax on personal or corporate income." },
                low_weighted: { name: "Low Income Weighted", description: "The tax burden falls primarily on the lower and middle classes." },
                flat: { name: "Flat Taxes", description: "All individuals and corporations pay the same tax rate, regardless of income." },
                high_weighted: { name: "High Income Weighted", description: "The wealthy pay a progressively higher tax rate." },
                negative: { name: "Negative Income Taxation", description: "The state provides a subsidy to citizens below a certain income threshold." },
            }
        },
        minimum_wage: {
            name: "Minimum Wage Policy",
            icon: "🪙",
            variants: {
                no_min_wage: { name: "No Min. Wage", description: "The state does not set a minimum wage; wages are determined by the free market." },
                trinket: { name: "Trinket Min. Wage", description: "The minimum wage is so low it is effectively meaningless." },
                low: { name: "Low Min. Wage", description: "A low minimum wage provides a basic safety net but is not a living wage." },
                moderate: { name: "Moderate Min. Wage", description: "A moderate minimum wage that allows for a basic standard of living." },
                generous: { name: "Generous Min. Wage", description: "A high minimum wage that provides a comfortable standard of living." },
                annual: { name: "Annual Wage", description: "The state guarantees an annual income for all citizens." },
                collective_bargaining: { name: "Collective Bargaining", description: "Wages are primarily set through negotiations between unions and employers." },
            }
        },
        max_workhours: {
            name: "Max Workhours Policy",
            icon: "⏰",
            variants: {
                unlimited: { name: "Unlimited Workday", description: "There are no legal limits on how many hours an employee can work." },
                fourteen_hour: { name: "14 Hour Workday", description: "The maximum workday is legally set at 14 hours." },
                twelve_hour: { name: "12 Hour Workday", description: "The maximum workday is legally set at 12 hours." },
                ten_hour: { name: "10 Hour Workday", description: "The maximum workday is legally set at 10 hours." },
                eight_hour: { name: "8 Hour Workday", description: "The maximum workday is legally set at 8 hours." },
                six_hour: { name: "6 Hour Workday", description: "The maximum workday is legally set at 6 hours." },
            }
        },
        unemployment: {
            name: "Unemployment Policy",
            icon: "📉",
            variants: {
                no_subsidies: { name: "No Subsidies", description: "The state provides no financial support for the unemployed." },
                trinket_subsidies: { name: "Trinket Subsidies", description: "Unemployment benefits are extremely low and short-term." },
                low_subsidies: { name: "Low Subsidies", description: "Low unemployment benefits provide a minimal safety net." },
                moderate_subsidies: { name: "Moderate Subsidies", description: "Moderate unemployment benefits provide a livable income for a limited time." },
                generous_subsidies: { name: "Generous Subsidies", description: "Generous unemployment benefits provide a comfortable income and long-term support." },
                full_employment: { name: "Full Employment Policy", description: "The state guarantees a job for every citizen who wants one." },
            }
        },
        pensions: {
            name: "Pensions Policy",
            icon: "👴",
            variants: {
                no_pensions: { name: "No Pensions", description: "The state provides no financial support for the elderly." },
                trinket_pensions: { name: "Trinket Pensions", description: "Pensions are extremely low, providing virtually no support." },
                low_pensions: { name: "Low Pensions", description: "Low pensions provide a minimal safety net for the elderly." },
                moderate_pensions: { name: "Moderate Pensions", description: "Moderate pensions allow for a basic standard of living in retirement." },
                generous_pensions: { name: "Generous Pensions", description: "Generous pensions provide a comfortable retirement for all citizens." },
            }
        },
        healthcare: {
            name: "Healthcare Policy",
            icon: "❤️‍🩹",
            variants: {
                no_support: { name: "No Government Support", description: "Healthcare is entirely private; citizens must pay for all services." },
                service_for_care: { name: "Service for Care", description: "Only those who serve the state (e.g., soldiers) receive government-funded healthcare." },
                negotiated: { name: "Negotiated Coverage", description: "State-controlled guilds negotiate for limited healthcare coverage for their members." },
                emergencies: { name: "Emergencies Support", description: "The state provides free care only in life-threatening emergencies." },
                low_income: { name: "Low Income Protections", description: "The state provides subsidized or free healthcare for its poorest citizens." },
                universal: { name: "Universal Coverage", description: "All citizens have access to government-funded healthcare, though some services may be excluded." },
                total: { name: "Total Coverage", description: "A comprehensive system that covers all medical needs for all citizens, free at the point of service." },
            }
        },
        education: {
            name: "Education Policy",
            icon: "🎓",
            variants: {
                restricted: { name: "Restricted", description: "Education is a privilege reserved for the nobility or a select elite." },
                stratified: { name: "Stratified", description: "The quality and type of education are strictly determined by a citizen's social class." },
                public: { name: "Public", description: "Basic education is provided by the state and is available to all citizens." },
                subsidised_higher: { name: "Subsidised Higher", description: "The state subsidizes university or advanced training for promising students." },
                public_higher: { name: "Public Higher", description: "Higher education is state-funded and open to all who qualify." },
                free: { name: "Free", description: "All levels of education, from basic to advanced, are provided free of charge by the state." },
            }
        },
        penal_system: {
            name: "Penal System Policy",
            icon: "⚖️",
            variants: {
                overt_oppression: { name: "Overt Oppression", description: "The legal system is a tool of fear and control, used to crush any hint of dissent." },
                politicized: { name: "Politicized Penal System", description: "The law is applied unequally, with punishments determined by political allegiance." },
                harsh: { name: "Harsh Penal Code", description: "The penal code is severe, with harsh, punitive punishments for all crimes." },
                incarceration: { name: "Incarceration", description: "The primary purpose of the penal system is to remove criminals from society." },
                rehabilitation: { name: "Rehabilitation", description: "The goal of the penal system is to reform criminals and reintegrate them into society." },
                military_justice: { name: "Military Justice", description: "All crimes, civilian and military, are tried by a military court-martial." },
                frontier_justice: { name: "Frontier Justice", description: "In lawless areas, justice is often dispensed by individuals or local militias." },
            }
        },
        security: {
            name: "Security Policy",
            icon: "🛡️",
            variants: {
                anarchic: { name: "Anarchic", description: "There are no centralized security forces; individuals must fend for themselves." },
                resource_extraction: { name: "Resource Extraction", description: "Security forces exist only to protect valuable resources and the elite who control them." },
                crime_prevention: { name: "Crime Prevention", description: "Security forces focus on preventing and investigating common crimes." },
                maintenance_of_order: { name: "Maintenance of Order", description: "The primary role of security is to maintain public order and quell unrest." },
                political_control: { name: "Political Control", description: "Security forces act as a secret police, focusing on suppressing dissent and monitoring the populace." },
            }
        },
        industrial_regulations: {
            name: "Industrial Regulations Policy",
            icon: "🏭",
            variants: {
                unregulated: { name: "Utterly Unregulated", description: "There are no laws governing industry; corporations operate with complete freedom." },
                token: { name: "Token Regulations", description: "Regulations exist on paper but are weak and rarely enforced." },
                moderate: { name: "Moderate Regulations", description: "The state enforces basic regulations concerning safety, pollution, and quality." },
                strict: { name: "Strict Regulations", description: "Industry is heavily regulated to protect workers, consumers, and the environment." },
                harsh: { name: "Harsh Regulations", description: "Overbearing regulations stifle innovation and economic growth." },
            }
        },
        gender_rights: {
            name: "Gender Rights Policy",
            icon: "♀️",
            variants: {
                heavily_restricted: { name: "Heavily Restricted", description: "A rigid patriarchal or matriarchal system where one gender's rights are severely limited." },
                traditional: { name: "Traditional Roles", description: "Society enforces strict, traditional roles and expectations for each gender." },
                women_in_workplace: { name: "Women in the Workplace", description: "Women are permitted to work, but only in certain state-approved professions." },
                legal_equality: { name: "Legal Equality", description: "All genders have the same legal rights, though cultural biases may persist." },
                promoted_equality: { name: "Promoted Equality", description: "The state actively promotes gender equality through education and incentives." },
                enforced_equality: { name: "Enforced Equality", description: "The state enforces gender equality through strict quotas and laws." },
            }
        },
        magic_regulation: {
            name: "Magic Regulation Policy",
            icon: "✨",
            variants: {
                unrestricted: { name: "Unrestricted", description: "All forms of magic are legal and unregulated. A chaotic but powerful state of affairs." },
                licensed: { name: "Licensed Casting", description: "Only mages who have passed a test and received a state-issued license may practice magic." },
                state_controlled: { name: "State Controlled", description: "Magic is a state monopoly. All mages are agents of the government." },
                arcane_prohibition: { name: "Arcane Prohibition", description: "All forms of arcane magic are banned and practitioners are hunted as criminals." },
            }
        },
        adventurer_charter: {
            name: "Adventurer's Charter Policy",
            icon: "🗺️",
            variants: {
                unregulated: { name: "Unregulated Vigilantes", description: "Adventurers operate as independent agents, outside of the law. They are tolerated as long as they are useful." },
                licensed_guilds: { name: "Licensed Guilds", description: "Adventurers must belong to a state-sanctioned guild which is held responsible for their actions." },
                state_agents: { name: "State Agents", description: "Adventurers are effectively state-sponsored mercenaries, given contracts to solve problems the military cannot." },
                outlawed: { name: "Outlawed & Hunted", description: "Adventurers are seen as dangerous, unaccountable mercenaries and are treated as criminals." },
            }
        },
        monstrous_races: {
            name: "Monstrous Races Policy",
            icon: "👹",
            variants: {
                extermination: { name: "Extermination Mandate", description: "So-called 'monstrous' races (e.g., goblins, orcs) are considered pests to be exterminated." },
                segregated: { name: "Segregated Territories", description: "Monstrous races are tolerated but are restricted to their own territories or ghettos." },
                protected: { name: "Protected Species", description: "Certain 'monstrous' races are granted protected status, often for spiritual or ecological reasons." },
                full_citizenship: { name: "Full Citizenship", description: "All sentient races, regardless of appearance, are granted full and equal rights." },
            }
        },
        undead_policy: {
            name: "Undead Policy",
            icon: "💀",
            variants: {
                banned_hunted: { name: "Banned & Hunted", description: "All forms of necromancy and all undead are considered abominations to be destroyed on sight." },
                restricted_rituals: { name: "Restricted Rituals", description: "Necromancy is legal but heavily regulated; only licensed necromancers may perform rituals for academic or state purposes." },
                state_necromancy: { name: "State Necromancy", description: "The state employs necromancers to create undead laborers or soldiers from the bodies of criminals and enemies." },
                undead_servitude: { name: "Undead Servitude", description: "Intelligent undead are a recognized, if feared, part of society, often bound into servitude." },
            }
        },
        divine_law: {
            name: "Divine Law Policy",
            icon: "🙏",
            variants: {
                divine_mandate: { name: "Divine Mandate", description: "The word of the gods, as interpreted by their high priests, can overrule secular law." },
                secular_authority: { name: "Secular Authority", description: "Secular law is absolute. Divine law is a matter of personal faith, not state governance." },
                council_of_faiths: { name: "Council of Faiths", description: "A council of representatives from major religions advises the government on legal matters, but has no direct power." },
            }
        },
        planar_travel: {
            name: "Planar Travel Policy",
            icon: "🌀",
            variants: {
                forbidden: { name: "Forbidden", description: "All forms of planar travel and portal magic are banned as an existential threat." },
                heavily_regulated: { name: "Heavily Regulated", description: "Planar travel is controlled by the state; all portals are guarded by elite mages." },
                open_portals: { name: "Open Portals", description: "Major cities maintain stable, open portals to allied planes, encouraging trade and travel." },
                planar_accord: { name: "Planar Accord", description: "A complex web of treaties governs all inter-planar relations and travel." },
            }
        }
    },
    landmass_laws: {
        mushroom_kingdom_full: {
            name: "Mushroom Kingdom Royal Accords",
            description: "The foundational legal framework of the Mushroom Kingdom, though its enforcement varies wildly due to the ongoing civil war.",
            laws: {
                political_parties: 'multi_party', religious_rights: 'pluralism', trade_unions: 'non_political',
                immigration: 'open_immigration', forced_labor: 'complete_ban', public_meetings: 'allowed',
                press_rights: 'free_press', voter_franchise: 'universal_voting', conscription: 'volunteer_only',
                supervision: 'watchdog_groups', training: 'basic', draft_exemptions: 'educational',
                trade_law: 'strategic_tariffs', income_tax: 'high_weighted', minimum_wage: 'moderate',
                max_workhours: 'eight_hour', unemployment: 'moderate_subsidies', pensions: 'moderate_pensions',
                healthcare: 'universal', education: 'public_higher', penal_system: 'rehabilitation',
                security: 'crime_prevention', industrial_regulations: 'moderate', gender_rights: 'legal_equality',
                magic_regulation: 'licensed', adventurer_charter: 'licensed_guilds', monstrous_races: 'segregated',
                undead_policy: 'banned_hunted', divine_law: 'council_of_faiths', planar_travel: 'heavily_regulated'
            }
        },
        midlands_full: {
            name: "Imperial Statutes of the Regal Empire",
            description: "The rigid, authoritarian legal code that governs all provinces of the Midlands under the Emperor's divine right.",
            laws: {
                political_parties: 'one_party', religious_rights: 'state_religion', trade_unions: 'state_controlled',
                immigration: 'skilled_labor', forced_labor: 'penal_labor', public_meetings: 'regulated',
                press_rights: 'state_press_only', voter_franchise: 'no_voting', conscription: 'service_by_requirement',
                supervision: 'no_restrictions', training: 'advanced', draft_exemptions: 'elite',
                trade_law: 'heavy_protectionism', income_tax: 'low_weighted', minimum_wage: 'low',
                max_workhours: 'twelve_hour', unemployment: 'trinket_subsidies', pensions: 'low_pensions',
                healthcare: 'service_for_care', education: 'stratified', penal_system: 'harsh',
                security: 'political_control', industrial_regulations: 'strict', gender_rights: 'traditional',
                magic_regulation: 'state_controlled', adventurer_charter: 'state_agents', monstrous_races: 'extermination',
                undead_policy: 'restricted_rituals', divine_law: 'divine_mandate', planar_travel: 'heavily_regulated'
            }
        },
        the_internet: {
            name: "The Core Protocols v4.2",
            description: "The digital 'laws' of The Internet, governed by algorithms and the protocols of the Federation. Enforcement is a matter of code, not coercion.",
            laws: {
                political_parties: 'multi_party', religious_rights: 'secularism', trade_unions: 'all_allowed',
                immigration: 'quota', forced_labor: 'complete_ban', public_meetings: 'allowed',
                press_rights: 'free_press', voter_franchise: 'registered_voting', conscription: 'volunteer_only',
                supervision: 'watchdog_groups', training: 'advanced', draft_exemptions: 'generous',
                trade_law: 'free_trade', income_tax: 'flat', minimum_wage: 'no_min_wage',
                max_workhours: 'unlimited', unemployment: 'no_subsidies', pensions: 'no_pensions',
                healthcare: 'no_support', education: 'free', penal_system: 'incarceration',
                security: 'maintenance_of_order', industrial_regulations: 'token', gender_rights: 'legal_equality',
                magic_regulation: 'unrestricted', adventurer_charter: 'unregulated', monstrous_races: 'full_citizenship',
                undead_policy: 'banned_hunted', divine_law: 'secular_authority', planar_travel: 'open_portals'
            }
        }
    },
    region_laws: {
        theghdural: {
            name: "The Primal Law of Theghdural",
            description: "The ancient, unwritten laws of the werewolf clans, where strength is authority and territory is sacred.",
            laws: {
                penal_system: 'military_justice', supervision: 'no_restrictions', monstrous_races: 'full_citizenship',
                voter_franchise: 'no_voting', security: 'anarchic'
            }
        },
        bandits_way: {
            name: "The Bandit's Code",
            description: "There is no law here but the law of the strong. A loose code of conduct among thieves and bandits prevents total anarchy, but just barely.",
            laws: {
                penal_system: 'frontier_justice', security: 'anarchic', trade_law: 'free_trade',
                adventurer_charter: 'unregulated', forced_labor: 'chattel_slavery'
            }
        },
        yal_belanor: {
            name: "Provincial Edicts of Yal Belanor",
            description: "The laws of Yal Belanor reflect its status as a noble, military-focused province. While adhering to the core Imperial Statutes, local edicts emphasize the rights of the aristocracy, the importance of the Knightly Academy, and a stricter code of public conduct.",
            laws: {
                voter_franchise: 'elite_voting', education: 'stratified', draft_exemptions: 'elite', public_meetings: 'regulated'
            }
        },
        autumnwood: {
            name: "The Autumnwood Accords",
            description: "Under the heavy influence of the Mages' Guild, the laws of Autumnwood are heavily skewed towards the regulation of magic and the protection of arcane knowledge. Imperial law is secondary to Guild law here.",
            laws: {
                magic_regulation: 'state_controlled', press_rights: 'censored', security: 'political_control', planar_travel: 'forbidden'
            }
        },
        lockerwood: {
            name: "The Lockerwood Commons Law",
            description: "The laws of this agricultural heartland are pragmatic and community-focused, reflecting the independent nature of its farmers. They prioritize property rights and free trade over Imperial bureaucracy.",
            laws: {
                trade_law: 'free_trade', income_tax: 'flat', security: 'crime_prevention', trade_unions: 'all_allowed'
            }
        }
    },
    poi_laws: {
        poi_mk_castle: {
            popup_summary: "Within the occupied castle, the only law is the furious, chortling will of Fawful. Standard legal concepts do not apply, replaced by a bizarre code based on villainous monologues, fury, and chortles. Trespassers are not arrested; they are repurposed as components for new minions.",
            name: "Fawful's Law of Fury",
            laws: {
                political_parties: 'one_party', press_rights: 'propaganda_press', forced_labor: 'penal_labor',
                security: 'political_control', penal_system: 'overt_oppression', magic_regulation: 'unrestricted',
            },
            custom_traditions: [
                { name: "Mandatory Monologues", description: "All minions must attend Fawful's regular monologues on his own genius. Applause is not optional." },
                { name: "The Grinder", description: "Incompetence is punished by being 'recycled' into raw materials for new minions." }
            ]
        },
        poi_mk_toadtown: {
            popup_summary: "With Fawful's forces at the gates, Toad Town is under strict martial law by the Mushroom Regency. Civil liberties are suspended in the name of security, with a heavy military presence on the streets and a nightly curfew enforced without exception. Suspicion is high, and justice is swift and military-focused.",
            name: "Toad Town Martial Law",
            laws: {
                public_meetings: 'regulated', security: 'maintenance_of_order', adventurer_charter: 'state_agents',
            },
            custom_traditions: [
                { name: "Nightly Curfew", description: "A strict curfew is in effect from sundown to sunrise. Anyone found on the streets without a permit is detained." }
            ]
        },
        poi_me_rogueport: {
            popup_summary: "Rogueport recognizes no king or country. The only law is the unwritten code of the Freelancer Underworld, a brutal meritocracy where strength, cunning, and reputation are all that matter. Disputes are settled with blades, not barristers, and the only crime is getting caught.",
            name: "Rogueport's Unwritten Code",
            laws: {
                security: 'anarchic', trade_law: 'free_trade', penal_system: 'frontier_justice',
                adventurer_charter: 'unregulated',
            },
            custom_traditions: [
                { name: "The Law of the Blade", description: "Disputes are often settled by duels, with the results being considered legally binding by the local syndicates." },
                { name: "Sanctuary of the Shadow", description: "The main tavern, 'The Shadow Broker's Rest', is considered neutral ground where no blood may be shed." }
            ]
        },
        poi_aw_mages_spire: {
            popup_summary: "The Spire exists as a sovereign entity, governed by the Arcane Concordat of the Mages' Guild. Imperial law has no meaning here; all matters are judged according to the Guild's strict regulations on the use and misuse of magic. Unsanctioned spellcasting is treated as high treason.",
            name: "The Arcane Concordat",
            laws: {
                education: 'restricted', security: 'political_control', magic_regulation: 'state_controlled',
                planar_travel: 'forbidden',
            },
            custom_traditions: [
                { name: "Arcane Neutrality", description: "The Guild claims neutrality in mortal politics, and its grounds are considered a sanctuary, a claim the Empire tolerates... for now." }
            ]
        },
        poi_tg_alphas_maw: {
            popup_summary: "The law of the Moonfang Pack is the law of the wild, codified. The Alpha's word is absolute, strength is the highest virtue, and all major disputes are settled through ritual combat. Outsiders are judged not by their words, but by their prowess in the hunt.",
            name: "The Law of the Moonfang",
            laws: {
                voter_franchise: 'no_voting', penal_system: 'military_justice', forced_labor: 'pow_only',
                monstrous_races: 'full_citizenship'
            },
            custom_traditions: [
                { name: "Trial by Combat", description: "Any major dispute or challenge to leadership is resolved through a non-lethal (usually) duel." }
            ]
        },
        poi_jt_ebonspire_manor: {
            popup_summary: "The ancient, predatory traditions of the Onyx Hand are the only law in Ebonspire. The 'Eternal Grasp' dictates a rigid hierarchy where mortals are chattel and the Masquerade—hiding their true nature from the world—is the highest commandment, enforced by the penalty of final death.",
            name: "The Eternal Grasp",
            laws: {
                forced_labor: 'chattel_slavery', religious_rights: 'church_suppression', security: 'political_control',
                undead_policy: 'undead_servitude',
            },
            custom_traditions: [
                { name: "The Masquerade", description: "Revealing the true nature of vampirism to an un-vetted mortal is punishable by final death." }
            ]
        },
        poi_bw_bowsers_castle: {
            popup_summary: "Bowser's Castle operates under a single, simple legal principle: the King's will is absolute. Loyalty is the only law, and failure is the only crime. The entire structure of the Koopa Troop's society is built around serving the whims of its tyrannical, fire-breathing monarch.",
            name: "The Law of the Koopa King",
            laws: {
                political_parties: 'one_party', voter_franchise: 'no_voting', press_rights: 'propaganda_press',
                penal_system: 'overt_oppression', monstrous_races: 'segregated',
            },
            custom_traditions: [
                { name: "Mandatory Evil Laugh Practice", description: "Occurs every Tuesday at noon. Attendance is required." }
            ]
        },
    }
};
