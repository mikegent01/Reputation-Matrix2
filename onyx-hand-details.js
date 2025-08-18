// This file contains the detailed operational data for the Onyx Hand's unique system display.

export const ONYX_HAND_DETAILS = {
    hierarchy: [
        { rank: "Shadow Patriarch", leader: "Lady Ebonveil", description: "The immortal vampire elder at the pinnacle of the Hand. Issues decrees from the hidden Obsidian Sanctum via encrypted 'Whisper Chains'." },
        { rank: "Onyx Lords", leader: "Council of 13", description: "A council of master vampires who oversee territorial domains known as 'Veins'. They are the true power brokers of the organization." },
        { rank: "Blood Warden", leader: "Cell Leaders", description: "Command small, clandestine covens ('Cells') of 20-50 vampires. Their operations are compartmentalized to ensure deniability." },
        { rank: "Thrall", leader: "Mortal Servants", description: "Mortal servants or newly turned vampires organized into small 'Cabals'. They are the Hand's eyes, ears, and disposable assets in the mortal world." }
    ],
    recruitment: {
        the_scent: {
            title: "Recruitment: The Midnight Soiree",
            description: "Recruitment is a patient art, targeting the ambitious and disillusioned. Prospects are observed and then lured to elegant, secret gatherings where their loyalty and potential are assessed. Chosen candidates undergo the 'Veil of Shadows,' a month-long indoctrination where they are eventually turned into thralls via the 'First Bite'."
        },
        crimson_veil: {
            title: "Mushroom Kingdom: The Crimson Veil",
            description: "The Hand's sister coven in the Mushroom Kingdom recruits from war refugees and disillusioned Toads, using 'Whisper Parties' in ruined mushroom houses. Indoctrination emphasizes 'eternal unity' under the Regal Empire, creating loyal hybrid agents who can infiltrate Loyalist and Koopa ranks."
        }
    },
    tactics: {
        midlands: {
            title: "Tactics: The Shadow Web",
            description: "The Hand avoids open conflict, preferring semantic warfare. They use 'Shadow Webs'—networks of spies and thralls—to sow discord, spread rumors, and orchestrate coups from within. Precise assassinations, or 'Vein Strikes,' are used to eliminate key targets without a trace."
        },
        resources: {
            title: "Logistics: The Blood Tithe",
            description: "Logistics are the Hand's unseen strength. Supply chains are hidden, using underground crypts and river barges. Funding comes from manipulated markets and 'blood taxes' harvested from their thralls, which are used to produce alchemical elixirs and enchanted obsidian weapons."
        }
    },
    ideology: {
        title: "Ideology: The Eternal Grasp",
        description: "The Hand's culture revolves around the 'Eternal Grasp Codex,' a tome emphasizing patience, manipulation, and immortality as tools for dominion. Loyalty is enforced through 'Blood Bonds,' a ritual that creates a psychic link. Betrayal is punished by 'Eclipse Exile,' severing the bond and banishing the offender to sunlight."
    },
    shared_mechanic: {
        tab_title: "Ancestral Surge",
        cards: {
            surge: {
                title: "Shared Mechanic: Ancestral Surge",
                description: "In the eternal war between werewolf and vampire, both sides draw upon their cursed lineage to unleash powerful abilities. This shared mechanic, 'Ancestral Surge,' manifests differently for each faction, reflecting their primal or undead nature.",
                css_class: 'mechanic-card'
            },
            vampiric_echo: {
                title: "Vampiric Echo (Onyx Hand)",
                description: "Onyx Hand vampires can draw upon their ancient bloodline to manifest echoes of their power, allowing for rapid regeneration from blood essence or the life force of their thralls. This can manifest as shadowy tendrils that heal wounds or drain foes, emphasizing their immortal subtlety.",
                css_class: 'onyx-hand-mechanic'
            }
        }
    }
};
