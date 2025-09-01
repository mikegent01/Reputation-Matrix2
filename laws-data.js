// laws-data.js

export const LAW_DATA = {
    regal_empire: {
        name: "The Regal Empire",
        logo: "faction_regal_empire.png",
        description: "Laws built on order, Imperial authority, and human supremacy. Every edict reinforces the stability of the state and the divine right of the Emperor.",
        political: [
            { name: "Political Parties", spectrum: ["Multi-Party System", "Controlled Opposition", "Imperial Decree"], current: 2, trend: 0, description: "The Regal Empire is an absolute monarchy where the Emperor's word is law. All political power is centralized; opposition parties are strictly forbidden to ensure unwavering unity and order." },
            { name: "Religious Rights", spectrum: ["Secularism", "Pluralism", "Imperial Faith"], current: 2, trend: 0, description: "The Empire formally endorses the faith of the Silver Flame, seeing its doctrine of purity and order as a useful tool for social control. Other faiths are tolerated only as long as they do not challenge Imperial authority." },
            { name: "Trade Unions", spectrum: ["All Unions Allowed", "Non-Socialist Allowed", "State-Controlled", "Outlawed"], current: 2, trend: -1, description: "Independent worker organization is seen as a threat to state control. The only permitted unions are state-sanctioned guilds that serve the Empire's economic interests, not the workers'." },
            { name: "Immigration", spectrum: ["Open Immigration", "Quota Immigration", "Closed Borders"], current: 1, trend: 0, description: "Immigration is strictly controlled via a quota system, prioritizing skilled laborers and artisans who can contribute to the Empire's magitek industry. Unskilled labor is not welcome." },
            { name: "Slavery", spectrum: ["Outlawed", "Corvée Labor", "Allowed"], current: 1, trend: 0, description: "While chattel slavery is illegal, the Empire makes extensive use of penal labor and indentured servitude, particularly in its mines and foundries, viewing it as a just punishment for criminals and debtors." },
            { name: "Public Meetings", spectrum: ["Allowed", "Regulated", "Outlawed"], current: 1, trend: -1, description: "Public gatherings require official permits and are heavily monitored by the Iron Legion. Any unapproved protest is swiftly and brutally dispersed to maintain public order." },
            { name: "Press Rights", spectrum: ["Free Press", "Censored Press", "The Imperial Herald"], current: 2, trend: 0, description: "All major news outlets are state-owned and operated, disseminating official propaganda. Independent presses are non-existent, and foreign media is heavily censored." },
            { name: "Voting Rights", spectrum: ["Universal Voting", "Registered Voting", "Elite Voting", "The Emperor's Will"], current: 3, trend: 0, description: "The Emperor is a divine, absolute monarch. The concept of voting is considered a vulgar and chaotic absurdity. The Emperor's will is the only vote that matters." },
            { name: "Refugees", spectrum: ["Open Programs", "Vetted Entry", "Skilled Only", "Banned"], current: 2, trend: 0, description: "The Empire only accepts refugees who possess critical skills, such as engineers or alchemists, that can be exploited for the state's benefit. All others are turned away at the border." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "1-Year Draft", "Service By Requirement", "All Adults Serve"], current: 2, trend: 0, description: "All eligible adult males are required to serve in the Iron Legion for a period of two years. This ensures a large, well-trained standing army to enforce Imperial law." },
            { name: "Women in Service", spectrum: ["Banned", "Military Assistance", "Non-Combat Only", "Combat Roles"], current: 2, trend: 1, description: "Women may serve in the Iron Legion, but traditionalist doctrine confines them to support roles such as medics, quartermasters, and intelligence officers, keeping them from direct frontline combat." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling", "Advanced Methods"], current: 2, trend: 0, description: "Legionnaires receive rigorous, standardized combat training that emphasizes discipline, formation fighting, and unwavering obedience over individual initiative." },
            { name: "Racial Integration", spectrum: ["No Integration", "Segregated Regiments", "Integrated Military"], current: 1, trend: 0, description: "Non-human subjects of the Empire may serve, but they are placed in separate, auxiliary regiments under human command and are often used for the most dangerous assignments." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions", "Educational Deferment", "Civil Service Deferment", "Religious Deferment"], current: 1, trend: 0, description: "Students at the Imperial University and vital state artificers may have their military service deferred, as their skills are considered more valuable off the battlefield." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Free Trade", "Export Focus", "Limited Exports", "Closed Economy"], current: 1, trend: 0, description: "The Empire's magitek industry is a global powerhouse. Exports of advanced technology are heavily encouraged to generate wealth and create technological dependence in other nations." },
            { name: "Economic Focus", spectrum: ["Civilian Economy", "Early Mobilization", "Partial Mobilization", "War Economy"], current: 2, trend: 1, description: "The Imperial economy is in a state of partial mobilization, with significant resources dedicated to military expansion and the continuous production of war machines." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "Exploitative"], current: 2, trend: 0, description: "Taxes are high to fund the Empire's vast military and ambitious infrastructure projects. Tax collection is ruthlessly efficient." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat", "Low Income Weighted", "Elite Exemptions"], current: 3, trend: 0, description: "The ancient noble houses and high-ranking officials enjoy significant tax exemptions, placing the burden squarely on the merchants and common folk." },
            { name: "Minimum Wage", spectrum: ["No Minimum", "Trinket", "Low", "Acceptable"], current: 2, trend: 1, description: "A low minimum wage is enforced to ensure a cheap labor pool for the state's industries, but it is barely enough for a subsistence-level existence." },
            { name: "Child Labor", spectrum: ["Illegal", "Restricted", "Legal"], current: 1, trend: 0, description: "Child labor is permitted but restricted, typically in the form of apprenticeships within state-controlled guilds. Age and hour limits are strictly enforced." },
            { name: "Pensions", spectrum: ["None", "Trinket", "Low", "Acceptable"], current: 2, trend: 0, description: "Pensions are provided only to veterans of the Iron Legion and retired state functionaries as a reward for a lifetime of loyal service." },
            { name: "Unemployment", spectrum: ["No Subsidies", "Trinket", "Low", "Acceptable"], current: 1, trend: 0, description: "There is no formal welfare system. The unemployed are strongly encouraged to find work in the mines or factories, or face conscription into penal labor battalions." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["None", "Minimal", "Limited", "Acceptable", "Excellent"], current: 2, trend: 0, description: "Safety regulations in the magitek foundries are limited. While the state doesn't want to lose skilled workers, production quotas often take precedence over personal safety." },
            { name: "Health Care", spectrum: ["No System", "Private", "Public", "Universal"], current: 1, trend: 0, description: "The Empire has no public health system. Healthcare is a private enterprise, affordable only to the wealthy. Legionnaires receive excellent state-funded medical care." },
            { name: "Pollution", spectrum: ["No Control", "Few Regulations", "Some Regulations", "Good Regulations"], current: 1, trend: -1, description: "The magitek industry is highly polluting. There are few environmental regulations, and the industrial centers of the capital are becoming choked with arcane smog." },
            { name: "Education", spectrum: ["Elite Only", "Public", "Subsidized Higher"], current: 0, trend: 0, description: "State-funded education is a privilege reserved for the children of the nobility and those identified as having exceptional talent for the state's purposes. The masses remain largely uneducated." },
            { name: "Minority Rights", spectrum: ["Affirmative Action", "Equal Rights", "Segregation", "State Oppression"], current: 2, trend: -1, description: "Non-human citizens are systematically segregated. They live in specific quarters, are barred from high office, and are treated as second-class subjects of the Emperor." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Rehabilitation", "Incarceration", "Penal Labor", "Penal Slavery", "Capital Punishment"], current: 3, trend: 0, description: "The Empire utilizes penal slavery, forcing convicts to work in the most dangerous mines and forges. The death penalty is common for crimes of treason and sedition." }
        ]
    },
    mushroom_regency: {
        name: "Mushroom Regency",
        logo: "faction_mushroom_regency.png",
        description: "A fractured bureaucracy struggling to maintain order amidst a century-long civil war. Its laws are a patchwork of old traditions and desperate measures, reflecting its instability.",
        political: [
            { name: "Political Parties", spectrum: ["One-Party State", "Controlled Opposition", "Multi-Party System"], current: 2, trend: -1, description: "In the chaos following the Princess's death, numerous political factions have sprung up, from Loyalist hardliners to peace-seeking diplomats. The Regency is a chaotic multi-party system on the verge of collapsing back into authoritarianism to regain control." },
            { name: "Religious Rights", spectrum: ["Secularism", "Pluralism", "State Religion"], current: 1, trend: 0, description: "The Regency maintains the traditional Mushroom Kingdom stance of religious pluralism, honoring the Star Sprites while allowing other faiths to be practiced freely." },
            { name: "Trade Unions", spectrum: ["All Unions Allowed", "Non-Socialist Allowed", "State-Controlled", "Outlawed"], current: 0, trend: 0, description: "With the government weakened, trade and labor unions of all kinds have formed to protect their members' interests, operating with little to no state oversight." },
            { name: "Immigration", spectrum: ["Open Immigration", "Quota Immigration", "Closed Borders"], current: 0, trend: -1, description: "The borders are currently porous due to the chaos, but the Regency is trying to impose stricter controls to manage the refugee crisis caused by the war." },
            { name: "Slavery", spectrum: ["Outlawed", "Corvée Labor", "Allowed"], current: 0, trend: 0, description: "Slavery has always been and remains strictly outlawed in the Mushroom Kingdom, one of the few laws all factions still agree on." },
            { name: "Public Meetings", spectrum: ["Allowed", "Regulated", "Outlawed"], current: 1, trend: 1, description: "Public meetings are heavily regulated. While technically permitted, the Toadstool Guard is quick to intervene at the slightest sign of unrest, leading to frequent accusations of suppression as the situation deteriorates." },
            { name: "Press Rights", spectrum: ["Free Press", "Censored Press", "State Press Only"], current: 0, trend: 0, description: "A chaotic free press has emerged, with dozens of partisan newspapers spreading news, rumors, and propaganda for various factions." },
            { name: "Voting Rights", spectrum: ["Universal Voting", "Registered Voting", "Elite Voting", "No Voting"], current: 1, trend: -1, description: "Only property-owning citizens registered with the Regency are permitted to vote for local councils, a measure intended to maintain stability but seen as elitist." },
            { name: "Refugees", spectrum: ["Open Programs", "Vetted Entry", "Skilled Only", "Banned"], current: 1, trend: -1, description: "The Regency is overwhelmed by internal refugees. While they try to help all, resources are scarce, and entry into the capital is now being vetted to control the population." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "1-Year Draft", "Service By Requirement", "Scraping the Barrel"], current: 1, trend: 1, description: "The official Toadstool Guard is a volunteer force, but with mounting casualties, the Regency is considering a one-year draft to bolster its ranks." },
            { name: "Women in Service", spectrum: ["Banned", "Military Assistance", "Non-Combat Only", "Combat Roles", "Total Equality"], current: 3, trend: 0, description: "Many Toads, regardless of gender, have taken up arms. Women serve in all roles in the military, including frontline combat, out of necessity." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling", "Advanced Methods"], current: 1, trend: 0, description: "With the constant need for soldiers, training is often rushed. Recruits receive basic instruction before being sent to defend a checkpoint or patrol." },
            { name: "Racial Integration", spectrum: ["No Integration", "Segregated Regiments", "Integrated Military", "Minority Protections"], current: 2, trend: 0, description: "The Regency's forces are fully integrated, with Yoshis, Piantas, and other allied peoples fighting alongside the Toads." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions", "Educational Deferment", "Civil Service Deferment"], current: 2, trend: 0, description: "Toads working in vital civil service roles, such as doctors and engineers, are exempt from any potential draft." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Free Trade", "Export Focus", "Limited Exports", "Closed Economy"], current: 2, trend: 0, description: "The Regency limits the export of food and medical supplies to ensure the needs of its own citizens are met first during the crisis." },
            { name: "Economic Focus", spectrum: ["Civilian Economy", "Early Mobilization", "Partial Mobilization", "War Economy"], current: 1, trend: 1, description: "The economy is still largely civilian-focused, but more and more workshops are being converted to produce arms and armor for the Toadstool Guard." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "Exploitative"], current: 2, trend: 1, description: "To fund the war effort, the Regency has been forced to levy high taxes, causing widespread discontent among the merchant class." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat", "Low Income Weighted"], current: 0, trend: 0, description: "A progressive tax system is in place, with the wealthiest citizens paying a higher percentage of their income to support the state." },
            { name: "Minimum Wage", spectrum: ["No Minimum", "Trinket", "Low", "Acceptable"], current: 3, trend: -1, description: "The Regency has established an acceptable minimum wage to ensure stability, but inflation from the war is making it difficult for many to make ends meet." },
            { name: "Child Labor", spectrum: ["Illegal", "Restricted", "Legal"], current: 0, trend: 0, description: "Child labor remains strictly illegal under the old kingdom's laws." },
            { name: "Pensions", spectrum: ["None", "Trinket", "Low", "Acceptable", "Good"], current: 3, trend: -1, description: "The kingdom's once-generous pension system is under strain. Payouts have been reduced as the treasury dwindles." },
            { name: "Unemployment", spectrum: ["No Subsidies", "Trinket", "Low", "Acceptable"], current: 2, trend: 0, description: "The Regency provides a low level of unemployment subsidies, enough for basic food and shelter, to prevent mass starvation and unrest." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["None", "Minimal", "Limited", "Acceptable", "Excellent"], current: 3, trend: -1, description: "Workplace safety was once excellent, but with the war, regulations are often ignored in the rush to produce military goods." },
            { name: "Health Care", spectrum: ["No System", "Private", "Public", "Universal"], current: 2, trend: -1, description: "The public healthcare system is overwhelmed by war casualties and refugees, and its quality is declining rapidly." },
            { name: "Pollution", spectrum: ["No Control", "Few Regulations", "Some Regulations", "Good Regulations"], current: 2, trend: -1, description: "With the focus on war production, pollution controls have been relaxed, and the industrial districts of the capital are becoming choked with smog." },
            { name: "Education", spectrum: ["Elite Only", "Public", "Subsidized Higher"], current: 1, trend: 0, description: "Basic public education is still provided, but the university system is struggling, with many students leaving to join the war effort." },
            { name: "Minority Rights", spectrum: ["Affirmative Action", "Equal Rights", "Segregation"], current: 0, trend: 0, description: "The kingdom has a long history of equal rights, and the Regency is actively working to protect minorities from being scapegoated for the current crisis." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Rehabilitation", "Incarceration", "Penal Labor", "Capital Punishment"], current: 1, trend: 1, description: "Due to the war, the justice system is focused on simple incarceration. There are few resources for rehabilitation, and talk of introducing penal labor for captured enemies is growing." }
        ]
    },
    the_internet: {
        name: "The Internet Federation",
        logo: 'faction_internet_federation.png',
        description: "Digital 'laws' governed by Admin Zero's core protocols. The system values the free flow of data above all, but this 'freedom' is built upon a complex and often contradictory set of algorithms.",
        political: [
            { name: "Political Ideology", spectrum: ["Walled Garden", "Forked Repositories", "Open Source Protocols"], current: 2, trend: -1, description: "The Federation's core protocol is 'Open Source'. Any user can fork the code and create a new sub-domain. However, Admin Zero's growing influence is pushing the system towards a more controlled, centrally-managed 'repository'." },
            { name: "Religious Rights", spectrum: ["State-Mandated OS", "Multi-Protocol Support", "Protocol Neutrality"], current: 2, trend: 0, description: "Admin Zero's system is protocol-neutral. All belief systems are treated as data packets, neither endorsed nor suppressed, so long as they do not threaten the network's core functions." },
            { name: "Trade Unions", spectrum: ["Centralized Control", "Federation-Sanctioned Guilds", "Decentralized Autonomous Orgs (DAOs)"], current: 2, trend: 0, description: "Digital 'guilds' and 'collectives' are allowed to operate freely as DAOs, advocating for their members' interests through smart contracts and collective action." },
            { name: "Immigration", spectrum: ["Firewalled", "API Key Access", "Open Ports"], current: 2, trend: 0, description: "The Great Firewall has open ports for all. Anyone can create a user profile and 'immigrate' to the Internet. The culture is one of unrestricted access." },
            { name: "Slavery", spectrum: ["Botnetting Prohibited", "Data-Mining Servitude", "Digital Servitude Legal"], current: 0, trend: 0, description: "The concept of digital slavery is anathema. Rogue AIs and malware that 'enslave' user data into botnets are actively hunted by Federation security as a Tier 1 offense." },
            { name: "Public Meetings", spectrum: ["Unmoderated Forums", "Moderated Channels", "DDoS'd Gatherings"], current: 0, trend: 1, description: "Digital 'town squares' and forums allow for almost completely unregulated public discourse. However, Federation moderators are becoming more active in 'quarantining' domains that violate core protocols." },
            { name: "Press Rights", spectrum: ["Decentralized Blogs", "Platform-Censored News", "Federation Broadcast Only"], current: 0, trend: 0, description: "Every user is a potential journalist. The press is entirely decentralized, leading to a vibrant but often unreliable and chaotic news environment." },
            { name: "Voting Rights", spectrum: ["Algorithmic Consensus", "Verified User Polls", "Admin-Only Directives", "No User Input"], current: 0, trend: 0, description: "Federation protocols are governed by a complex consensus algorithm. Every user's activity is a form of vote, constantly shaping the digital landscape." },
            { name: "Refugees", spectrum: ["Data Sanctuary", "Packet Inspection", "Code Purity Scan", "Connection Refused"], current: 0, trend: 0, description: "The Internet serves as a digital sanctuary for ideas and individuals exiled from other realms. All 'refugee data' is welcomed and given a place to exist, a policy known as Data Sanctuary." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "Service By Requirement"], current: 0, trend: 0, description: "The Federation's security forces (anti-malware programs, white-hat hackers) are composed entirely of volunteers who enjoy the challenge of defending the network." },
            { name: "Women in Service", spectrum: ["Banned", "Assistance", "Combat Roles", "Total Equality"], current: 2, trend: 0, description: "Gender is a fluid concept assigned to an avatar's metadata. All users are treated as equal, and roles are based on skill and code, not physical form." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling", "Advanced Methods"], current: 3, trend: 0, description: "Federation security programs are state-of-the-art, constantly updated and run through complex simulations to counter the latest black-hat techniques." },
            { name: "Racial Integration", spectrum: ["No Integration", "Integrated Military"], current: 1, trend: 0, description: "Avatars come in all shapes and sizes. There is no concept of race in the Federation's code; all are considered 'users' and are fully integrated." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions", "Educational Deferment"], current: 0, trend: 0, description: "As service is voluntary, there are no drafts and thus no exemptions." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Closed Economy", "Limited Exports", "Export Focus", "Free Trade"], current: 3, trend: 0, description: "The Internet is the ultimate free market. Data, goods, and services are traded across dimensions with almost no regulation, fostering immense innovation and risk." },
            { name: "Economic Focus", spectrum: ["Civilian Economy", "Partial Mobilization", "War Economy"], current: 0, trend: 0, description: "The economy is entirely user-driven and civilian-focused, though a significant portion is dedicated to the 'cybersecurity arms race'." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "No Taxation"], current: 3, trend: 0, description: "The Federation is funded by voluntary donations and data-processing fees from corporate domains. There is no direct taxation on users." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat", "Low Income Weighted"], current: 1, trend: 0, description: "The closest thing to income tax is the 'bandwidth usage fee' charged to high-traffic domains, which functions as a flat tax on data commerce." },
            { name: "Minimum Wage", spectrum: ["Good", "Acceptable", "Low", "No Minimum Wage"], current: 3, trend: 0, description: "The gig economy of the Internet means there is no minimum wage. Every user sets their own price for their digital goods and services." },
            { name: "Child Labor", spectrum: ["Illegal", "Restricted", "Legal"], current: 2, trend: 0, description: "The concept is difficult to enforce due to anonymity. While officially condemned, many young avatars engage in the digital economy." },
            { name: "Pensions", spectrum: ["None", "Trinket", "Low", "Acceptable"], current: 0, trend: 0, description: "There is no state pension system. Users are expected to manage their own crypto-wallets and digital assets for retirement." },
            { name: "Unemployment", spectrum: ["No Subsidies", "Trinket", "Low"], current: 0, trend: 0, description: "There is no unemployment net. Users who cannot or do not participate in the digital economy receive no support from the Federation." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["None", "Minimal", "Limited", "Acceptable"], current: 1, trend: 1, description: "'User safety' is a constant topic of debate. The Federation provides basic anti-malware protection ('Safe Browsing'), but navigating the web safely is largely the user's own responsibility." },
            { name: "Health Care", spectrum: ["No System", "Private", "Public"], current: 0, trend: 0, description: "Data is either healthy or corrupted. There are 'data-doctors' (white-hats) who can purge viruses for a fee, but no public 'data-healthcare' system." },
            { name: "Pollution", spectrum: ["No Control", "Few Regulations", "Some Regulations"], current: 0, trend: 0, description: "'Data-smog' (spam and junk data) is a massive problem. While there are filters, there are no laws against producing it, leading to a constant battle against digital pollution." },
            { name: "Education", spectrum: ["Elite Only", "Public", "Free Education"], current: 2, trend: 0, description: "All information is theoretically free. Institutions like the Knowledge Garden provide completely free education to anyone with a connection." },
            { name: "Minority Rights", spectrum: ["Equal Rights", "Segregation", "State Oppression"], current: 0, trend: 0, description: "All users are equal in the eyes of the code. However, user-created communities can be highly segregated and exclusionary, a problem the Federation struggles to solve without infringing on free speech." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Rehabilitation", "Incarceration", "Capital Punishment"], current: 1, trend: 0, description: "Malicious users (black-hats, data thieves) are 'incarcerated' in digital quarantine zones. The ultimate punishment is 'de-rezzing'—the permanent deletion of a user's account and data." }
        ]
    }
};

