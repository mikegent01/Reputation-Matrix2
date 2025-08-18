// This file contains the detailed operational data for the Mages' Guild unique system display.

export const MAGES_GUILD_DETAILS = {
    hierarchy: [
        { rank: "Archmage Sovereign", leader: "Archmage Veyra", description: "Elected by the Conclave to mediate between factions and guide the Guild. Their allegiance often sways the Guild's direction." },
        { rank: "The Grand Conclave", leader: "12 High Mages", description: "The ruling council, split evenly between Conservators and Innovators, who vote on all major Guild policy." },
        { rank: "Spellwarden", leader: "Coven Leaders", description: "Mid-tier mages who command 'Arcane Circles' of 10-20 practitioners, enforcing the will of their respective factions." },
        { rank: "Aegis Magi", leader: "Independent Enforcers", description: "An elite caste of 50 battle-mages who report directly to the Archmage, tasked with enforcing decrees and neutralizing threats to the Guild—both internal and external." }
    ],
    recruitment: {
        conservators: {
            title: "Conservator Recruitment: The Aptitude Test",
            description: "Conservators scout for individuals with innate magical control and a respect for tradition. Initiates undergo a Crucible focused on theoretical studies, magical regulation, and defensive spellcasting."
        },
        innovators: {
            title: "Innovator Recruitment: The Spark of Genius",
            description: "Innovators seek out raw, chaotic talent and a creative spark. Their recruits are often rebels and outcasts. Trials focus on improvisation, experimental runecrafting, and pushing magical limits."
        }
    },
    tactics: {
        conservators: {
            title: "Conservator Tactics: Order Weaves",
            description: "Conservators deploy defensive and binding magic to control the battlefield. They use synchronized 'Arcane Phalanxes' to create powerful mana shields and wards, prioritizing stability and the protection of allies and assets."
        },
        innovators: {
            title: "Innovator Tactics: Chaos Bursts",
            description: "Innovators utilize unpredictable and highly destructive magic, such as elemental storms and rift magic. They favor reckless, overwhelming assaults to test new spells and destabilize their enemies."
        }
    },
    ideology: {
        title: "Ideology: A Fractured Philosophy",
        description: "The Guild is torn between two philosophies. The 'Codex of Stability,' followed by Conservators, preaches control and tradition. The 'Tome of Flux,' revered by Innovators, celebrates chaotic progress and experimentation. This fundamental conflict defines the Guild's volatile nature."
    },
    shared_mechanic: {
        tab_title: "Mana Resonance",
        cards: {
            resonance: {
                title: "Shared Mechanic: Mana Resonance",
                description: "The Guild's internal political state directly impacts its magical potency. The constant struggle between the two major factions creates a 'Resonance' that either stabilizes or empowers their spellcasting.",
                css_class: 'mages-guild-mechanic'
            },
            stable: {
                title: "Stable Resonance (Conservator Control)",
                description: "When the Guild is unified under Conservator control, their order-focused magic is amplified. Defensive spells become significantly more durable, and binding spells last longer.",
                css_class: 'mages-guild-mechanic'
            },
            chaotic: {
                title: "Chaotic Resonance (Innovator Influence)",
                description: "When internal conflict is high and Innovators are influential, their chaotic magic surges in power. Offensive spells deal more damage, and experimental magic has a higher chance of spectacular (and dangerous) success.",
                css_class: 'mages-guild-mechanic'
            }
        }
    }
};
