
// This file contains all main story quests for the campaign.
export const MAIN_QUESTS = {
    'syrup_staff_heist': {
        id: 'syrup_staff_heist',
        title: "The Staff of Chaos",
        type: 'main',
        category: 'Main Story',
        objective: "Thwart Captain Syrup’s attempt to seize X.O.’s staff, a powerful arcane artifact, amid the unfolding chaos of the Mushroom Kingdom Civil War. The staff holds residual magic that could tip the balance of power if it falls into the wrong hands.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "completed",
        start_condition: "This quest began after the party took control of the Vigilance.",
        steps: [
            { id: 'step1', title: "Ally with Lario", status: 'completed', description: "The party supported Lario’s coup, securing the Regal Airship and establishing him as captain, granting them a mobile base to navigate the civil war." },
            { id: 'step2', title: "Recover X.O.’s Staff", status: 'completed', description: "During the stormy descent, the Sword Toad successfully snatched the staff mid-air, preventing its loss and making it a focal point of the quest." },
            { id: 'step3', title: "Confront Captain Syrup", status: 'completed', description: "The party found themselves in a tense standoff with Captain Syrup. The confrontation was interrupted by multiple outside forces, including the Iron Legion." },
            { id: 'step4', title: "Repower the Vigilance", status: 'completed', description: "Overriding the wishes of Dan the Toad, Archie ordered the staff to be integrated with the ship's power core. The Vigilance is now operational again, but the staff is a constant target for factions like the Crimson Fleet and Iron Legion." }
        ],
        finalDecision: { description: "The ship is powered, but at the cost of Dan's trust. The staff's immense power now acts as a beacon, drawing unwanted attention." }
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
        title: "Who Killed Princess Peach?",
        type: 'main',
        category: 'Main Story',
        objective: "The death of Princess Peach plunged the kingdom into chaos. With Bowser gone, the Koopa Troop and Peach Loyalists have formed a fragile truce to investigate the true circumstances of her demise by infiltrating Fawful's Gala.",
        assignee: "Koopa Troop & Peach Loyalists",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "A fragile truce was brokered between Kamek and Captain Toadette.",
        steps: [
            { id: 'step1', title: "Infiltrate Peach's Castle", status: 'completed', description: "A recon team of Koopa and Paratroopas teamed up with Toadette's forces (Embercap and Mistveil) and successfully infiltrated the castle during Fawful's Grand Gala." },
            { id: 'step2', title: "Survive the Gala", status: 'completed', description: "The infiltration gathered intelligence but ended in chaos. The team witnessed the 'God Toad', a being with temporal power, who seemingly killed and then revived the Loyalist soldier Embercap. In the confusion, Embercap escaped with the aid of a mysterious manticore rider, and is no longer presumed dead. The key lead remains: Chief Thornpaw of the Rakasha revealed a secret hatch in the Princess's chambers." },
            { id: 'step3', title: "Find the Secret Hatch", status: 'active', description: "The joint operation is in jeopardy. Captain Toadette has shifted her strategy, now focusing on capturing Toad Town rather than a direct assault on Fawful's castle. This has created a schism with Embercap. The party must navigate this new political landscape to find a way back into the castle and locate the hidden hatch." },
            { id: 'step4', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};