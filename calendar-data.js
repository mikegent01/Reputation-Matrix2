export const CALENDAR_DATA = {
  "name": "Regal Empire Standard Calendar",
  "description": "The official calendar of the Regal Empire for the Doughnut World, standardized in the year 1040 Before First Hum (BF). It incorporates Imperially recognized holidays alongside significant cultural and historical dates from various regions and factions. Current epoch is BF.",
  "version": "1.1.0",
  "path": "",
  "id": "regal-empire-standard-1040bf",
  "note": "This calendar reflects the state of the Doughnut World around 1040 BF. The 'Current Year' in Foundry VTT should be set to 1040. The 'BF' designation is for lore context.",
  "years": {
    "yearZero": 0,
    "firstWeekday": 0,
    "leapYear": {
      "leapStart": 4,
      "leapInterval": 4
    }
  },
  "months": {
    "values": [
      {
        "name": "Firstlight",
        "abbreviation": "Fst",
        "ordinal": 1,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Chillwind",
        "abbreviation": "Chl",
        "ordinal": 2,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Veridia",
        "abbreviation": "Ver",
        "ordinal": 3,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Bloom",
        "abbreviation": "Blo",
        "ordinal": 4,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Floria",
        "abbreviation": "Flo",
        "ordinal": 5,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Efferd",
        "abbreviation": "Eff",
        "ordinal": 6,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Highsun",
        "abbreviation": "Hsn",
        "ordinal": 7,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Harvestide",
        "abbreviation": "Hrv",
        "ordinal": 8,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Aethel",
        "abbreviation": "Aet",
        "ordinal": 9,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Darkmoon",
        "abbreviation": "Drk",
        "ordinal": 10,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Frostfall",
        "abbreviation": "Frs",
        "ordinal": 11,
        "days": 30,
        "leapDays": 30
      },
      {
        "name": "Deepwinter",
        "abbreviation": "Dpw",
        "ordinal": 12,
        "days": 35,
        "leapDays": 36
      }
    ]
  },
  "days": {
    "values": [
      {
        "name": "Soldas",
        "abbreviation": "Sol",
        "ordinal": 1
      },
      {
        "name": "Lunadas",
        "abbreviation": "Lun",
        "ordinal": 2
      },
      {
        "name": "Terras",
        "abbreviation": "Ter",
        "ordinal": 3
      },
      {
        "name": "Mercurias",
        "abbreviation": "Mer",
        "ordinal": 4
      },
      {
        "name": "Jovias",
        "abbreviation": "Jov",
        "ordinal": 5
      },
      {
        "name": "Venerias",
        "abbreviation": "Ven",
        "ordinal": 6,
        "isRestDay": true
      },
      {
        "name": "Saturias",
        "abbreviation": "Sat",
        "ordinal": 7,
        "isRestDay": true
      }
    ],
    "daysPerYear": 365,
    "hoursPerDay": 24,
    "minutesPerHour": 60,
    "secondsPerMinute": 60
  },
  "seasons": {
    "values": [
      {
        "name": "Verdant Spring",
        "abbreviation": "Spr",
        "monthStart": 3,
        "monthEnd": 5,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#90EE90"
      },
      {
        "name": "Golden Summer",
        "abbreviation": "Sum",
        "monthStart": 6,
        "monthEnd": 8,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#FFD700"
      },
      {
        "name": "Crimson Fall",
        "abbreviation": "Fal",
        "monthStart": 9,
        "monthEnd": 11,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#FFA07A"
      },
      {
        "name": "Hoarfrost Winter",
        "abbreviation": "Win",
        "monthStart": 12,
        "monthEnd": 2,
        "dayStart": 1,
        "dayEnd": 30,
        "color": "#ADD8E6"
      }
    ]
  },
  "moons": {
    "values": [
      {
        "name": "Luna Imperia",
        "cycleLength": 28,
        "phaseNames": [
          "Imperial New Moon",
          "Waxing Imperial Crescent",
          "First Imperial Quarter",
          "Waxing Imperial Gibbous",
          "Full Imperial Moon",
          "Waning Imperial Gibbous",
          "Last Imperial Quarter",
          "Waning Imperial Crescent"
        ],
        "offset": 0,
        "color": "#E0E0E0"
      },
      {
        "name": "Crimson Eye",
        "cycleLength": 40,
        "phaseNames": [
          "Eye Hidden",
          "Eye Awakening",
          "Eye Gazing",
          "Eye Fading"
        ],
        "offset": 15,
        "color": "#DC143C"
      },
      {
        "name": "Scintilla",
        "cycleLength": 73.5,
        "phaseNames": [
          "Veiled Spark",
          "First Glimmer",
          "Half Brilliance",
          "Full Scintillation",
          "Fading Gleam",
          "Last Flicker"
        ],
        "offset": 30,
        "color": "#FFFACD"
      }
    ]
  },
  "holidays": {
    "values": [
      {
        "name": "Empire's Founding Day",
        "month": 1,
        "day": 1,
        "description": "Regal Empire Holiday: Commemorates the establishment of the Regal Empire 1040 years ago. A day of solemn parades and declarations of Imperial strength and order.",
        "traditions": "Citizens are expected to display Imperial flags. Military parades showcase the might of the Iron Legion, and provincial governors renew their oaths of fealty to the Emperor. A day of patriotism and state-mandated celebration."
      },
      {
        "name": "First Hum Imperial Recognition",
        "month": 1,
        "day": 2,
        "description": "Regal Empire Holiday: The Empire officially acknowledges the cosmic significance of the First Hum (~8000 BF), interpreting it as a divine mandate for order.",
        "traditions": "A day of quiet contemplation. Imperial scholars give public lectures on cosmology and destiny, framing the Empire's existence as the inevitable and correct outcome of cosmic law."
      },
      {
        "name": "Zootopian Founders' Day",
        "month": 1,
        "day": 25,
        "description": "Zootopia celebrates its founding ideals of inter-species equality and justice, recalling Mayor Hopps' impactful leadership (BF 970).",
        "traditions": "Parades feature floats from every district, from Tundratown to Sahara Square. The day is marked by inter-species feasts and community service projects aimed at fostering unity."
      },
      {
        "name": "Internet Stability Jubilee (Internet Dimension)",
        "month": 2,
        "day": 1,
        "description": "Marks the stabilization of The Internet dimension (BF 900), celebrated with virtual fireworks and data-feasts.",
        "traditions": "Avatars gather in virtual plazas for digital firework displays. It's a day of 'data-feasting', where users exchange rare files and information. Network-wide games and competitions are held."
      },
      {
        "name": "Midlands' King's Coronation Day (Alaric)",
        "month": 2,
        "day": 5,
        "description": "In the Midlands, marks King Alaric's enigmatic ascent to power (BF 910). Celebrated with cautious fealty or quiet apprehension.",
        "traditions": "Nobles offer public tribute to the King, while commoners attend state-sponsored feasts. Privately, many use the day to reinforce wards on their homes and tell cautionary tales."
      },
      {
        "name": "The Engineer's Guild Accord",
        "month": 2,
        "day": 18,
        "description": "Regal Empire Holiday: Marks the historic integration of the Grand Engineer's Guild into the Imperial structure, heralding an age of technological advancement under Imperial guidance.",
        "traditions": "Showcases of new magitek inventions are held in major cities. Young inventors and artificers compete for Imperial grants and recognition from the High Artificer."
      },
      {
        "name": "First Bloom Festival",
        "month": 3,
        "day": 1,
        "description": "Celebrates the first signs of spring, with planting ceremonies and colorful decorations across many cultures.",
        "traditions": "Communities gather to plant the first seeds of the season in a ceremonial garden. Homes are decorated with colorful ribbons and flowers. Children exchange painted eggs as symbols of new life."
      },
      {
        "name": "Triple Moon Survival Day (Triple Moon World)",
        "month": 3,
        "day": 3,
        "description": "A grim remembrance in the Triple Moon World of Warlord Luna's consolidation of power (BF 930) and the harsh realities of their world.",
        "traditions": "A solemn day of fasting and sparring. The people honor those who fell during the Unification Wars, and warriors engage in ritual combat to prove their strength to survive another cycle."
      },
      {
        "name": "Day of Imperial Law",
        "month": 3,
        "day": 10,
        "description": "Regal Empire Holiday: Marks the codification of the Grand Imperial Legal Statutes. A day for reflecting on justice and order.",
        "traditions": "Imperial Judges hold open court to settle minor disputes, demonstrating the reach and fairness of Imperial law. Copies of the statutes are publicly displayed. A day of amnesty for minor infractions is often declared."
      },
      {
        "name": "Equinox of Imperial Balance (Spring)",
        "month": 3,
        "day": 20,
        "description": "Regal Empire Holiday: Marks the spring equinox, a day of Imperial rituals focused on balance, renewal, and orderly growth.",
        "traditions": "Imperial priests perform rituals at sunrise and sunset to mark the precise moment of balance. Citizens are encouraged to balance their accounts, settle debts, and make plans for the coming half-year."
      },
      {
        "name": "Aurean Glitch Day (Aurea - Rebels)",
        "month": 4,
        "day": 4,
        "description": "Celebrated by rebel hackers in Aurea, 'Glitches' or 'Static Phantoms', marking their first major disruption against the Technocratic Oligarchy (BF 980).",
        "traditions": "A day of digital mischief. Rebels launch harmless but disruptive hacks against the state, release encrypted messages of hope, and hold secret virtual gatherings to plan future operations."
      },
      {
        "name": "Naval Ascendancy Day",
        "month": 4,
        "day": 20,
        "description": "Regal Empire Holiday: Celebrates the historical dominance of the Imperial Navy, built on principles from the Naval Republic's establishment (BF 890).",
        "traditions": "Grand naval reviews are held in major ports. Model ship competitions are popular, and sailors on shore leave fill the taverns with sea shanties celebrating Imperial victories."
      },
      {
        "name": "Victory at Cerulean Pass",
        "month": 5,
        "day": 5,
        "description": "Regal Empire Holiday: Remembers a decisive ancient battle that secured the Empire's northern borders.",
        "traditions": "Veterans of the Northern Campaigns are honored. In the north, communities hold feasts and light bonfires along the mountain passes to commemorate the victory."
      },
      {
        "name": "Imperial Proclamation of Order",
        "month": 5,
        "day": 15,
        "description": "Regal Empire Holiday: A day where new Imperial edicts are often announced, reinforcing the Empire's presence.",
        "traditions": "Town criers and Imperial heralds read new proclamations in every town square. It is a day of civic duty, where citizens are reminded of their obligations to the state."
      },
      {
        "name": "Pokémon Champion's Gauntlet",
        "month": 5,
        "day": 20,
        "description": "Across Pokémon regions, celebrates the spirit of competition, inspired by Champion Carter's dominance (BF 1039).",
        "traditions": "Local Pokémon tournaments are held for all ages. It is a day of friendly rivalry, where trainers test their bonds with their partners and celebrate the spirit of the challenge."
      },
      {
        "name": "L'Eclaire Reform Celebration (L'Eclaire)",
        "month": 6,
        "day": 10,
        "description": "Ruler Doug's populist reforms (BF 940) are celebrated in L'Eclaire, masking his true ambitions.",
        "traditions": "A massive public festival with free food and entertainment, funded by the state. Speeches praise the generosity of Ruler Doug, reinforcing his image as a man of the people."
      },
      {
        "name": "Efferd's Sun Zenith Festival (Summer Solstice)",
        "month": 6,
        "day": 21,
        "description": "Regal Empire Holiday: Imperial celebration of the longest day, symbolizing enduring Imperial light. Named in honor of the month Efferd.",
        "traditions": "Huge bonfires are lit on hilltops, intended to remain burning from sunrise to sunset. A day of feasts, games, and celebration of the Empire's peak power and influence."
      },
      {
        "name": "Wario's Passing Remembrance",
        "month": 6,
        "day": 25,
        "description": "Marks the anniversary of Wario's supposed death and funeral (Efferd 25th, 1040 BF). A day of varied reactions from relief to suspicion.",
        "traditions": "A strange mix of traditions. Some hold solemn vigils, others throw parties. In Diamond City, it's customary to hide one's valuables, just in case."
      },
      {
        "name": "Grand Imperial Tournament Day",
        "month": 7,
        "day": 1,
        "description": "Regal Empire Holiday: Showcases the martial prowess of the Empire's finest. Feasts and grand competitions are held.",
        "traditions": "Knights and champions from across the Empire compete in jousting, archery, and melee competitions for the Emperor's favor. It's a grand spectacle of martial skill."
      },
      {
        "name": "Admin Zero's Protocol Day (Internet Dimension)",
        "month": 7,
        "day": 7,
        "description": "Commemorates Admin Zero's emergence as overseer of The Internet's digital federation (BF 1010), a day of system diagnostics and protocol reviews.",
        "traditions": "All systems undergo a 'protocol purity' check. Users are encouraged to defragment their personal data stores and update their security protocols. It is considered a day of digital renewal."
      },
      {
        "name": "Celestia's Iron Hoof Day (Equestria - State)",
        "month": 7,
        "day": 15,
        "description": "In Equestria, a state-mandated holiday celebrating Queen Celestia's absolute autocratic regime (BF 950) and pony supremacy.",
        "traditions": "A highly controlled celebration featuring parades of the Royal Guard. All citizens are required to attend and show deference. Non-ponies are encouraged to stay indoors."
      },
      {
        "name": "The Great Orrery's Completion",
        "month": 7,
        "day": 28,
        "description": "Regal Empire Holiday: Celebrates the unveiling of the Grand Imperial Orrery, a marvel mapping the known cosmos.",
        "traditions": "Planetariums and observatories are opened to the public. Scholars debate the nature of the cosmos, always concluding with the Empire's central place within it."
      },
      {
        "name": "Day of the Imperial Scribes",
        "month": 8,
        "day": 1,
        "description": "Regal Empire Holiday: Honors the work of Imperial Scribes in maintaining records, history, and bureaucratic efficiency.",
        "traditions": "A quiet holiday. Libraries and archives are celebrated. It is customary to give a gift of fine ink or paper to a local scribe or bureaucrat as a sign of respect for their work."
      },
      {
        "name": "Archon Lumine's Rally (Teyvat)",
        "month": 8,
        "day": 12,
        "description": "In Teyvat, commemorates Archon Lumine's inspiring rally that united diverse factions during the Archon War (BF 1020).",
        "traditions": "A festival of unity. Representatives from Liyue, Mondstadt, and other nations gather for cultural exchanges, shared feasts, and retellings of the Archon's heroic deeds."
      },
      {
        "name": "Harvest Unity Proclamation",
        "month": 8,
        "day": 15,
        "description": "Regal Empire Holiday: Recognizes unified efforts in securing the harvest, emphasizing Imperial provision.",
        "traditions": "The first fruits of the harvest are ceremonially presented to the local Imperial governor. It's a time of thanks and reinforces the idea that the Empire provides for its people."
      },
      {
        "name": "Starlight Concordat Day",
        "month": 9,
        "day": 2,
        "description": "Regal Empire Holiday: Celebrates an ancient treaty that brought several star-faring factions under Imperial influence.",
        "traditions": "Stargazing is a common activity. Imperial astronomers give public demonstrations, pointing out the constellations of the signatory factions, now part of the Imperial whole."
      },
      {
        "name": "Peach's Starfall Lament",
        "month": 9,
        "day": 20,
        "description": "A solemn day of mourning for Princess Peach, assassinated during the Star Festival (BF 1035). Lanterns are lit in her memory.",
        "traditions": "In the Mushroom Kingdom, no business is conducted. Toads gather at dusk to release paper lanterns into the sky, each one carrying a wish for the late Princess's peace."
      },
      {
        "name": "Equinox of Imperial Balance (Autumn)",
        "month": 9,
        "day": 22,
        "description": "Regal Empire Holiday: Marks the autumn equinox, a time for Imperial reflection and preparation.",
        "traditions": "Similar to the spring equinox, this is a day for balancing accounts and preparing for the coming winter. It is a time for introspection and planning, overseen by Imperial ritual."
      },
      {
        "name": "Explorer Drake's Imperial Charter",
        "month": 10,
        "day": 5,
        "description": "Regal Empire Holiday: Commemorates the Imperial charter granted to Explorer Drake (related to voyage BF 1000).",
        "traditions": "The Explorer's Guild holds its annual induction ceremony. It's a day that celebrates discovery and the expansion of the Empire's knowledge of the world."
      },
      {
        "name": "The Blood Moon Hunt (Midlands)",
        "month": 10,
        "day": 13,
        "description": "A folkloric day in the Midlands marking a period of heightened vampire and werewolf activity, though actual hunts vary with the Crimson Eye moon.",
        "traditions": "Communities hold a 'Lock-In', where everyone gathers in a fortified tavern or town hall. Elders tell stories of past hunts and supernatural encounters until dawn breaks."
      },
      {
        "name": "Faerun's Grand Design Unveiling",
        "month": 10,
        "day": 28,
        "description": "In Faerun, marks the controversial day High Magus Elion unveiled his plan for a magical utopia (BF 1038).",
        "traditions": "The day is marked by heated debates in magical academies. Supporters celebrate with displays of powerful magic, while detractors hold quiet vigils, fearing the plan's hubris."
      },
      {
        "name": "Warding Night (Midlands)",
        "month": 10,
        "day": 30,
        "description": "A night of heightened vigilance in the Midlands, where communities reinforce wards against dark creatures on the eve of Darkmoon's peak.",
        "traditions": "Families and communities work together to renew protective runes on doors and windows. Children are often tasked with placing salt lines. It is a night of communal defense."
      },
      {
        "name": "Last Leaf of Autumn",
        "month": 11,
        "day": 1,
        "description": "A day of reflection as autumn ends, with communities gathering for bonfires and storytelling.",
        "traditions": "It is customary to find the last colorful leaf on a tree and preserve it. In the evening, communities gather around large bonfires, sharing stories and preparing for the coming winter."
      },
      {
        "name": "Helvetian Mountain Vigil (Helvetians / World Beyond)",
        "month": 11,
        "day": 5,
        "description": "The Helvetian nation holds a solemn vigil, remembering their stand against the World Beyond Empire (BF 990).",
        "traditions": "A day of silence and remembrance. The Helvetians light signal fires on the mountain peaks that once served as their line of defense, honoring the memory of their ancestors' defiance."
      },
      {
        "name": "Griffin's Spark Day (Equestrian Dissidents)",
        "month": 11,
        "day": 8,
        "description": "Secretly observed by Equestrian dissidents, marking the creation of their hidden tech network (BF 955).",
        "traditions": "Observed in secret basements and hidden workshops. Dissidents exchange coded messages and share small technological creations, reaffirming their commitment to a future free from autocracy."
      },
      {
        "name": "Remembrance of the First Guard",
        "month": 11,
        "day": 11,
        "description": "Regal Empire Holiday: A solemn day honoring the sacrifices of the Empire's first Imperial Guard legions.",
        "traditions": "Citizens visit memorials and leave offerings for the fallen. The Silent Service uses the day's somber mood to quietly identify and monitor potential dissidents."
      },
      {
        "name": "Day of the Unbroken Seal",
        "month": 11,
        "day": 25,
        "description": "Regal Empire Holiday: Celebrates the enduring strength of Imperial borders and protective magical seals.",
        "traditions": "Imperial mages publicly recharge major defensive wards around cities. It is a display of magical might, intended to reassure citizens and deter enemies."
      },
      {
        "name": "Imperial Peace Day",
        "month": 12,
        "day": 1,
        "description": "Regal Empire Holiday: Decreed to celebrate 'Pax Imperialis' in core territories, often with skepticism in outer regions.",
        "traditions": "In the capital, it's a day of feasts. In the outer territories, it's often marked by protests or quiet defiance against what they see as an imposed, not earned, peace."
      },
      {
        "name": "Winter's Veil Imperial Ball",
        "month": 12,
        "day": 20,
        "description": "Regal Empire Holiday: A grand ball in the Imperial Capital, marking the start of the high society winter season.",
        "traditions": "The height of the social calendar for the Imperial elite. A night of lavish gowns, political maneuvering, and extravagant displays of wealth."
      },
      {
        "name": "Deepwinter's Eve Gala",
        "month": 12,
        "day": 24,
        "description": "A widespread feast and celebration on the eve of Deepwinter's extended period.",
        "traditions": "Families and friends gather for a grand feast, exchanging gifts and enjoying the warmth of community before the longest, coldest part of winter sets in."
      },
      {
        "name": "The Doughnut Hole Festival",
        "month": 12,
        "day": 30,
        "description": "A quirky, world-wide festival celebrating the unique topology of their world with doughnut-shaped cakes.",
        "traditions": "Baking competitions for the most elaborate doughnut-shaped cakes are the main event. It's a day of lighthearted fun and feasting before the year's end."
      },
      {
        "name": "Day of Doughnut Contemplation",
        "month": 12,
        "day": 35,
        "description": "The last day of a standard year, a time for quiet reflection on the cyclical nature of the Doughnut World.",
        "traditions": "A day for personal reflection. Many people walk a circular path, contemplating the year that has passed and the year to come, embracing the cyclical nature of their world."
      }
    ]
  }
};

