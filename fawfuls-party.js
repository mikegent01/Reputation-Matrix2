// Data for Fawful's party guests and invitation
const INVITATION_DATA = {
    title: "A MOST FURIOUS INVITATION! (ARCHIVED)",
    body: "YOU WERE INVITED! YES, YOU!<br>To a party of such magnitude, its magnificentness will echo in the mustard of your soul!<br>You should have come to my castle (formerly the boring one of Peach) for an evening of...<br><strong>FAWFUL'S GRAND GALA OF FURIOUS FESTIVITIES!</strong><br>There were chortles! There were minions! There were snacks that had the taste of VICTORY!<br>If you were a sad lump of loser-ness, you missed it! I HAVE FURY!"
};

const EVENT_SUMMARY = {
    title: "Event Summary: Infiltration and Chaos",
    description: "The gala was successfully infiltrated by a joint recon team of Koopa Troop remnants and Peach Loyalists, operating under a fragile truce. The team gathered intelligence and witnessed the bizarre assembly of guests, confirming the presence of the 'Evil Toad God'. Their presence was eventually discovered, leading to a chaotic firefight. The recon team managed to extract several of Captain Toadette's soldiers, solidifying the temporary alliance but failing to uncover the full truth behind Princess Peach's demise. The event has concluded, with Fawful presumably enraged by the interruption."
};

const GUEST_DATA = [
    {
        name: "The Evil Toad God",
        role: "Guest of Honor",
        description: "A legendary artifact, the Star of Radiance, had fallen into the hands of an Evil Toad, who absorbed its power to ascend to godhood. His influence warped reality, and he attended Fawful's party as a being of immense, chaotic power, his mere presence causing the castle's lights to flicker erratically.",
        isHonorary: true,
        commentary: "A GOD! Of TOADS! His power has the delicious crunch of a well-baked doom-biscuit! He understands true fury! A most excellent guest!"
    },
    {
        name: "Chief Thornpaw",
        role: "Rakasha Emissary",
        description: "The wise and stoic leader of the Rakasha Clans attended the party with a quiet, watchful intensity. He seemed utterly unfazed by the surrounding chaos, observing all with an ancient patience, as if the entire gala was merely a fleeting, bizarre storm.",
        isHonorary: false,
        commentary: "A cat-man of smells! He smells of dirt and trees and secrets! He does not have the chortles, but his silence is... loud. And interesting! Like a sandwich that is all bread!"
    },
    {
        name: "Crimson Spore",
        role: "Flamboyant Storyteller",
        description: "Arrived with a flair, his stout three-foot frame adorned in a deep crimson vest that shimmered with sequins. His mushroom cap was a matching crimson with bold white spots. He clutched a goblet of Fawful’s strange purple brew, eager to entertain with tales of his daring escapes.",
        commentary: "This one has the flair of a firework that fizzles! All sparkle and no bang! But his stories have... distractions I can use!"
    },
    {
        name: "Sapphire Bloom",
        role: "Serene Musician",
        description: "Entered with a calming elegance. Her skin was a soft sky-blue, and her brilliant sapphire cap had faint silver spots. She wore a flowing lavender dress and carried a small lyre, ready to play soothing melodies that were immediately drowned out by Fawful's chortles.",
        commentary: "BAH! Her music is like the sleepy-time tea of boredom! I invited her only to prove my tolerance of things that are quiet and WRONG!"
    },
    {
        name: "Obsidian Crunch",
        role: "Gruff Mercenary",
        description: "Strode in with a stern demeanor, his sturdy three-and-a-half-foot frame built for battle. His skin was a dark obsidian-black, and his cap was reinforced with metal studs. A broad axe rested on his shoulder, and his presence was a silent threat amid the revelry.",
        commentary: "BEEF! This one is a walking fist with the personality of a grumpy rock! Excellent for guarding the snack table of doom!"
    },
    {
        name: "Amber Whistle",
        role: "Playful Jester",
        description: "Hopped in with a playful bounce, his three-foot form brimming with youthful energy. His bright amber cap had irregular green spots, and bells sewn into his boots jingled with each step. He carried a wooden flute, adding a lively, if chaotic, note to the party.",
        commentary: "The jingling! The hopping! It is like a mosquito of happiness in my ear! I will soon have need of swatting him."
    },
    {
        name: "Jade Grit",
        role: "Stoic Laborer",
        description: "Entered with a practical air, his jade-green skin toughened with calluses. He wore a rugged brown vest and a tool belt, appearing more like a worker who took a wrong turn than an invited guest. He seemed primarily interested in the castle's strange plumbing.",
        commentary: "He has the look of a mushroom who knows how to fix a leaky faucet of despair. Useful! But also... a plumber? IN MY CASTLE?! The irony has fury!"
    },
    {
        name: "Violet Hush",
        role: "Mysterious Occultist",
        description: "Slipped in with a subtle aura. Her pale violet cap was pulled low over her eyes, and she wore a dark purple cloak. She held a crystal orb that glowed faintly, her presence a quiet enigma at Fawful’s twisted celebration.",
        commentary: "Ooh, a sneaky one! She has the quiet of a spider weaving a web of secrets. Her silence has interesting noises in it!"
    }
];

function renderGuestList() {
    const container = document.getElementById('guest-list-container');
    if (!container) return;

    let html = '';
    GUEST_DATA.forEach(guest => {
        html += `
            <div class="guest-card ${guest.isHonorary ? 'guest-of-honor' : ''}">
                <div class="guest-header">
                    <h3 class="guest-name">${guest.name}</h3>
                    <span class="guest-role">${guest.role}</span>
                </div>
                <p class="guest-description">${guest.description}</p>
                <div class="fawful-commentary">
                    <h6>Fawful's Commentary</h6>
                    <p>${guest.commentary}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderInvitation() {
    const container = document.getElementById('invitation-container');
    if (!container) return;
    container.innerHTML = `
        <h4>${INVITATION_DATA.title}</h4>
        <p>${INVITATION_DATA.body}</p>
    `;
}

function renderSummary() {
    const container = document.getElementById('event-summary-container');
    if (!container) return;
    container.className = 'invitation-card'; // Reuse style
    container.style.borderColor = 'var(--accent-color)';
    container.innerHTML = `
        <h4 style="color: var(--accent-color);">${EVENT_SUMMARY.title}</h4>
        <p style="font-family: var(--font-primary); font-size: 1rem; text-align: left;">${EVENT_SUMMARY.description}</p>
    `;
}

function init() {
    renderInvitation();
    renderSummary();
    renderGuestList();
}

init();