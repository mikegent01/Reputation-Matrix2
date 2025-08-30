// This file contains 25 new "Request" quests for the Mushroom Kingdom and surrounding areas.
// These are designed to be found at specific locations on the map.

export const NEW_MK_QUESTS = {
    // #1 (MK)
    'request_mk_fawful_bots': {
        id: 'request_mk_fawful_bots',
        title: "Request: Scrap Metal Scramble",
        type: 'request',
        category: 'Requests',
        objective: "A notice from the Toadstool Guard in Toad Town offers a bounty for every Fawful-Bot circuit board recovered from the castle's outskirts. They need to study the technology and thin the enemy's numbers.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mk_toadtown'
    },
    // #2 (MK)
    'request_mk_toadette_letter': {
        id: 'request_mk_toadette_letter',
        title: "Request: A Strongly Worded Letter",
        type: 'request',
        category: 'Requests',
        objective: "A notice posted in the Loyalist Camp seeks a neutral courier to deliver a sealed, and reportedly very heavy, letter from Captain Toadette to Chancellor Toadsworth. High pay for speed and discretion.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mk_loyalist_camp'
    },
    // #3 (MK)
    'request_mk_kamek_tome': {
        id: 'request_mk_kamek_tome',
        title: "Request: Lost & Found Magic",
        type: 'request',
        category: 'Requests',
        objective: "A magical projection of Kamek appears at his outpost, offering a rare spell scroll to anyone who can find his misplaced 'Encyclopedia of Arcane Annoyances' lost somewhere on the Forgotten Battlefield.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mk_koopa_outpost'
    },
    // #4 (MK)
    'request_bw_wrench_quest': {
        id: 'request_bw_wrench_quest',
        title: "Request: My Favorite Wrench!",
        type: 'request',
        category: 'Requests',
        objective: "A frantic Koopa Troopa at Bowser's Castle has posted a reward for the recovery of his favorite wrench, which he dropped into the lava moat. He needs a 'fire-proof hero' to get it back.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_bw_bowsers_castle'
    },
    // #5 (MK)
    'request_ddd_oasis_hunt': {
        id: 'request_ddd_oasis_hunt',
        title: "Request: The Hidden Oasis",
        type: 'request',
        category: 'Requests',
        objective: "The elder of the Nomadimice at Dry Dry Outpost is seeking skilled trackers to find a legendary hidden oasis, their only hope for surviving the coming dry season. The reward is a share of the water and safe passage.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ddd_outpost'
    },
    // #6 (MK)
    'request_ww_lario_test_pilots': {
        id: 'request_ww_lario_test_pilots',
        title: "Request: Test Pilots Wanted!",
        type: 'request',
        category: 'Requests',
        objective: "A crudely painted sign at Lario's Scrapyard seeks 'brave' and 'expendable' volunteers to test his new 'Rocket-Powered Shopping Cart'. High pay, higher risk. All applicants must sign a waiver.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ww_lariosscrapyard'
    },
    // #7 (MK)
    'request_ydi_rare_fruit': {
        id: 'request_ydi_rare_fruit',
        title: "Request: A Culinary Quest",
        type: 'request',
        category: 'Requests',
        objective: "A Yoshi chef in Yoshi's Village needs a rare 'Glimmer-Berry' to complete his masterpiece for the annual fruit festival. The only Glimmer-Berry bush is in the middle of a Piranha Plant patch.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ydi_yoshivillage'
    },
    // #8 (MK)
    'request_fk_talking_hedges': {
        id: 'request_fk_talking_hedges',
        title: "Request: Botanical Annoyance",
        type: 'request',
        category: 'Requests',
        objective: "Prince Florian needs help. A Wonder Flower has transformed a field of sheep into sentient, sarcastic, talking hedges. He needs someone to convince them to turn back into sheep.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_fk_castle'
    },
    // #9 (MK)
    'request_si_cheep_cheep': {
        id: 'request_si_cheep_cheep',
        title: "Request: The Big Catch",
        type: 'request',
        category: 'Requests',
        objective: "A frantic Pianta chef in Delfino Plaza needs a rare, colossal 'Giga-Cheep' for his entry in the seafood festival. He's offering a lifetime supply of calamari to any who can catch one.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_si_delfino_plaza'
    },
    // #10 (MK)
    'request_bk_joke_book': {
        id: 'request_bk_joke_book',
        title: "Request: A Comedian's Crisis",
        type: 'request',
        category: 'Requests',
        objective: "A famous Beanish comedian in Beanbean Castle Town has lost his joke book in the treacherous Teehee Valley. He's offering a handsome reward and a custom-written roast for its safe return.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_bk_castletown'
    },
    // #11 (MK)
    'request_mc_card_shark': {
        id: 'request_mc_card_shark',
        title: "Request: Card Shark Investigation",
        type: 'request',
        category: 'Requests',
        objective: "A merchant in the Grand Bazaar claims his rival is using illusion magic to cheat at cards. He wants to hire a group to expose the cheater during the next high-stakes game.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mc_grand_bazaar'
    },
    // #12 (MK)
    'request_tn_dragon_problem': {
        id: 'request_tn_dragon_problem',
        title: "Request: Moo Moo Menace",
        type: 'request',
        category: 'Requests',
        objective: "The owner of Moo Moo Ranch is having trouble with a young, belligerent dragon who thinks the Moo Moos are spicy snacks. He needs someone to scare it off permanently.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_tn_moomooranch'
    },
    // #13 (MK)
    'request_me_treasure_hunt': {
        id: 'request_me_treasure_hunt',
        title: "Request: A Pirate's Life for Me!",
        type: 'request',
        category: 'Requests',
        objective: "A grizzled pirate captain in Rogueport is recruiting a crew to hunt for the legendary Sunken Treasure of Captain Keelhaul, lost somewhere in Castaway Bay. A share of the treasure is promised.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_me_rogueport'
    },
    // #14 (MK)
    'request_ck_jousting_champion': {
        id: 'request_ck_jousting_champion',
        title: "Request: Champion Needed",
        type: 'request',
        category: 'Requests',
        objective: "A knight in the Gilded Keep needs a champion to represent him in the upcoming jousting tournament, as he has a bad case of 'swamp-foot'. The winner's purse and glory await.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ck_gilded_keep'
    },
    // #15 (MK)
    'request_ys_blooper_menace': {
        id: 'request_ys_blooper_menace',
        title: "Request: Blooper Menace",
        type: 'request',
        category: 'Requests',
        objective: "The harbormaster of Port Yale is offering a bounty for clearing a nest of aggressive Giant Bloopers that has been disrupting the main shipping lane.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ys_port_yale'
    },
    // #16 (MK)
    'request_ps_glowing_coral': {
        id: 'request_ps_glowing_coral',
        title: "Request: Rare Ingredient Purchase",
        type: 'request',
        category: 'Requests',
        objective: "A notice from the Alchemists' Union in Port Prisma offers top coin for samples of rare, glowing coral from the magically-infused Coral Reef Sanctuary. Discretion is advised.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ps_port_prisma'
    },
    // #17 (MK)
    'request_wc_baking_sabotage': {
        id: 'request_wc_baking_sabotage',
        title: "Request: A Culinary Caper",
        type: 'request',
        category: 'Requests',
        objective: "The annual Great Cookie Bake-Off at the Cookie Crossroads has been sabotaged! Salt was swapped for sugar. The lead judge needs a discreet investigation to find the culprit before the festival is ruined.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_wc_cookie_crossroads'
    },
    // #18 (MK)
    'request_nbc_rogue_ai': {
        id: 'request_nbc_rogue_ai',
        title: "Request: De-Rez a Data Thief",
        type: 'request',
        category: 'Requests',
        objective: "A corporate client in Neo Bowser City's Underbelly Market needs a team of 'freelance security consultants' to track down a rogue AI who has stolen a valuable data chip and 'de-rez' it.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_nbc_underbelly_market'
    },
    // #19 (MK)
    'request_iio_penguin_diplomacy': {
        id: 'request_iio_penguin_diplomacy',
        title: "Request: Penguin Ambassador",
        type: 'request',
        category: 'Requests',
        objective: "The Penguin King at the colony near Ice Ice Outpost seeks a brave (and warm) ambassador to negotiate fishing rights with the local Iron Legion commander. The reward is a freshly-caught fish.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_iio_penguin_colony'
    },
    // #20 (MK)
    'request_bv_funky_test_pilot': {
        id: 'request_bv_funky_test_pilot',
        title: "Request: Test Pilot Needed!",
        type: 'request',
        category: 'Requests',
        objective: "Funky Kong needs a radical dude or dudette to test his new, highly experimental Barrel Jet. Must have a high tolerance for G-forces and explosions. Bananas included as part of payment.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_bv_funky_flights'
    },
    // #21 (MK)
    'request_sk_cheep_cheep_hunt': {
        id: 'request_sk_cheep_cheep_hunt',
        title: "Request: Elusive Submarine Bounty",
        type: 'request',
        category: 'Requests',
        objective: "A Koopa naval officer at the Sea Side Naval Base is offering a substantial reward for the capture of a particularly evasive Cheep Cheep-shaped submarine that has been spying on their fleet.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_sk_sea_land'
    },
    // #22 (MK)
    'request_ac_ghostly_delivery': {
        id: 'request_ac_ghostly_delivery',
        title: "Request: Ghostly Delivery",
        type: 'request',
        category: 'Requests',
        objective: "A nervous smuggler in Smuggler's Notch needs a package delivered to the ghost of the lonely lighthouse keeper at the Silent Lighthouse. The ghost only appears at midnight.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ac_smugglers_cove'
    },
    // #23 (MK)
    'request_bwds_hide_and_seek': {
        id: 'request_bwds_hide_and_seek',
        title: "Request: A Royal Game",
        type: 'request',
        category: 'Requests',
        objective: "King Boo is bored. He's posted a spectral notice on the door of his mansion, offering a rare gem to anyone who can beat him in a game of hide-and-seek. Cheating is encouraged.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_bw_king_boos_mansion'
    },
    // #24 (MK)
    'request_ww_stolen_art': {
        id: 'request_ww_stolen_art',
        title: "Request: Information Wanted",
        type: 'request',
        category: 'Requests',
        objective: "Detective Penny has a notice up at the Diamond City Crossing: information leading to the recovery of a priceless sculpture stolen from the Goodstyle Artisans by Wario's cronies. Reward offered.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ww_diamondcitypath'
    },
    // #25 (MK)
    'request_mp_shy_guy_career_change': {
        id: 'request_mp_shy_guy_career_change',
        title: "Request: Career Counseling",
        type: 'request',
        category: 'Requests',
        objective: "The Shy Guy bandits at Shy Guy's Crossing are tired of the bandit life. They've posted a notice seeking a 'career coach' to teach them a new, more profitable, and less dangerous trade, like basket-weaving or accounting.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mp_shy_guy_crossing'
    }
};