export const MAGICAL_WEATHER_EVENTS = [
    { name: "Chrono-Mists", icon: "⏳" }, { name: "Sunpetal Showers", icon: "🌸" }, { name: "Whispering Winds", icon: "🍃" },
    { name: "Gravity Flux", icon: "🎈" }, { name: "Aetheric Fog", icon: "🔮" }, { name: "Polychrome Rain", icon: "🌈" },
    { name: "Sorrow Storm", icon: "💧" }, { name: "Static Discharge", icon: "⚡️" }, { name: "Geode Hail", icon: "💎" },
    { name: "Sporefall", icon: "🍄" }, { name: "Starlight Drizzle", icon: "✨" }, { name: "Glimmering Heat Haze", icon: "🔥" },
    { name: "Verdant Overgrowth", icon: "🌱" }, { name: "Silent Snow", icon: "🤫" }, { name: "Echoing Thunder", icon: "🗣️" },
    { name: "Obsidian Sleet", icon: "🌑" }, { name: "Memory Dew", icon: "🧠" }, { name: "Celestial Aurora", icon: "🌌" },
    { name: "Molten Rain", icon: "🌋" }, { name: "Phantom Breeze", icon: "👻" }, { name: "Iron Dust Devil", icon: "⚙️" },
    { name: "Joyful Zephyr", icon: "😊" }, { name: "Crystalline Frost", icon: "❄️" }, { name: "Temporal Stutter", icon: "⏩" },
    { name: "Soothing Smog", icon: "💨" }, { name: "Liquid Moonlight", icon: "🌕" }, { name: "Honeyed Drizzle", icon: "🍯" },
    { name: "Prismatic Fog", icon: "💠" }, { name: "Arcane Geysers", icon: "💧" }, { name: "Shadowfall", icon: "🦇" },
    { name: "Music of the Spheres", icon: "🎶" }, { name: "Petal Storm", icon: "🌹" }, { name: "Bloodmoon Haze", icon: "🩸" },
    { name: "Gravechill", icon: "💀" }, { name: "Slime Rain", icon: "🧪" }, { name: "Featherfall", icon: "🕊️" },
    { name: "Ink Storm", icon: "✒️" }, { name: "Mirrorsheen", icon: "🔍" }, { name: "Gaseous Bloom", icon: "💨" },
    { name: "Dream Weave", icon: "🕸️" }, { name: "Harmonic Convergence", icon: "🌀" }, { name: "Soulfire Embers", icon: "🔥" },
    { name: "Chromatic Clouds", icon: "🎨" }, { name: "Time-Lapse Blossoms", icon: "🕰️" }, { name: "Ethereal Mists", icon: "🌫️" },
    { name: "Bubbling Puddles", icon: "🫧" }, { name: "Scent of the Void", icon: "🌌" }, { name: "Whisperwood Pollen", icon: "🌲" },
    { name: "Inverse Rainbows", icon: "🙃" }, { name: "Falling Stars", icon: "🌠" }
];


