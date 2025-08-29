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
};
