// This file contains the detailed operational data for the Moonfang Pack's unique system display.

export const MOONFANG_PACK_DETAILS = {
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
    }
};