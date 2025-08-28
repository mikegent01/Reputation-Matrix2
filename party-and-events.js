export const AUXILIARY_PARTY = {
    dan: {
        name: "Dan",
        weapon: "Longsword & Magic",
        status: "Recovering",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    toad_lee: {
        name: "Toad Lee",
        description: "A hardy toad warrior who fights with a surprisingly large axe.",
        weapon: "Axe",
        status: "Recovering",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    eager: {
        name: "Eager",
        weapon: "Whip",
        status: "Recovering",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    ryan: {
        name: "Ryan",
        weapon: "Spellcaster",
        status: "Alive, recovering",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    roger: {
        name: "Roger",
        weapon: "Gun",
        status: "Recovering",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    bones: {
        name: "Bones",
        weapon: "Grotesque",
        status: "Alive",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    }
};

export const RUMORS = [
    {
        id: 'xo_defeat',
        title: "X.O.'s Defeat",
        description: "The party, with the help of a liberated toad slave, defeated the rogue mage X.O. and secured the 'Vigilance'.",
        targets: ['party', 'dan_the_toad'],
        effects: { regal_empire: 5, mages_guild: 5, the_unchained: 10, mushroom_regency: 5, liberated_toads: 25 }
    },
    {
        id: 'archie_acquittal',
        title: "Archie's Acquittal",
        description: "Archie Miser was acquitted of killing a mage by an Onyx Hand tribunal, enraging the Mages' Guild.",
        targets: ['archie'],
        effects: { onyx_hand: 15, mages_guild: -20, freelancer_underworld: 5 }
    },
    {
        id: 'iron_fists_raid',
        title: "Iron Fists Raid",
        description: "The party smashed an Iron Fists smuggling ring, earning the gang's ire.",
        targets: ['archie', 'markop'],
        effects: { iron_fists: -25, freelancer_underworld: 5, regal_empire: 5 }
    },
    {
        id: 'dragon_slaying',
        title: "Dragon Slaying",
        description: "A month ago, the party slew a dragon, earning praise from the Iron Legion and scorn from the Mages' Guild.",
        targets: ['party'],
        effects: { iron_legion: 10, mages_guild: -15 }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating, and the party seems to be fanning the flames.",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 }
    },
    {
        id: 'dan_training',
        title: "Dan's Training",
        description: "The heroic toad, Dan, is being trained in magic by the Rakasha, under Markop's supervision.",
        targets: ['markop', 'dan_the_toad'],
        effects: { rakasha_clans: 15, mages_guild: 5, mushroom_regency: 10, liberated_toads: 15 }
    },
    {
        id: 'wario_escape',
        title: "Wario's Escape",
        description: "The ghost of Wario has escaped the Vigilance in a barrel and is rumored to be re-establishing Wario Land with his old cronies.",
        targets: ['waluigi'], // Affects Waluigi's reputation by association
        effects: { freelancer_underworld: -5, ratchet_raiders: 5 }
    },
    {
        id: 'bowser_capture',
        title: "Bowser's Alliance",
        description: "The warlord Bowser, formerly a captive, is now a key ally of the party. His Koopa Troop is mobilizing.",
        targets: ['bowser', 'humpik'],
        effects: { koopa_troop: 20, regal_empire: -10, mushroom_regency: -10 }
    },
    {
        id: 'cosmic_static',
        title: "Cosmic Static",
        description: "Archie's chaotic energies are reportedly causing 'cosmic static' detectable by strange entities.",
        targets: ['archie'],
        effects: { cosmic_jesters: 15, mages_guild: -5 }
    },
    {
        id: 'paladin_dilemma',
        title: "Paladin's Dilemma",
        description: "Markop's association with known criminals has not gone unnoticed by holy orders, tarnishing his reputation.",
        targets: ['markop'],
        effects: { silver_flame: -15, oathbound_judges: -10 }
    },
    {
        id: 'rebel_sympathies',
        title: "Rebel Sympathies",
        description: "The party's anti-authoritarian actions have made them popular with various rebel and revolutionary groups.",
        targets: ['party'],
        effects: { rebel_clans: 10, the_unchained: 5 }
    },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        description: "The frequent destruction of magitek leaves a trail of valuable salvage, which has not gone unnoticed by goblin crews.",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 }
    },
    {
        id: 'markop_saves_lario',
        title: "Markop Saves Lario",
        description: "Markop warned the goblin Lario of an orc sneak attack, saving his life despite their animosity.",
        targets: ['markop'],
        effects: { ratchet_raiders: 15, oathbound_judges: 5, silver_flame: 5 }
    },
    {
        id: 'big_t_legacy',
        title: "Big T's Legacy",
        description: "Big T's body has gone missing from the ship, while his signature sword has been recovered, sparking fears of his revival.",
        targets: ['party'],
        effects: { toad_gang: -10, mushroom_regency: -5, freelancer_underworld: 5 }
    },
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        description: "Princess Peach was killed during the Mushroom Kingdom Civil War. While the exact circumstances are unclear, many blame Bowser's relentless aggression for creating the instability that led to the conflict.",
        targets: ['bowser'],
        effects: { 
            mushroom_regency: -50, 
            regal_empire: -15, 
            silver_flame: -15,
            oathbound_judges: -15
        }
    },
    {
        id: 'syrup_schism',
        title: "The Syrup Schism",
        description: "The pirate Captain Syrup was freed from captivity under the goblin Lario. After a confrontation, she has become a hostile third party, creating chaos within the Ratchet Raiders and putting her at odds with Waluigi and the party.",
        targets: ['party', 'waluigi'],
        effects: {
            ratchet_raiders: -25,
            freelancer_underworld: 10,
            crimson_fleet: -20,
            regal_empire: -5
        }
    },
    {
        id: 'core_crisis',
        title: "Core Crisis on the Vigilance",
        description: "In an act of supreme recklessness, Humpik disabled the Vigilance's power core with a thrown axe, causing the airship to plummet. This has drawn universal condemnation from technologically-minded factions.",
        targets: ['humpik', 'bowser'],
        effects: {
            regal_empire: -40,
            iron_legion: -25,
            mages_guild: -15,
            ratchet_raiders: 15,
            cosmic_jesters: 20
        }
    },
    {
        id: 'imposter_games',
        title: "Imposter Games",
        description: "A goblin disguised as Markop attempted to deceive Humpik. The goblin was silenced by a mysterious guard before revealing too much about a connection to the Iron Fists, suggesting a deeper conspiracy.",
        targets: ['party'],
        effects: {
            iron_fists: -10,
            ratchet_raiders: -5,
            freelancer_underworld: 5
        }
    },
    {
        id: 'paladin_flight',
        title: "A Paladin's Flight",
        description: "After being teleported off the Vigilance by Captain Syrup, Markop was miraculously intercepted and saved by the Rakasha, further cementing their unusual but strong alliance.",
        targets: ['markop'],
        effects: {
            rakasha_clans: 20,
            crimson_fleet: -5,
            mages_guild: 5
        }
    },
    {
        id: 'iron_fists_conspiracy',
        title: "Iron Fists' Imperial Contract?",
        description: "A captured Iron Legion bomber revealed a shocking secret before his demise: the Iron Fists gang may be operating as a secret arm of the Regal Empire, creating chaos for the Empire to solve.",
        targets: ['party'],
        effects: { iron_fists: -5, regal_empire: -5, freelancer_underworld: 10 }
    },
    {
        id: 'tea_party_incident',
        title: "The Tea Party Incident",
        description: "A meeting with the Tea Leaf Syndicate devolved into a massive brawl after a panic button was pressed. In the chaos, Archie killed numerous combatants, including most of the Syndicate's enforcers.",
        targets: ['archie'],
        effects: { 
            tea_leaf_syndicate: -70, 
            toad_gang: -30, 
            iron_legion: -15,
            freelancer_underworld: 10
        }
    },
    {
        id: 'koopa_loyalist_truce',
        title: "Koopa-Loyalist Truce",
        description: "The Koopa Troop remnants and the Peach Loyalists have formed a fragile truce to investigate the Princess's death, directing their mutual ire towards Fawful.",
        targets: ['humpik', 'bowser'],
        effects: { 
            peach_loyalists: 10, 
            koopa_troop: 5
        }
    }
];

export const TIMELINE = [
    {
        phase: '1020 BF',
        title: 'War of Blood and Moon Begins',
        description: "<p>The start of the now-generational shadow war between the vampire covens of the Onyx Hand and the werewolf clans of the Moonfang Pack.</p>",
        participants: []
    },
    {
        phase: '936 BF',
        title: 'Mushroom Civil War Ignites',
        description: "<p>The Mushroom Kingdom fractures into a prolonged civil war after years of mounting instability.</p>",
        participants: []
    },
    {
        phase: '934 BF',
        title: 'Death of the Princess',
        description: "<p>Princess Peach is killed amidst the chaos of the civil war, a pivotal event that deepens the existing schisms and fuels over a century of conflict.</p>",
        participants: ['bowser'] // Bowser is blamed for the instability
    },
    // All subsequent events are considered "Current Events" in 1040 BF
    {
        phase: '1040 BF',
        title: 'Dragon Slain',
        description: "<p>The party defeats the dragon Ignis in the northern mountains, an act praised by militarists but condemned by magical researchers.</p>",
        participants: ['archie', 'markop']
    },
    {
        phase: '1040 BF',
        title: 'Underworld Politics',
        description: "<p>Archie Miser is acquitted of killing a mage by an Onyx Hand tribunal, greatly angering the Mages' Guild.</p>",
        participants: ['archie']
    },
    {
        phase: '1040 BF',
        title: 'Smuggling Bust',
        description: "<p>The party dismantles a key Iron Fists smuggling ring, placing a bounty on their heads.</p>",
        participants: ['archie', 'markop']
    },
    {
        phase: '1040 BF',
        title: 'Airship Hijacked',
        description: "<p>X.O. betrays the party, seizing control of the airship 'Vigilance'. Warlord Bowser is taken captive.</p>",
        participants: ['xo', 'archie', 'markop', 'humpik', 'bowser']
    },
    {
        phase: '1040 BF',
        title: 'The Great Betrayal',
        description: "<p>In a final, chaotic confrontation, the party, with the critical assistance of Dan the Toad, manages to neutralize X.O. and regain control of the Vigilance. The airship is secured, but the full extent of X.O.'s plans and the whereabouts of her allies remain unknown.</p>",
        participants: ['archie', 'markop', 'humpik', 'bowser', 'xo', 'dan_the_toad']
    },
    {
        phase: '1040 BF',
        title: 'The Syrup Schism & Core Crisis',
        description: "<p>The party frees the pirate Captain Syrup, who immediately turns hostile. A chaotic confrontation ensues, revealing a traitorous toad and culminating in Humpik disabling the airship's power core with an axe, sending the 'Vigilance' into a nose-dive.</p>",
        participants: ['archie', 'markop', 'humpik', 'bowser', 'waluigi', 'dan_the_toad', 'captain_syrup']
    },
    {
        phase: '1040 BF',
        title: 'Aftermath on the Vigilance',
        description: "<p>The ship's power is restored using X.O.'s staff. In the chaos, Big T reappears only to be assassinated, Iron Legion agents attack and are detained, and Waluigi's agent 'Wally' is revealed before making a dramatic exit with Bowser, leaving the Liberated Toads critically injured.</p>",
        participants: ['archie', 'markop', 'humpik', 'bowser', 'dan', 'ryan']
    },
    {
        phase: '1040 BF',
        title: 'Standoff and Sabotage',
        description: "<p>A tense negotiation with the Iron Legion leads to a bomb plot being uncovered. Captain Syrup escapes using an illusion, while Lario and a revived Big T are caught trying to sabotage the power core. Humpik intervenes, forcing them both to retreat.</p>",
        participants: ['markop', 'humpik', 'lario', 'bigt', 'captain_syrup']
    },
    {
        phase: '1040 BF',
        title: 'The Tea Party Incident',
        description: "<p>An attempt by Archie to meet with the 'Tea Leaf Syndicate' devolved into a massive brawl after a panic button is pressed, summoning both Toad Gang and Iron Legion forces. In the chaos, Archie unleashes a fireball, killing numerous combatants, including most of the Syndicate's muscle, leaving only Earl Grey and Chai alive.</p>",
        participants: ['archie', 'humpik', 'iron_legion', 'toad_gang']
    },
    {
        phase: '1040 BF',
        title: 'Secrets at the Gala',
        description: "<p>Peach Loyalist scouts Embercap and Mistveil infiltrate Fawful's victory gala. During the event, Chief Thornpaw of the Rakasha finds Mistveil and reveals a stunning secret: he was in a relationship with Princess Peach and knows of a secret hatch in her room. This provides a massive new lead in the investigation of her death.</p>",
        participants: ['captain_toadette', 'chief_thornpaw', 'fawful']
    }
];