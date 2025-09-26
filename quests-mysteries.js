// This file contains all hidden and mystery quests for the campaign.
export const MYSTERY_QUESTS = {
    'hidden_echo_in_the_core': {
        id: 'hidden_echo_in_the_core',
        title: "The Echo in the Core",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "The fusion of X.O.'s staff with the Vigilance's power core has created an unstable and unprecedented magical anomaly. Strange energy readings and whispers are being detected. Investigate the source.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "hidden",
        start_condition: "Strange energy fluctuations have been detected coming from the Engine Room.",
        steps: [
            { id: 'step1', title: "Analyze the Energy Signature", status: 'active', description: "The ship's sensors are picking up a strange, repeating energy signature from the core. It doesn't match any known magical or technological pattern. Ryan must devise a way to analyze it without destabilizing the core." },
            { id: 'step2', title: "A Glimmer of Consciousness?", status: 'locked', description: "Further investigation is required to understand the nature of the echo." },
            { id: 'step3', title: "The Ghost in the Machine", status: 'locked', description: "The source of the echo must be confronted." }
        ]
    },
    'wario_bounty_mystery': {
        id: 'wario_bounty_mystery',
        title: "The Wario Enigma",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "The Regal Empire's intelligence service claims 'Mr. Wario' has placed a one-million-coin bounty on 'Mr. Wario'. This is either a clerical error, a sign of extreme self-loathing, or a complex plot. Investigate this bizarre bounty.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "Revealed by the Regal Empire's Crown Intelligence during the standoff.",
        steps: [
            { id: 'step1', title: "Question the Detainees", status: 'active', description: "Interrogate the captured Mr. Wario and the other prisoners to understand who placed the bounty and why." },
            { id: 'step2', title: "Contact the Underworld", status: 'locked', description: "Use underworld contacts to verify the bounty's legitimacy and trace its source." },
            { id: 'step3', title: "Uncover the Plot", status: 'locked', description: "Determine the true target and purpose of this paradoxical contract." }
        ]
    }
};