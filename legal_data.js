// legal_data.js

export const LEGAL_DATA = {
    traditions: {
        martial: [
            { id: 'trial_by_combat', name: 'Trial by Combat', icon: '⚔️', description: 'Major disputes and criminal accusations are settled through a formal, often lethal, duel. The victor is considered to be in the right, either by divine judgment or sheer might.', followers: ['iron_legion', 'rakasha_clans', 'moonfang_pack', 'koopa_troop'] },
            { id: 'war_satiety', name: 'War Satiety', icon: '🕊️', description: 'After a major victory, a period of peace is declared to be non-negotiable to allow for celebration and rebuilding. To continue aggression during this time is seen as dishonorable and wasteful.', followers: ['koopa_troop', 'dk_crew', 'kremling_krew'] },
            { id: 'ancestral_weapons', name: 'Ancestral Weapons', icon: '🔨', description: 'Weapons passed down through generations are considered sacred extensions of a warrior\'s soul. To lose one is a great shame; to wield one is a great honor.', followers: ['rakasha_clans', 'knights_of_the_gilded_lily', 'kingdoms_of_the_dwarves'] },
            { id: 'duty_and_vigilance', name: 'Duty and Vigilance', icon: '🛡️', description: 'A deeply ingrained cultural imperative to stand guard against ancient evils. This duty often outweighs personal desires or even feudal obligations, compelling warriors to serve on lonely watchtowers and in forgotten lands.', followers: ['kingdom_of_gondor', 'elves_of_lindon', 'silver_flame'] },
        ],
        social: [
            { id: 'hospitality', name: 'Sacred Right of Hospitality', icon: '🤝', description: 'Offering food and shelter to a traveler is a sacred duty. Harming a guest under one\'s roof is a grave taboo, as is a guest harming their host.', followers: ['mushroom_regency', 'rakasha_clans', 'beanbean_kingdom', 'yoshi_clans', 'kingdom_of_gondor', 'elves_of_lindon', 'kingdom_of_rohan'] },
            { id: 'neutral_ground', name: 'Neutral Ground', icon: '⚖️', description: 'Certain locations (often taverns or ancient sites) are declared neutral territory where all factions must lay down their arms and grudges. Violating this truce brings universal condemnation.', followers: ['freelancer_underworld', 'unaligned'] },
            { id: 'gift_giving', name: 'Elaborate Gift-Giving', icon: '🎁', description: 'Political and personal relationships are maintained through a complex system of symbolic gift-giving. The value and meaning of a gift can convey respect, insult, or a declaration of intent.', followers: ['regal_empire', 'onyx_hand', 'goodstyle_artisans', 'elves_of_lindon', 'kingdoms_of_the_dwarves'] },
            { id: 'storytelling_pact', name: 'The Storytelling Pact', icon: '📜', description: 'A person\'s story is their most valuable possession. In certain inns and campfires, anyone who declares the Storytelling Pact may speak their truth without interruption or violence, even their deepest secrets.', followers: ['freelancer_underworld', 'the_unchained', 'rebel_clans'] },
            { id: 'feudal_oaths', name: 'Feudal Oaths', icon: '📜', description: 'Oaths of fealty from a subordinate to a lord are considered magically and spiritually binding. Breaking such an oath is the highest form of treason and results in universal scorn and often, a swift execution.', followers: ['regal_empire', 'iron_legion', 'knights_of_the_gilded_lily', 'kingdom_of_gondor'] },
            { id: 'regal_codes', name: 'Regal Codes', icon: '🏛️', description: 'A complex web of Imperial bureaucracy and social etiquette. Navigating the proper channels and showing correct deference is often more important than the letter of the law itself. Procedure is paramount.', followers: ['regal_empire'] },
            { id: 'liberation_pact', name: 'The Liberation Pact', icon: '🕊️', description: 'A recent but powerful social contract, particularly within the Mushroom Regency. It states that any escaped slave seeking sanctuary must be granted it, and that aiding in their liberation is a noble act. This is a direct ideological challenge to Imperial and slaver factions.', followers: ['mushroom_regency', 'liberated_toads', 'the_unchained'] },
            { id: 'oath_binding', name: 'The Binding of an Oath', icon: '✋', description: 'An oath is a sacred, often magically-binding promise. An oathbreaker is considered the most dishonorable of beings and may suffer a fate worse than death, sometimes becoming a spirit bound to the world until their oath is fulfilled.', followers: ['kingdoms_of_the_dwarves', 'kingdom_of_gondor', 'elves_of_lindon'] },
            { id: 'veneration_of_the_west', name: 'Veneration of the West', icon: '⭐', description: 'A deep cultural and spiritual reverence for the Valar and the Undying Lands in the uttermost West. This is not an organized religion, but a pervasive sense of hope and respect for a higher, unfallen order.', followers: ['kingdom_of_gondor', 'elves_of_lindon'] },
        ],
        arcane: [
            { id: 'arcane_neutrality', name: 'Arcane Neutrality', icon: '🔮', description: 'The pursuit of knowledge is paramount. Magic-users are expected to remain neutral in mundane political affairs, with their only loyalty being to the advancement and preservation of the arcane arts.', followers: ['mages_guild'] },
            { id: 'ley_line_stewardship', name: 'Ley Line Stewardship', icon: '✨', description: 'Nexus points of magical energy are considered sacred and common ground. No single faction may claim ownership, and all must work to maintain their stability lest they unleash catastrophic magical storms.', followers: ['mages_guild', 'rakasha_clans'] },
            { id: 'necromantic_taboo', name: 'The Necromantic Taboo', icon: '💀', description: 'The animation of the dead is considered a grave offense against the natural order and the gods. Practitioners of necromancy are hunted and purged without mercy.', followers: ['silver_flame', 'mushroom_regency', 'kingdom_of_gondor'] },
        ],
        underworld: [
            { id: 'thieves_honor', name: 'Thieves\' Honor', icon: '🎭', description: 'A loose code of conduct that prevents the criminal underworld from collapsing into total chaos. It generally involves not stealing from other thieves and not bringing official attention (the \'heat\') to shared territories.', followers: ['freelancer_underworld', 'ratchet_raiders', 'crimson_fleet'] },
            { id: 'black_market_etiquette', name: 'Black Market Etiquette', icon: '🤫', description: 'In black markets, anonymity is paramount. One does not ask for names or histories. The deal is the only thing that matters. Haggling is expected, but welshing on a deal is a death sentence.', followers: ['freelancer_underworld', 'wario_land', 'toad_gang'] },
            { id: 'unspoken_contract', name: 'The Unspoken Contract', icon: '📜', description: 'Among information brokers, a favor is a binding debt, and trust is the only currency that matters. Written contracts are for amateurs; true professionals operate on a web of mutual understanding and the threat of mutual destruction.', followers: ['freelancer_underworld'] },
            { id: 'tinkers_accord', name: 'The Tinker\'s Accord', icon: '🛠️', description: 'An unwritten rule among goblin mechanics. You don\'t touch another tinker\'s "work-in-progress" without permission. Tools can be borrowed, but must be returned in better condition. The best scrap from a salvage site goes to the one who caused the explosion.', followers: ['ratchet_raiders'] },
        ],
        internet: [
            { id: 'information_freedom', name: 'Information Freedom', icon: '🌐', description: 'A core belief that all data should be free and accessible to all. Adherents actively work to break down firewalls, decrypt censored data, and expose the secrets of powerful corporations and governments.', followers: ['hacktivist_collectives'] },
            { id: 'anonymity_code', name: 'The Anonymity Code', icon: '👤', description: 'In many circles of the web, a user\'s real-world identity is irrelevant and actively discouraged from being shared. An individual is judged solely by their digital actions and contributions. To \'doxx\' someone (reveal their identity) is the ultimate crime.', followers: ['cosmic_jesters', 'hacktivist_collectives'] },
        ]
    },
    regional_traditions: {
        mushroom_kingdom_full: ['hospitality', 'gift_giving', 'necromantic_taboo', 'liberation_pact'],
        midlands_full: ['feudal_oaths', 'trial_by_combat', 'ancestral_weapons', 'regal_codes'],
        middle_earth_full: ['hospitality', 'oath_binding', 'gift_giving', 'duty_and_vigilance', 'ancestral_weapons', 'veneration_of_the_west'],
        internet_full: ['information_freedom', 'anonymity_code', 'thieves_honor']
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
        },
        'poi_me_dunlending_camp': {
            summary: 'The Dunlendings follow a harsh code where strength is law and old grudges are sacred duties. Disputes are settled by the blade, and leadership is held by the strongest warrior.',
            traditions: ['trial_by_combat', 'ancestral_weapons']
        }
    }
};