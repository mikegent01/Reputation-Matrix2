const NATIONS_DATA_RAW = {
    midlands: { 
        name: "The Midlands", 
        leader: "King Alaric", 
        pop: 719.0, gdp: 250, 
        politicalSystem: "Feudal Monarchy", 
        bloc: "Imperialist Hegemony", 
        bloc_rationale: "King Alaric's authoritarian and enigmatic rule aligns perfectly with the Hegemony's principles of centralized power and order enforced from the top down. His goal is stability through absolute control, a core tenet of the bloc.",
        leanings: { 
            'Arcane Congress': { probability: 0.3, rationale: "The powerful undercurrents of vampire and werewolf societies give many delegates a secret affinity for the Arcane Congress, who respect and seek to control supernatural power rather than just suppress it." }
        } 
    },
    mushroom_kingdom: { 
        name: "Mushroom Kingdom", 
        leader: "Count Toad", 
        pop: 685.0, gdp: 80, 
        politicalSystem: "Criminal Monarchy Crisis", 
        bloc: "Unaligned Powers",
        bloc_rationale: "Torn by internal strife and with no clear leader, the Mushroom Kingdom is too fractured to commit to any bloc. Its delegates are a chaotic mix of interests, from loyalists to crime syndicates, making them unpredictable and currently unaligned."
    },
    aurea: { 
        name: "Aurea", 
        leader: "High Overseer Aurelia", 
        pop: 546.0, gdp: 300, 
        politicalSystem: "Technocratic Oligarchy", 
        bloc: "Technocratic Union",
        bloc_rationale: "Aurea's society is built on the fusion of magic and technology. They see the Technocratic Union as the only logical path forward for civilization, viewing other forms of governance as primitive and inefficient.",
        leanings: { 
            'Alliance of Free Realms': { probability: 0.15, rationale: "A significant minority of rebel hackers and bio-purists resent the Oligarchy's strict control and sympathize with the more freedom-oriented ideals of the Alliance." }
        } 
    },
    middle_earth: { 
        name: "Middle Earth", 
        leader: "King Thorin", 
        pop: 592.0, gdp: 150, 
        politicalSystem: "Ancient Kingdom", 
        bloc: "Alliance of Free Realms",
        bloc_rationale: "Defined by ancient alliances and a history of fighting against tyrannical powers, the diverse peoples of Middle Earth naturally align with the Alliance's goals of mutual defense and preservation of ancient freedoms."
    },
    pokemon: { 
        name: "Pokemon Regions", 
        leader: "Champion Carter", 
        pop: 370.0, gdp: 100, 
        politicalSystem: "League Federation", 
        bloc: "Alliance of Free Realms",
        bloc_rationale: "The League Federation is built on principles of friendly competition, personal growth, and cooperation between humans and Pokémon. These values are in perfect harmony with the Alliance of Free Realms' focus on individual liberty and partnership."
    },
    teyvat: { 
        name: "Teyvat", 
        leader: "Archon Lumine", 
        pop: 468.0, gdp: 200, 
        politicalSystem: "Divine Autocracy", 
        bloc: "Arcane Congress",
        bloc_rationale: "Ruled by a literal god of light and defined by the elemental powers of its people, Teyvat sees magic not as a tool, but as the fundamental truth of existence. The Arcane Congress, which shares this view, is their only conceivable ally."
    },
    faerun: { 
        name: "Faerun", 
        leader: "High Magus Elion", 
        pop: 485.0, gdp: 120, 
        politicalSystem: "Mystical Theocracy", 
        bloc: "Arcane Congress",
        bloc_rationale: "In Faerun, magic is woven into the very fabric of society and governance. Their allegiance to the Arcane Congress is a given, as they share the core belief that magical understanding is the key to creating a perfect, enlightened world."
    },
    zootopia: { 
        name: "Zootopia", 
        leader: "President Judy", 
        pop: 378.0, gdp: 110, 
        politicalSystem: "Democratic Republic", 
        bloc: "Alliance of Free Realms",
        bloc_rationale: "As a progressive nation founded on ideals of inclusion, democracy, and overcoming prejudice, Zootopia is a cornerstone member of the Alliance of Free Realms, championing the rights of all peoples."
    },
    forests: { 
        name: "Realm of Forests", 
        leader: "Chief Redwood", 
        pop: 395.0, gdp: 90, 
        politicalSystem: "Tribal Confederacy", 
        bloc: "Alliance of Free Realms",
        bloc_rationale: "The fierce independence of the forest tribes and their deep respect for the natural world make them wary of expansionist empires. They align with the Alliance for mutual protection of their ancestral lands and way of life."
    },
    leclaire: { 
        name: "L'Eclaire Island", 
        leader: "Ruler Doug", 
        pop: 292.0, gdp: 60, 
        politicalSystem: "Island Democracy", 
        bloc: "Coalition of Rim Worlds",
        bloc_rationale: "As a small, ambitious island nation with a populist leader, L'Eclaire joins the Rim Worlds bloc out of pragmatism, seeking allies who won't interfere with its own regional expansionist plans."
    },
    triple_moon: { 
        name: "Triple Moon World", 
        leader: "Warlord Luna", 
        pop: 175.0, gdp: 40, 
        politicalSystem: "Anarchic Remnants", 
        bloc: "Coalition of Rim Worlds",
        bloc_rationale: "The chaotic and dangerous nature of the Triple Moon World makes it an outcast. It aligns with the Rim Worlds out of necessity, as no other major bloc would accept a nation defined by anarchy and void-portals."
    },
    divided_realms: { 
        name: "Divided Realms", 
        leader: "President Varis", 
        pop: 520.0, gdp: 300, 
        politicalSystem: "Fragmented Republic", 
        bloc: "Mercantile Concord",
        bloc_rationale: "A nation of island traders and merchants, the Divided Realms' primary interest is economic stability and open trade routes. The Mercantile Concord's focus on profit over ideology is a perfect match for their pragmatic worldview."
    },
    known_world: { 
        name: "The Known World", 
        leader: "Lord Sigmar", 
        pop: 547.0, gdp: 350, 
        politicalSystem: "World Federation", 
        bloc: "Mercantile Concord",
        bloc_rationale: "Lord Sigmar's federation controls major trade routes and enforces strict border controls. They align with the Mercantile Concord to protect their economic interests and ensure the steady flow of goods that funds their war against the Orcs.",
        leanings: { 
            'Imperialist Hegemony': { probability: 0.2, rationale: "A powerful faction of military hardliners within the Federation admires the Hegemony's strength and believes adopting their methods is the only way to achieve a final victory against the Orcs." }
        } 
    },
    world_beyond: { 
        name: "The World Beyond", 
        leader: "Imperator Maximus", 
        pop: 563.0, gdp: 400, 
        politicalSystem: "Expansionist Empire", 
        bloc: "Imperialist Hegemony",
        bloc_rationale: "Imperator Maximus's relentless, Roman-like expansionism is a textbook example of the Hegemony's doctrine. They believe in imposing a singular, ordered vision upon the world, and their legions are the primary instrument of that belief."
    },
    the_edge: { 
        name: "The Edge", 
        leader: "Explorer Drake", 
        pop: 161.0, gdp: 50, 
        politicalSystem: "Frontier Outpost", 
        bloc: "Coalition of Rim Worlds",
        bloc_rationale: "A desolate, sparsely populated region at the literal edge of existence. The Edge aligns with the other fringe worlds for mutual support and to maintain its independence from the major powers who would seek to exploit its unique position."
    },
    equestria: { 
        name: "Equestria", 
        leader: "Queen Celestia", 
        pop: 362.0, gdp: 70, 
        politicalSystem: "Autocratic Pony Regime", 
        bloc: "Imperialist Hegemony",
        bloc_rationale: "Queen Celestia's immortal, autocratic rule and the pony-ethnostate's rigid social hierarchy are a natural fit for the Imperialist Hegemony's belief in absolute, centralized authority and the suppression of dissent.",
        leanings: { 
            'Alliance of Free Realms': { probability: 0.1, rationale: "A secret, growing rebellion among enslaved minorities and disenfranchised ponies yearns for the freedom promised by the Alliance, sending secret delegates to plead their case." }
        } 
    },
    grand_line: { 
        name: "Grand Line Archipelago", 
        leader: "Admiral Wave", 
        pop: 362.0, gdp: 110, 
        politicalSystem: "Naval Republic", 
        bloc: "Mercantile Concord",
        bloc_rationale: "The entire society of the Grand Line revolves around control of the sea and its trade routes. Their allegiance is with the Mercantile Concord, which provides the economic framework and naval support needed to combat piracy and protect their shipping lanes."
    },
    internet: { 
        name: "The Internet", 
        leader: "Admin Zero", 
        pop: 313.0, gdp: 80, 
        politicalSystem: "Digital Federation", 
        bloc: "Technocratic Union",
        bloc_rationale: "As a realm of pure information and digital logic, 'The Internet' sees the Technocratic Union as its natural ideological home. They believe that data, not dogma, should guide governance and that progress is achieved through superior algorithms."
    },
};

