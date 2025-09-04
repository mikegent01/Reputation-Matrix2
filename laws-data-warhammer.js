// laws-data-warhammer.js

export const WARHAMMER_CODES = {
    the_empire: {
        name: "The Edicts of Sigmar",
        logo: "factions/empire.png",
        description: "The ancient and complex legal code of the Empire, combining feudal law, religious doctrine, and military statutes. It is a system built to preserve order in a world beset by chaos.",
        supporters: ['kingdoms_of_the_dwarves_wh'],
        opponents: ['warriors_of_chaos', 'greenskins', 'vampire_counts'],
        political: [
            {
                name: "The Electoral System",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Feudal Allegiance", description: "The Elector Counts rule their provinces with significant autonomy." },
                    { name: "Imperial Decree", description: "The Emperor's authority is absolute, overriding the will of the Counts." }
                ],
                current: 1, trend: 0,
                description: "The Emperor is elected by the Elector Counts, but once crowned, his authority is supreme. This creates a constant tension between Imperial power and provincial rights."
            }
        ],
        penal: [
            {
                name: "The Witch Hammer",
                policy: "Heresy Law",
                spectrum: [
                    { name: "Trial by Peer", description: "Accusations of heresy are tried by local magistrates." },
                    { name: "The Purge", description: "Witch Hunters are granted authority to bypass local laws to hunt and execute heretics and mutants." }
                ],
                current: 1, trend: 0,
                description: "The threat of Chaos is absolute. Witch Hunters are granted broad powers to investigate and purge heresy, mutation, and dark magic, often with brutal efficiency."
            }
        ]
    },
    kingdoms_of_the_dwarves_wh: {
        name: "The Great Book of Grudges",
        logo: "factions/dwarfs.png",
        description: "The unyielding legal and moral code of the Dwarfs. Every slight, theft, or broken oath is recorded in a great book, and the Dwarfs are honor-bound to seek retribution, no matter how long it takes.",
        supporters: ['the_empire'],
        opponents: ['greenskins', 'skaven'],
        penal: [
            {
                name: "The Reckoning",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Blood Gold", description: "A weregild (blood price) can be paid to settle a grudge between clans." },
                    { name: "War of Vengeance", description: "A sufficiently great grudge can only be settled by a full-scale war." }
                ],
                current: 1, trend: 0,
                description: "Justice is a matter of settling grudges. The severity of the punishment must match the severity of the insult. Some grudges are so ancient and so deep they can only be settled by generations of warfare."
            }
        ],
        economic: [
            {
                name: "The Guilds' Word",
                policy: "Contract Law",
                spectrum: [
                    { name: "A Beard-Oath", description: "A Dwarf's sworn oath is his bond." },
                    { name: "Runic Contracts", description: "Major contracts are inscribed on stone tablets with runes, making them magically binding." }
                ],
                current: 1, trend: 0,
                description: "A Dwarf's word is his bond, and a written contract is as unyielding as the mountain stone. To break a deal with the Dwarfs is to earn a new entry in the Book of Grudges."
            }
        ]
    }
};
