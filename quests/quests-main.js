// This file contains all main story quests for the campaign.
export const MAIN_QUESTS = {
    'retrieve_the_staff': {
        id: 'retrieve_the_staff',
        title: "The Brandished Staff",
        type: 'main',
        category: 'Main Story',
        objective: "During the chaos of the Imperial boarding, Iron Legion forces managed to seize X.O.'s staff. After a brief struggle involving Captain Syrup, the Legion applied a magical 'Iron Binding' seal to the artifact before it was reinstalled into the Vigilance's power core. The ship is operational but crippled, and the Legion now has a potential backdoor into its systems. The party must find a way to break the seal.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        motivation: "The ship is limping along on half power, and the Iron Binding is an unknown piece of magitek that could allow the Legion to control or disable the Vigilance remotely. It's a massive security risk that must be neutralized to ensure the party's autonomy and safety.",
        steps: [
            { id: 'step1', title: "Assess the Seal", status: 'completed', description: "The staff is back in the core, but it's been tampered with. Waluigi and Markop's Rakasha stone have identified the modification as an 'Iron Binding' seal, which chokes the staff's power output to 50%." },
            { id: 'step2', title: "Find a Counter-Measure", status: 'active', description: "The binding is a fusion of magic and technology. The party must find an expert who can break it. Potential candidates include a Mages' Guild 'Innovator', a high-level Ratchet Raider Mekboy, or a Rakasha shaman who understands this 'fancy little trick'." },
            { id: 'step3', title: "Purge the Seal", status: 'locked', description: "Apply the counter-measure and purge the Iron Legion's seal from the staff, restoring full power and security to the Vigilance." }
        ]
    },
    'artifacts_of_balance': {
        id: 'artifacts_of_balance',
        title: "The Artifacts of Balance",
        type: 'main',
        category: 'Main Story',
        objective: "Recover the Star of Radiance, Fire Crystal, and Mushroom of Life—three legendary artifacts that hold the power to restore balance to the world. However, the journey will be fraught with peril, as a powerful evil toad has obtained the Star of Radiance, ascending to godhood.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "This legendary artifact, known for its celestial energy, has already fallen into the hands of the Evil Toad. He has absorbed its power, becoming something far beyond mortal comprehension. His influence has begun warping reality itself—skies twist with unnatural storms, the land cracks, and the laws of magic shift unpredictably.", options: ["Find a way to weaken the Toad-God before challenging him directly.", "Seek out an ancient force that may counterbalance the power of the Star.", "Risk a head-on battle in his newly formed celestial domain."] },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult. They believe the crystal to be the heart of their god.", options: ["Infiltrate the cult and steal the crystal from within.", "Slay the dragon and take the crystal by force.", "Bargain with the dragon—what does an immortal beast truly desire?"] },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact rests within the heart of a cursed forest that distorts time, protected by ancient beings. The party is currently airborne; they will need to convince Lario to fly the Vigilance there, find another way down to the surface and travel, or wait until their journey brings them closer to the Wilderlands.", options: ["Pass the guardians' trials—tests of wisdom, strength, and sacrifice.", "Use magic or forbidden means to forcefully take the Mushroom.", "Bargain with the Elders—perhaps they desire something in return."] }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made. Use them to restore balance, breaking the Toad-God’s power and healing the realm, or use them for yourself, risking corruption but ascending to a higher form of existence." }
    },
    'who_killed_peach': {
        id: 'who_killed_peach',
        title: "The Princess's Lasting Shadow",
        type: 'main',
        category: 'Main Story',
        objective: "The infiltration of Fawful's Gala revealed a key lead—a secret hatch in the Princess's chambers—but also fractured the Koopa-Loyalist alliance. Captain Toadette has abandoned the direct assault in favor of a brutal war of attrition, and her once-noble commander, Embercap, has embraced this ruthless new cause. The party must now navigate this treacherous political landscape to find a way back into the castle and uncover the truth of Peach's death.",
        assignee: "Koopa Troop & Peach Loyalists",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "A fragile truce was brokered between Kamek and Captain Toadette.",
        steps: [
            { id: 'step1', title: "Infiltrate the Madhouse", status: 'completed', description: "A joint Koopa-Loyalist team successfully infiltrated Fawful's Grand Gala at the occupied castle." },
            { id: 'step2', title: "Survive the Gala", status: 'completed', description: "The mission yielded a crucial lead from Chief Thornpaw about a secret hatch but ended in chaos. The Loyalist soldier Embercap was presumed dead, only to miraculously return, his ideals hardened by the experience. The fragile truce is now on the brink of collapse." },
            { id: 'step3', title: "A Fractured Alliance", status: 'active', description: "The path back to the castle is blocked. Captain Toadette is focused on her new war for Toad Town, and Embercap, the only one who knows the hatch's general location, is now a ruthless commander. The party must find a way to re-secure his cooperation or find an alternative route into Fawful's fortress." },
            { id: 'step4', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};