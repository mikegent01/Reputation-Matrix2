// This file contains the detailed operational data for the Moonfang Pack's unique system display.

export const MOONFANG_PACK_DETAILS = {
    hierarchy: [
        { rank: "Alpha Prime", leader: "Fangscar the Elder", description: "The supreme leader, chosen through ritual combat. Calls 'Moon Councils' in sacred glades to set broad directives for all packs." },
        { rank: "Pack Alpha", leader: "Territorial Chieftains", description: "Rule individual 'Den Packs' of 50-200 werewolves. Leadership is maintained through constant displays of strength and can be challenged at any time." },
        { rank: "Beta", leader: "Hunt Lieutenants", description: "Lead 'Hunt Circles' of 10-30 warriors, acting as the Alpha's trusted seconds-in-command on raids and patrols." },
        { rank: "Omega", leader: "Pack Members", description: "The core warriors and members of the pack. They operate in small 'Fang Units' of 5-8, forming the bulk of the pack's strength." }
    ],
    recruitment: {
        the_bite: {
            title: "Recruitment: The Moon Bite",
            description: "The Pack recruits from outcasts, lone wolves, or those bitten during raids. Prospects are tested in grueling 'Hunt Trials' to prove their ferocity and survival instincts. Successful initiates receive the 'Moon Bite' from an Alpha, binding them to the pack through a shared 'Blood Howl' that forges a psychic, familial loyalty."
        },
        moon_toads: {
            title: "Mushroom Kingdom: The Thornfang Claws",
            description: "A splinter pack adapts to the urban ruins of the Mushroom Kingdom. They recruit disillusioned Toads during night raids, turning them into hybrid 'Moon Toads' with enhanced senses who fight for wild freedom against imperial control."
        }
    },
    tactics: {
        midlands: {
            title: "Tactics: The Shadow Hunt",
            description: "The Pack's tactics are predatory and adaptive. They favor 'Shadow Hunts'—coordinated ambushes from forest cover, using superior night vision to overwhelm foes before vanishing. They avoid pitched battles, preferring hit-and-run raids to bleed enemies dry and defend their territory."
        },
        resources: {
            title: "Logistics: The Den Cache",
            description: "Logistics are decentralized. Each pack sustains itself through hunting and raiding, using hidden 'Den Caches'—burrows stocked with salted meats, healing herbs, and scavenged weapons. Resources are communal and distributed by the Alpha after a successful hunt."
        }
    },
    ideology: {
        title: "Ideology: The Eternal Howl",
        description: "The Pack's culture revolves around 'The Eternal Howl,' an oral tradition of wild freedom, pack supremacy, and territorial dominance. Loyalty is instinctual, enforced by the psychic 'Blood Howl' link. Betrayal is punished by exile or a ritual 'Culling,' where the offender is hunted by their former packmates."
    },
    shared_mechanic: {
        tab_title: "Ancestral Surge",
        cards: {
            surge: {
                title: "Shared Mechanic: Ancestral Surge",
                description: "In the eternal war between werewolf and vampire, both sides draw upon their cursed lineage to unleash powerful abilities. This shared mechanic, 'Ancestral Surge,' manifests differently for each faction, reflecting their primal or undead nature.",
                css_class: 'mechanic-card'
            },
            lunar_echo: {
                title: "Lunar Echo (Moonfang Pack)",
                description: "Moonfang werewolves can channel the primal power of the moon, enabling feral enhancements. This manifests as glowing amber eyes, heightened senses, or a berserk fury that grants immense strength, reflecting their raw, untamed ferocity.",
                css_class: 'moonfang-pack-mechanic'
            }
        }
    },
    moon_phases: {
        current_phase: "Waning Gibbous",
        phases: [
            { name: "New Moon", effect: "Stealth and shadow abilities are at their peak. The Pack favors ambushes and infiltration.", icon: "🌑" },
            { name: "Waxing Crescent", effect: "Senses begin to sharpen. Hunt Circles become more active.", icon: "🌒" },
            { name: "First Quarter", effect: "A balance of stealth and strength. Pack skirmishes are common.", icon: "🌓" },
            { name: "Waxing Gibbous", effect: "Primal strength grows. The Pack becomes more aggressive and territorial.", icon: "🌔" },
            { name: "Full Moon", effect: "Feral power is absolute. Berserker rages are common. All werewolves are at their most dangerous and uncontrollable.", icon: "🌕" },
            { name: "Waning Gibbous", effect: "The peak of fury recedes, replaced by a cold, calculating predatory instinct.", icon: "🌖" },
            { name: "Last Quarter", effect: "Focus returns to the spiritual side. Spirit-Walkers hold more sway over the Pack.", icon: "🌗" },
            { name: "Waning Crescent", effect: "A time of rest and recovery. The Pack tends to its wounds and prepares for the next cycle.", icon: "🌘" }
        ]
    }
};