const DELEGATE_NAMES = {
    first: ['Alistair', 'Seraphina', 'Kaelen', 'Bronwyn', 'Lysander', 'Thorne', 'Elowen', 'Fenris', 'Gideon', 'Isolde'],
    last: ['Blackwood', 'Ironhand', 'Stormrider', 'Silvermane', 'Oakhaven', 'Shadowend', 'Brightwater', 'Stonefist', 'Vale', 'Wilder'],
    title: ['Baron', 'Lady', 'Magister', 'Consul', 'Speaker', 'Envoy', 'Archon', 'Warden', 'Delegate', 'Scribe']
};

const DELEGATE_STANCES = [
    "Militant Expansionist", "Isolationist Traditionalist", "Pragmatic Technocrat", "Idealistic Diplomat",
    "Economic Supremacist", "Magical Purist", "Revolutionary Abolitionist", "Cultural Preservationist"
];

function generateDelegates(count, mainBloc, leanings = {}) {
    const delegates = [];
    const usedNames = new Set();

    const leaningThresholds = [];
    let cumulativeProb = 0;
    if (leanings) {
        for (const [bloc, leaningData] of Object.entries(leanings)) {
            cumulativeProb += leaningData.probability;
            leaningThresholds.push({ bloc, threshold: cumulativeProb });
        }
    }

    for (let i = 0; i < count; i++) {
        let name;
        do {
            const first = DELEGATE_NAMES.first[Math.floor(Math.random() * DELEGATE_NAMES.first.length)];
            const last = DELEGATE_NAMES.last[Math.floor(Math.random() * DELEGATE_NAMES.last.length)];
            name = `${first} ${last}`;
        } while (usedNames.has(name));
        usedNames.add(name);

        const title = DELEGATE_NAMES.title[Math.floor(Math.random() * DELEGATE_NAMES.title.length)];
        const stance = DELEGATE_STANCES[Math.floor(Math.random() * DELEGATE_STANCES.length)];
        
        let assignedBloc = mainBloc;
        const random = Math.random();
        for (const leaning of leaningThresholds) {
            if (random < leaning.threshold) {
                assignedBloc = leaning.bloc;
                break;
            }
        }

        delegates.push({ 
            name: `${title} ${name}`, 
            stance,
            bloc: assignedBloc
        });
    }
    return delegates;
}

