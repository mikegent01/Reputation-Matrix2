

export const AUXILIARY_PARTY = {
    dan: {
        name: "Dan",
        weapon: "Longsword & Magic",
        status: "Injured. Now wields a Rakasha Shield and wears Boots of Speed.",
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
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    eager: {
        name: "Eager",
        weapon: "Whip",
        status: "Frozen Solid (Presumed Deceased)",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    ryan: {
        name: "Ryan",
        weapon: "Spellcaster",
        status: "Duplicitous",
        description: "A quiet, studious toad with a natural but untrained affinity for magic. SHOCKING REVELATION: Ryan has been revealed to be a 'warden' involved in a widespread toad trafficking ring, a betrayal that has shattered the trust of the Liberated Toads.",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    roger: {
        name: "Roger",
        weapon: "Gun",
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    bones: {
        name: "Bones",
        weapon: "Grotesque",
        status: "Active",
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
        description: "A meeting with the 'Tea Leaf Syndicate' devolved into a massive brawl after a panic button is pressed, summoning both Toad Gang and Iron Legion forces. In the chaos, Archie unleashes a fireball, killing numerous combatants, including most of the Syndicate's muscle, leaving only Earl Grey and Chai alive.",
        targets: ['archie', 'humpik', 'iron_legion', 'toad_gang'],
        effects: {
            tea_leaf_syndicate: -50,
            iron_legion: -15,
            toad_gang: -15,
            freelancer_underworld: 10,
            regal_empire: -10
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
    },
    {
        id: 'wario_bomb_plot',
        title: "Wario's Bomb Plot",
        description: "Wario gave FNG Remi a box containing a bomb. Bowser exposed the plot, but the box still exploded, injuring Remi. Wario has since offered her a place in his crew.",
        targets: ['remi', 'wario', 'bowser'],
        effects: { wario_land: -20, koopa_troop: 5, regal_empire: 5 }
    },
    {
        id: 'eager_disarmed',
        title: "Deception and Disarmament",
        description: "The Iron Legion tricked Remi into believing Eager was a threat. Eager dropped his whip, which was immediately seized by Earl Grey of the Tea Leaf Syndicate before his demise.",
        targets: ['remi', 'eager'],
        effects: { iron_legion: -10, tea_leaf_syndicate: -15, liberated_toads: -10 }
    },
    {
        id: 'waluigi_friendly_fire',
        title: "Waluigi's Friendly Fire",
        description: "During the brawl, Waluigi cast a powerful ice spell that accidentally froze the toad Eager solid and injured FNG Remi.",
        targets: ['waluigi', 'remi', 'eager'],
        effects: { liberated_toads: -25, cosmic_jesters: 10 }
    },
    {
        id: 'green_t_rampage',
        title: "Green T's Rampage",
        description: "Green T, leader of the Tea Leaf Syndicate, revealed a power to grow to immense size. He used this ability to crush an Iron Legion soldier.",
        targets: ['tea_leaf_syndicate', 'iron_legion'],
        effects: { iron_legion: -20, regal_empire: -10, freelancer_underworld: 10 }
    },
    {
        id: 'earl_grey_explosion',
        title: "An Explosive End",
        description: "The Tea Leaf Syndicate enforcer, Earl Grey, was poisoned by the toad Roger's dagger. This caused him to grow to a massive size before exploding violently.",
        targets: ['roger', 'earl_grey'],
        effects: { tea_leaf_syndicate: -25, liberated_toads: 5 }
    },
    {
        id: 'archie_ice_knife',
        title: "Archie's Misfire",
        description: "Archie's attempt to use a powerful ice knife backfired, exploding in his hand and injuring himself, Bowser, FNG Remi, and Dan the Toad.",
        targets: ['archie', 'remi', 'bowser', 'dan'],
        effects: { koopa_troop: -5, liberated_toads: -10 }
    },
    {
        id: 'iron_thorn_killed',
        title: "A Crushing Blow",
        description: "Archie Miser brutally killed the Iron Legion enforcer, Iron Thorn, during the brawl on the Vigilance.",
        targets: ['archie', 'iron_legion'],
        effects: { iron_legion: -25, regal_empire: -10, freelancer_underworld: 5 }
    },
    {
        id: 'barrel_compartment_reveal',
        title: "The Barrel Secret",
        description: "The Iron Legion revealed to Humpik that the trafficked toads are hidden in secret compartments within the ship's barrels, using a mini-mushroom as a key.",
        targets: ['humpik', 'liberated_toads'],
        effects: { iron_legion: 5, liberated_toads: 10, the_unchained: 5 }
    },
    {
        id: 'iron_legion_ruse',
        title: "The Legion's Ruse",
        description: "An internal conflict within the Iron Legion boarding party was revealed to be a ruse, a successful feint to distract the party while other agents snuck past to pursue their own objectives.",
        targets: ['iron_legion'],
        effects: { freelancer_underworld: 5, rebel_clans: 5, regal_empire: 5 }
    }
];