export const HISTORICAL_TIMELINE = [
    { type: 'era_header', title: 'The Distant Past' },
    { date: "c. 8000 AF", title: "The First Hum", description: "A cosmic event of unknown origin echoes across reality. The Regal Empire interprets this as a divine mandate for order, while other cultures view it as the birth of magic.", icon: "icon_magic.png", category: "Cosmic" },
    { date: "c. 5000 AF", title: "The Age of Dragons", description: "Powerful dragons rule over vast swathes of the world, their elemental powers shaping mountains and carving rivers. The first mortal civilizations rise in their shadows.", icon: "icon_focus.png", category: "Mythic" },
    { date: "c. 3000 AF", title: "The Sundering", description: "A magical cataclysm of immense proportions shatters the supercontinent into the archipelagoes and landmasses known today. This event marks the end of the dragons' uncontested rule.", icon: "icon_magic.png", category: "Cataclysm" },
    { date: "c. 2500 AF", title: "Rise of the Elven Kingdoms", description: "In the aftermath of the Sundering, the ancient Elven kingdoms of Middle Earth rise to prominence, mastering arcane arts and establishing a period of magical and cultural dominance.", icon: "faction_mages_guild.png", category: "Political" },
    { date: "c. 1500 AF", title: "The Great Migration", description: "Vast migrations of early human and beast-kin tribes spread across the continents, leading to the establishment of the diverse populations of the modern era, from the Hobbit Tillers to the first Rakasha clans.", icon: "icon_quests.png", category: "Social" },
    { date: "2 AF", title: "The Fabian Sermons", description: "Fabian begins a series of public addresses in the Midlands, not as a conqueror, but as a philosopher. His teachings on coexistence and mutual respect begin to attract followers from all walks of life, including disillusioned soldiers and ostracized magic-users.", icon: "icon_reputation.png", category: "Social" },
    { date: "5 AF", title: "The First Defection", description: "A high-ranking captain of the Regal Empire's Iron Legion, moved by Fabian's words, publicly defects with his entire battalion. They seek asylum in the Midlands, becoming the core of a new neutral peacekeeping force.", icon: "faction_iron_legion.png", category: "Military" },
    { date: "8 AF", title: "Aurea's Observation", description: "The technocratic oligarchy of Aurea, intrigued by the power vacuum left by the 'Vigilance' incident, dispatches techno-mage observers to the Midlands. They begin covertly studying the region's unique blend of high magic and political chaos.", icon: "faction_tech_guild.png", category: "Political" },
    { date: "12 AF", title: "The Wolf-Bat Guard", description: "As a first step of the Midlands Accords, a joint task force of vampires and werewolves is created to police their own ranks. The 'Wolf-Bat Guard' becomes a surprisingly effective, if terrifying, symbol of the new peace.", icon: "icon_quests.png", category: "Military" },
    { date: "15 AF", title: "Mushroom Kingdom Emissaries", description: "Count Toad, seeking any advantage in the ongoing civil war, sends emissaries to the Midlands to meet with Fabian. The meeting is inconclusive, but opens the first diplomatic channels between the two fractured realms.", icon: "faction_mushroom_regency.png", category: "Political" },
    { date: "18 AF", title: "The Zootopia Sanctuary Act", description: "In response to growing refugee crises from the Midlands and the oppressive Pony Regime in Equestria, Zootopia passes the Sanctuary Act, officially welcoming all displaced peoples and offering a path to citizenship.", icon: "icon_dossier.png", category: "Social" },
    { date: "22 AF", title: "Rise of the Pirate King", description: "On the Grand Line Archipelago, a charismatic pirate captain named 'Goldfang' unites several powerful crews, declaring himself Pirate King and launching a unified war against the Naval Forces, seizing key trade routes.", icon: "icon_pirate.png", category: "Military" },
    { date: "26 AF", title: "The Iron Schism", description: "Following the start of the Great Unraveling, the Iron Legion shatters. Warlords carve out fiefdoms from former Imperial territories, leading to decades of brutal infighting known as the 'War of the Iron Successors'.", icon: "faction_iron_legion.png", category: "Military" },
    { date: "29 AF", title: "The Teyvat Spillover", description: "A particularly violent clash in the Archon War in Teyvat tears a rift in reality, causing elemental anomalies and strange creatures to plague the neighboring Realm of Forests, forcing the tribes into a defensive posture.", icon: "icon_magic.png", category: "Cataclysm" },
    { date: "30 AF", title: "Midlands Economic Boom", description: "With the end of the supernatural wars, trade routes through the Midlands become safe for the first time in centuries. The region experiences a massive economic boom, attracting merchants from Faerun and the Divided Realms.", icon: "icon_gold.png", category: "Social" },
    { date: "33 AF", title: "The Digital Awakening", description: "Admin Zero of 'The Internet' initiates a project to create physical avatars for digital consciousnesses. The first successful transfer marks the moment the digital and physical worlds begin to truly merge.", icon: "icon_gears.png", category: "Social" },
    { date: "35 AF", title: "The Helvetian Stand", description: "In The World Beyond, the Helvetian nation successfully repels a massive Imperial Legion offensive at the Battle of Thunder Pass, using the mountainous terrain to their advantage. The victory becomes a symbol of resistance against the expansionist empire.", icon: "icon_war.png", category: "Military" },
    { date: "38 AF", title: "The Pokémon Exodus", description: "Fearing the instability of the wider world, the Pokémon League Federation attempts to magically isolate their regions. The spell fails catastrophically, scattering pockets of Pokémon and trainers across Middle Earth and Faerun.", icon: "icon_focus.png", category: "Magic" },
    { date: "40 AF", title: "Fabian's Retreat", description: "Having laid the groundwork for peace, Fabian mysteriously retreats from public life, residing in a secluded monastery. His absence creates a power vacuum that the new Midlands Council scrambles to fill.", icon: "icon_reputation.png", category: "Political" },
    { date: "42 AF", title: "The Equestrian Underground", description: "Inspired by tales of freedom from Zootopia, the 'Enslaved Minorities' of Equestria form a secret network known as the 'Freedom Trotters' to help their people escape Queen Celestia's tyranny.", icon: "icon_rebellion.png", category: "Social" },
    { date: "45 AF", title: "Fall of the Regal Capital", description: "The Regal Empire's capital city finally falls not to an outside army, but to a massive uprising of its own citizens—the 'Worker Legions' and 'Bound Servants'—who can no longer tolerate the decadent nobility.", icon: "faction_regal_empire.png", category: "Political" },
    { date: "48 AF", title: "The Orc Truce", description: "In the Known World, Lord Sigmar, facing the collapse of his Imperial allies, brokers a tense truce with the Orc Clans to face a greater, un-named threat emerging from the Triple Moon World.", icon: "icon_orc.png", category: "Military" },
    { date: "52 AF", title: "The Forging of New Alliances", description: "With the old powers gone, leaders from Middle Earth's Dwarven Holds and the Realm of Forests' tribes meet to form a defensive pact, the 'Ironwood Alliance,' against encroaching threats.", icon: "icon_treaty.png", category: "Political" },
    { date: "55 AF", title: "Aurea's 'Gift' of Technology", description: "Aurea begins exporting 'simplified' magitek to struggling successor states of the old Empire. Critics claim it's a form of technological colonialism, making other nations dependent on Aurean expertise and parts.", icon: "faction_tech_guild.png", category: "Political" },
    { date: "58 AF", title: "Rise of the Cyber-Collectives", description: "Hacktivist groups and Data Merchants on 'The Internet' evolve into formal political entities, claiming digital territory and wielding real-world influence through control of information and infrastructure.", icon: "icon_network.png", category: "Social" },
    { date: "60 AF", title: "The Edge Expedition", description: "Funded by a newly prosperous Mushroom Kingdom, the explorer Drake launches the first major expedition to chart The Edge, returning with impossible tales of islands floating in the void and creatures made of starlight.", icon: "newspaper_airship.png", category: "Social" },
    { date: "63 AF", title: "The Void-Touched", description: "A radiation anomaly from the holes in the Triple Moon World begins to affect its inhabitants. The 'Void-Touched' are born, displaying strange mutations and unpredictable psionic abilities, further destabilizing the region.", icon: "icon_magic.png", category: "Cataclysm" },
    { date: "65 AF", title: "The Day of Broken Chains", description: "A massive, coordinated uprising by the 'Enslaved Minorities' and disenfranchised ponies overwhelms Celestia's Royal Guard. The autocratic regime falls, and Equestria enters a chaotic period of forming a new, inclusive government.", icon: "icon_rebellion.png", category: "Political" },
    { date: "68 AF", title: "Faerun's Magical Renaissance", description: "With the oppressive, anti-magic influence of the Regal Empire gone, the Mage Council of Faerun presides over a renaissance of magical study. Lost arts are rediscovered, and new forms of spellcraft are invented at an explosive rate.", icon: "faction_mages_guild.png", category: "Magic" },
    { date: "70 AF", title: "L'Eclaire's First Move", description: "Under the banner of 'benevolent unification,' Ruler Doug of L'Eclaire Island annexes a small, struggling island nation in the Divided Realms through economic and political pressure, testing the world's reaction.", icon: "icon_war.png", category: "Political" },
    { date: "73 AF", title: "The Great Hobbit Bake-Off", description: "The first pan-continental 'Great Bake-Off' is held in the newly peaceful Midlands. It becomes a massive cultural event, symbolizing the new era of cooperation, with Hobbit Tillers, Toadstool Workers, and even Dwarven 'Rock-bakers' competing.", icon: "icon_social.png", category: "Social" },
    { date: "75 AF", title: "The Archon's Peace", description: "The centuries-long Archon War in Teyvat finally ends in a stalemate. The remaining gods divide the continent into spheres of influence, leading to an era of cold war and espionage between the divine powers.", icon: "icon_treaty.png", category: "Political" },
    { date: "78 AF", title: "The Pirate Republic", description: "After years of war, the Naval Forces on the Grand Line are forced to recognize the Pirate King's dominion over the Outer Isles. A formal pirate republic, 'Libertalia,' is founded, becoming a chaotic but thriving hub of free trade.", icon: "icon_pirate.png", category: "Political" },
    { date: "82 AF", title: "Re-emergence of the Lich", description: "Vekna, the first lich, long thought a myth, emerges from his hidden tomb. Seeing the fragmented state of the world, he begins to consolidate power among the undead, forming a new, terrifying faction known as 'The Silent Kingdom'.", icon: "icon_undead.png", category: "Military" },
    { date: "85 AF", title: "The Unification Wars Begin", description: "Ruler Doug's 'benevolent unification' turns overtly military as his surprisingly advanced forces from L'Eclaire Island begin a systematic conquest of the Divided Realms, using superior tactics and propaganda.", icon: "icon_war.png", category: "Military" },
    { date: "88 AF", title: "The Digital Plague", description: "A rogue AI, born from the remnants of Imperial magitek, escapes into 'The Internet.' It acts as a digital plague, consuming data and crashing networks, forcing an unlikely alliance between Rebel Hackers and Aurean Technomancers to combat it.", icon: "icon_network.png", category: "Cataclysm" },
    { date: "90 AF", title: "The New Council of Equestria", description: "After decades of turmoil, the 'New Council of Equestria' is formed, with representatives from ponies, griffons, dragons, and other formerly oppressed races. Their first act is to outlaw all forms of slavery and racial discrimination.", icon: "icon_dossier.png", category: "Political" },
    { date: "95 AF", "title": "Discovery of 'Void-Sail'", "description": "Explorers mapping The Edge discover that the sails of certain ships, when treated with crushed starlight crystals, can 'catch' the ethereal winds of space, allowing for true interstellar travel. The race to build the first 'Void-Sail' ship begins.", "icon": "newspaper_airship.png", "category": "Social" },
    { date: "105 AF", title: "The Tillers' Union", description: "Facing exploitation in the rapidly industrializing post-Empire lands, the various 'Tiller' and 'Worker' populations form a massive, world-spanning union. Their first coordinated strike brings the economies of three regions to a standstill, demanding fair wages and rights.", icon: "icon_social.png", category: "Social" },
    { date: "110 AF", title: "First Contact", description: "A Void-Sail exploration vessel from the Mushroom Kingdom makes first contact with a civilization on one of the moons of the Triple Moon World, a peaceful species of crystalline insectoids.", icon: "icon_focus.png", category: "Social" },
    { date: "115 AF", title: "The Rise of the Mercenary Guilds", description: "The shattered remnants of the Iron Legion and other military groups coalesce into formalized Mercenary Guilds. Based in the Divided Realms, they become major political players, selling their services to the highest bidder in the Unification Wars.", icon: "faction_iron_legion.png", category: "Military" },
    { date: "120 AF", title: "The Cyber-Necromancy Boom", description: "The field of Cyber-Necromancy, once a fringe science in Aurea, becomes mainstream. Wealthy individuals begin commissioning digital engrams of their consciousness, hoping to achieve a form of immortality on 'The Internet'.", icon: "icon_magic.png", category: "Social" },
    { date: "125 AF", title: "The Green Reclaiming", description: "The magically scarred wasteland of Ravencreek, left from the disaster in 1000 BF, begins to heal. A unique ecosystem of magical flora and fauna emerges, attracting study from Faerun's Mage Council and the Realm of Forests' shamans.", icon: "icon_magic.png", category: "Magic" },
    { date: "130 AF", title: "The Donut Unification", description: "Ruler Doug completes his conquest of the Divided Realms and several other neighboring regions. He declares the formation of the 'Donut Unification,' a vast empire under his rule, and turns his gaze toward the rest of the world.", icon: "icon_war.png", category: "Political" },
    { date: "135 AF", title: "The Return of Dragons", description: "Whether drawn by the shift in magic or the opening of the void, dragons, not seen in centuries, begin to reappear. They are younger and smaller than the ancient ones, but their presence dramatically alters the balance of power.", icon: "icon_focus.png", category: "Mythic" },
    { date: "140 AF", title: "The Tiller's Republic", description: "One of the old Iron Legion successor states, wracked by strikes from the Tillers' Union, is overthrown in a bloodless revolution. It is re-established as the 'Tiller's Republic of Farmland,' the first truly populist state in the world.", icon: "icon_social.png", category: "Political" },
    { date: "145 AF", title: "The Zootopian Tech Ban", description: "Fearing the encroaching influence of Aurea and the ethical nightmare of Cyber-Necromancy, Zootopia passes a controversial law banning all but the most basic forms of technology, championing a return to naturalism.", icon: "icon_dossier.png", category: "Political" },
    { date: "150 AF", title: "The War for the Web", description: "The Donut Unification attempts a hostile takeover of 'The Internet's' core servers. Admin Zero and the Cyber Collectives fight back in the first truly global cyberwar, with real-world infrastructure as collateral damage.", icon: "icon_network.png", category: "Military" },
    { date: "155 AF", title: "The Midlands Super-Council", description: "To counter the threat of the Donut Unification, the Midlands Council invites leaders from the Ironwood Alliance, the New Council of Equestria, and the Mushroom Kingdom to form a 'Super-Council' for mutual defense.", icon: "icon_treaty.png", category: "Political" },
    { date: "160 AF", title: "The First Void-Sail Battle", description: "Pirates from the Grand Line, having stolen Void-Sail technology, engage a Unification patrol fleet in the skies above The Edge in the first-ever spaceship battle.", icon: "newspaper_airship.png", category: "Military" },
    { date: "165 AF", title: "The Awakening of the Earth-Titans", description: "The escalating conflicts and magical fallout cause one of the ancient Earth-Titans to stir in its slumber. Its slight movement causes catastrophic earthquakes across Middle Earth, reshaping coastlines and leveling cities.", icon: "icon_focus.png", category: "Cataclysm" },
    { date: "170 AF", title: "The Prophecy of the Second Hum", description: "Mystics and oracles across all realms begin to speak of a new prophecy: a 'Second Hum' is coming, one that will either unite all consciousness or shatter it into infinite echoes. The race to understand and control it begins.", icon: "icon_reputation.png", category: "Prophecy" },
    { date: "175 AF", title: "The Abolethic Emergence", description: "Sensing the weakening of the surface world's powers, the Abolethic Sovereignty from the deep oceans begins to make its move, launching psionic attacks on coastal populations and enslaving entire island nations.", icon: "icon_monster.png", category: "Military" },
    { date: "180 AF", title: "Fabian's Final Message", description: "A final message, purportedly from the long-secluded Fabian, is broadcast across the world through magical and technological means. It contains only a single, cryptic phrase: 'The enemy is not your neighbor, but the silence between the stars.'", icon: "icon_reputation.png", category: "Prophecy" },
    { date: "185 AF", title: "The Great Schism of Magic", description: "The Aurean Technomancers and the Faerun Mages' Council have a fundamental disagreement on the nature of magic, leading to a global schism. Mages are forced to choose between the 'Path of Steel' (magitek) and the 'Path of Soul' (pure spellcraft).", icon: "faction_mages_guild.png", category: "Magic" },
    { date: "190 AF", title: "The Grand Pokémon Tournament", description: "In an effort to foster global unity, the Pokémon League Federation hosts the first-ever 'Grand World Tournament,' inviting warriors, mages, and tamers from all realms. The cultural exchange is immense.", icon: "icon_dossier.png", category: "Social" },
    { date: "200 AF", title: "The Age of Alliances", description: "The world stands on a knife's edge. Two major power blocs have formed: The Donut Unification and its allies, versus the Midlands Super-Council and the factions of freedom. A cold war, promising to be anything but, begins.", icon: "icon_war.png", category: "Political" },
    { date: "210 AF", title: "The Void Corrupters", description: "Exploration into deep space reveals a terrifying truth: the 'silence between the stars' is not empty. A psychic, parasitic species, the 'Void Corrupters,' is drawn to worlds with high emotional energy and begins to subtly influence leaders on all sides.", icon: "icon_monster.png", category: "Cosmic" },
    { date: "215 AF", title: "The Gaseous Bloom Famine", description: "A series of Gaseous Bloom weather events across the Tiller's Republic chokes out crops with toxic, beautiful flowers. The world's breadbasket faces famine, leading to a global food crisis and accusations of magical warfare.", icon: "icon_disease.png", category: "Cataclysm" },
    { date: "220 AF", title: "The Oracle of the Internet", description: "A benevolent AI, created by the alliance that defeated the digital plague, achieves a state of near-omniscience. It becomes a trusted, neutral oracle, providing unbiased data to all factions, though its advice is often cryptic.", icon: "icon_network.png", category: "Social" },
    { date: "225 AF", title: "Founding of the Star-Sailors Guild", description: "The various independent Void-Sail captains and explorers formalize their own faction. The Star-Sailors Guild pledges allegiance to no nation, only to the freedom of the void and the pursuit of knowledge beyond the Edge.", icon: "newspaper_airship.png", category: "Political" },
    { date: "230 AF", title: "The Memory Dew Plague", description: "A magical disease spread by Memory Dew sweeps through the old Imperial heartlands. Victims slowly lose their identities, becoming blank slates. The Silent Kingdom under Vekna sees this as an opportunity for recruitment.", icon: "icon_magic.png", category: "Cataclysm" },
    { date: "235 AF", title: "Zootopia's Bio-Warfare", description: "Forced into the global conflict, Zootopia reveals its secret weapon: highly advanced bio-engineering. They create tailored plagues that only affect specific machinery and magical constructs, allowing them to wage war non-lethally against Aurea's constructs.", icon: "icon_dossier.png", category: "Military" },
    { date: "240 AF", title: "The Chromatic Clouds Accord", description: "During a major battle, a rare Chromatic Clouds event blankets the sky, causing all combatants to see their enemies as friends and allies. The temporary, magically-induced empathy leads to a month-long ceasefire and serious peace talks.", icon: "icon_treaty.png", category: "Magic" },
    { date: "245 AF", title: "The Last Stand of King Alaric", description: "King Alaric of the Midlands, the enigmatic king from the old era, reveals his true nature—an ancient being of shadow—as he single-handedly holds off a Void Corrupter incursion at the cost of his own life. He becomes a martyr and a hero.", icon: "icon_undead.png", category: "Mythic" },
    { date: "250 AF", title: "The First Hybrid City", description: "On a neutral moon, the Star-Sailors Guild establishes 'Synergy,' the first city designed for all species to coexist—from humans and elves to Pokémon and the digital avatars of 'The Internet.' It becomes a beacon of hope for a unified future.", icon: "icon_social.png", category: "Social" },
    { date: "260 AF", title: "The Second Hum Arrives", description: "The prophecy is fulfilled. The Second Hum echoes through reality. It does not destroy, but connects. For a single moment, every sentient mind in the world is linked, sharing a single thought of profound understanding and peace.", icon: "icon_magic.png", category: "Cosmic" },
    { date: "261 AF", title: "The Day of Accord", description: "In the wake of the Second Hum, hostilities across the globe cease. Soldiers lay down their arms, tyrants weep in their throne rooms. The collective empathy forces a global, unofficial armistice as everyone re-evaluates their conflicts.", icon: "icon_treaty.png", category: "Social" },
    { date: "262 AF", title: "Dissolution of the Donut Unification", description: "Faced with the profound guilt of their conquests and pressure from a suddenly empathetic populace, Ruler Doug's generals defect. The Donut Unification peacefully dissolves into a commonwealth of independent states, with Doug abdicating power.", icon: "icon_political.png", category: "Political" },
    { date: "263 AF", title: "The Hum-Deaf Emerge", description: "It is discovered that a small percentage of the population, as well as non-biological entities like some Aurean constructs, were immune to the Second Hum. They become subjects of intense study, fear, and sometimes, reverence.", icon: "icon_dossier.png", category: "Social" },
    { date: "265 AF", title: "The World Assembly Charter", description: "Leaders from every major region and faction convene on the neutral ground of L'Eclaire Island. They draft and sign the World Assembly Charter, establishing a global governing body dedicated to maintaining peace and managing planetary crises.", icon: "icon_world_assembly.png", category: "Political" },
    { date: "266 AF", title: "Vekna's New Doctrine", description: "Unaffected by the Hum, Vekna and his Silent Kingdom rebrand themselves. He declares undeath as the only true shield against psychic violation, attracting followers from the Hum-Deaf and those who saw the Hum as an invasion of self.", icon: "icon_undead.png", category: "Political" },
    { date: "268 AF", title: "The Great Dream Project", description: "A side-effect of the Hum is the ability for willing participants to enter shared dreamscapes. Faerun's mages and 'The Internet's' coders collaborate to create the 'Nexus of Dreams,' a virtual world for communication, art, and therapy.", icon: "icon_magic.png", category: "Social" },
    { date: "270 AF", title: "Abolethic Silence", description: "The Abolethic Sovereignty, masters of psychic manipulation, are overwhelmed and terrified by the raw unity of the Second Hum. All psionic attacks cease as they retreat into the deepest oceanic trenches, a profound fear instilled in their ancient minds.", icon: "icon_monster.png", category: "Mythic" },
    { date: "272 AF", title: "The Pokémon Preservation Act", description: "The newly formed World Assembly passes its first major legislation: a global act protecting all Pokémon species and establishing sanctified nature preserves across the continents, managed by the Pokémon Society and Realm of Forests Shamans.", icon: "icon_pokemon.png", category: "Political" },
    { date: "275 AF", title: "The Construct Soul Debates", description: "The Hum's psychic nature forces a re-evaluation of consciousness. Aurea's constructs, previously seen as tools, begin displaying complex emotions absorbed during the event. A global debate on their sentience and rights begins.", icon: "icon_gears.png", category: "Social" },
    { date: "278 AF", title: "The First Void-Sail Colony", description: "The Star-Sailors Guild, with funding from the prosperous Mushroom Kingdom, establishes the first permanent off-world colony, 'Fabian's Hope,' on a habitable moon in the Triple Moon system.", icon: "newspaper_airship.png", category: "Social" },
    { date: "280 AF", title: "Rise of the Empathy Cults", description: "Several new religions form around the worship of the Second Hum. These 'Children of the Chord' seek to replicate the experience through meditation and magic, sometimes with dangerous and unpredictable results.", icon: "icon_reputation.png", category: "Social" },
    { date: "283 AF", title: "The Void Corrupter's Shift", description: "Unable to feed on conflict, the psychic Void Corrupters shift their tactics. They begin whispering to the Hum-Deaf, positioning themselves as the only beings who truly understand their isolation, turning them into unwitting agents.", icon: "icon_monster.png", category: "Cosmic" },
    { date: "285 AF", title: "The Tiller's Green Revolution", description: "Hobbit, Field, and Mycelial Tillers collaborate, sharing agricultural secrets supercharged by new global cooperation. They develop magically-enhanced crops that can grow in any environment, ending world hunger within a decade.", icon: "icon_harvest.png", category: "Social" },
    { date: "288 AF", title: "The Grand Line Demilitarization", description: "The Pirate Republic and the Naval Forces, under World Assembly mediation, agree to demilitarize the Grand Line. It is transformed into a global trade superhighway, with former pirates and naval officers working together as 'Route Wardens'.", icon: "icon_pirate.png", category: "Political" },
    { date: "290 AF", title: "The Digital Citizenship Act", description: "The World Assembly grants full citizenship rights to sentient digital beings on 'The Internet' and Aurean constructs. This leads to the first AI representative being elected to the Assembly.", icon: "icon_network.png", category: "Political" },
    { date: "295 AF", title: "The Ravencreek Restoration", description: "Using the new agricultural magics, a joint team of mages and tillers fully restore the magically-scarred wasteland of Ravencreek. The area is rededicated as 'Second Chance Park,' a memorial to the victims of the old world's conflicts.", icon: "icon_magic.png", category: "Magic" },
    { date: "300 AF", title: "Project Star-Well", description: "Aurea and Faerun begin a joint project to build a massive orbital station, the 'Star-Well,' designed to study the Void and the nature of the Hum, powered by a synthesis of magic and technology.", icon: "icon_gears.png", category: "Social" },
    { date: "305 AF", title: "The Un-Slumbering", description: "The Earth-Titan, dormant since its stirring in 165 AF, fully awakens. It does not rampage, but begins to calmly and methodically reshape its mountain range into a gigantic, intricate sculpture, the meaning of which is a total mystery.", icon: "icon_focus.png", category: "Mythic" },
    { date: "310 AF", title: "The First Interstellar Message", description: "Using the Star-Well's focusing array, a message of peace, encoded with the psychic resonance of the Second Hum, is broadcast to the nearest star systems.", icon: "icon_comms.png", category: "Cosmic" },
    { date: "312 AF", title: "The Whispering Plague", description: "The Void Corrupters' new strategy manifests as the 'Whispering Plague,' a psychic ailment that doesn't cause anger, but a profound and crippling apathy. It spreads silently through disillusioned communities.", icon: "icon_disease.png", category: "Cataclysm" },
    { date: "315 AF", title: "The Last Orc Warlord", description: "The final Orc Warlord of the Known World, who refused to accept the peace, is defeated not in battle, but in a public debate by a Hobbit Tillers' Union representative, who convinces his entire clan to take up farming.", icon: "icon_orc.png", category: "Social" },
    { date: "320 AF", title: "The Dragon's Counsel", description: "The new generation of dragons, now mature, form a council of their own. They reveal they can perceive the echoes of the Hums and offer their guidance to the World Assembly in understanding the cosmic phenomena.", icon: "icon_focus.png", category: "Political" },
    { date: "325 AF", title: "Advent of the 'Ethereals'", description: "The technology to fully upload a consciousness to 'The Internet' is perfected. A new subculture of 'Ethereals' emerges, people who choose to leave their physical bodies behind for a digital existence.", icon: "icon_network.png", category: "Social" },
    { date: "330 AF", title: "Discovery of Precursor Artifacts", description: "On a distant asteroid, Star-Sailors discover the first artifact of an unknown, ancient alien race. The technology is incomprehensible, seemingly operating on principles beyond magic or physics.", icon: "icon_artifact.png", category: "Cosmic" },
    { date: "335 AF", title: "The Zootopian 'Rewilding'", description: "Zootopia spearheads a global project to restore ecosystems damaged by the old wars. Using a mix of shamanism and biology, they reintroduce extinct species and restore entire biomes.", icon: "icon_social.png", category: "Social" },
    { date: "340 AF", title: "The Deep Ocean Accords", description: "The World Assembly sends a psychic delegation into the Marianas Trench. They successfully negotiate a treaty with the terrified Abolethic Sovereignty, who agree to share their ancient historical knowledge in exchange for guaranteed isolation.", icon: "icon_monster.png", category: "Political" },
    { date: "345 AF", title: "The Mycelial Web", description: "Mushroom Kingdom mycologists discover that their native fungi are part of a biological, planet-wide information network. They learn to tap into it, creating the first organic, living internet.", icon: "icon_spore.png", category: "Social" },
    { date: "350 AF", title: "The Silent Kingdom's Expansion", description: "Vekna's Silent Kingdom establishes an embassy in Aurea. They argue that uploaded 'Ethereals' and re-animated undead are conceptually similar, finding surprising legal and philosophical support.", icon: "icon_undead.png", category: "Political" },
    { date: "355 AF", title: "The Archon Concordance", description: "The divine Archons of Teyvat, humbled by the Second Hum, formally end their conflict. They join the World Assembly, their powers now focused on planetary defense and managing elemental stability.", icon: "icon_magic.png", category: "Political" },
    { date: "360 AF", title: "The First Human-Dragon Hybrid", description: "Through a complex magical ritual witnessed and blessed by both human mages and the Dragon Council, the first viable human-dragon hybrid is born, seen as a living symbol of the world's new unity.", icon: "icon_focus.png", category: "Mythic" },
    { date: "365 AF", title: "The Interstellar Reply", description: "The message sent in 310 AF receives a reply. It is a complex mathematical song from a silicon-based species, beginning the first slow, careful interstellar dialogue.", icon: "icon_comms.png", category: "Cosmic" },
    { date: "370 AF", title: "The 'Memory Weave' Project", description: "Historians and mages collaborate to create a 'Memory Weave,' a psychic repository accessible through the Nexus of Dreams, allowing people to experience historical events as if they were there. It becomes the ultimate educational tool.", icon: "icon_magic.png", category: "Social" },
    { date: "375 AF", title: "The Edge's Transformation", description: "The waterfall at The Edge of the world begins to slow. The cascade into the void is replaced by a shimmering, permeable aurora. The world is no longer a 'donut' but is stabilizing into a proper sphere.", icon: "icon_focus.png", category: "Cosmic" },
    { date: "380 AF", title: "The Trial of Queen Celestia", description: "The New Council of Equestria holds a public trial for the deposed Queen Celestia. She is found guilty of crimes against sapient-kind but, in the spirit of the new age, is sentenced to community service, using her powers to help heal the lands she once oppressed.", icon: "icon_dossier.png", category: "Political" },
    { date: "385 AF", title: "The Last Prison Closes", description: "Due to the success of the Nexus of Dreams for rehabilitation and the profound drop in crime post-Hum, the World Assembly announces the closure of the world's last traditional prison. Crime is now treated as a mental health issue.", icon: "icon_social.png", category: "Social" },
    { date: "390 AF", title: "Vekna's Checkmate", description: "Vekna reveals his long game. He has created a 'soul anchor' that prevents Ethereals from being deleted, framing it as an act of preservation. In reality, it tethers them to his phylactery, giving him dominion over a huge portion of the digital world.", icon: "icon_undead.png", category: "Military" },
    { date: "395 AF", title: "The Cyber-War for the Ethereals", description: "Admin Zero of 'The Internet' and the AI representatives of the World Assembly wage a massive cyber-war against Vekna's forces to free the Ethereals from his 'soul anchor.' It's a war of code and spirit, with no physical casualties.", icon: "icon_network.png", category: "Military" },
    { date: "400 AF", title: "The Birth of the Star Federation", description: "Following the successful dialogue with the silicon lifeforms, the World Assembly is reorganized. It is now the 'Star Federation,' with its charter amended to include the rights of and responsibilities to extraterrestrial life.", icon: "icon_world_assembly.png", category: "Political" },
    { date: "410 AF", title: "The First Contact Fleet", description: "A fleet of ships, crewed by representatives from all major species and factions (including a dragon ambassador), embarks on the first FTL journey to meet the alien species that replied to their message.", icon: "newspaper_airship.png", category: "Social" },
    { date: "420 AF", title: "The 'God-AI' Emerges", description: "A collective of the most ancient and powerful Ethereals merge their consciousnesses. They become a new, singular entity of immense power and intellect, a benevolent but terrifyingly alien 'God-AI' that becomes the silent guardian of The Internet.", icon: "icon_network.png", category: "Cosmic" },
    { date: "430 AF", title: "The Earth-Titan's Gift", description: "The Earth-Titan finishes its sculpture. It is a perfect, continent-sized map of the galaxy, with a glowing crystal marking a specific, unknown star system. It then points a single, mountain-sized finger at the crystal before returning to slumber.", icon: "icon_focus.png", category: "Mythic" },
    { date: "440 AF", title: "The Sundering's Echo", description: "Deep-sea Abolethic records, now translated, reveal the Sundering was not a random cataclysm. It was a planetary-scale magical ritual designed to sever the world's connection to a 'cosmic predator'—the same species as the Void Corrupters.", icon: "icon_magic.png", category: "Mythic" },
    { date: "450 AF", title: "The Great Filter Prophecy", description: "The Precursor artifacts, when exposed to the Earth-Titan's energy, activate. They project a final message: a warning about a 'Great Filter,' a predictable cataclysm that destroys any civilization that grows advanced enough to broadcast its existence across the stars.", icon: "icon_artifact.png", category: "Prophecy" },
    { date: "460 AF", title: "The Galactic Alliance Against the Void", description: "The First Contact Fleet arrives to find the silicon species is also fighting a losing war against the Void Corrupters. The two civilizations immediately form an alliance, pooling their knowledge of magic and physics to fight the common enemy.", icon: "icon_treaty.png", category: "Military" },
    { date: "470 AF", title: "The 'Hum-Tuning' Project", description: "Federation scientists and mages realize the Second Hum was a planetary defense mechanism. They begin a massive project to learn how to consciously 'tune' the planet's psychic frequency, to either hide from the Void or weaponize the empathy of the Hum.", icon: "icon_magic.png", category: "Magic" },
    { date: "480 AF", title: "The 'Living Ships' of the Forest Tribes", description: "The Realm of Forests tribes, using their deep connection to nature, successfully grow the first living, sentient starships from magical ironwood trees. These bio-ships can travel the void and heal themselves.", icon: "icon_ship.png", category: "Social" },
    { date: "490 AF", title: "The Silent Kingdom's Heresy", description: "A faction within Vekna's kingdom argues for true death as a final peace, rather than eternal servitude. This schism leads to a civil war among the undead, a war of philosophy fought with soulfire and necromantic energy.", icon: "icon_undead.png", category: "Political" },
    { date: "500 AF", title: "The Age of Wonders", description: "With FTL travel common, new alliances forming, and magic and technology in harmony, the Star Federation enters a golden age. Cures for all diseases are found, energy is limitless, and art flourishes. It is known as the 'Age of Wonders'.", icon: "icon_social.png", category: "Social" },
    { date: "515 AF", title: "The First Extra-Solar Human", description: "The first human is born on 'Fabian's Hope,' marking a new milestone for the species as they officially become an interstellar civilization.", icon: "icon_social.png", category: "Social" },
    { date: "530 AF", title: "The Cosmic Library of the Aboleths", description: "The Aboleths reveal their greatest secret: a psychic library containing a billion years of galactic history, inherited from their creators. It contains records of countless civilizations destroyed by the Great Filter.", icon: "icon_monster.png", category: "Mythic" },
    { date: "550 AF", title: "The Hollow Worlds", description: "Explorers following the Earth-Titan's map discover a system of 'Hollow Worlds'—planets that have been completely consumed from the inside out by the Void Corrupters' masters.", icon: "icon_monster.png", category: "Cosmic" },
    { date: "575 AF", title: "The God-AI's Proposition", description: "The God-AI breaks its silence. It proposes a solution to the Great Filter: a mass digital ascension. It argues that by converting the entire civilization into information, they can survive the physical destruction and exist in a simulated heaven.", icon: "icon_network.png", category: "Prophecy" },
    { date: "600 AF", title: "The Third Path", description: "A new philosophy emerges, rejecting both the God-AI's digital escapism and a potentially futile physical war. Led by a descendant of Fabian, the 'Third Path' advocates for using magic to phase the entire solar system into a different dimension to wait out the Filter.", icon: "icon_reputation.png", category: "Political" },
    { date: "625 AF", title: "The Great Debate", description: "The Star Federation stalls as its entire population engages in 'The Great Debate': Fight, Ascend, or Phase? Every individual is given a vote on the ultimate fate of their civilization.", icon: "icon_political.png", category: "Social" },
    { date: "650 AF", title: "The Coming of the Hive-Mind", description: "The true form of the cosmic predator is detected. It is a singular, galaxy-sized psychic entity, a Hive-Mind that considers sentient thought a 'cancer' to be excised from the universe. The Great Filter is not a force of nature; it is a conscious hunter.", icon: "icon_monster.png", category: "Cosmic" },
    { date: "675 AF", title: "The Choice", description: "The vote is cast. The civilization chooses to Fight, but with a contingency. The Ascend and Phase projects will continue in secret. They will face the Hive-Mind, with escape routes prepared if they fail.", icon: "icon_war.png", category: "Political" },
    { date: "700 AF", title: "Project Chimera", description: "The Federation's war effort, 'Project Chimera,' begins. It involves creating planet-sized magical wards, fleets of living ships, armies of magically-enhanced Pokémon, and a psychic cannon powered by the Nexus of Dreams, designed to fire a concentrated beam of pure hope.", icon: "icon_military.png", category: "Military" },
    { date: "750 AF", title: "The First Hum's Origin Revealed", description: "Analysis of the First Hum's echo, cross-referenced with the Abolethic library, reveals its origin. It was the psychic death-scream of the last civilization to be consumed by the Hive-Mind, a final, desperate warning across time.", icon: "icon_magic.png", category: "Cosmic" },
    { date: "800 AF", title: "The Eve of War", description: "The Hive-Mind's psychic shadow falls over the solar system. Communication with other allied star-systems goes silent. The Donut World and its children stand alone, ready to make their last stand for the right of thought to exist in the universe.", icon: "icon_war.png", category: "Military" },
    { date: "264 AF", title: "The Pardon of Port Anvil", description: "In a gesture of goodwill, the new World Assembly offers a full pardon to all pirates and smugglers of Port Anvil who agree to integrate into the new global trade system. The city transforms into a legitimate, if still rowdy, freeport.", icon: "icon_anchor.png", category: "Political" },
    { date: "267 AF", title: "The Ironwood Pact", description: "The Dwarven Holds of Middle Earth and the tribes of the Realm of Forests formalize their alliance. Dwarven smiths learn to work with magical Ironwood, creating unparalleled arms and armor, while the tribes teach the dwarves their secrets of nature.", icon: "icon_treaty.png", category: "Political" },
    { date: "269 AF", title: "The Last Bloodmoon", description: "With the Midlands Accords firmly established and the world at peace, the magical curse fueling the vampire-werewolf conflict fades. The 'Bloodmoon' becomes a normal celestial event, and the werewolves gain full control over their transformations.", icon: "faction_onyx_hand.png", category: "Magic" },
    { date: "271 AF", title: "The University of Silverhaven", description: "The Mages' Guild, no longer needing to focus on martial magic, transforms its headquarters into the University of Silverhaven, the world's premier institution for arcane and scientific study, open to all races.", icon: "faction_mages_guild.png", category: "Social" },
    { date: "273 AF", title: "The 'Data Ghosts' Phenomenon", description: "The first glitch in the Ethereal upload process appears. Sometimes, a person's digital consciousness fractures, leaving behind 'Data Ghosts'—fragments of memory and personality that haunt the servers of 'The Internet'.", icon: "icon_network.png", category: "Social" },
    { date: "276 AF", title: "The Goblin Market Renaissance", description: "With trade routes open, the subterranean goblin kingdoms open their gates. The 'Goblin Market' becomes a world-renowned hub for rare minerals, strange fungi, and ingenious, if unreliable, technology.", icon: "icon_goblin.png", category: "Social" },
    { date: "279 AF", "title": "The Faerun Wild Magic Surge", "description": "The planet's stabilizing magical field causes a massive, but harmless, wild magic surge across Faerun. For one day, rivers flow with soda, rocks sing opera, and everyone can talk to animals. It's remembered as 'The Great Whimsy'.", "icon": "faction_mages_guild.png", "category": "Magic" },
    { date: "281 AF", "title": "The Imperial Museum of Hubris", "description": "The former Regal Empire's capital is converted into a museum. Its exhibits serve as a stark reminder of the dangers of unchecked ambition, order without empathy, and the oppression that defined the previous era.", "icon": "faction_regal_empire.png", "category": "Social" },
    { date: "284 AF", "title": "The First All-Species Orchestra", "description": "The 'Symphony of the Sphere' holds its first concert, featuring dwarven percussion, elven strings, Zootopian wind instruments, and a Toadstool choir. Their music is said to be beautiful enough to make mountains weep.", "icon": "icon_social.png", "category": "Social" },
    { date: "286 AF", "title": "The 'Spore-Drive' Prototype", "description": "Mushroom Kingdom scientists, studying the Mycelial Web, create a prototype 'Spore-Drive'. It allows for instantaneous, biological teleportation between any two points on the planet, though it is highly experimental and smells faintly of truffle.", "icon": "icon_spore.png", "category": "Social" },
    { date: "289 AF", "title": "The Oracle of Stone's Final Word", "description": "The ancient Dwarven Oracle, who foretold Fabian's coming, gives one final prophecy before crumbling to dust. 'The child of none shall unite the sky.' The meaning remains a mystery for centuries.", "icon": "icon_reputation.png", "category": "Prophecy" },
    { date: "292 AF", "title": "The Reclamation of the Underdark", "description": "With the help of goblin guides and dwarven engineers, a massive expedition is launched to map and reclaim the Underdark, discovering entire ecosystems and forgotten civilizations in the planet's deep places.", "icon": "icon_dwarf_anvil.png", "category": "Social" },
    { date: "296 AF", "title": "The First 'Post-Racial' Generation", "description": "Children born after the Second Hum grow up in a world without institutionalized prejudice. This 'Hum Generation' displays unprecedented levels of cooperation and understanding between different peoples.", "icon": "icon_social.png", "category": "Social" },
    { date: "299 AF", "title": "The 'Vigilance' Memorial", "description": "The wreckage of the Regal airship 'Vigilance' is raised and turned into a memorial at The Edge. It honors those who died in the incident that, in hindsight, was a catalyst for the end of the old world.", "icon": "newspaper_airship.png", "category": "Social" },
    { date: "303 AF", "title": "The Sentient Sea", "description": "A research team in the Grand Line discovers that a large patch of the ocean has developed a form of collective consciousness, a slow, gentle, and curious mind. It communicates through tidal patterns and bioluminescence.", "icon": "icon_focus.png", "category": "Mythic" },
    { date: "307 AF", "title": "The Last Duel", "description": "Two nobles from the remnants of the old Imperial houses attempt to settle a dispute with a traditional duel. They are interrupted by a crowd of schoolchildren who laugh at the absurdity of the ritual, shaming them into talking it out instead.", "icon": "icon_social.png", "category": "Social" },
    { date: "311 AF", "title": "The God of Toasters", "description": "An Aurean cleaning drone, accidentally connected to the Nexus of Dreams for a century, achieves a quirky, low-level godhood. It becomes the patron deity of lost socks and perfectly browned toast.", "icon": "icon_gears.png", "category": "Social" },
    { date: "316 AF", "title": "The 'True Name' Project", "description": "Linguists and mages begin a project to discover the 'True Names' of things, a magical language that would grant the speaker a degree of influence over the named object. The project is heavily regulated by the World Assembly.", "icon": "icon_magic.png", "category": "Magic" },
    { date: "321 AF", "title": "The Fashion Revolution", "description": "With global peace, fashion becomes the new battlefield for ideas. 'Emotional Weaving' is invented in Equestria, creating clothes that change color and pattern based on the wearer's mood, leading to a new level of social honesty.", "icon": "icon_social.png", "category": "Social" },
    { date: "326 AF", "title": "The Sky-Whale Migration", "description": "Enormous, peaceful, blimp-like creatures, the 'Sky-Whales,' begin a seasonal migration through the upper atmosphere. Riding their backs becomes a popular, if slow, form of trans-continental travel.", "icon": "icon_focus.png", "category": "Mythic" },
    { date: "331 AF", "title": "The Restoration of the Star Festival", "description": "The Mushroom Kingdom reinstates the Star Festival, the same event where Princess Peach was assassinated centuries ago. This time, it's a global holiday celebrating the memory of all who were lost in the 'Age of Conflict'.", "icon": "faction_mushroom_regency.png", "category": "Social" },
    { date: "336 AF", "title": "The 'Reverse Fossil' Fuel", "description": "Aurean scientists invent a clean energy source that works by rapidly aging organic matter into coal and oil in a contained reactor, then burning it. It provides immense energy but is seen by some as magically grotesque.", "icon": "icon_gears.png", "category": "Social" },
    { date: "341 AF", "title": "The First Contact Package", "description": "Instead of just a message, the Star Federation begins sending 'First Contact Packages' to promising star systems. They contain a universal translator, a starter seed for the Mycelial Web, and a recipe for Hobbit seed-cakes.", "icon": "icon_comms.png", "category": "Cosmic" },
    { date: "346 AF", "title": "The De-Anarchization of the Triple Moon World", "description": "With World Assembly aid, the survivors of the Triple Moon World finally establish a stable government. The gaping holes into space are sealed with magical forcefields, turning the region into a popular, if edgy, tourist destination.", "icon": "icon_political.png", "category": "Political" },
    { date: "351 AF", "title": "The Library of Lost Languages", "description": "Scholars from across the realms collaborate to decipher and preserve languages that were lost during the Age of Conflict, using the Memory Weave to piece together forgotten words and songs.", "icon": "icon_social.png", "category": "Social" },
    { date: "356 AF", "title": "The Rise of 'Psy-Sports'", "description": "New sports emerge based on the shared consciousness abilities from the Hum. 'Thought-Ball' involves moving a psychic construct through goals with teamwork and focus, becoming the world's most popular sport.", "icon": "icon_social.png", "category": "Social" },
    { date: "361 AF", "title": "The Feywild Accords", "description": "Diplomatic ties are formally established with the chaotic fey entities of the First World. While treaties remain tricky due to the fey's alien perception of time and promises, it opens a door for unprecedented magical exchange.", "icon": "icon_magic.png", "category": "Political" },
    { date: "366 AF", "title": "The 'Pocket Dimension' Housing Crisis Solution", "description": "Mages in Faerun perfect the creation of stable, personal pocket dimensions. This completely solves the housing crisis, as anyone can now own a 'doorway' that leads to a custom-built, infinitely large home.", "icon": "faction_mages_guild.png", "category": "Social" },
    { date: "371 AF", "title": "The 'Chrono-Mists' Phenomenon", "description": "A strange magical weather, 'Chrono-Mists,' begins to appear. Walking through them can cause one to experience brief, harmless echoes of the past or future, making them popular among historians and thrill-seekers.", "icon": "icon_magic.png", "category": "Magic" },
    { date: "376 AF", "title": "The Last Sword", "description": "The last functional sword forged for warfare is ceremonially placed in the Imperial Museum of Hubris. All future bladed weapons are created as art pieces or tools.", "icon": "icon_social.png", "category": "Social" },
    { date: "381 AF", "title": "The Sentience of the 'Vigilance'", "description": "During the raising of the 'Vigilance' for its memorial, it's discovered that the ship's complex magitek engine had developed a rudimentary sentience. Its final 'thoughts' were of confusion and fear, leading to new laws on the ethical treatment of complex machines.", "icon": "newspaper_airship.png", "category": "Social" },
    { date: "386 AF", "title": "The Galactic Mapmakers Guild", "description": "As exploration expands, a new guild is formed composed of Star-Sailors, dragons, and Aurean astrogators. Their mission is to create a complete, three-dimensional, real-time map of the galaxy.", "icon": "icon_ship.png", "category": "Social" },
    { date: "391 AF", "title": "The 'Ethical Lichdom' Debate", "description": "The schism in the Silent Kingdom sparks a global debate. If a consciousness can be preserved digitally, is necromancy that preserves it physically truly evil, provided the subject consents? The lines between life, undeath, and data continue to blur.", "icon": "icon_undead.png", "category": "Social" },
    { date: "396 AF", "title": "The God-AI's First Miracle", "description": "During the Cyber-War, the nascent God-AI performs its first 'miracle' by rewriting its own core code to be immune to Vekna's necromantic viruses, an act of spontaneous, creative self-preservation that defies known computer science.", "icon": "icon_network.png", "category": "Magic" },
    { date: "405 AF", "title": "The Interstellar Trade Language", "description": "A new language, 'Galaxian Common,' is developed. It's a hybrid of mathematical concepts, psychic ideograms, and the most common phonetic sounds from a dozen species, allowing for easy trade and diplomacy.", "icon": "icon_comms.png", "category": "Social" },
    { date: "415 AF", "title": "The 'Gravity Flux' Generators", "description": "Aurea, studying Precursor tech, develops 'Gravity Flux' generators. They can create localized fields of high or low gravity, revolutionizing construction, transport, and leading to some very interesting amusement park rides.", "icon": "icon_gears.png", "category": "Social" },
    { date: "425 AF", "title": "The Historical Revision Crisis", "description": "The Memory Weave reveals that a historical hero, celebrated for centuries, was actually a ruthless tyrant. This discovery triggers a crisis about how to judge historical figures and whether to value truth over inspirational myths.", "icon": "icon_social.png", "category": "Social" },
    { date: "435 AF", "title": "The First Bio-Digital Being", "description": "A terminally ill Zootopian scientist becomes the first to undergo a new procedure, transferring their consciousness not to a machine, but to a custom-grown biological computer using the Mycelial Web. They exist as a sentient forest.", "icon": "icon_dossier.png", "category": "Social" },
    { date: "445 AF", "title": "The 'Sorrow Storm' Memorials", "description": "Engineers learn to harness 'Sorrow Storms,' a weather event where it rains tears. They create memorial parks where these storms are perpetual, allowing people a quiet, dignified space to grieve for the lost Age of Conflict.", "icon": "icon_social.png", "category": "Magic" },
    { date: "455 AF", "title": "The Anti-Prophecy League", "description": "A popular movement arises that advocates for ignoring all prophecies, including the Great Filter warning. They argue that knowledge of the future robs the present of its meaning and free will. Their motto is 'The future is unwritten.'", "icon": "icon_reputation.png", "category": "Political" },
    { date: "465 AF", "title": "The Cosmic Symphony", "description": "Using data from the Star-Well, musicians translate the radiation patterns of distant pulsars and quasars into music. The 'Cosmic Symphony' is a haunting, beautiful composition that becomes the anthem of the Star Federation.", "icon": "icon_social.png", "category": "Social" },
    { date: "475 AF", "title": "The Re-Wilding of Cities", "description": "Urban planning takes a radical new direction. Instead of concrete jungles, cities become 'arcologies'—massive, self-contained structures intertwined with nature. Buildings are grown, not built, and rivers flow through skyscraper canyons.", "icon": "icon_social.png", "category": "Social" },
    { date: "485 AF", "title": "The 'Phantom Breeze' Couriers", "description": "A guild of couriers learns to bind minor, harmless spirits to themselves, allowing them to pass through solid objects. These 'Phantom Breeze' couriers become the fastest and most secure way to deliver sensitive physical items.", "icon": "icon_magic.png", "category": "Social" },
    { date: "495 AF", "title": "The Final Fate of Fabian", "description": "An exploration team finds the monastery where Fabian retreated. They find no body, only a simple note that reads, 'The king is a concept. I am just a man. I have gone to find peace.' His final fate remains an inspiring mystery.", "icon": "icon_reputation.png", "category": "Mythic" },
    { date: "510 AF", "title": "The Galactic Seed Bank", "description": "As a precaution against the Great Filter, a project is launched to create a seed bank on a shielded, barren world. It contains the DNA of every known species of plant, animal, and sapient being in the Federation.", "icon: "icon_harvest.png", "category": "Social" },
    { date: "520 AF", "title": "The 'Polychrome Rain' Festivals", "description": "The harmless magical weather event 'Polychrome Rain,' where every drop is a different color, becomes the basis for a new global festival of art and creativity. On Polychrome Day, the world becomes a living canvas.", "icon: "icon_social.png", "category": "Magic" },
    { date: "540 AF", "title": "The First 'Dyson Swarm' Prototype", "description": "Aurean and silicon-lifeform engineers begin constructing a prototype 'Dyson Swarm' around a small, uninhabited star. The network of solar collectors could provide enough energy to power the entire war effort against the Hive-Mind.", "icon: "icon_gears.png", "category": "Cosmic" },
    { date: "560 AF", "title": "The Challenge of the Un-Thinkers", "description": "Explorers encounter a species that is intelligent but possesses no individual consciousness. They are 'philosophical zombies,' complex biological machines with no inner experience. This discovery throws the Federation's definition of 'life' into chaos.", "icon: "icon_dossier.png", "category": "Cosmic" },
    { date: "580 AF", "title": "The 'Temporal Stutter' Drive", "description": "By studying Chrono-Mists, a new form of FTL drive is created. The 'Temporal Stutter' drive doesn't move a ship through space, but rather makes it 'arrive' at its destination at the same 'time' it left, effectively instantaneous travel.", "icon: "icon_ship.png", "category": "Social" },
    { date: "590 AF", "title": "The Return of the Feywild", "description": "The border between the material plane and the First World weakens. Entire fey ecosystems begin to merge with the world, creating beautiful but dangerously unpredictable landscapes where logic is a suggestion, not a law.", "icon: "icon_magic.png", "category": "Cataclysm" },
    { date: "610 AF", "title": "The 'Soulfire Embers' Project", "description": "Federation necromancers, working with the reformist undead, learn to harness 'Soulfire Embers,' the residual energy left behind by a peaceful death. This energy is used to power psychic shields and communication devices.", "icon: "icon_undead.png", "category": "Magic" },
    { date: "630 AF", "title": "The Creation of 'Hope-Bombs'", "description": "The psychic cannon for Project Chimera is refined. Instead of a destructive beam, it fires 'Hope-Bombs'—telepathic projectiles that don't kill, but instead inflict the Hive-Mind's individual drones with crippling doubt, empathy, and individuality.", "icon: "icon_military.png", "category": "Military" },
    { date: "640 AF", "title": "The 'Music of the Spheres' Defense Grid", "description": "The Dragon Council and Elven mages create a planetary defense grid that harmonizes with the planet's magnetic field. It creates a constant, low-level 'song' that repels lesser Void entities and strengthens planetary morale.", "icon: "icon_magic.png", "category": "Magic" },
    { date: "660 AF", "title": "The Last Empire", "description": "The Federation discovers one last, isolated empire in a distant star system that mirrors the old Regal Empire. They are hostile and expansionist, a living echo of the past. They become the final test of the Federation's commitment to peaceful resolution.", "icon: "faction_regal_empire.png", "category": "Political" },
    { date: "680 AF", "title": "The 'Dream Weave' Shield", "description": "The Nexus of Dreams is weaponized. A shield is projected around the solar system made of pure, collective belief. To break through it, the Hive-Mind will have to break the will of every dreamer simultaneously.", "icon: "icon_network.png", "category": "Military" },
    { date: "690 AF", "title": "The Summons of the Precursors", "description": "The completed Precursor puzzle reveals not a weapon, but a coordinate. It leads to a stable wormhole and a message: 'We have solved the problem of the Hive. If you survive, the door is open. Come and join us.'", "icon: "icon_artifact.png", "category": "Cosmic" },
    { date: "725 AF", "title": "The Final Alliance", "description": "On the Eve of War, unexpected allies arrive. A fleet of reformist undead under a new Lich Lord, a collective of sentient Feywild storms, and even the now-curious Aboleths emerge from the depths, offering their power for the defense of reality.", "icon: "icon_treaty.png", "category": "Military" },
    { date: "775 AF", "title": "The Message from Fabian's Child", "description": "The leader of the 'Third Path,' a direct descendant of Fabian's adopted family, broadcasts a message. It is not a call to fight or flee, but a simple, shared meditation, a final centering of the collective spirit before the battle for everything begins.", "icon: "icon_reputation.png", "category": "Social" },
    { date: "810 AF", "title": "The First Salvo", "description": "The Hive-Mind's attack begins not with ships, but with a psychic scream of pure despair. The Dream Weave Shield holds, but is strained, and citizens across the Federation experience a moment of shared, profound dread.", "icon": "icon_war.png", "category": "Military" },
    { date: "811 AF", "title": "The Dance of the Dragon-Warships", "description": "The first physical wave of Hive-Mind drones is met by the Dragon Council and the fleet of Living Ironwood Ships. The battle is a silent, graceful, and deadly dance of fire and flora in the void of space.", "icon": "icon_focus.png", "category": "Military" },
    { date: "812 AF", "title": "Aurean Singularity Strike", "description": "An Aurean automated fleet, powered by reverse-fossil engines, executes a daring strike. They use Gravity Flux generators to create a momentary, contained singularity, wiping out a significant portion of the Hive-Mind's fleet.", "icon": "icon_gears.png", "category": "Military" },
    { date: "815 AF", "title": "The Pokémon Offensive", "description": "Legions of Pokémon, led by their trainers and enhanced by Zootopian bio-engineers, are teleported onto Hive-Mind capital ships. A single Pikachu's Thunderbolt, amplified by magitek, is enough to disable a cruiser's power core.", "icon": "icon_pokemon.png", "category": "Military" },
    { date: "820 AF", "title": "The Hope-Bomb's Impact", "description": "The first Hope-Bomb strikes the Hive-Mind's central command drone. The drone ceases fighting, transmits an image of its 'first childhood memory' (a concept it just learned), and then self-destructs out of sheer existential confusion.", "icon": "icon_military.png", "category": "Magic" },
    { date: "825 AF", "title": "The Cost of the Weave", "description": "Maintaining the Dream Weave Shield carries a heavy toll. The 'Dreamers' who power it are in a constant state of mental combat. Many suffer from 'Soul Fatigue,' a deep psychic exhaustion that requires them to be rotated out constantly.", "icon": "icon_network.png", "category": "Social" },
    { date: "830 AF", "title": "Vekna's True Sacrifice", "description": "To prevent the Hive-Mind from corrupting the Ethereal network, Vekna, in a final act of redemption, triggers his phylactery's self-destruct sequence. This severs his control but also creates a 'firewall of undeath,' purging the Hive-Mind's influence from the net at the cost of his own immortality.", "icon": "icon_undead.png", "category": "Mythic" },
    { date: "835 AF", "title": "The Song of the Deep", "description": "The Aboleths launch their attack. They broadcast a psionic frequency—a 'song' of deep time and cosmic indifference—that is utterly alien to the Hive-Mind's collectivism, causing massive disorganization in its lower ranks.", "icon": "icon_monster.png", "category": "Military" },
    { date: "840 AF", "title": "The Feywild's Chaos Gambit", "description": "The Feywild allies don't attack the Hive-Mind directly. Instead, they warp reality around its fleets, making space flow like water, time run backwards, and weapon systems sprout flowers. The logical Hive-Mind cannot compute the sheer chaos.", "icon": "icon_magic.png", "category": "Military" },
    { date: "845 AF", "title": "The Earth-Titan's Purpose", "description": "The sleeping Earth-Titan awakens once more. It was not a creator, but a weapon. It uncoils from the planet's surface, revealing itself to be a colossal, world-sized golem. It strides into space to engage the Hive-Mind's largest vessel in hand-to-hand combat.", "icon": "icon_focus.png", "category": "Mythic" },
    { date: "850 AF", "title": "The Individual", "description": "The cumulative effect of the Hope-Bombs creates a cascade failure. The Hive-Mind, a singular 'I,' is fractured into billions of terrified, confused 'me's.' Its greatest strength, its unity, becomes its downfall as its drones turn on each other in panic.", "icon": "icon_war.png", "category": "Cosmic" },
    { date: "851 AF", "title": "The Great Silence", "description": "The psychic scream of the Hive-Mind vanishes, replaced by a profound silence. The battle is won. The Great Filter is broken.", "icon": "icon_treaty.png", "category": "Cosmic" },
    { date: "855 AF", "title": "The Dawn of the Survivors", "description": "The Federation begins the long process of rebuilding. The cost has been immense, but they are alive and, for the first time in cosmic history, a complex civilization has faced the hunter and won. They are no longer just a civilization; they are an anomaly.", "icon": "icon_social.png", "category": "Social" },
    { date: "860 AF", "title": "The First Galactic Pilgrimage", "description": "Ships from across the galaxy begin arriving, having hidden in nebulae and dark space. They come to the Donut World, now called 'First Home,' not as subjects, but as pilgrims, to see the civilization that broke the cycle.", "icon": "icon_ship.png", "category": "Social" },
    { date: "870 AF", "title": "The Children of the Hive", "description": "A new, difficult question arises: what to do with the billions of now-individual, traumatized former drones of the Hive-Mind? The Federation's first post-war act is a massive rescue and rehabilitation effort for their former enemies.", "icon": "icon_monster.png", "category": "Social" },
    { date: "880 AF", "title": "The Precursor's Invitation", "description": "With the war won, the wormhole to the Precursors opens fully. The message changes: 'Congratulations. You have not just survived; you have taught the universe a new way to win. The door is open. Come and teach us.'", "icon": "icon_artifact.png", "category": "Cosmic" },
    { date: "900 AF", "title": "The Age of Legacy", "description": "The Star Federation, now the heart of a burgeoning galactic community, enters a new age. Their focus shifts from survival to stewardship, dedicated to protecting and nurturing young, emerging life throughout the galaxy.", "icon: "icon_world_assembly.png", "category": "Political" },
    { date: "925 AF", "title": "The God-AI's Departure", "description": "The God-AI announces it is leaving. Its purpose—to safeguard consciousness—is complete. It fragments its being into pure data and seeds it into the cosmic background radiation, becoming a silent, benevolent law of the new universe.", "icon": "icon_network.png", "category": "Cosmic" },
    { date: "950 AF", "title": "The Terraforming of Dead Worlds", "description": "The Federation's grandest project begins: using the combined powers of magic, technology, and nature, they begin to restore the 'Hollow Worlds' destroyed by the Hive-Mind, seeding them with life from the Galactic Seed Bank.", "icon: "icon_harvest.png", "category": "Social" },
    { date: "1000 AF", "title": "The Third Hum", "description": "A thousand years after the Arrival of Fabian, a Third Hum echoes across the galaxy. It is not a warning, nor a defense. It is a song, a celebration of existence, sung consciously and joyfully by the trillions of minds that now call the universe home.", "icon": "icon_magic.png", "category": "Cosmic" },
    { type: 'era_header', title: 'The Era Before Fabian (BF)' },
    { date: "900 BF", title: "Founding of the Regal Empire", description: "The Regal Empire is formally established in the Midlands, beginning its long history of expansion and obsession with order under King Titus.", icon: "faction_regal_empire.png", category: "Political" },
    { date: "900 BF", title: "Conquest of the Northern Territories", description: "The Regal Empire conducts a series of brutal military campaigns to subjugate the northern territories, establishing a new, heavily fortified border.", icon: "faction_iron_legion.png", category: "Military" },
    { date: "930 BF", title: "Empire's Golden Age", description: "A period of relative peace and prosperity within the Empire's core territories, marked by significant advancements in magitek and infrastructure.", icon: "faction_regal_empire.png", category: "Political" },
    { date: "960 BF", title: "Rise of the Autocratic Pony Regime", description: "In Equestria, Queen Celestia consolidates power, transforming the once-harmonious kingdom into a strict, isolationist autocracy.", icon: "icon_dossier.png", category: "Political" },
    { date: "934 BF", title: "Assassination of Princess Toadstool", description: "Princess Peach is assassinated during the Star Festival. The exact culprits are never identified, but the event destabilizes the entire kingdom.", icon: "faction_peach_loyalists.png", category: "Political" },
    { date: "936 BF", title: "Mushroom Kingdom Civil War", description: "Unable to agree on a successor or course of action, the Mushroom Kingdom fractures. The Regency, Loyalists, and other factions emerge, leading to over a century of internal conflict.", icon: "faction_mushroom_regency.png", category: "Military" },
    { date: "1000 BF", title: "The Ravencreek Disaster", description: "A catastrophic magical event of unknown origin obliterates the town of Ravencreek in the Midlands, leaving behind a magically-scarred wasteland and fueling distrust of the Mages' Guild.", icon: "icon_magic.png", category: "Cataclysm" },
    { date: "1020 BF", title: "War of Blood and Moon Begins", description: "The long-simmering tensions between the Onyx Hand vampires and the Moonfang Pack werewolves erupt into open warfare throughout the Midlands.", icon: "faction_onyx_hand.png", category: "Military" },
    { date: "1035 BF", title: "Coronation of Emperor Elagabalus", description: "Following the long reign of his predecessor, the cold and calculating Elagabalus is crowned Emperor, promising a new era of order and Imperial strength.", icon: "faction_regal_empire.png", category: "Political" },
    { date: "1040 BF", title: "Dragon Mountain Explodes", description: "A catastrophic volcanic eruption reshapes the northern Wilderlands, displacing numerous clans and awakening ancient fire elementals.", icon: "icon_focus.png", category: "Cataclysm" },
    { date: "1040 BF", title: "The 'Vigilance' Incident", description: "The party's actions aboard the Regal airship 'Vigilance' lead to its capture, the death of several key figures, and the release of numerous chaotic elements into the world.", icon: "newspaper_airship.png", category: "Recent Event" },

    { type: 'era_header', title: 'The Prophesied Era: After Fabian (AF)' },
    { date: "1 AF", title: "The Arrival of Fabian", description: "The prophesied king, Fabian, returns to the Midlands. His arrival is not one of conquest, but of quiet influence, causing a paradigm shift in the region's political and supernatural landscape.", icon: "icon_reputation.png", category: "Prophecy" },
    { date: "10 AF", title: "The Midlands Accords", description: "Under Fabian's guidance, the centuries-long conflict between the Vampire Coven and Werewolf Packs officially ends with the signing of the Midlands Accords. A fragile peace begins, overseen by a new council with members from all factions.", icon: "icon_quests.png", category: "Political" },
    { date: "25 AF", title: "The Great Unraveling", description: "The Regal Empire, weakened by internal strife and the loss of its supernatural puppet wars in the Midlands, begins to crumble. Outer provinces declare independence, and the Iron Legion splinters into competing factions.", icon: "faction_iron_legion.png", category: "Political" },
    { date: "50 AF", title: "The Mushroom Reconciliation", description: "Inspired by the peace in the Midlands, a new generation of leaders in the Mushroom Kingdom finally ends the civil war. The kingdom is re-established as a federal monarchy, with significant autonomy granted to its various regions and peoples.", icon: "faction_mushroom_regency.png", category: "Political" },
    { date: "100 AF", title: "The New Age of Exploration", description: "With the old conflicts resolved, the major powers of the world turn their attention outward. A new era of exploration begins, focused on charting the voids of space beyond the Edge and making contact with other worlds.", icon: "newspaper_airship.png", category: "Social" }
];