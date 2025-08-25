// This file contains all quest data for the campaign.
// Status can be: 'active', 'available', 'completed', 'failed', 'hidden'
// Step status can be: 'active', 'completed', 'locked'

export const QUEST_DATA = {
    'syrup_staff_heist': {
        id: 'syrup_staff_heist',
        title: "The Staff of Chaos",
        objective: "Thwart Captain Syrup’s attempt to seize X.O.’s staff, a powerful arcane artifact, amid the unfolding chaos of the Mushroom Kingdom Civil War. The staff holds residual magic that could tip the balance of power if it falls into the wrong hands.",
        assignee: "Full Party (Current)",
        status: "completed",
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
        objective: "Recover the Star of Radiance, Fire Crystal, and Mushroom of Life—three legendary artifacts that hold the power to restore balance to the world. However, the journey will be fraught with peril, as a powerful evil toad has obtained the Star of Radiance, ascending to godhood.",
        assignee: "Full Party",
        status: "active",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "This legendary artifact, known for its celestial energy, has already fallen into the hands of the Evil Toad. He has absorbed its power, becoming something far beyond mortal comprehension. His influence has begun warping reality itself—skies twist with unnatural storms, the land cracks, and the laws of magic shift unpredictably.", options: ["Find a way to weaken the Toad-God before challenging him directly.", "Seek out an ancient force that may counterbalance the power of the Star.", "Risk a head-on battle in his newly formed celestial domain."] },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult. They believe the crystal to be the heart of their god.", options: ["Infiltrate the cult and steal the crystal from within.", "Slay the dragon and take the crystal by force.", "Bargain with the dragon—what does an immortal beast truly desire?"] },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact is said to have the power to restore anything to life. It rests within the heart of a cursed forest that distorts time, protected by ancient beings who test all who seek the relic.", options: ["Pass the guardians' trials—tests of wisdom, strength, and sacrifice.", "Use magic or forbidden means to forcefully take the Mushroom.", "Bargain with the Elders—perhaps they desire something in return."] }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made. Use them to restore balance, breaking the Toad-God’s power and healing the realm, or use them for yourself, risking corruption but ascending to a higher form of existence." }
    },
    'who_killed_peach': {
        id: 'who_killed_peach',
        title: "Who Killed Princess Peach?",
        objective: "The death of Princess Peach plunged the kingdom into chaos. With Bowser gone, the Koopa Troop and Peach Loyalists have formed a fragile truce to investigate the true circumstances of her demise by infiltrating Fawful's Gala.",
        assignee: "Koopa Troop & Peach Loyalists",
        status: "active",
        steps: [
            { id: 'step1', title: "Infiltrate Peach's Castle", status: 'completed', description: "A recon team of Koopa and Paratroopas teamed up with Toadette's forces (Embercap and Mistveil) and successfully infiltrated the castle during Fawful's Grand Gala." },
            { id: 'step2', title: "Gather Clues from the Gala", status: 'completed', description: "The recon team gathered significant intelligence. They witnessed Fawful's monologue about using prisoners and 'fury tentacles' to power the ship, and noted the presence of the 'Evil Toad God.' Most critically, they made contact with Chief Thornpaw of the Rakasha, who revealed a secret past with the Princess and the existence of a secret hatch in her chambers." },
            { id: 'step3', title: "Investigate the Secret Hatch", status: 'active', description: "Following Chief Thornpaw's explosive lead, the next step is to find a way to access Princess Peach's private chambers within the occupied castle and locate this hidden hatch. What secrets does it protect?" },
            { id: 'step4', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
    'war_of_blood_and_moon': {
        id: 'war_of_blood_and_moon',
        title: "The War of Blood and Moon",
        objective: "Resolve the civil war between Vampires and Werewolves, each claiming to be the rightful rulers after a brutal conflict destroyed their homeland.",
        assignee: "Full Party",
        status: "available",
        steps: [
            { id: 'step1', title: "Unraveling the War’s Origins", status: 'active', description: "Both sides have vastly different stories. The Vampires claim they were healers attacked without provocation. The Werewolves claim they were mistreated and experimented on. Investigate both perspectives by gathering evidence from ruins, old records, and hidden survivors." },
            { id: 'step2', title: "The Vampire Perspective – The City of Lost Blood", status: 'locked', description: "The displaced vampires live in exile, divided between diplomats who seek peace and warlords who want to revenge.", options: ["Help them gather forces to retake the city.", "Convince them to negotiate, but that requires something to bargain with."] },
            { id: 'step3', title: "The Werewolf Perspective – The Shadow Throne", status: 'locked', description: "The werewolves ruling the city have begun their own medical experiments to create super-soldiers. However, some werewolves regret the war.", options: ["Expose the werewolves’ experiments to weaken their hold.", "Assist them in solidifying their power."] },
            { id: 'step4', title: "The Wedding That Started It All", status: 'locked', description: "A forgotten survivor of the Vampire-Werewolf wedding still lives, holding the key to the truth. Finding them could shift the entire war—was the wedding a betrayal or a hope for peace?" }
        ]
    },
    'call_of_the_pack': {
        id: 'call_of_the_pack',
        title: "The Call of the Pack",
        objective: "Meet Gavric Ironfang, the alpha of Frostclaw Stronghold, and prove your worth to the werewolves. They will not trust outsiders easily—you must earn your place among them or be treated as prey.",
        assignee: "Markop",
        status: "available",
        steps: [
            { id: 'step1', title: "Reaching Frostclaw Stronghold", status: 'active', description: "The journey to Frostclaw Stronghold is treacherous. The path up Dragon Mountain is plagued by ice storms, hidden traps, and vampire scouts. You were ambushed by a werewolf warband but proved your strength.", options: ["Fight back and prove yourself through combat.", "Use persuasion or knowledge of werewolf customs.", "Reveal a shared enemy."] },
            { id: 'step2', title: "The Trial of the Moon", status: 'active', description: "Gavric Ironfang does not trust outsiders. To earn his favor, you must complete the Trial of the Moon, a sacred werewolf ritual that tests your strength, cunning, and loyalty.", options: ["The Hunt: Track and slay a rogue vampire.", "The Gauntlet: Survive a brutal test of endurance in the Blizzard Arena.", "The Pact: Enter the Dreaming Caves and undergo a vision trial."] },
            { id: 'step3', title: "A War on Two Fronts", status: 'locked', description: "If you pass the trial, Gavric reveals a growing threat. A vampire lord named Varic Duskborn is leading an attack on Ravencreek. You must choose your role in the battle.", options: ["Lead a squad of werewolves in a surprise raid.", "Defend a sacred werewolf shrine.", "Spy on the vampires to gain intel."] }
        ]
    },
    'blood_ties': {
        id: 'blood_ties',
        title: "Blood Ties",
        objective: "Meet Lady Elowen at Fairth’s Retreat and uncover the vampires’ perspective on the war.",
        assignee: "Archie",
        status: "available",
        steps: [
            { id: 'step1', title: "Arrival at Fairth’s Retreat", status: 'active', description: "Unlike the werewolves, the vampires of Fairth’s Retreat do not rely on brute force. The journey involves navigating misty waters. Upon arrival, you are greeted by Veylen Nightwhisper, a vampire noble who acts as a gatekeeper.", options: ["A game of words to test your honesty.", "A knowledge test of vampire history.", "A minor task to prove your usefulness."] },
            { id: 'step2', title: "Lady Elowen’s Offer", status: 'locked', description: "Lady Elowen is elegant and seemingly benevolent. She offers a different perspective on the war and asks for your help in preserving vampire culture." },
            { id: 'step3', title: "The Shadowed Library", status: 'locked', description: "She tasks you with recovering a forbidden text from the ruins of Edgeshade. The ruins are haunted by restless spirits and something far darker." },
            { id: 'step4', title: "A Dark Choice", status: 'locked', description: "When you return, Lady Elowen reveals the text you retrieved contains a forbidden ritual that could turn the tide of war.", options: ["Help her use the ritual.", "Destroy the text.", "Steal the knowledge for yourself."] }
        ]
    },
     'rakasha_request': {
        id: 'rakasha_request',
        title: "The Rakasha's Request",
        objective: "Chief Thornpaw has sensed a corruption spreading from a nearby grove. He has asked Dan, as part of his training, to investigate and cleanse it.",
        assignee: "Dan",
        status: "available",
        steps: [
            { id: 'step1', title: "Investigate the Whispering Grove", status: 'active', description: "Travel to the nearby grove and search for signs of the unnatural corruption Thornpaw spoke of." },
            { id: 'step2', title: "Identify the Source", status: 'locked', description: "Find the epicenter of the blight and determine what foul magic or creature is causing it." },
            { id: 'step3', title: "Perform the Cleansing Ritual", status: 'locked', description: "Using the teachings of the Rakasha, perform the ritual to purify the land and restore its balance." }
        ]
    },
    'pay_bounty': {
        id: 'pay_bounty',
        title: "Pay Off the Bounty",
        objective: "Clear your name and the bounty on your head by dealing with a murder committed by one of your party members. Decide whether to pay the fine to avoid jail or take a risk and fight for freedom.",
        assignee: "Full Party",
        status: "completed",
        steps: [
            { id: 'step1', title: "Investigate the Murder", status: 'completed', description: "A shocking revelation came to light: one of your party members was accused of murder. The scene was investigated." },
            { id: 'step2', title: "Confront the Accused", status: 'completed', description: "The accused party member was confronted and their motives were understood." },
            { id: 'step3', title: "Pay the Fine", status: 'completed', description: "The law in Ravencreek demands a decision. A hefty fine was paid to clear the bounty and absolve the party member." }
        ]
    },
    'wario_funeral': {
        id: 'wario_funeral',
        title: "Solve the Murder Mystery at Wario’s Funeral",
        objective: "Investigate Wario’s strange funeral, where two identical robot versions of him have been found. As the mystery unfolds, a party member is detained by a detective, and you must act quickly to save them.",
        assignee: "Full Party",
        status: "failed",
        steps: [
            { id: 'step1', title: "Examine the Graveyard Scene", status: 'completed', description: "The strange scene at Wario’s funeral was investigated. Clues were collected from the two robot bodies." },
            { id: 'step2', title: "Interview the Townsfolk", status: 'completed', description: "Suspicious characters were interviewed, but gave conflicting reports." },
            { id: 'step3', title: "The Detective Arrives", status: 'failed', description: "A detective arrived and detained a member of the party. The trail went cold before they could be freed." }
        ]
    },
    'mid_flyare_cure': {
        id: 'mid_flyare_cure',
        title: "Obtain the Ingredients for the Mid-Flyare Cure Potion",
        objective: "Gather rare ingredients to craft the Mid-Flyare Cure Potion, including the elusive Ice Crystal.",
        assignee: "Full Party",
        status: "hidden",
        steps: [
            { id: 'step1', title: "Search for the Ice Crystal in Ravencreek", status: 'locked', description: "Explore various potential locations where the Ice Crystal might be hidden.", options: ["Beneath the icy waters of the slow-moving river.", "Inside a forgotten cellar of a timber-framed building.", "Behind the ivy-covered walls of Veilwood Spa."] },
            { id: 'step2', title: "Discover the Ice Toad’s Role", status: 'locked', description: "The Ice Toad guards the crystal. As you near the crystal, be prepared to confront the creature once its true role becomes clear." },
            { id: 'step3', title: "Solve the Final Puzzle to Secure the Crystal", status: 'locked', description: "After dealing with the Ice Toad, you must solve a final riddle or puzzle in order to claim the crystal." }
        ]
    },
    'dan_staffs_burden': {
        id: 'dan_staffs_burden',
        title: "The Staff's Legacy",
        objective: "Dan feels a deep unease about the staff powering the ship. Using the 'Mushroom Kingdom History, Vol. III' and consulting with Markop, he must uncover the potential dangers and history of such powerful artifacts to determine if it's a blessing or a curse.",
        assignee: "Dan",
        status: "available",
        steps: [
            { id: 'step1', title: "Study the Histories", status: 'active', description: "Read through 'Mushroom Kingdom History, Vol. III' for any mention of X.O., reality-bending artifacts, or similar events." },
            { id: 'step2', title: "Seek Moral Counsel", status: 'locked', description: "Speak with his mentor, Markop, about the morality of using such a powerful and potentially dangerous object to power their home." },
            { id: 'step3', title: "Confront the Reckless", status: 'locked', description: "Question Archie about his knowledge of the staff and the magi-tech principles he used to integrate it so recklessly." },
            { id: 'step4', title: "A Troubling Vision", status: 'locked', description: "Through a combination of study and Rakasha meditation, receive a cryptic vision about the staff's true origins or purpose." }
        ]
    },
    'lee_batten_hatches': {
        id: 'lee_batten_hatches',
        title: "Koopa-Style Command",
        objective: "With a small, untrained crew on a damaged airship, Toad Lee must use the recovered 'Koopa Troop Tactics' manual to devise an effective, if unconventional, defensive strategy for the Vigilance.",
        assignee: "Toad Lee",
        status: "available",
        steps: [
            { id: 'step1', title: "Read the Manual", status: 'active', description: "Study the 'Koopa Troop Tactics' guide to understand their principles of fortification, discipline, and unconventional warfare." },
            { id: 'step2', title: "Consult the Veteran", status: 'locked', description: "Spar with Humpik to understand the practical application of Koopa strategies and how they might be adapted for a small toad crew." },
            { id: 'step3', title: "Adapt the Drills", status: 'locked', description: "Develop and implement a new watch rotation and defensive drill schedule for the able-bodied toads based on Koopa doctrine." },
            { id: 'step4', title: "Fortify a Weak Point", status: 'locked', description: "Apply the new tactical knowledge to secure a critical, vulnerable section of the airship, like the damaged cargo bay doors." }
        ]
    },
    'eager_eyes_sky': {
        id: 'eager_eyes_sky',
        title: "Charting a Course",
        objective: "From the high vantage point of the Vigilance, Eager must serve as the group's navigator, charting a safe course through hostile skies and identifying a location for emergency repairs and resupply.",
        assignee: "Eager",
        status: "available",
        steps: [
            { id: 'step1', title: "Secure the Crow's Nest", status: 'active', description: "Ensure the damaged crow's nest is structurally sound and establish it as a long-range observation and navigation post." },
            { id: 'step2', title: "Map Immediate Threats", status: 'locked', description: "Using a recovered spyglass, chart the immediate airspace, noting prevailing winds, storm fronts, and the flight paths of Iron Legion and Crimson Fleet patrols." },
            { id: 'step3', title: "Identify a Sanctuary", status: 'locked', description: "Scan the ground below to identify and mark a potential hidden cove, isolated settlement, or ruin that could serve as a safe, temporary landing zone." },
            { id: 'step4', title: "Present the Flight Plan", status: 'locked', description: "Present his findings to Roger and Toad Lee to convince them of a viable and safe flight path for the immediate future." }
        ]
    },
    'ryan_arcane_engineering': {
        id: 'ryan_arcane_engineering',
        title: "Arcane Diagnostics",
        objective: "Ryan believes the fusion of the staff and the core is an unprecedented magical event. He must study this fusion to understand its properties, stabilize its output, and prevent a catastrophic overload.",
        assignee: "Ryan",
        status: "available",
        steps: [
            { id: 'step1', title: "Analyze the Schematics", status: 'active', description: "Attempt to cross-reference the staff's visible runes with the Vigilance's technical schematics to find patterns of energy flow." },
            { id: 'step2', title: "Develop a Diagnostic Spell", status: 'locked', description: "Develop a simple diagnostic cantrip to read the core's magical stability, providing an early warning system for power surges." },
            { id: 'step3', title: "Consult the Instigator", status: 'locked', description: "Question Archie about the specific magi-tech principles he used when recklessly fusing the staff to the ship's core." },
            { id: 'step4', title: "Devise a Failsafe", status: 'locked', description: "Theoretically devise a magical 'circuit breaker'—a rune sequence that could safely vent excess arcane energy in an emergency." }
        ]
    },
    'roger_quartermasters_duty': {
        id: 'roger_quartermasters_duty',
        title: "The Quartermaster's Gambit",
        objective: "Supplies are dwindling. Roger must not only manage the existing inventory but also find a way to acquire more, taking a calculated risk to ensure the crew's survival.",
        assignee: "Roger",
        status: "available",
        steps: [
            { id: 'step1', title: "Full Ship's Inventory", status: 'active', description: "Conduct a thorough audit of the Vigilance's remaining cargo, cataloging all food, medical supplies, ammunition, and salvageable materials." },
            { id: 'step2', title: "Salvage and Repair", status: 'locked', description: "Set up a workshop in a damaged cargo bay, using scavenged parts from the ship itself to repair weapons and craft makeshift tools." },
            { id: 'step3', title: "Rationing and Morale", status: 'locked', description: "Implement a strict but fair rationing system, while consulting with Bones to see if his strange alchemical brews can be used to supplement morale." },
            { id: 'step4', title: "The Risky Resupply", status: 'locked', description: "Use the ship's long-range comms to contact a known Freelancer Underworld contact for a high-risk, high-reward aerial supply drop." }
        ]
    },
    'bones_overgrown_hydroponics': {
        id: 'bones_overgrown_hydroponics',
        title: "The Verdant Apothecary",
        objective: "Several toads are critically injured. Using the 'Field Guide to Fungal Alchemy,' Bones must venture into the magically-overgrown and dangerous hydroponics bay to gather unique ingredients and brew a potent healing salve.",
        assignee: "Bones",
        status: "available",
        steps: [
            { id: 'step1', title: "Consult the Guide", status: 'active', description: "Study the 'Field Guide to Fungal Alchemy' to identify fungi that might thrive in a magically-charged, enclosed environment and have restorative properties." },
            { id: 'step2', title: "Brave the Hydroponics Bay", status: 'locked', description: "Enter the unstable, magically-charged hydroponics bay to begin foraging for the necessary alchemical components." },
            { id: 'step3', title: "Gather Arcane Flora", status: 'locked', description: "Collect the specific magically-infused fungi mentioned in the guide, such as glowing 'Aether-bloom' moss and tough 'Ship-Scale' fungus." },
            { id: 'step4', title: "Brew the Healing Salve", status: 'locked', description: "Using scavenged medical equipment and a heat source from the engine room, successfully brew a batch of potent healing salves to treat the injured toads." }
        ]
    }
};