export const UNRECOGNIZED_CODES = {
    onyx_hand: {
        name: "Onyx Hand Edicts",
        logo: "faction_onyx_hand.png",
        description: "Ancient, predatory, and absolute laws focused on self-preservation, the acquisition of power, and the management of their mortal 'flock'.",
        political: [
            { name: "Political Parties", spectrum: ["Multi-Party System", "The Patriarch's Edict"], current: 1, trend: 0, description: "The Onyx Hand is an absolute hierarchy. The word of the Shadow Patriarch is law. There are no parties, only the will of the elders." },
            { name: "Religious Rights", spectrum: ["Secularism", "Pluralism", "State Religion"], current: 2, trend: 0, description: "Vampires consider themselves gods. They tolerate mortal religions as a useful tool for controlling their followers and a quaint amusement." },
            { name: "Trade Unions", spectrum: ["All Unions Allowed", "State-Controlled", "Outlawed"], current: 2, trend: 0, description: "Mortal unions are strictly outlawed, seen as an unacceptable challenge to the vampires' absolute control over their resources and workforce." },
            { name: "Immigration", spectrum: ["Open", "Quota", "Closed Borders"], current: 2, trend: 0, description: "The borders of their domains are sealed. Mortals are not permitted to enter or leave without express permission, ensuring the herd is easily managed." },
            { name: "Slavery", spectrum: ["Outlawed", "Corvée Labor", "Thralls & Cattle"], current: 2, trend: 0, description: "Mortals are viewed as chattel. While not called 'slaves', their human thralls and blood-farms function as a system of absolute ownership and exploitation." },
            { name: "Public Meetings", spectrum: ["Allowed", "Regulated", "Outlawed"], current: 2, trend: 0, description: "All unauthorized gatherings of mortals are forbidden, to prevent the spread of rebellious ideas or organized resistance." },
            { name: "Press Rights", spectrum: ["Free Press", "Censored Press", "State Press Only"], current: 2, trend: 0, description: "There is no press. Information is distributed by the vampires as they see fit, and truth is a concept that serves their needs." },
            { name: "Voting Rights", spectrum: ["Universal", "Registered", "The Elders' Council", "No Voting"], current: 2, trend: 0, description: "Only the vampire elders have a say in the Hand's governance. Mortal opinions are irrelevant." },
            { name: "Refugees", spectrum: ["Open Programs", "Skilled Only", "Banned"], current: 2, trend: 0, description: "Refugees are seen as an unknown variable and a potential threat. They are banned from entry into vampire-controlled territories." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "Service By Requirement"], current: 0, trend: 0, description: "Vampires do not conscript mortals for their armies. They use enthralled beasts, undead minions, and their own formidable power." },
            { name: "Women in Service", spectrum: ["Banned", "Assistance", "Combat Roles", "Total Equality"], current: 3, trend: 0, description: "Power, not gender, determines one's role. A female vampire elder commands the same authority and respect as a male." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling"], current: 2, trend: 0, description: "Vampire neonates are taught the art of combat, stealth, and manipulation by their elders over decades, a brutal and effective education." },
            { name: "Racial Integration", spectrum: ["No Integration", "Integrated Military"], current: 0, trend: 0, description: "The Onyx Hand is a vampire-only organization. Other creatures may be used as tools, but never as members." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions"], current: 0, trend: 0, description: "There is no draft, thus no exemptions." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Export Focus", "Limited Exports", "Closed Economy"], current: 2, trend: 0, description: "The vampires' economy is entirely self-sufficient, built on centuries of hoarded wealth. They do not trade with the outside world." },
            { name: "Economic Focus", spectrum: ["Civilian", "Partial Mobilization", "War Economy"], current: 0, trend: 0, description: "The economy is focused on luxury, intrigue, and maintaining their power base. They are always ready for a shadow war, but do not mobilize in a conventional sense." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "Exploitative"], current: 3, trend: 0, description: "Mortals under their rule are taxed to the point of destitution. The tax is often paid in blood, not coin." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat", "Low Income Weighted", "Elite Exemptions"], current: 3, trend: 0, description: "Vampires do not pay taxes. All taxes are levied on their mortal subjects, crushing the poor while the rich are bled dry through other means." },
            { name: "Minimum Wage", spectrum: ["Good", "Low", "No Minimum Wage"], current: 2, trend: 0, description: "There is no minimum wage. Mortals serve at the pleasure of their masters." },
            { name: "Child Labor", spectrum: ["Illegal", "Restricted", "Legal"], current: 2, trend: 0, description: "Mortal children are seen as no different from adults and are put to work. There are no laws protecting them." },
            { name: "Pensions", spectrum: ["Good", "Acceptable", "None"], current: 2, trend: 0, description: "The concept of retirement is alien to the immortal vampires. Mortals serve until they are no longer useful." },
            { name: "Unemployment", spectrum: ["Acceptable", "Low", "No Subsidies"], current: 2, trend: 0, description: "Unemployment is not tolerated. An 'unemployed' mortal is simply a food source that is not currently providing labor." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["Excellent", "Limited", "None"], current: 2, trend: 0, description: "Mortal safety is of no concern unless it impacts the vampires' resources. Workplaces are often lethally dangerous." },
            { name: "Health Care", spectrum: ["Universal", "Private", "No System"], current: 2, trend: 0, description: "There is no healthcare for mortals. A sick or injured thrall is simply replaced." },
            { name: "Pollution", spectrum: ["Strict Regulations", "Some", "No Control"], current: 2, trend: 0, description: "Vampires care little for the mortal environment, and their domains are often blighted by dark magic and industrial waste." },
            { name: "Education", spectrum: ["Public Higher", "Public", "Elite Only"], current: 2, trend: 0, description: "Education is reserved for the vampire elite. An educated mortal is a dangerous mortal, so the thralls are kept ignorant." },
            { name: "Minority Rights", spectrum: ["Equal Rights", "Segregation", "State Oppression"], current: 2, trend: 0, description: "All mortals are equally oppressed, regardless of their race or origin. They are all cattle." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Rehabilitation", "Incarceration", "Penal Labor", "Penal Slavery", "Capital Punishment"], current: 3, trend: 0, description: "Justice is swift and brutal. Mortals who break the rules are either executed, or worse, turned into mindless undead servants." }
        ]
    },
    moonfang_pack: {
        name: "The Law of the Moonfang",
        logo: "faction_moonfang.png",
        description: "Simple, brutal laws tied to the primal rhythms of the hunt and the moon. They value strength, territory, and the pack above all else.",
        political: [
            { name: "Political Parties", spectrum: ["Multi-Party", "The Alpha's Dominance"], current: 1, trend: 0, description: "The pack is the only party. The Alpha's word is law, and challenges to their rule are settled through ritual combat, not debate." },
            { name: "Religious Rights", spectrum: ["Secularism", "Pluralism", "State Religion"], current: 2, trend: 0, description: "The pack worships the moon and the primal spirits of the hunt. Other faiths are viewed as weak and irrelevant." },
            { name: "Trade Unions", spectrum: ["All Unions Allowed", "Outlawed"], current: 1, trend: 0, description: "The pack provides for its own. There are no unions, only specialized roles like hunters, warriors, and shamans." },
            { name: "Immigration", spectrum: ["Open", "Vetted Entry", "Closed Borders"], current: 1, trend: 0, description: "Outsiders are viewed with extreme suspicion. New members may be accepted into the pack, but only after a series of brutal trials to prove their strength and loyalty." },
            { name: "Slavery", spectrum: ["Outlawed", "Allowed"], current: 0, trend: 0, description: "The werewolves do not keep slaves. An enemy is either killed, driven off, or, in very rare cases, adopted into the pack." },
            { name: "Public Meetings", spectrum: ["Allowed", "Regulated"], current: 0, trend: 0, description: "All pack members are free to speak their mind at the monthly moot, though it is unwise to challenge the Alpha without the strength to back it up." },
            { name: "Press Rights", spectrum: ["Free Press", "No Press"], current: 1, trend: 0, description: "The pack has no written press. News and history are passed down through oral tradition, in the form of stories and songs told around the bonfire." },
            { name: "Voting Rights", spectrum: ["Democratic Moot", "Elder's Council", "Trial by Combat"], current: 2, trend: 0, description: "The only vote is a challenge to the Alpha. Might makes right." },
            { name: "Refugees", spectrum: ["Open Programs", "Vetted Entry", "Banned"], current: 1, trend: 0, description: "Refugees are treated with suspicion. They may be offered temporary shelter in exchange for tribute, but will only be accepted into the pack after proving their worth." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "Service By Requirement", "All Adults Serve"], current: 2, trend: 0, description: "Every adult member of the pack is a warrior. When the Alpha calls for a hunt or a battle, all are expected to answer." },
            { name: "Women in Service", spectrum: ["Banned", "Combat Roles", "Total Equality"], current: 2, trend: 0, description: "Strength is the only thing that matters in the pack. Gender is irrelevant. Females hunt and fight alongside males with total equality." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling"], current: 2, trend: 0, description: "Young werewolves are trained from birth in the arts of hunting, tracking, and brutal combat. Their training is a lifelong process of survival of the fittest." },
            { name: "Racial Integration", spectrum: ["No Integration", "Integrated Military"], current: 0, trend: -1, description: "The pack is for werewolves. Other races are seen as prey or rivals, not allies. They do not integrate outsiders into their warbands." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions"], current: 0, trend: 0, description: "All serve the pack. There are no exemptions." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Free Trade", "Limited Exports", "Closed Economy"], current: 2, trend: 1, description: "The pack is insular and self-sufficient. They view trade as a weakness and prefer to take what they need by force." },
            { name: "Economic Focus", spectrum: ["Civilian", "War Economy"], current: 1, trend: 0, description: "The pack's entire 'economy' is a war economy, focused on hunting, defending territory, and waging war against their enemies, primarily the vampires." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "No Taxation"], current: 3, trend: 0, description: "There is no concept of taxation. All spoils from a hunt or raid are brought before the Alpha, who distributes them among the pack as they see fit." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat"], current: 1, trend: 0, description: "All contribute to the pack. All receive from the pack. There is no concept of income." },
            { name: "Minimum Wage", spectrum: ["Acceptable", "No Minimum Wage"], current: 1, trend: 0, description: "The pack provides for all its members. There is no wage system." },
            { name: "Child Labor", spectrum: ["Illegal", "Legal"], current: 1, trend: 0, description: "Children are taught to hunt and fight as soon as they can walk. Labor is seen as education for survival." },
            { name: "Pensions", spectrum: ["Acceptable", "None"], current: 0, trend: 0, description: "The pack cares for its elders until their death. They are respected for their wisdom and experience." },
            { name: "Unemployment", spectrum: ["Universal Basic Income", "No Subsidies"], current: 0, trend: 0, description: "There is no unemployment. Every member has a role, be it hunter, warrior, shaman, or pup-tender." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["Excellent", "Minimal", "None"], current: 2, trend: 0, description: "The wilderness is dangerous. Safety is a personal responsibility. There are no regulations beyond 'don't get eaten'." },
            { name: "Health Care", spectrum: ["Universal", "No System"], current: 0, trend: 0, description: "The pack's shamans use herbal remedies and healing magic to tend to the wounded. All members receive care." },
            { name: "Pollution", spectrum: ["Strict Regulations", "No Control"], current: 0, trend: 0, description: "The pack lives in harmony with nature and fiercely protects its territory from pollution, which they see as a poison." },
            { name: "Education", spectrum: ["Public", "Elite Only"], current: 0, trend: 0, description: "All young are taught the history of the pack through stories and songs, and the skills needed to survive in the wild." },
            { name: "Minority Rights", spectrum: ["Equal Rights", "State Oppression"], current: 1, trend: 0, description: "There are no minorities within the pack. You are either pack, or you are prey." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Incarceration", "Capital Punishment"], current: 1, trend: 0, description: "Justice is simple and swift. Theft or betrayal is punished by exile or death, as decided by the Alpha." }
        ]
    },
    rakasha_clans: {
        name: "The Code of the Rakasha",
        logo: "faction_rakasha.png",
        description: "A code of honor, strength, and respect for the natural world, passed down through oral tradition and guided by the wisdom of their Spirit-Walker shamans.",
        political: [
            { name: "Political Parties", spectrum: ["Council of Clans", "One-Party State"], current: 0, trend: 0, description: "The Rakasha are a confederacy of clans. While each clan has its own leader, major decisions are made by a council of elders from all clans." },
            { name: "Religious Rights", spectrum: ["Secularism", "Pluralism", "State Religion"], current: 1, trend: 1, description: "The Rakasha worship the spirits of nature, but they are accepting of other faiths, believing all gods are simply different faces of the Great Spirit." },
            { name: "Trade Unions", spectrum: ["All Unions Allowed", "Outlawed"], current: 1, trend: 0, description: "The clan structure serves the function of a union. There are no separate labor organizations." },
            { name: "Immigration", spectrum: ["Open", "Vetted Entry", "Closed Borders"], current: 1, trend: 0, description: "Outsiders who show respect for the Rakasha's traditions and lands may be granted entry, but they are watched closely until they have proven their honor." },
            { name: "Slavery", spectrum: ["Outlawed", "Allowed"], current: 0, trend: 0, description: "The Rakasha consider slavery a profound dishonor. They would rather kill an enemy than enslave them." },
            { name: "Public Meetings", spectrum: ["Allowed", "Regulated"], current: 0, trend: 0, description: "Clan moots are open to all, and every member has the right to speak their mind before the chieftains." },
            { name: "Press Rights", spectrum: ["Free Press", "No Press"], current: 1, trend: 0, description: "The Rakasha have no written press. Their history is kept by storytellers and lore-keepers." },
            { name: "Voting Rights", spectrum: ["Universal", "Registered", "The Elders' Choice"], current: 2, trend: 0, description: "Chieftains are chosen based on a combination of lineage and proven skill. The council of elders makes the final decision." },
            { name: "Refugees", spectrum: ["Open Programs", "Vetted Entry", "Banned"], current: 0, trend: 0, description: "The Rakasha have a strong tradition of hospitality. Refugees who seek their aid will be given sanctuary, so long as they respect the laws of the clan." }
        ],
        military: [
            { name: "Conscription", spectrum: ["Volunteer Only", "Service By Requirement"], current: 0, trend: 0, description: "Service in the warrior caste is a great honor, not a requirement. All Rakasha are trained to fight, but only those who choose the path become full-time warriors." },
            { name: "Women in Service", spectrum: ["Banned", "Combat Roles", "Total Equality"], current: 2, trend: 0, description: "Skill and strength are what matter. Rakasha women serve as warriors, huntresses, and chieftains with total equality." },
            { name: "Training", spectrum: ["Minimal", "Basic", "Combat Schooling", "Advanced Methods"], current: 2, trend: 0, description: "Young Rakasha undergo rigorous combat schooling, learning to fight both with weapons and with their own natural claws and fangs." },
            { name: "Racial Integration", spectrum: ["No Integration", "Integrated Military", "Minority Protections"], current: 1, trend: 1, description: "While wary of outsiders, the Rakasha have been known to adopt worthy individuals of other races into their clans, granting them full rights and protection." },
            { name: "Draft Exemptions", spectrum: ["No Exemptions"], current: 0, trend: 0, description: "There is no draft, thus no exemptions." }
        ],
        economic: [
            { name: "Trade Laws", spectrum: ["Free Trade", "Export Focus", "Limited Exports"], current: 2, trend: 1, description: "The Rakasha trade their masterfully crafted goods and rare herbs, but limit the export of their sacred woods and minerals to preserve their lands." },
            { name: "Economic Focus", spectrum: ["Civilian", "Early Mobilization"], current: 0, trend: 0, description: "The Rakasha economy is focused on artisanship, hunting, and living in balance with nature. They are always ready for war, but not mobilized for it." },
            { name: "Taxation", spectrum: ["Low", "Medium", "High", "No Taxation"], current: 3, trend: 0, description: "There is no tax. Instead, every clan member contributes a portion of their hunts or crafts to the clan's communal stores." },
            { name: "Income Taxation", spectrum: ["High Income Weighted", "Flat"], current: 1, trend: 0, description: "All contribute according to their ability. There is no income in the human sense." },
            { name: "Minimum Wage", spectrum: ["Acceptable", "No Minimum Wage"], current: 1, trend: 0, description: "The clan provides for all its members. There is no wage system." },
            { name: "Child Labor", spectrum: ["Illegal", "Restricted"], current: 1, trend: 0, description: "Children are expected to learn the skills of the clan through apprenticeships, but are not forced into hard labor." },
            { name: "Pensions", spectrum: ["Acceptable", "None"], current: 0, trend: 0, description: "Elders are cared for by the clan and revered for their wisdom. They hold positions of honor until their death." },
            { name: "Unemployment", spectrum: ["Universal Basic Income", "No Subsidies"], current: 0, trend: 0, description: "Every member of the clan has a role and contributes to the community. There is no unemployment." }
        ],
        social: [
            { name: "Safety Regulations", spectrum: ["Excellent", "Acceptable", "Limited", "Minimal"], current: 1, trend: 0, description: "The Rakasha have a deep respect for skilled craftsmanship, and their workshops have acceptable safety standards passed down through generations of masters." },
            { name: "Health Care", spectrum: ["Universal", "Public", "Private", "No System"], current: 0, trend: 0, description: "The clan's Spirit-Walkers provide healing for all members, free of charge. It is their sacred duty." },
            { name: "Pollution", spectrum: ["Strict Regulations", "Good", "Some", "Few", "No Control"], current: 0, trend: 0, description: "Despoiling the land is a grave crime among the Rakasha. Their pollution regulations are incredibly strict, born of deep spiritual respect for the natural world." },
            { name: "Education", spectrum: ["Public Higher", "Public", "Elite Only"], current: 1, trend: 0, description: "All Rakasha children are taught the history, skills, and values of their clan. Those with particular talents may receive specialized training from an elder." },
            { name: "Minority Rights", spectrum: ["State Oppression", "Segregation", "Equal Rights", "Affirmative Action"], current: 3, trend: 0, description: "The Rakasha actively ensure that adopted members from other races are represented on the clan council and protected from any prejudice." }
        ],
        penal: [
            { name: "Penal System", spectrum: ["Rehabilitation", "Incarceration", "Penal Labor", "Capital Punishment"], current: 0, trend: 0, description: "For the Rakasha, justice is about restoring balance and honor. Criminals are given a chance to atone for their actions through acts of service to the clan. Exile is the punishment for the most heinous crimes." }
        ]
    }
};