import { playSound } from './common.js';

const ARTIFACT_DATA = {
    main_artifacts: [
        {
            id: 'star_fragment',
            name: 'The Star Fragment',
            image: 'artifacts/the_star_fragment.png',
            description: "A piece of a fallen star, shattered into nine fragments by the God Toad. Each shard bestows immense, unique power upon its bearer, but also subtly corrupts them to fit a grand, unknown design."
        },
        {
            id: 'fire_flower',
            name: 'The Fireflower',
            image: 'artifacts/the_fireflower.png',
            description: "A legendary artifact that grants mastery over flame. It is said to be hidden in a volcanic dungeon, guarded by a fire dragon and its cult."
        },
        {
            id: 'mushroom',
            name: 'The Mushroom of Life',
            image: 'artifacts/the_mushroom.png',
            description: "A relic with the power to restore life itself. It grows in a cursed, time-distorting forest, protected by ancient guardians who test all who seek it."
        }
    ],
    star_bearers: [
        {
            id: 'rebellion',
            name: 'Rebellion - The Dark Sovereign',
            powers: "Rebellion's true powers remain largely unknown, as few have witnessed them and survived. Ancient texts speak of his ability to devour souls and incorporate their knowledge and abilities into his own. The darkness he commands is said to be sentient, a living extension of his will that hungers for life. Witnesses claim to have seen him split into multiple shadow forms, each capable of independent action, while his true body remains hidden. The most disturbing rumors suggest he can corrupt other Star Fragment bearers, slowly turning them into his thralls while they believe they maintain their free will.",
            fragment_name: "Crown Shard (Core Power)",
            fragment_desc: "The Crown Shard is the largest and most powerful fragment of the star. It contains the core essence of leadership and dominion, granting its bearer authority over other fragment holders to some degree. The shard pulses with a black light that seems to absorb rather than emit energy, growing stronger with each life it touches.",
            history: "When the God Toad distributed the fragments, Rebellion was initially chosen for his loyalty. However, the fragment's power corrupted him, awakening a hunger for dominance. He established a fortress in the darkest corner of the Midlands, where no sunlight ever penetrates, and began plotting to collect all fragments for himself. He has already attempted to absorb the Ice Toad's fragment but was thwarted by the adventurers who now possess it. Ancient prophecies speak of him as 'The Star Devourer' who will bring eternal darkness if not stopped."
        },
        {
            id: 'charismatic',
            name: 'Charismatic - The Battle Master',
            powers: "Charismatic can ignite his body in flames that do not harm him but scorch everything he touches. He can project firebolts and create walls of flame to control the battlefield. His most devastating ability is Phoenix Form, which transforms him into a fiery entity that can fly and regenerate from seemingly fatal wounds.",
            fragment_name: "Warrior Shard (Combat Power)",
            fragment_desc: "The Warrior Shard contains the star's aspect of conflict and triumph. It burns with constant internal fire and grants exceptional combat instincts.",
            history: "Once a gentle explorer who charted unknown territories of the Midlands, Charismatic was ambushed by werewolves and left for dead. The God Toad found him clinging to life and offered him the Warrior Shard. The fragment saved him but ignited an unquenchable fighting spirit. Now he roams the borderlands between vampire and werewolf territories, challenging the strongest warriors of both sides to hone his skills for the day when all fragments must be reunited."
        },
        {
            id: 'beauty',
            name: 'Beauty - The Toxic Enchanter',
            powers: "Beauty can accelerate plant growth, creating deadly botanical traps and barriers within seconds. He can synthesize potent toxins from his body that cause hallucinations, paralysis, or slow death. His most insidious power is Verdant Subjugation, which allows him to implant spores in victims that slowly bring them under his control.",
            fragment_name: "Bloom Shard (Growth Power)",
            fragment_desc: "The Bloom Shard embodies the star's aspect of growth and transformation. It constantly pulses with green energy and enhances natural processes around its bearer.",
            history: "Once a simple herbalist who cared for the sick in a small village, Beauty's personality twisted when he received the Bloom Shard. The fragment's power revealed to him how easily life could be manipulated, and he began using his healing knowledge for control instead of care. He has established a beautiful but deadly garden sanctuary in the heart of the Misty Forest, where countless explorers have wandered in but never returned."
        },
        {
            id: 'refrain',
            name: 'Refrain - The Tempest',
            powers: "Refrain can summon winds powerful enough to uproot trees and deflect arrows or projectiles. He can create localized storms, complete with lightning and hail. His ultimate ability is Cyclone Manifestation, which creates a devastating tornado under his control.",
            fragment_name: "Tempest Shard (Storm Power)",
            fragment_desc: "The Tempest Shard embodies the star's aspect of movement and change. It constantly shifts between various shades of blue and gray, and sometimes emits small sparks of lightning.",
            history: "Once a ship's navigator with an uncanny ability to predict weather changes, Refrain was chosen for his connection to the air. When he received the Tempest Shard, his emotional state became linked to atmospheric conditions. He makes his home on the Howling Cliffs overlooking the Midnight Sea, where sailors leave offerings in hopes that he will grant them safe passage through potentially stormy waters."
        },
        {
            id: 'might',
            name: 'Might - The Unstoppable',
            powers: "Might possesses superhuman strength that allows him to shatter stone with his bare hands. His body is nearly indestructible, capable of withstanding tremendous physical punishment. His signature ability is Tectonic Impact, which creates shockwaves when he strikes the ground, capable of toppling buildings and creating fissures.",
            fragment_name: "Force Shard (Strength Power)",
            fragment_desc: "The Force Shard contains the star's aspect of physical power and resilience. It pulses with deep red energy and makes its bearer's body increasingly dense and powerful over time.",
            history: "Originally a weak and sickly toad who was ridiculed for his frailty, Might was chosen by the God Toad specifically because he understood the value of strength. When he received the Force Shard, his body transformed dramatically. Rather than seeking revenge on those who mocked him, he established a sanctuary in the Earth Spine Mountains where he trains worthy fighters and protects the innocent from the creatures that lurk in the deeper caves."
        },
         {
            id: 'justice',
            name: 'Justice - The Arbiter',
            powers: "Justice can perceive lies and deception with perfect accuracy. He can create binding magical contracts that physically punish those who break them. His most feared power is Cosmic Verdict, which can restore balance by transferring fortune from the undeservingly prosperous to the unjustly suffering.",
            fragment_name: "Truth Shard (Balance Power)",
            fragment_desc: "The Truth Shard embodies the star's aspect of order and equilibrium. It glows with steady golden light and provides clarity of perception.",
            history: "Once a simple village judge, Justice was chosen for his unwavering commitment to fairness. When he received the Truth Shard, his understanding expanded beyond human laws to the fundamental balance of the universe. He established the Hall of Equilibrium in the central mountains of the Midlands, where both humans and creatures of the night can seek impartial judgment for disputes too complex for ordinary resolution."
        },
        {
            id: 'self_reflection',
            name: 'Self Reflection - The Oracle',
            powers: "Self Reflection can see possible futures branching from any present moment. He can communicate through dreams and visions over vast distances. His most valuable ability is Memory Walk, which allows him to project himself and others into past events as observers.",
            fragment_name: "Vision Shard (Insight Power)",
            fragment_desc: "The Vision Shard contains the star's aspect of perception and foresight. It appears as a clear crystal that sometimes shows swirling images of distant places or times.",
            history: "Originally a scholarly toad who documented the forgotten histories of the Midlands, Self Reflection was chosen for his contemplative nature. When he received the Vision Shard, his consciousness expanded beyond linear time. He established a small sanctuary beside the Lake of Mirrors, where the waters sometimes reflect events yet to occur. Though physically the weakest of the fragment bearers, he is perhaps the most important, as his visions guide the others toward the eventual reunification of all fragments."
        },
        {
            id: 'unknown',
            name: 'The Lost Bearer',
            powers: "The identity and abilities of the final Star Fragment bearer are unknown. Their shard, and their destiny, remain a mystery.",
            fragment_name: "Unknown Shard",
            fragment_desc: "The nature of this fragment is lost to history.",
            history: "One of the original eight fragments distributed by the God Toad has been lost to time. Whether its bearer is in hiding, dead, or simply unknown is a mystery that could have significant implications for the reunification of the star."
        }
    ],
    god_toad: {
        id: 'god_toad',
        name: 'The God Toad - Original Keeper',
        powers: "The God Toad exists simultaneously in multiple planes of reality, making him nearly impossible to truly comprehend, let alone defeat. Those who attempt to perceive his true form often find their minds fractured beyond repair. He can manipulate the very fabric of space and time in limited areas, creating pocket dimensions where physical laws bend to his will. There are accounts of him reversing the flow of time to undo events that displease him, though this appears to drain his power significantly. Some scholars believe he is not a single entity but a collective consciousness inhabiting a shared form, explaining his ability to maintain awareness across vast distances.",
        fragment_name: "Core Shard (Binding Power)",
        fragment_desc: "The Core Shard is unlike the others—it appears as a void rather than a physical object, a tear in reality through which the pure power of the star flows directly into its bearer. This fragment gives the God Toad his omniscience regarding the other fragments and may be the source of his apparent immortality.",
        history: "After being betrayed by his adventuring companions who sought to steal the star's power for themselves, the God Toad shattered the star into nine fragments to prevent its misuse. He kept the Core Shard for himself and distributed the others to trusted followers who would become the Toad Guardians. What few know is that he deliberately corrupted each fragment differently, ensuring that their powers would drive their bearers toward specific goals—all part of a grand design that has been unfolding for centuries. His true motivation remains unknown, but ancient texts suggest he seeks to reshape the Midlands into something 'beyond mortal comprehension.'"
    }
};