export const WORLD_ASSEMBLY_DATA = Object.entries(NATIONS_DATA_RAW).reduce((acc, [key, nation]) => {
    const delegateCount = Math.max(3, Math.floor(nation.pop / 50.0));
    acc[key] = {
        ...nation,
        id: key,
        delegateCount: delegateCount,
        delegates: generateDelegates(delegateCount, nation.bloc, nation.leanings)
    };
    return acc;
}, {});

export const POWER_BLOCS = {
    'Imperialist Hegemony': { 
        name: "Imperialist Hegemony", 
        color: "#da3633",
        description: "An authoritarian bloc that believes in centralized power, military expansion, and the imposition of order. They see individual freedoms as secondary to the stability and glory of the state."
    },
    'Technocratic Union': { 
        name: "Technocratic Union", 
        color: "#8A2BE2",
        description: "A forward-thinking bloc that values progress, knowledge, and efficiency above all. They believe governance should be guided by data and logic, often at the expense of tradition and individual sentiment."
    },
    'Alliance of Free Realms': { 
        name: "Alliance of Free Realms", 
        color: "#238636",
        description: "A democratic and idealistic coalition dedicated to mutual defense, personal liberty, and the preservation of diverse cultures. They stand in opposition to tyranny and expansionism."
    },
    'Mercantile Concord': { 
        name: "Mercantile Concord", 
        color: "#C9B037",
        description: "A pragmatic bloc focused on economic prosperity, free trade, and the protection of wealth. Their foreign policy is dictated by the flow of capital, not ideology."
    },
    'Arcane Congress': { 
        name: "Arcane Congress", 
        color: "#1f6feb",
        description: "An isolationist bloc of magically-dominated states. They believe that the understanding and control of arcane forces are paramount, and they view non-magical politics with disdain and suspicion."
    },
    'Coalition of Rim Worlds': { 
        name: "Coalition of Rim Worlds", 
        color: "#8b949e",
        description: "A loose alliance of fringe, independent, and often chaotic states. They are united by their shared desire to remain free from the control of the major power blocs."
    },
    'Unaligned Powers': { 
        name: "Unaligned Powers", 
        color: "#A9A9A9",
        description: "Nations that, due to internal crisis, strict neutrality, or political turmoil, have not committed to any major power bloc. Their votes are unpredictable and highly sought after."
    }
};

export const GLOBAL_ISSUES = [
    { id: "issue1", title: "The Fire Flower Proliferation Treaty", description: "A proposed treaty to regulate the ownership and use of powerful Fire Flower petals, citing global security risks." },
    { id: "issue2", title: "Cross-Dimensional Refugee Crisis", description: "Debate over how to handle the influx of refugees from unstable realms like the Triple Moon World." },
    { id: "issue3", title: "Global Magitek Regulation", description: "Aurea proposes a global standard for magitek ethics and safety, which many see as a power grab." },
    { id: "issue4", title: "The 'WAAAGH!' Containment Accord", description: "Lord Sigmar proposes a joint military fund to contain Orc offensives in The Known World, requesting resources from all member states." }
];