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
        objective: "The infiltration of Fawful's Gala revealed a key lead—a secret hatch in the Princess’s chambers—but the alliance fractured. A subsequent 'loyalty test' mission led the team and Loyalist commanders into the sewers beneath Toad Town. They've found a potential route to the castle and a cryptic note, but the way is now blocked, and Toadette has deemed them failures. The team must find another way through the sewers and follow the trail of the conspiracy.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "A fragile truce was brokered between Kamek and Captain Toadette.",
        steps: [
            { id: 'step1', title: "Infiltrate the Madhouse", status: 'completed', description: "A joint Koopa-Loyalist team successfully infiltrated Fawful's Grand Gala at the occupied castle." },
            { id: 'step2', title: "Survive the Gala", status: 'completed', description: "The mission yielded a crucial lead from Chief Thornpaw about a secret hatch but ended in chaos. The Loyalist soldier Embercap was presumed dead, only to miraculously return, his ideals hardened by the experience." },
            { id: 'step3', title: "The Loyalty Test", status: 'completed', description: "Following Toadette's orders, the team joined Embercap and Mistveil on a mission into the sewers beneath the mayor's house. The chaotic mission, which involved illusory Iron Legion and Fawful Cultists, was revealed to be a test of loyalty. The team recovered a cryptic (and likely fake) note hinting at a larger conspiracy involving a 'Shadow Bloom Toad' and the 'Regal Airship'." },
            { id: 'step4', title: "The Blocked Path", status: 'active', description: "The sewer entrance has caved in, trapping the team. With Toadette and her forces gone, the team must now navigate the treacherous sewer system to find an alternate route back to the surface, or deeper towards the castle, while contending with the real dangers that lurk in the depths." },
            { id: 'step4a', title: "Shadow Accord Intelligence", status: 'active', description: "At the Capital Dinner, Green T offered Eager’s location in exchange for a Legion noble’s real heirloom ring. Insider schemes and plans to influence the Regal Airship emerged. Follow up on Eager’s lead and assess the Regal Airship’s vulnerabilities." },
            { id: 'step5', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};