const modal = document.getElementById('bearer-modal');
const modalContent = document.getElementById('bearer-modal-content');
const closeModalBtn = modal.querySelector('.modal-close');

function renderMainArtifacts() {
    const container = document.getElementById('artifacts-grid');
    if (!container) return;

    container.innerHTML = ARTIFACT_DATA.main_artifacts.map(artifact => `
        <div class="artifact-card" id="artifact-${artifact.id}">
            <h3>${artifact.name}</h3>
            <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image">
            <p>${artifact.description}</p>
        </div>
    `).join('');
}

function renderStarBearers() {
    const container = document.getElementById('star-bearers-container');
    if (!container) return;

    let html = '';
    const radius = 280; // Radius of the circle in pixels
    const numBearers = ARTIFACT_DATA.star_bearers.length; // Should be 8

    // Render the 8 bearers in a circle
    ARTIFACT_DATA.star_bearers.forEach((bearer, i) => {
        const angle = (i / numBearers) * 2 * Math.PI - (Math.PI / 2); // Start from top
        const x = 50 + (radius / container.clientWidth * 100) * Math.cos(angle);
        const y = 50 + (radius / container.clientHeight * 100) * Math.sin(angle);
        
        html += `
            <div class="bearer-node" data-id="${bearer.id}" style="left: ${x}%; top: ${y}%; transform: translate(-50%, -50%);">
                <img src="bearers/${bearer.id}.png" alt="${bearer.name}" class="bearer-image">
                <span class="bearer-name">${bearer.name.split(' - ')[0]}</span>
            </div>
        `;
    });

    // Render the God Toad in the center
    const godToad = ARTIFACT_DATA.god_toad;
    html += `
        <div class="god-toad-node" data-id="${godToad.id}">
            <img src="bearers/${godToad.id}.png" alt="${godToad.name}" class="bearer-image">
            <span class="bearer-name">The God Toad</span>
        </div>
    `;

    container.innerHTML = html;
}

