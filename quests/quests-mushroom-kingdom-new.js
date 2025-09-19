// This file contains new "Request" and Side quests for the Mushroom Kingdom and surrounding areas.

export const NEW_MK_QUESTS = {
    'toadette_loyalty_test': {
        id: 'toadette_loyalty_test',
        title: "Toadette's Loyalty Test",
        type: 'side',
        category: 'Peach Loyalists',
        objective: "After seizing control of Toad Town, Captain Toadette put her new recruits—Embercap, Mistveil, and a group of liberated toads—through a brutal, unexpected loyalty test involving illusions, faked kidnappings, and a manufactured crisis in the sewers beneath the mayor's house to see if they had the resolve to die for her cause.",
        assignee: "Peach Loyalists",
        assigneeKey: 'peach_loyalists',
        status: "completed",
        motivation: "Toadette believes the only way to win is with soldiers who are completely dedicated and willing to make any sacrifice. This test was designed to weed out the weak and forge the rest into a hardened, unquestioning fighting force.",
        steps: [
            { id: 'step1', title: "The Sewer 'Mission'", status: 'completed', description: "The recruits were sent into the sewers beneath the mayor's house on a mission to investigate Iron Legion and Fawful cultist activity." },
            { id: 'step2', title: "Manufactured Chaos", status: 'completed', description: "The recruits faced a series of chaotic events: a faked kidnapping of Embercap by illusory Iron Legion soldiers, an attack by an illusory Fawful cultist, and a cave-in." },
            { id: 'step3', title: "The Note", status: 'completed', description: "The recruits recovered a planted note from the 'Fawful cultist' detailing a plot against the Regal Airship, a key piece of misdirection. The note reads: 'My Duty to the Fallen Throne: By the grace of Lord Fawful’s fury, I march through this filth! The Fallen Throne—Peach’s Castle, now his—calls me to serve. I must scout these sewers for a path to aid the Shadow Bloom Toad, that sly red-eyed brother. He awaits my vial of sludge (it slows foes by 40%—a gift from the master’s wrath!) to cripple the Regal Airship’s engines. The God Toad’s light guides us—soon the gala will rise from the throne’s ruins! If I fall, let this note burn with my zeal—death is but a spice in Fawful’s feast! —Brother Vilecap, Servant of the Fallen Throne'" },
            { id: 'step4', title: "The Final Confrontation", status: 'completed', description: "Toadette revealed the entire scenario was an elaborate illusion, including the 'death' of a toad, to test their resolve. She declared them failures, believing they were not yet ready to die for the cause." }
        ]
    },
};