// This file defines the focus trees for the Liberated Toads.
// Each tree guides a character's development and unlocks new abilities or story elements.

export const FOCUS_TREES = {
    'dan': {
        name: "Dan, The Hero",
        tree: [
            // Tier 1 - Initial Choices
            {
                id: 'dan_t1_influence',
                title: "Hold a Council",
                description: "Dan steps up as a leader, holding a council to determine the Toads' future. This will solidify his influence and unite the group.",
                cost: 4,
                icon: 'icon_focus.png',
                position: { x: 350, y: 20 },
                prerequisites: [],
                effects: { influence: { dan: 15 }, log: "Dan's leadership unites the toads, increasing his influence." }
            },
            {
                id: 'dan_t1_magic',
                title: "Meditate on Rakasha Teachings",
                description: "Focus on the magical training provided by the Rakasha shamans, attempting to better control his nascent powers.",
                cost: 5,
                icon: 'icon_magic.png',
                position: { x: 550, y: 20 },
                prerequisites: [],
                effects: { unlocksAbility: 'Minor Heal', log: "Dan learns 'Minor Heal' from the Rakasha." }
            },
            // Tier 2 - Leadership Branch
            {
                id: 'dan_t2_diplomacy',
                title: "Open Dialogue with Regency",
                description: "Attempt to establish formal communication with the Mushroom Regency, leveraging his heroic reputation.",
                cost: 6,
                icon: 'icon_diplomacy.png',
                position: { x: 200, y: 150 },
                prerequisites: ['dan_t1_influence'],
                effects: { factionRep: { mushroom_regency: 10 }, log: "The Liberated Toads gain favor with the Mushroom Regency." }
            },
            {
                id: 'dan_t2_rally',
                title: "Inspiring Speech",
                description: "Give a speech to bolster the morale of all the liberated toads, increasing their resolve.",
                cost: 3,
                icon: 'icon_morale.png',
                position: { x: 400, y: 150 },
                prerequisites: ['dan_t1_influence'],
                effects: { groupMorale: 10, log: "Dan's speech raises the spirits of all toads." }
            },
             // Tier 2 - Magic Branch
            {
                id: 'dan_t2_spirit_commune',
                title: "Commune with Local Spirits",
                description: "Following Rakasha methods, Dan attempts to speak with the spirits of their immediate surroundings, seeking guidance or warnings.",
                cost: 7,
                icon: 'icon_spirit.png',
                position: { x: 600, y: 150 },
                prerequisites: ['dan_t1_magic'],
                effects: { storyEvent: 'spirit_vision', log: "Dan receives a cryptic vision from the local spirits." }
            },
            // Tier 3 - Advanced Diplomacy
            {
                id: 'dan_t3_formal_alliance',
                title: "Propose Formal Alliance",
                description: "With established communication, Dan proposes a formal alliance between the Liberated Toads and the Mushroom Regency, offering their aid for official recognition.",
                cost: 9,
                icon: 'icon_alliance.png',
                position: { x: 200, y: 280 },
                prerequisites: ['dan_t2_diplomacy'],
                effects: { storyEvent: 'regency_alliance_offer', log: "The Regency will consider a formal alliance." }
            },
            // Tier 3 - Advanced Magic
            {
                id: 'dan_t3_cleanse_corruption',
                title: "Cleanse Local Corruption",
                description: "A spirit vision reveals a source of dark energy nearby. Dan can lead a mission to cleanse it, proving his magical worth.",
                cost: 10,
                icon: 'icon_cleanse.png',
                position: { x: 600, y: 280 },
                prerequisites: ['dan_t2_spirit_commune'],
                effects: { factionRep: { silver_flame: 5, rakasha_clans: 5 }, log: "Cleansing the corruption earns favor with holy orders." }
            },
        ]
    },
    'toad_lee': {
        name: "Toad Lee, The First",
        tree: [
            // Tier 1
            {
                id: 'lee_t1_command',
                title: "Drill Sergeancy",
                description: "Toad Lee begins formally training the other toads in basic combat drills, improving their defensive capabilities.",
                cost: 4,
                icon: 'icon_training.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { groupStat: 'defense', influence: { toad_lee: 10 }, log: "Toad Lee's drills toughen the group." }
            },
            // Tier 2 - Defensive Branch
            {
                id: 'lee_t2_fortify',
                title: "Fortify Position",
                description: "Organize the toads to build makeshift fortifications in their current location, making it safer from attack.",
                cost: 5,
                icon: 'icon_fortify.png',
                position: { x: 300, y: 150 },
                prerequisites: ['lee_t1_command'],
                effects: { locationSafety: 20, log: "The camp's defenses have been improved." }
            },
            // Tier 2 - Offensive Branch
            {
                id: 'lee_t2_offensive_tactics',
                title: "Offensive Tactics",
                description: "Drill the toads in aggressive combat maneuvers, preparing them to take the fight to their enemies.",
                cost: 5,
                icon: 'icon_offense.png',
                position: { x: 600, y: 150 },
                prerequisites: ['lee_t1_command'],
                effects: { groupStat: 'offense', log: "The toads are now better prepared for an assault." }
            },
             // Tier 3 - Defensive Specialization
            {
                id: 'lee_t3_garrison_commander',
                title: "Garrison Mentality",
                description: "Establish a permanent watch-rotation and defensive protocol, turning the Toads into a hardened garrison.",
                cost: 8,
                icon: 'icon_garrison.png',
                position: { x: 300, y: 280 },
                prerequisites: ['lee_t2_fortify'],
                effects: { unlocksBuilding: 'Watchtower', log: "A permanent Watchtower can now be constructed." }
            },
            // Tier 3 - Offensive Specialization
            {
                id: 'lee_t3_vanguard_leader',
                title: "Form a Vanguard",
                description: "Hand-pick the best toad fighters to form an elite vanguard unit for proactive strikes.",
                cost: 8,
                icon: 'icon_vanguard.png',
                position: { x: 600, y: 280 },
                prerequisites: ['lee_t2_offensive_tactics'],
                effects: { unlocksUnit: 'Toad Vanguard', log: "The elite 'Toad Vanguard' unit has been formed." }
            }
        ]
    },
    'ryan': {
        name: "Ryan, The Studious",
        tree: [
             // Tier 1
            {
                id: 'ryan_t1_cantrips',
                title: "Practice Cantrips",
                description: "Ryan spends his days practicing basic magic, honing his control over simple but effective spells.",
                cost: 3,
                icon: 'icon_magic.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { selfStat: 'magic_control', influence: { ryan: 5 }, log: "Ryan's control over basic magic improves." }
            },
            // Tier 2
             {
                id: 'ryan_t2_research_staff',
                title: "Research X.O.'s Staff",
                description: "Ryan attempts to study the fragments of X.O.'s staff, hoping to understand its reality-bending properties.",
                cost: 8,
                icon: 'icon_research.png',
                position: { x: 300, y: 150 },
                prerequisites: ['ryan_t1_cantrips'],
                effects: { storyEvent: 'xo_staff_secrets', log: "Ryan has uncovered a secret about X.O.'s staff." }
            },
            {
                id: 'ryan_t2_combat_spells',
                title: "Develop Combat Spells",
                description: "Focus on practical application of magic for combat, learning to create shields and magical bolts.",
                cost: 6,
                icon: 'icon_combat_magic.png',
                position: { x: 600, y: 150 },
                prerequisites: ['ryan_t1_cantrips'],
                effects: { unlocksAbility: 'Magic Shield', log: "Ryan has learned to cast 'Magic Shield'." }
            }
        ]
    },
    'roger': {
        name: "Roger, The Pragmatist",
        tree: [
            // Tier 1
            {
                id: 'rog_t1_trade',
                title: "Establish Barter System",
                description: "Roger organizes the group's meager supplies and establishes a system for rationing and trade, ensuring their resources last longer.",
                cost: 4,
                icon: 'icon_trade.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { resourceEfficiency: 10, influence: { roger: 10 }, log: "Roger's barter system improves resource efficiency." }
            },
            // Tier 2
            {
                id: 'rog_t2_scavenge',
                title: "Organize Scavenging Parties",
                description: "Form small, efficient teams to scavenge for supplies in the nearby ruins of the 'Vigilance'.",
                cost: 4,
                icon: 'icon_scavenge.png',
                position: { x: 300, y: 150 },
                prerequisites: ['rog_t1_trade'],
                effects: { resourceGain: 15, log: "Scavenging parties bring in new supplies." }
            },
            {
                id: 'rog_t2_workshop',
                title: "Build a Workshop",
                description: "Cobble together a small workshop to repair equipment and craft basic tools and ammunition.",
                cost: 7,
                icon: 'icon_workshop.png',
                position: { x: 600, y: 150 },
                prerequisites: ['rog_t1_trade'],
                effects: { unlocksBuilding: 'Workshop', log: "A basic Workshop can now be constructed." }
            },
            // Tier 3
            {
                id: 'rog_t3_trade_routes',
                title: "Secret Trade Routes",
                description: "Establish contact with a sympathetic merchant from the Freelancer Underworld to set up a supply line.",
                cost: 10,
                icon: 'icon_trade_routes.png',
                position: { x: 150, y: 280 },
                prerequisites: ['rog_t2_scavenge'],
                effects: { storyEvent: 'underworld_contact', factionRep: { freelancer_underworld: 5 }, log: "A trade route with the underworld has been established." }
            }
        ]
    },
    'bones': {
        name: "Bones, The Hardened",
        tree: [
            // Tier 1
            {
                id: 'bones_t1_morale',
                title: "Card Games in the Mess",
                description: "To pass the time and ease tensions, Bones organizes a regular card game. It's surprisingly effective at boosting morale.",
                cost: 3,
                icon: 'icon_morale.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { groupMorale: 5, influence: { bones: 5 }, log: "Card games organized by Bones improve morale." }
            },
            // Tier 2
            {
                id: 'bones_t2_orc_debt',
                title: "Contemplate the Orc 'Debt'",
                description: "Bones wrestles with his conflicting feelings about being kidnapped and then spared by the Orcs, trying to understand their motives.",
                cost: 6,
                icon: 'icon_orc.png',
                position: { x: 300, y: 150 },
                prerequisites: ['bones_t1_morale'],
                effects: { storyEvent: 'orc_connection', log: "Bones gains insight into his connection with the Orcs." }
            },
            {
                id: 'bones_t2_distillery',
                title: "Build a Still",
                description: "Using his knowledge of strange fungi, Bones builds a makeshift still. The resulting brew is potent and greatly improves morale.",
                cost: 5,
                icon: 'icon_distillery.png',
                position: { x: 600, y: 150 },
                prerequisites: ['bones_t1_morale'],
                effects: { groupMorale: 15, log: "Bones's potent brew is a huge morale booster." }
            }
        ]
    },
    'eager': {
        name: "Eager, The Swift",
        tree: [
            // Tier 1
            {
                id: 'eager_t1_scout',
                title: "Scout the Surroundings",
                description: "Eager uses his natural speed and agility to map out the immediate area, identifying potential dangers and resources.",
                cost: 4,
                icon: 'icon_scout.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { mapKnowledge: 10, influence: { eager: 5 }, log: "Eager maps the surrounding area, revealing points of interest." }
            },
            // Tier 2
            {
                id: 'eager_t2_traps',
                title: "Set Booby Traps",
                description: "Use scavenged materials to set up a perimeter of alarms and non-lethal traps around the Toads' camp.",
                cost: 4,
                icon: 'icon_traps.png',
                position: { x: 300, y: 150 },
                prerequisites: ['eager_t1_scout'],
                effects: { locationSafety: 10, log: "The camp is now better protected by Eager's traps." }
            },
            {
                id: 'eager_t2_courier',
                title: "Establish Courier Routes",
                description: "Create hidden, swift routes to potential allies, allowing for faster communication.",
                cost: 6,
                icon: 'icon_courier.png',
                position: { x: 600, y: 150 },
                prerequisites: ['eager_t1_scout'],
                effects: { communicationSpeed: 20, log: "Eager establishes swift and secret courier routes." }
            }
        ]
    },
    'group': {
        name: "Group Focuses",
        tree: [
            {
                id: 'group_t1_repair_airship',
                title: "Repair the Vigilance",
                description: "The 'Vigilance' is badly damaged after Humpik's 'axe-ident'. The party needs to gather materials and find skilled engineers to get the airship flying again.",
                cost: 20,
                icon: 'icon_workshop.png',
                position: { x: 450, y: 20 },
                prerequisites: [],
                effects: { storyEvent: 'airship_repaired', log: "The Vigilance is now operational, but its systems are still basic." }
            },
            {
                id: 'group_t2_upgrade_engine',
                title: "Upgrade the Engine",
                description: "The current engine is barely functional. The party needs to find a new power source or significantly upgrade the existing one to improve the airship's speed and reliability.",
                cost: 15,
                icon: 'icon_workshop.png',
                position: { x: 200, y: 150 },
                prerequisites: ['group_t1_repair_airship'],
                effects: { airshipStat: 'speed', log: "The Vigilance's engine has been upgraded, increasing its speed." }
            },
            {
                id: 'group_t2_install_defenses',
                title: "Install Defenses",
                description: "The 'Vigilance' is vulnerable to attack. The party needs to install armor plating and defensive turrets to protect the airship from harm.",
                cost: 12,
                icon: 'icon_fortify.png',
                position: { x: 450, y: 150 },
                prerequisites: ['group_t1_repair_airship'],
                effects: { airshipStat: 'defense', log: "The Vigilance is now equipped with basic defenses." }
            },
            {
                id: 'group_t2_expand_cargo',
                title: "Expand Cargo Hold",
                description: "The airship's cargo hold is small and cramped. The party needs to expand it to carry more supplies and personnel.",
                cost: 10,
                icon: 'icon_trade.png',
                position: { x: 700, y: 150 },
                prerequisites: ['group_t1_repair_airship'],
                effects: { airshipStat: 'cargo', log: "The Vigilance's cargo hold has been expanded." }
            }
        ]
    }
};