function showBearerModal(bearerId) {
    const allBearers = [...ARTIFACT_DATA.star_bearers, ARTIFACT_DATA.god_toad];
    const bearer = allBearers.find(b => b.id === bearerId);
    if (!bearer) return;
    
    playSound('click.mp3');

    modalContent.innerHTML = `
        <div class="bearer-modal-header">
            <img src="bearers/${bearer.id}.png" alt="${bearer.name}">
            <h3>${bearer.name}</h3>
        </div>
        <div class="bearer-modal-section">
            <h4>Powers & Abilities</h4>
            <p>${bearer.powers}</p>
        </div>
        <div class="bearer-modal-section fragment-info">
            <h4>Fragment: <strong>${bearer.fragment_name}</strong></h4>
            <p>${bearer.fragment_desc}</p>
        </div>
        <div class="bearer-modal-section">
            <h4>History</h4>
            <p>${bearer.history}</p>
        </div>
    `;
    modal.style.display = 'flex';
}

function hideBearerModal() {
    modal.style.display = 'none';
}

function setupEventListeners() {
    const container = document.getElementById('star-bearers-container');
    if (container) {
        container.addEventListener('click', e => {
            const node = e.target.closest('.bearer-node, .god-toad-node');
            if (node && node.dataset.id) {
                showBearerModal(node.dataset.id);
            }
        });
    }

    if (modal) {
        closeModalBtn.addEventListener('click', hideBearerModal);
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                hideBearerModal();
            }
        });
    }
}

function init() {
    renderMainArtifacts();
    renderStarBearers();
    setupEventListeners();
}

init();
