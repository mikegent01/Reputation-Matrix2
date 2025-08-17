// This file contains all quest data for the campaign.
// Status can be: 'active', 'available', 'completed', 'failed', 'hidden'
// Step status can be: 'active', 'completed', 'locked'

export const QUEST_DATA = {
    'syrup_staff_heist': {
        id: 'syrup_staff_heist',
        title: "The Staff of Chaos",
        objective: "Thwart Captain Syrup’s attempt to seize X.O.’s staff, a powerful arcane artifact, amid the unfolding chaos of the Mushroom Kingdom Civil War. The staff holds residual magic that could tip the balance of power if it falls into the wrong hands.",
        assignee: "Full Party (Current)",
        status: "active",
        steps: [
            { id: 'step1', title: "Ally with Lario", status: 'completed', description: "The party supported Lario’s coup, securing the Regal Airship and establishing him as captain, granting them a mobile base to navigate the civil war." },
            { id: 'step2', title: "Recover X.O.’s Staff", status: 'completed', description: "During the stormy descent, the Sword Toad successfully snatched the staff mid-air, preventing its loss and making it a focal point of the quest." },
            { id: 'step3', title: "Confront Captain Syrup", status: 'active', description: "The party finds themselves in a tense standoff in the control deck, where Captain Syrup, aided by her ally Ragged Flint, is making a bold move to claim the artifact." }
        ]
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
    'war_of_blood_and_moon': {
        id: 'war_of_blood_and_moon',
        title: "The War of Blood and Moon",
        objective: "Resolve the civil war between Vampires and Werewolves, each claiming to be the rightful rulers after a brutal conflict destroyed their homeland.",
        assignee: "Full Party",
        status: "available",
        steps: [
            { id: 'step1', title: "Unraveling the War’s Origins", status: 'active', description: "Both sides have vastly different stories. The Vampires claim they were healers attacked without provocation. The Werewolves claim they were mistreated and experimented on. Investigate both perspectives by gathering evidence from ruins, old records, and hidden survivors." },
            { id: 'step2', title: "The Vampire Perspective – The City of Lost Blood", status: 'locked', description: "The displaced vampires live in exile, divided between diplomats who seek peace and warlords who want revenge.", options: ["Help them gather forces to retake the city.", "Convince them to negotiate, but that requires something to bargain with."] },
            { id: 'step3', title: "The Werewolf Perspective – The Shadow Throne", status: 'locked', description: "The werewolves ruling the city have begun their own medical experiments to create super-soldiers. However, some werewolves regret the war.", options: ["Expose the werewolves’ experiments to weaken their hold.", "Assist them in solidifying their power."] },
            { id: 'step4', title: "The Wedding That Started It All", status: 'locked', description: "A forgotten survivor of the Vampire-Werewolf wedding still lives, holding the key to the truth. Finding them could shift the entire war—was the wedding a betrayal or a hope for peace?" }
        ],
        finalDecision: { description: "Unite both sides, forcing an uneasy truce. Choose a side and lead them to ultimate victory. Or let the war continue, taking advantage of the chaos for your own goals." }
    },
    'call_of_the_pack': {
        id: 'call_of_the_pack',
        title: "The Call of the Pack",
        objective: "Meet Gavric Ironfang, the alpha of Frostclaw Stronghold, and prove your worth to the werewolves. They will not trust outsiders easily—you must earn your place among them or be treated as prey.",
        assignee: "Markop",
        status: "available",
        steps: [
            { id: 'step1', title: "Reaching Frostclaw Stronghold", status: 'completed', description: "The journey to Frostclaw Stronghold is treacherous. The path up Dragon Mountain is plagued by ice storms, hidden traps, and vampire scouts. You were ambushed by a werewolf warband but proved your strength.", options: ["Fight back and prove yourself through combat.", "Use persuasion or knowledge of werewolf customs.", "Reveal a shared enemy."] },
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
    }
};