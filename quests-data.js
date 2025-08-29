// This file contains all quest data for the campaign.
// Status can be: 'active', 'available', 'completed', 'failed', 'hidden'
// Step status can be: 'active', 'completed', 'locked'
// Type can be: 'main', 'personal', 'side', 'bounty', 'mystery'
// Category is used for UI grouping.

export const QUEST_DATA = {

    // --- MAIN STORY ---
    'syrup_staff_heist': {
        id: 'syrup_staff_heist',
        title: "The Staff of Chaos",
        type: 'main',
        category: 'Main Story',
        objective: "Thwart Captain Syrup’s attempt to seize X.O.’s staff, a powerful arcane artifact, amid the unfolding chaos of the Mushroom Kingdom Civil War. The staff holds residual magic that could tip the balance of power if it falls into the wrong hands.",
        assignee: "Full Party",
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
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
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
        type: 'main',
        category: 'Main Story',
        objective: "The death of Princess Peach plunged the kingdom into chaos. With Bowser gone, the Koopa Troop and Peach Loyalists have formed a fragile truce to investigate the true circumstances of her demise by infiltrating Fawful's Gala.",
        assignee: "Koopa Troop & Peach Loyalists",
        status: "active",
        start_condition: "A fragile truce was brokered between Kamek and Captain Toadette.",
        steps: [
            { id: 'step1', title: "Infiltrate Peach's Castle", status: 'completed', description: "A recon team of Koopa and Paratroopas teamed up with Toadette's forces (Embercap and Mistveil) and successfully infiltrated the castle during Fawful's Grand Gala." },
            { id: 'step2', title: "Gather Clues from the Gala", status: 'completed', description: "The recon team gathered significant intelligence. They witnessed Fawful's monologue about using prisoners and 'fury tentacles' to power the ship, and noted the presence of the 'Evil Toad God.' Most critically, they made contact with Chief Thornpaw of the Rakasha, who revealed a secret past with the Princess and the existence of a secret hatch in her chambers." },
            { id: 'step3', title: "Investigate the Secret Hatch", status: 'active', description: "Following Chief Thornpaw's explosive lead, the next step is to find a way to access Princess Peach's private chambers within the occupied castle and locate this hidden hatch. What secrets does it protect?" },
            { id: 'step4', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },

    // --- HIDDEN QUEST ---
    'hidden_echo_in_the_core': {
        id: 'hidden_echo_in_the_core',
        title: "The Echo in the Core",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "The fusion of X.O.'s staff with the Vigilance's power core has created an unstable and unprecedented magical anomaly. Strange energy readings and whispers are being detected. Investigate the source.",
        assignee: "Full Party",
        status: "hidden",
        start_condition: "Strange energy fluctuations have been detected coming from the Engine Room.",
        steps: [
            { id: 'step1', title: "Analyze the Energy Signature", status: 'active', description: "The ship's sensors are picking up a strange, repeating energy signature from the core. It doesn't match any known magical or technological pattern. Ryan must devise a way to analyze it without destabilizing the core." },
            { id: 'step2', title: "A Glimmer of Consciousness?", status: 'locked', description: "Further investigation is required to understand the nature of the echo." },
            { id: 'step3', title: "The Ghost in the Machine", status: 'locked', description: "The source of the echo must be confronted." }
        ]
    },

    // --- ARCHIE'S PERSONAL QUESTS ---
     'archie_god_toad_hunt': {
        id: 'archie_god_toad_hunt',
        title: "An Audience with a God",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Years ago, Archie betrayed a powerful toad who held a single, potent Star Fragment. That toad has since used its power to shatter it into nine pieces, distribute them to his followers, and ascend to godhood. Archie must now confront the chaotic god he helped create.",
        assignee: "Archie",
        status: "available",
        motivation: "This isn't just about power; it's about confronting the past. Archie's betrayal set these events in motion, and he feels a twisted responsibility. He seeks an audience not to apologize, but to understand the being he unleashed and perhaps find a reflection of his own chaotic nature in a divine form.",
        steps: [
            { id: 'step1', title: "Seek Whispers of the Divine", status: 'active', description: "The God Toad has vanished. The first step is to find where to even begin looking. The Cosmic Jesters, with their connection to universal absurdity, might have heard something.", options: ["Interrogate a Jester cultist.", "Scry for chaotic energy signatures.", "Follow Waluigi's trail of nonsense."] },
            { id: 'step2', title: "The Misleading Trail", status: 'locked', description: "Initial clues point towards a convergence of arcane energies in the remote mountains of the Midlands, a place where reality is thin." },
            { id: 'step3', title: "A Faded Footprint", status: 'locked', description: "After a long and fruitless search, a passing Rakasha Huntmaster mentions seeing strange fungal patterns and warped wildlife... not in the Midlands, but on the fringes of the Mushroom Kingdom." },
            { id: 'step4', title: "The True Sanctuary", status: 'locked', description: "The God Toad is hiding in plain sight, its chaotic energy masked by the inherent weirdness of the Mushroom Kingdom. The final step is to pinpoint its location and request an audience." }
        ]
    },
    'archie_jesters_masterpiece': {
        id: 'archie_jesters_masterpiece',
        title: "The Jester's Masterpiece",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Create an act of sublime, beautiful, and utterly pointless chaos to gain the full favor of the Servants of the Cosmic Jester.",
        assignee: "Archie",
        status: "available",
        motivation: "Archie sees the Cosmic Jester as a kindred spirit, a being that truly understands him. He wants to create a 'masterpiece' of chaos not for profit or power, but as an act of pure artistic expression to impress his only perceived peer.",
        steps: [
            { id: 'step1', title: "The Grand Idea", status: 'active', description: "What would be the ultimate prank? The most chaotic act? Archie must decide on his masterpiece.", options: ["Option A: Replace the Mages' Guild's scrying pool with grape juice.", "Option B: Teach the Iron Legion's war hounds to sing opera.", "Option C: Steal the Emperor's left shoe."] },
            { id: 'step2', title: "Gather the 'Paints'", status: 'locked', description: "Acquire the necessary components for the chosen act of chaos. This will likely involve theft, trickery, and explosions." },
            { id: 'step3', title: "The Performance", status: 'locked', description: "Execute the plan and unveil the masterpiece to an unsuspecting world." }
        ]
    },
    'archie_ultimate_heist': {
        id: 'archie_ultimate_heist',
        title: "The Ultimate Heist",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Pull off the most audacious heist imaginable: steal the mustache wax of Emperor Elagabalus right from his private chambers in the Imperial Palace.",
        assignee: "Archie",
        status: "available",
        motivation: "For Archie, it's not about the wax. It's about the sheer, glorious absurdity of the act. It's performance art, a middle finger to the most powerful man in the world, and a story that will be told in every tavern for a hundred years.",
        steps: [
            { id: 'step1', title: "Case the Joint", status: 'active', description: "Infiltrate the Imperial Palace during a state dinner to scout the layout, guard patrols, and the location of the Emperor's private quarters." },
            { id: 'step2', title: "Acquire the Tools", status: 'locked', description: "Obtain a set of anti-magical lockpicks from the Freelancer Underworld and a 'silence' grenade from the Ratchet Raiders." },
            { id: 'step3', title: "The Grand Performance", status: 'locked', description: "Execute the heist, leaving behind a calling card to ensure everyone knows who was responsible for the Emperor's bad mustache day." }
        ]
    },
    'archie_iron_fists_payback': {
        id: 'archie_iron_fists_payback',
        title: "Payback's a Blast",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Iron Fists have a bounty on Archie's head. It's time to turn the tables and dismantle their new leadership in a way they'll never forget.",
        assignee: "Archie",
        status: "available",
        motivation: "This isn't just about defense; it's about making a statement. Archie wants to humiliate the Iron Fists so thoroughly that no one will ever dare to put a price on his head again. He intends to make their headquarters the site of his next great art installation.",
        steps: [
            { id: 'step1', title: "Find the New Boss", status: 'active', description: "After the party's last raid, the Iron Fists have a new, more paranoid leader. Find out who they are and where they operate." },
            { id: 'step2', title: "The Perfect Firework", status: 'locked', description: "Convince the Ratchet Raiders' 'Da Boomers' faction to build a custom 'Waluigi-Brand Surprise Box'—a massive, glitter-filled firework." },
            { id: 'step3', title: "Special Delivery", status: 'locked', description: "Infiltrate the new Iron Fists headquarters and replace their main ammo crate with the 'Surprise Box' before their next big meeting." }
        ]
    },
    'archie_kamek_conundrum': {
        id: 'archie_kamek_conundrum',
        title: "The Kamek Conundrum",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Kamek and the Koopa Troop's Magikoopa Cabal don't trust Archie. He needs to secure leverage over them to ensure they don't try to 'magically fix' him later.",
        assignee: "Archie",
        status: "available",
        motivation: "Archie knows that Bowser's loyalty is fickle, but Kamek's is absolute—to the Koopa Kingdom. He sees Kamek as the real threat to his autonomy and wants to find some dirt to ensure the old Magikoopa stays in line.",
        steps: [
            { id: 'step1', title: "Find the Skeleton in the Robe", status: 'active', description: "Every old wizard has a secret. Delve into Koopa Troop historical archives to find records of Kamek's greatest failures or most embarrassing secrets." },
            { id: 'step2', title: "The Proof", status: 'locked', description: "It's not enough to know the secret; Archie needs proof. This involves a risky trip to a secure Koopa vault or a forgotten library." },
            { id: 'step3', title: "A Private Conversation", status: 'locked', description: "Present the evidence to Kamek not as a threat, but as an 'insurance policy' for their continued, 'fruitful' alliance." }
        ]
    },

    // --- MARKOP'S PERSONAL QUESTS ---
    'markop_silver_flame_schism': {
        id: 'markop_silver_flame_schism',
        title: "The Silver Flame's Schism",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "A moderate faction within the Order of the Silver Flame, the 'Templars of the Torch', has secretly reached out to Markop. They fear High Inquisitor Vale's zealotry is corrupting the Order and want Markop's help to expose a dark secret about Vale's past.",
        assignee: "Markop",
        status: "available",
        motivation: "Markop, though fallen, still believes in the core tenets of his faith. He sees this as a chance to save the Order from itself, to restore the justice and compassion that Vale has abandoned, and perhaps, find a path to his own redemption.",
        steps: [
            { id: 'step1', title: "Meet the Emissary", status: 'active', description: "Meet with Templar Captain Dorn in a neutral location to receive the details of his request and evidence of Vale's potential corruption." },
            { id: 'step2', title: "The Inquisitor's Archive", status: 'locked', description: "Infiltrate a high-security Silver Flame archive to find proof of Vale's past misdeeds—a record of an innocent life he sacrificed for 'the greater good'." },
            { id: 'step3', title: "Rally the Moderates", status: 'locked', description: "Present the evidence to other high-ranking Templars to build a coalition strong enough to challenge Vale's authority within the Order." },
            { id: 'step4', title: "The Conclave of Judgment", status: 'locked', description: "Force a formal conclave to present the evidence against Vale. The outcome will either reform the Order or see Markop and his allies branded as irredeemable heretics." }
        ]
    },
    'markop_paladins_penance': {
        id: 'markop_paladins_penance',
        title: "A Paladin's Penance",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Find a community ravaged by the ongoing wars and protect it, helping them rebuild and offering a bastion of hope amidst the chaos.",
        assignee: "Markop",
        status: "available",
        motivation: "Markop is haunted by the death and destruction he has been a party to. He feels his oath has been tarnished, and seeks to atone not by seeking forgiveness from his old orders, but by performing a selfless act of protection for the innocent.",
        steps: [
            { id: 'step1', title: "Find a Community in Need", status: 'active', description: "Search the war-torn borderlands for a refugee camp or small village that has been forgotten by the major powers and is beset by bandits or monsters." },
            { id: 'step2', title: "Earn Their Trust", status: 'locked', description: "The people are rightly suspicious of armed strangers. Markop must prove his intentions are noble by defending them from a threat without asking for reward." },
            { id: 'step3', title: "Rebuild a Beacon", status: 'locked', description: "Help the community rebuild a key structure—a watchtower, a well, a wall—that will ensure their long-term safety and survival." },
            { id: 'step4', title: "A Test of Conviction", status: 'locked', description: "A powerful local warlord or monster, seeing the revitalized community as a prize, will launch a major attack. Markop must lead the defense and make a difficult choice to ensure their survival." }
        ]
    },
    'markop_centaurs_burden': {
        id: 'markop_centaurs_burden',
        title: "The Centaur's Burden",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "An old comrade of Markop's, now a high-ranking Justicar in the Oathbound Judges, has issued a warrant for his arrest. Markop must confront his past and decide how to deal with an old friend who is now his judge.",
        assignee: "Markop",
        status: "available",
        motivation: "This isn't just about escaping justice; it's about a deep personal conflict. Markop respects his old friend and the law he represents, but he cannot abandon his new companions. He must find a way to reconcile his past with his present.",
        steps: [
            { id: 'step1', title: "The Summons", status: 'active', description: "Receive the formal summons from Justicar Valerius, delivered by a magically-bound courier." },
            { id: 'step2', title: "A Secret Meeting", status: 'locked', description: "Arrange a clandestine meeting with Valerius to plead his case, arguing that his current actions serve a greater, if more chaotic, form of justice." },
            { id: 'step3', title: "Trial by Combat or by Law", status: 'locked', description: "Valerius, bound by his oath, cannot simply let Markop go. He offers a choice: a formal trial in the Citadel of Law or a trial by combat to prove his conviction." }
        ]
    },
    'markop_rakasha_trial': {
        id: 'markop_rakasha_trial',
        title: "The Rakasha's Trial",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "To deepen his bond with the Rakasha and prove his worthiness as Dan's guardian, Chief Thornpaw asks Markop to undergo the 'Trial of the Three Spirits': The Spirit of the Hunt, the Spirit of the Mountain, and the Spirit of the Heart.",
        assignee: "Markop",
        status: "available",
        motivation: "Markop sees the Rakasha's wisdom and honor as a path to his own spiritual recovery. He embraces the trial not as a challenge, but as a necessary step to cleanse his spirit and prove to himself, and his allies, that he is worthy of their trust.",
        steps: [
            { id: 'step1', title: "The Hunt", status: 'active', description: "Track and non-lethally subdue a legendary Shadow Cat, a creature known for its cunning and near-invisibility." },
            { id: 'step2', title: "The Mountain", status: 'locked', description: "Survive three days and nights alone on the highest peak of the mountains, with no food or supplies, meditating on the balance of the world." },
            { id: 'step3', title: "The Heart", status: 'locked', description: "Confront a spiritual echo of his greatest failure, summoned by the Rakasha shamans, and find a way to forgive himself." }
        ]
    },
    'markop_forging_new_oath': {
        id: 'markop_forging_new_oath',
        title: "Forging a New Oath",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop's old paladin oath feels like a lie. He seeks to forge a new one, dedicated not to an order or a god, but to his companions and the ideals he has discovered on his journey. This requires a pilgrimage to a place of power.",
        assignee: "Markop",
        status: "available",
        motivation: "Markop needs a new code to live by, one forged from his own experiences. This is a quest for a new identity, a way to redefine his purpose in a world where his old certainties have been shattered.",
        steps: [
            { id: 'step1', title: "Seek a Sacred Place", status: 'active', description: "Find a location of spiritual or personal significance, a place where a new oath can be sworn. This could be an ancient ruin, a tranquil grove, or the site of a great personal sacrifice." },
            { id: 'step2', title: "The Words of the Oath", status: 'locked', description: "The party must help Markop define the tenets of his new oath. What does he now stand for? What are his new vows?" },
            { id: 'step3', title: "The Ritual", status: 'locked', description: "Perform a ritual at the chosen location to seal the new oath, which will likely attract spiritual guardians or old foes who wish to see him fail." }
        ]
    },

    // --- HUMPIK'S PERSONAL QUESTS ---
    'humpik_honor_quest': {
        id: 'humpik_honor_quest',
        title: "The Honor of the Shell",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Iron Legion's elite mock Humpik for his 'barbaric' refusal of a duel, tarnishing the Koopa Troop's name. To restore his and the Koopa Troop's honor, Humpik must seek out a renowned Legion champion and defeat them in a formal, sanctioned duel.",
        assignee: "Humpik",
        status: "available",
        motivation: "Humpik's identity is tied to his strength and the reputation of the Koopa Troop. The Legion's insults are not just personal; they are an attack on his ally and his people. He feels compelled to prove, in their own rigid way, that Koopa might is disciplined and honorable.",
        steps: [
            { id: 'step1', title: "Identify a Worthy Champion", status: 'active', description: "The most respected duelist among the Legion's progressive 'War-Forged' faction is Colonel Vera Steelstorm. Use underworld contacts or military intelligence to pinpoint her current location on the Midlands front." },
            { id: 'step2', title: "Issue a Formal Challenge", status: 'locked', description: "The Legion follows strict protocols for challenges of honor. Humpik must present a formal, written challenge to Colonel Steelstorm, adhering to their traditions to prove he is not a mere savage.", options: ["Consult with Markop on the proper etiquette.", "Bribe a Freelancer to draft the challenge.", "Just roar really loud and hope for the best."] },
            { id: 'step3', title: "The Gauntlet of Cinders", status: 'locked', description: "Steelstorm agrees to the duel, but only if Humpik can first prove his mettle by surviving the Legion's infamous training ground—a field of deadly traps, automated war machines, and scorching hazards." },
            { id: 'step4', title: "Duel of Fates", status: 'locked', description: "Face Colonel Vera Steelstorm in a one-on-one, sanctioned duel. The outcome will dramatically shift the Iron Legion's perception of the Koopa Troop and their new allies." }
        ]
    },
    'humpik_great_feast': {
        id: 'humpik_great_feast',
        title: "The Great Feast",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Hunt the legendary Titan-Turtle of the Whispering Marshes, whose shell is said to be impenetrable and whose meat, when cooked, grants temporary invincibility.",
        assignee: "Humpik",
        status: "available",
        motivation: "For Humpik, this is the ultimate challenge. It's a test of strength against a legendary beast, and the reward is not just a trophy, but a feast that will be sung about in the Koopa war chants for generations.",
        steps: [
            { id: 'step1', title: "Find the Lair", status: 'active', description: "Track the Titan-Turtle to its hidden lair deep within the treacherous Whispering Marshes, a place known for its toxic fumes and aggressive flora." },
            { id: 'step2', title: "The Unbreakable Shell", status: 'locked', description: "The Titan-Turtle's shell is immune to all normal attacks. Humpik must find a weak point or an environmental hazard to crack it." },
            { id: 'step3', title: "The Feast of Champions", status: 'locked', description: "With the beast slain, Humpik must transport the massive carcass back to the Koopa Troop remnants and hold a feast to boost their morale and grant them its power for the next battle." }
        ]
    },
    'humpik_proper_waaagh': {
        id: 'humpik_proper_waaagh',
        title: "A Proper WAAAGH!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Koopa remnants are demoralized. Humpik decides the only cure is a good, old-fashioned, large-scale assault on a well-defended enemy position to remind them of their strength.",
        assignee: "Humpik",
        status: "available",
        motivation: "Humpik believes that the soul of an army is found in battle. He wants to reignite the Koopa Troop's fighting spirit with a glorious, head-on charge against an impossible-looking target.",
        steps: [
            { id: 'step1', title: "Pick a Target", status: 'active', description: "Identify a suitable target for the assault, such as a fortified Peach Loyalist forward base or a major Toad Gang fortress." },
            { id: 'step2', title: "Rally the Troops", status: 'locked', description: "Give a series of loud, inspiring speeches, and lead by example in a few smaller skirmishes to get the Koopa Troop's blood pumping." },
            { id: 'step3', title: "Unleash the WAAAGH!", status: 'locked', description: "Lead the full-scale assault, focusing on overwhelming force and pure aggression to shatter the enemy's morale and claim victory." }
        ]
    },
    'humpik_biggest_axe': {
        id: 'humpik_biggest_axe',
        title: "The Biggest Axe",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik's axe is big, but it could be bigger. He seeks out a legendary, slightly unhinged Orc Mekboy from 'Da Krumperz' guild, who is said to be able to forge an ultimate weapon from the hull of the crashed Vigilance.",
        assignee: "Humpik",
        status: "available",
        motivation: "A bigger axe means bigger hitting. The logic is simple and beautiful to Humpik. He desires a weapon that is as strong and indomitable as he is.",
        steps: [
            { id: 'step1', title: "Find the Mekboy", status: 'active', description: "Locate the reclusive Orc Mekboy, 'Grimgutz Rivet-Head', in his scrap-heap workshop in the Midlands borderlands." },
            { id: 'step2', title: "A Worthy Payment", status: 'locked', description: "Grimgutz doesn't work for coin. Humpik must pay him with something he desires: the still-glowing power core from an Imperial war-walker." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Grimgutz in the chaotic and dangerous forging process, which involves a lot of shouting, hitting things with hammers, and experimental explosions." }
        ]
    },
    'humpik_rivals_respect': {
        id: 'humpik_rivals_respect',
        title: "A Rival's Respect",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik clashes with Embercap, a particularly tough and resilient Toad soldier from the Peach Loyalists. Impressed by his courage, Humpik seeks him out for a non-lethal sparring match to test his mettle.",
        assignee: "Humpik",
        status: "available",
        motivation: "Humpik respects strength and courage, regardless of the uniform. He sees a fellow warrior in Embercap and wishes to test his skills against him in a battle of pure strength, free from the politics of the war.",
        steps: [
            { id: 'step1', title: "The Challenge", status: 'active', description: "Find Embercap and issue a challenge for a duel of honor during a lull in the fighting, with the condition that it is a non-lethal match to first blood." },
            { id: 'step2', title: "The Duel", status: 'locked', description: "Meet Embercap at the agreed-upon location and engage in a one-on-one sparring match." },
            { id: 'step3', title: "A Moment of Understanding", status: 'locked', description: "Regardless of the outcome, the duel fosters a grudging respect between the two warriors, potentially opening a new, unofficial line of communication between the Koopa remnants and the Loyalists." }
        ]
    },

    // --- BOWSER'S PERSONAL QUESTS ---
    'bowser_rally_remnants': {
        id: 'bowser_rally_remnants',
        title: "Rally the Remnants",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Re-establish contact with the scattered remnants of the Koopa Troop, unite them under a single banner, and forge them into an effective fighting force once more.",
        assignee: "Bowser",
        status: "available",
        motivation: "Bowser's strength is his army. Without it, he is just a king without a kingdom. His immediate priority is to reclaim his power base and remind the world of the Koopa Troop's might before he can pursue his larger ambitions.",
        steps: [
            { id: 'step1', title: "Contact Kamek", status: 'active', description: "Establish a secure line of communication with Kamek, who commands the largest surviving contingent of the Koopa Troop." },
            { id: 'step2', title: "Unite the Warlords", status: 'locked', description: "Several of the Koopalings have carved out their own petty fiefdoms. Bowser must defeat or persuade them to rejoin his command." },
            { id: 'step3', title: "The Unflappable Standard", status: 'locked', description: "To boost morale, Bowser must lead his newly-reformed army in a decisive victory against a significant foe, such as a rogue Iron Legion outpost or a major Toad Gang stronghold." }
        ]
    },
    'bowser_reclaim_fortress': {
        id: 'bowser_reclaim_fortress',
        title: "Reclaim Koopa Keep",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "One of Bowser's key fortresses, Koopa Keep, has been overrun by a detachment of the Iron Legion's Iron Crown Brigade. Bowser must lead his newly rallied remnants to take it back and send a message to the Midlands.",
        assignee: "Bowser",
        status: "available",
        motivation: "The keep is more than just a strategic asset; it's a symbol of Koopa power. Reclaiming it is a necessary show of force to prove to his scattered troops that he is still in command, and to show the Iron Legion that the Mushroom Kingdom is not theirs for the taking.",
        steps: [
            { id: 'step1', title: "Scout the Defenses", status: 'active', description: "Use Lakitus and Magikoopa illusions to gather intelligence on the Iron Crown Brigade's strength, leadership, and fortifications within the keep." },
            { id: 'step2', title: "Soften the Walls", status: 'locked', description: "Deploy Hammer Bros. and Banzai Bills to weaken the keep's outer defenses before the main assault." },
            { id: 'step3', title: "The King's Assault", status: 'locked', description: "Lead the charge personally, breaking through the main gate and challenging the Iron Crown commander, Viceroy Hammer Forgeheart, to a direct confrontation." }
        ]
    },
    'bowser_shadow_throne': {
        id: 'bowser_shadow_throne',
        title: "The Shadow Throne",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Bowser sees the chaos in the Midlands not as a threat, but as an opportunity. He decides to make a power play against the Onyx Hand, seeking to usurp their control of the supernatural underworld.",
        assignee: "Bowser",
        status: "available",
        motivation: "Conquering land is one thing, but conquering the shadows is a true mark of power. Bowser wants to prove he is more than just a brute; he can play the game of intrigue as well, and he sees the vampires as decadent and weak.",
        steps: [
            { id: 'step1', title: "Find a Weak Link", status: 'active', description: "Identify a lesser vampire coven within the Onyx Hand that is disgruntled with Lady Ebonveil's leadership and might be convinced to switch allegiance." },
            { id: 'step2', title: "An Offer They Can't Refuse", status: 'locked', description: "Approach the weakened coven with an offer: Bowser's military protection in exchange for their loyalty and their secrets on the Onyx Hand's operations." },
            { id: 'step3', title: "Checkmate", status: 'locked', description: "Use the information from the traitor coven to expose a major Onyx Hand operation to the Silver Flame, letting his two enemies bleed each other dry while he consolidates his own power." }
        ]
    },
    'bowser_my_heir': {
        id: 'bowser_my_heir',
        title: "My Heir!",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Bowser receives a ransom note from Captain Syrup of the Crimson Fleet. She has captured Bowser Jr. and is demanding a legendary magical artifact as payment. Bowser is not amused.",
        assignee: "Bowser",
        status: "available",
        motivation: "All of Bowser's ambition and rage pales in comparison to his paternal instinct. This is not about politics or conquest; it's about getting his son back. And then, unleashing unimaginable fury on those who dared to touch him.",
        steps: [
            { id: 'step1', title: "The 'Negotiation'", status: 'active', description: "Arrange a meeting with Captain Syrup, under the guise of negotiating the ransom." },
            { id: 'step2', title: "The Distraction", status: 'locked', description: "While Bowser 'negotiates' (i.e., roars and threatens), a stealth team led by Kamek must infiltrate Syrup's flagship to locate Bowser Jr." },
            { id: 'step3', title: "Unleash the Fury", status: 'locked', description: "Once Bowser Jr. is secure, unleash the full might of the Koopa Troop on the Crimson Fleet, making an example of them for the entire underworld to see." }
        ]
    },
    'bowser_ultimate_weapon': {
        id: 'bowser_ultimate_weapon',
        title: "The Ultimate Weapon",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Commission the Ratchet Raiders and Lario to build a new, absurdly large war machine, powered by an unstable artifact the party has recently acquired.",
        assignee: "Bowser",
        status: "available",
        motivation: "Bowser believes that overwhelming firepower is the solution to most problems. He wants a new toy, a 'Peace-Maker' so terrifying that his enemies in the Mushroom Kingdom and the Midlands will have no choice but to surrender.",
        steps: [
            { id: 'step1', title: "The Blueprint", status: 'active', description: "Draft a ridiculous and overly ambitious blueprint for the new war machine and present it to Lario and the Ratchet Raiders, along with a massive down payment." },
            { id: 'step2', title: "Gather the Parts", status: 'locked', description: "The Raiders require rare and dangerous components, including the heart of a slumbering Iron Golem and the focusing crystal from a Mages' Guild observatory." },
            { id: 'step3', title: "Field Test", status: 'locked', description: "The prototype is complete, but highly unstable. Bowser must personally oversee its first field test against a conveniently located enemy fortress. Success is not guaranteed." }
        ]
    },

    // --- LIBERATED TOADS QUESTS ---
    'toads_a_place_to_call_home': {
        id: 'toads_a_place_to_call_home',
        title: "A Place to Call Home",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads are a nomadic group, vulnerable to attack. They need to find and secure a permanent, defensible location to build a new home, 'Toad's Landing'.",
        assignee: "Liberated Toads",
        status: "available",
        start_condition: "Talk to Dan after he has established himself as a leader ('Hold a Council' focus).",
        steps: [
            { id: 'step1', title: "Scout Potential Locations", status: 'active', description: "Using the Vigilance for aerial reconnaissance, identify potential locations for a settlement. Eager will lead the scouting parties.", options: ["An abandoned Imperial watchtower.", "A hidden, fertile valley.", "A defensible cave system."] },
            { id: 'step2', title: "Clear the Dangers", status: 'locked', description: "The chosen location will not be uninhabited. Clear out any resident monsters, bandits, or hazards. Toad Lee will lead the assault." },
            { id: 'step3', title: "Found 'Toad's Landing'", status: 'locked', description: "With the location secured, begin construction on basic shelters, a well, and a palisade wall. Roger will oversee the logistics." }
        ]
    },
    'toads_first_harvest': {
        id: 'toads_first_harvest',
        title: "The First Harvest",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads need a stable food source to survive the coming season. They must find fertile ground, acquire seeds, and protect their first crops from the dangers of the world.",
        assignee: "Liberated Toads",
        status: "available",
        start_condition: "This quest becomes available after founding 'Toad's Landing'.",
        steps: [
            { id: 'step1', title: "Find Arable Land", status: 'active', description: "Scout the area around Toad's Landing for a plot of land suitable for farming." },
            { id: 'step2', title: "Acquire Seeds", status: 'locked', description: "Seeds are scarce. The Toads must either trade with a nearby settlement, raid an abandoned farm, or find a cache of wild, edible plants.", options: ["Trade with the Mushroom Regency.", "Scavenge from the war-torn farmlands.", "Forage for wild seeds."] },
            { id: 'step3', title: "Protect the Crop", status: 'locked', description: "The growing crops will attract hungry wildlife and opportunistic bandits. The Toads must stand guard and protect their harvest until it's ready." }
        ]
    },
     'dan_rakasha_request': {
        id: 'dan_rakasha_request',
        title: "The Rakasha's Request",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Chief Thornpaw has sensed a corruption spreading from a nearby grove. He has asked Dan, as part of his training, to investigate and cleanse it.",
        assignee: "Dan",
        status: "available",
        start_condition: "Triggered after Dan begins his magical training with the Rakasha.",
        steps: [
            { id: 'step1', title: "Investigate the Whispering Grove", status: 'active', description: "Travel to the nearby grove and search for signs of the unnatural corruption Thornpaw spoke of." },
            { id: 'step2', title: "Identify the Source", status: 'locked', description: "Find the epicenter of the blight and determine what foul magic or creature is causing it." },
            { id: 'step3', title: "Perform the Cleansing Ritual", status: 'locked', description: "Using the teachings of the Rakasha, perform the ritual to purify the land and restore its balance." }
        ]
    },
    'dan_sword_and_spell': {
        id: 'dan_sword_and_spell',
        title: "The Sword and the Spell",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Dan feels pulled between his warrior training from Markop and his magical studies. He seeks to find a way to merge the two paths by finding the lost tomb of a legendary 'Spellsword' champion.",
        assignee: "Dan",
        status: "available",
        start_condition: "Dan reaches Level 3.",
        steps: [
            { id: 'step1', title: "Find the Tomb", status: 'active', description: "Research ancient legends to find the location of the Tomb of the Azure Knight, a warrior who perfectly blended swordplay and magic." },
            { id: 'step2', title: "Pass the Trials", status: 'locked', description: "The tomb is protected by trials that test both martial prowess and magical intellect. Dan must overcome them to prove his worth." },
            { id: 'step3', title: "Claim the Legacy", status: 'locked', description: "Claim the Azure Knight's enchanted blade, which allows the wielder to channel spells through their weapon strikes." }
        ]
    },
    'lee_firsts_legacy': {
        id: 'lee_firsts_legacy',
        title: "The First's Legacy",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Feeling overshadowed by Dan's magical destiny, Toad Lee seeks to prove his own worth as a warrior by taking on a dangerous mission alone: clearing out a nest of venomous Spidersaurs threatening Toad's Landing.",
        assignee: "Toad Lee",
        status: "available",
        motivation: "Toad Lee's identity is that of the protector, the first one who stood up. He needs to reaffirm that role and prove that brute strength and courage are just as valuable as flashy magic.",
        steps: [
            { id: 'step1', title: "The Lone Hunter", status: 'active', description: "Without telling the others, Toad Lee ventures into the nearby caves to hunt the Spidersaurs." },
            { id: 'step2', title: "The Broodmother", status: 'locked', description: "After clearing the lesser creatures, Toad Lee must face the massive Spidersaur Broodmother in a test of pure strength and endurance." }
        ]
    },
    'lee_axe_to_grind': {
        id: 'lee_axe_to_grind',
        title: "An Axe to Grind",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Toad Lee's axe is big but crudely made. He learns of a master Dwarven smith in the mountains of Middle Earth and seeks him out to have his weapon reforged into a true masterpiece.",
        assignee: "Toad Lee",
        status: "available",
        start_condition: "Toad Lee reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Mountain Forge", status: 'active', description: "Travel to the Dwarven forge and seek an audience with the legendary smith, Balin Stone-Shaper." },
            { id: 'step2', title: "A Worthy Price", status: 'locked', description: "Balin will not work for gold. Toad Lee must bring him a rare Adamantine nugget, found only in a dangerous, monster-infested mine." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Balin in the reforging, a process that requires both the smith's skill and the warrior's strength to complete." }
        ]
    },
    'eager_lost_caravan': {
        id: 'eager_lost_caravan',
        title: "The Lost Caravan",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Eager learns that a merchant caravan belonging to his family, which went missing years ago, was last seen in the treacherous Bandit's Pass. He wants to find the wreckage to recover a family heirloom and find peace.",
        assignee: "Eager",
        status: "available",
        motivation: "For Eager, this is about closure. He wants to know what happened to his family and recover the last memento he has of his past life before he was enslaved.",
        steps: [
            { id: 'step1', title: "Find Bandit's Pass", status: 'active', description: "Use old maps and underworld contacts to locate the infamous Bandit's Pass, now controlled by a ruthless gang of rogue mercenaries." },
            { id: 'step2', title: "The Ambush Site", status: 'locked', description: "Find the site of the ambush and the wreckage of the caravan, and piece together what happened." },
            { id: 'step3', title: "Recover the Locket", status: 'locked', description: "The heirloom, a simple silver locket, was taken by the bandit chief. Eager must infiltrate their camp and get it back." }
        ]
    },
    'eager_message_of_hope': {
        id: 'eager_message_of_hope',
        title: "A Message of Hope",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Believing other enslaved Toads exist, Eager wants to establish a secret 'Toadroad'—a network of hidden caches and coded messages to help others find their way to freedom at Toad's Landing.",
        assignee: "Eager",
        status: "available",
        start_condition: "Toad's Landing is established and secure.",
        steps: [
            { id: 'step1', title: "The First Post", status: 'active', description: "Establish the first dead-drop location in a nearby town with a known population of oppressed Toads." },
            { id: 'step2', title: "The Code", status: 'locked', description: "Develop a simple code, based on mushroom types, that can be used to pass messages without being deciphered by overlords." },
            { id: 'step3', title: "The First Escapee", status: 'locked', description: "A message is received! Eager must use the Toadroad to guide the first group of escaping toads safely to Toad's Landing." }
        ]
    },
    'ryan_glimmer_of_past': {
        id: 'ryan_glimmer_of_past',
        title: "A Glimmer of the Past",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Ryan's study of X.O.'s staff reveals a psychic echo within. He wants to perform a ritual to safely view the memories trapped inside, hoping to understand X.O.'s motivations.",
        assignee: "Ryan",
        status: "available",
        motivation: "Ryan's scholarly curiosity drives him. He believes that understanding an enemy is the first step to ensuring they can never rise again. He wants knowledge, not power, from the staff.",
        steps: [
            { id: 'step1', title: "The Ritual Components", status: 'active', description: "Gather the components for a 'psychometric resonance' ritual: a silver mirror, powdered dream-dust, and a magically attuned crystal." },
            { id: 'step2', title: "Perform the Ritual", status: 'locked', description: "Perform the dangerous ritual on the staff, opening a window into X.O.'s memories." },
            { id: 'step3', title: "The Vision", status: 'locked', description: "Witness a key memory from X.O.'s past that reveals her true motives and perhaps the source of her immense power." }
        ]
    },
    'ryan_unwritten_spell': {
        id: 'ryan_unwritten_spell',
        title: "The Unwritten Spell",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Ryan discovers a half-finished spellbook from a long-dead Mages' Guild Innovator. He believes he can complete the final, powerful spell, but it requires rare and dangerous components.",
        assignee: "Ryan",
        status: "available",
        start_condition: "Ryan reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Components", status: 'active', description: "Gather the three components for the spell: the tear of a ghost, the spark from a living storm, and a word of power spoken by a dragon." },
            { id: 'step2', title: "The Final Incantation", status: 'locked', description: "With the components gathered, Ryan must complete the spell's arcane matrix and attempt to cast it for the first time." }
        ]
    },
    'roger_one_last_job': {
        id: 'roger_one_last_job',
        title: "One Last Job",
        type: 'side',
        category: 'Liberated Toads',
        objective: "An old contact of Roger's from the Freelancer Underworld, a sly raccoon named 'Fingers', offers him a cut of a huge score: robbing a Regal Empire tax convoy. Roger is torn between his new life and the lure of a massive payday that could secure the Toads' future.",
        assignee: "Roger",
        status: "available",
        motivation: "Roger is a pragmatist. He sees the Toads struggling and believes this one heist could solve all their problems. It's a dangerous risk, but to him, it's a logical one.",
        steps: [
            { id: 'step1', title: "The Meeting", status: 'active', description: "Meet with 'Fingers' to get the details of the heist: the convoy's route, its defenses, and the potential payout." },
            { id: 'step2', title: "The Decision", status: 'locked', description: "Roger must decide whether to accept the job, and whether to tell the other Toads and the party about it.", options: ["Accept, and do it secretly.", "Accept, and try to convince the others to help.", "Refuse, and cut ties with his past."] }
        ]
    },
    'roger_a_better_bang': {
        id: 'roger_a_better_bang',
        title: "A Better Bang",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Roger's firearm is functional, but he's seen what real magitek weapons can do. He wants to find a Ratchet Raider gunsmith to upgrade his weapon with some serious, if unstable, firepower.",
        assignee: "Roger",
        status: "available",
        start_condition: "Roger witnesses a magitek weapon in action.",
        steps: [
            { id: 'step1', title: "The Gunsmith", status: 'active', description: "Find the workshop of 'Pip Klank-Sprocket', a goblin gunsmith known for her dangerously creative modifications." },
            { id: 'step2', title: "The Price of Power", status: 'locked', description: "Pip requires a rare power source for the upgrade: a still-sparking capacitor from a recently destroyed Imperial automaton." },
            { id: 'step3', title: "The Upgrade", status: 'locked', description: "Pip upgrades Roger's gun. It's now more powerful, but has a small chance to backfire spectacularly on any given shot." }
        ]
    },
    'bones_orcs_debt': {
        id: 'bones_orcs_debt',
        title: "The Orc's Debt",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Bones feels a debt of honor to the Orcs who kidnapped but ultimately spared him. He learns their clan is starving due to the war and decides to repay his debt by hijacking an Iron Legion supply convoy and delivering the food to them.",
        assignee: "Bones",
        status: "available",
        motivation: "Bones lives by a harsh, cynical code, and a debt is a debt. The Orcs showed him a strange kind of mercy, and he feels compelled to repay it in the only way he knows how: with violence directed at a common enemy.",
        steps: [
            { id: 'step1', title: "The Convoy", status: 'active', description: "Gather intelligence on an upcoming Iron Legion food convoy, including its route and guard detail." },
            { id: 'step2', title: "The Heist", status: 'locked', description: "Ambush the convoy and secure the supplies." },
            { id: 'step3', title: "The Delivery", status: 'locked', description: "Deliver the supplies to the Orc clan, an act that will certainly gain their respect, but also the ire of the Iron Legion." }
        ]
    },
    'bones_facing_the_mirror': {
        id: 'bones_facing_the_mirror',
        title: "Facing the Mirror",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Bones' grotesque appearance has made him an outcast his whole life. He hears a rumor of a magical spring in a fey-touched grove that is said to change a person's appearance to reflect their inner self. He seeks it out, both terrified and hopeful of what he might become.",
        assignee: "Bones",
        status: "available",
        motivation: "This is a quest for self-acceptance. Bones has always been judged by his monstrous exterior. He wants to know, once and for all, if there is something different underneath, or if he truly is the monster everyone sees.",
        steps: [
            { id: 'step1', title: "The Whispering Grove", status: 'active', description: "Find the location of the legendary Grove of Reflection, a place where the barrier to the Feywild is thin." },
            { id: 'step2', title: "The Guardian's Riddle", status: 'locked', description: "The spring is guarded by a fey creature who will only grant access to those who can answer a riddle about the nature of identity and appearance." },
            { id: 'step3', title: "The Reflection", status: 'locked', description: "Drink from the spring and face the consequences, for better or worse." }
        ]
    },


    // --- WORLD QUESTS ---
     'war_of_blood_and_moon': {
        id: 'war_of_blood_and_moon',
        type: 'side',
        category: 'World Quests',
        title: "The War of Blood and Moon",
        objective: "Resolve the civil war between Vampires and Werewolves, each claiming to be the rightful rulers after a brutal conflict destroyed their homeland.",
        assignee: "Full Party",
        status: "available",
        start_condition: "Learn about the conflict from a refugee, a mercenary contract, or by traveling to the Midlands.",
        steps: [
            { id: 'step1', title: "Unraveling the War’s Origins", status: 'active', description: "Both sides have vastly different stories. The Vampires claim they were healers attacked without provocation. The Werewolves claim they were mistreated and experimented on. Investigate both perspectives by gathering evidence from ruins, old records, and hidden survivors." },
            { id: 'step2', title: "The Vampire Perspective – The City of Lost Blood", status: 'locked', description: "The displaced vampires live in exile, divided between diplomats who seek peace and warlords who want to revenge.", options: ["Help them gather forces to retake the city.", "Convince them to negotiate, but that requires something to bargain with."] },
            { id: 'step3', title: "The Werewolf Perspective – The Shadow Throne", status: 'locked', description: "The werewolves ruling the city have begun their own medical experiments to create super-soldiers. However, some werewolves regret the war.", options: ["Expose the werewolves’ experiments to weaken their hold.", "Assist them in solidifying their power."] },
            { id: 'step4', title: "The Wedding That Started It All", status: 'locked', description: "A forgotten survivor of the Vampire-Werewolf wedding still lives, holding the key to the truth. Finding them could shift the entire war—was the wedding a betrayal or a hope for peace?" }
        ]
    },
    'pay_bounty': {
        id: 'pay_bounty',
        type: 'side',
        category: 'World Quests',
        title: "Pay Off the Bounty",
        objective: "Clear your name and the bounty on your head by dealing with a murder committed by one of your party members. Decide whether to pay the fine to avoid jail or take a risk and fight for freedom.",
        assignee: "Full Party",
        status: "completed",
        start_condition: "This quest started upon arriving in Ravencreek.",
        steps: [
            { id: 'step1', title: "Investigate the Murder", status: 'completed', description: "A shocking revelation came to light: one of your party members was accused of murder. The scene was investigated." },
            { id: 'step2', title: "Confront the Accused", status: 'completed', description: "The accused party member was confronted and their motives were understood." },
            { id: 'step3', title: "Pay the Fine", status: 'completed', description: "The law in Ravencreek demands a decision. A hefty fine was paid to clear the bounty and absolve the party member." }
        ]
    },
    'wario_funeral': {
        id: 'wario_funeral',
        type: 'side',
        category: 'World Quests',
        title: "Solve the Murder Mystery at Wario’s Funeral",
        objective: "Investigate Wario’s strange funeral, where two identical robot versions of him have been found. As the mystery unfolds, a party member is detained by a detective, and you must act quickly to save them.",
        assignee: "Full Party",
        status: "failed",
        start_condition: "This quest began upon finding Wario's funeral.",
        steps: [
            { id: 'step1', title: "Examine the Graveyard Scene", status: 'completed', description: "The strange scene at Wario’s funeral was investigated. Clues were collected from the two robot bodies." },
            { id: 'step2', title: "Interview the Townsfolk", status: 'completed', description: "Suspicious characters were interviewed, but gave conflicting reports." },
            { id: 'step3', title: "The Detective Arrives", status: 'failed', description: "A detective arrived and detained a member of the party. The trail went cold before they could be freed." }
        ]
    },
    'mid_flyare_cure': {
        id: 'mid_flyare_cure',
        type: 'side',
        category: 'World Quests',
        title: "Obtain the Ingredients for the Mid-Flyare Cure Potion",
        objective: "Gather rare ingredients to craft the Mid-Flyare Cure Potion, including the elusive Ice Crystal.",
        assignee: "Full Party",
        status: "hidden",
        start_condition: "Find a recipe for the cure or encounter someone afflicted with Mid-Flyare.",
        steps: [
            { id: 'step1', title: "Search for the Ice Crystal in Ravencreek", status: 'locked', description: "Explore various potential locations where the Ice Crystal might be hidden.", options: ["Beneath the icy waters of the slow-moving river.", "Inside a forgotten cellar of a timber-framed building.", "Behind the ivy-covered walls of Veilwood Spa."] },
            { id: 'step2', title: "Discover the Ice Toad’s Role", status: 'locked', description: "The Ice Toad guards the crystal. As you near the crystal, be prepared to confront the creature once its true role becomes clear." },
            { id: 'step3', title: "Solve the Final Puzzle to Secure the Crystal", status: 'locked', description: "After dealing with the Ice Toad, you must solve a final riddle or puzzle in order to claim the crystal." }
        ]
    }
};