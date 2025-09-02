// legal_data.js

export const LEGAL_DATA = {
    traditions: {
        martial: [
            { id: 'trial_by_combat', name: 'Trial by Combat', icon: '⚔️', description: 'Major disputes and criminal accusations are settled through a formal, often lethal, duel. The victor is considered to be in the right, either by divine judgment or sheer might.', followers: ['iron_legion', 'rakasha_clans', 'moonfang_pack', 'koopa_troop'] },
            { id: 'war_satiety', name: 'War Satiety', icon: '🕊️', description: 'After a major victory, a period of peace is declared to be non-negotiable to allow for celebration and rebuilding. To continue aggression during this time is seen as dishonorable and wasteful.', followers: ['koopa_troop', 'dk_crew', 'kremling_krew'] },
            { id: 'ancestral_weapons', name: 'Ancestral Weapons', icon: '🔨', description: 'Weapons passed down through generations are considered sacred extensions of a warrior\'s soul. To lose one is a great shame; to wield one is a great honor.', followers: ['rakasha_clans', 'knights_of_the_gilded_lily'] },
        ],
        social: [
            { id: 'hospitality', name: 'Sacred Right of Hospitality', icon: '🤝', description: 'Offering food and shelter to a traveler is a sacred duty. Harming a guest under one\'s roof is a grave taboo, as is a guest harming their host.', followers: ['mushroom_regency', 'rakasha_clans', 'beanbean_kingdom', 'yoshi_clans'] },
            { id: 'neutral_ground', name: 'Neutral Ground', icon: '⚖️', description: 'Certain locations (often taverns or ancient sites) are declared neutral territory where all factions must lay down their arms and grudges. Violating this truce brings universal condemnation.', followers: ['freelancer_underworld', 'unaligned'] },
            { id: 'gift_giving', name: 'Elaborate Gift-Giving', icon: '🎁', description: 'Political and personal relationships are maintained through a complex system of symbolic gift-giving. The value and meaning of a gift can convey respect, insult, or a declaration of intent.', followers: ['regal_empire', 'onyx_hand', 'goodstyle_artisans'] },
            { id: 'storytelling_pact', name: 'The Storytelling Pact', icon: '📜', description: 'A person\'s story is their most valuable possession. In certain inns and campfires, anyone who declares the Storytelling Pact may speak their truth without interruption or violence, even their deepest secrets.', followers: ['freelancer_underworld', 'the_unchained', 'rebel_clans'] },
        ],
        arcane: [
            { id: 'arcane_neutrality', name: 'Arcane Neutrality', icon: '🔮', description: 'The pursuit of knowledge is paramount. Magic-users are expected to remain neutral in mundane political affairs, with their only loyalty being to the advancement and preservation of the arcane arts.', followers: ['mages_guild'] },
            { id: 'ley_line_stewardship', name: 'Ley Line Stewardship', icon: '✨', description: 'Nexus points of magical energy are considered sacred and common ground. No single faction may claim ownership, and all must work to maintain their stability lest they unleash catastrophic magical storms.', followers: ['mages_guild', 'rakasha_clans'] },
            { id: 'necromantic_taboo', name: 'The Necromantic Taboo', icon: '💀', description: 'The animation of the dead is considered a grave offense against the natural order and the gods. Practitioners of necromancy are hunted and purged without mercy.', followers: ['silver_flame', 'mushroom_regency'] },
        ],
        underworld: [
            { id: 'thieves_honor', name: 'Thieves\' Honor', icon: '🎭', description: 'A loose code of conduct that prevents the criminal underworld from collapsing into total chaos. It generally involves not stealing from other thieves and not bringing official attention (the \'heat\') to shared territories.', followers: ['freelancer_underworld', 'ratchet_raiders', 'crimson_fleet'] },
            { id: 'black_market_etiquette', name: 'Black Market Etiquette', icon: '🤫', description: 'In black markets, anonymity is paramount. One does not ask for names or histories. The deal is the only thing that matters. Haggling is expected, but welshing on a deal is a death sentence.', followers: ['freelancer_underworld', 'wario_land', 'toad_gang'] },
        ]
    },
    regional_traditions: {
        mushroom_kingdom_full: ['hospitality', 'gift_giving', 'necromantic_taboo'],
        midlands_full: ['feudal_oaths', 'trial_by_combat', 'ancestral_weapons'],
        the_internet: ['information_freedom', 'anonymity_code', 'thieves_honor']
    },
    poi_traditions: {
        'poi_lw_crossroads_inn': {
            summary: 'The Crossroads Inn operates under a strict, ancient code of neutrality enforced by its belligerent innkeeper.',
            traditions: ['neutral_ground', 'storytelling_pact']
        },
        'poi_mk_starhill': {
            summary: 'Star Hill is considered sacred ground by all Mushroom Kingdom factions, a place where conflicts are set aside.',
            traditions: ['neutral_ground']
        },
        'poi_bw_bowsers_castle': {
            summary: "Bowser's Castle is the ultimate expression of the Koopa King's might. All disputes within its walls are settled by a direct challenge to the authority in question.",
            traditions: ['trial_by_combat']
        },
        'poi_tg_bloodmoon_altar': {
            summary: "This ancient altar is the final court of the werewolves. The most serious transgressions against the pack are judged here in a fight to the death under the full moon.",
            traditions: ['trial_by_combat']
        }
    }
};