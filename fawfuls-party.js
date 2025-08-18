// Data for Fawful's party guests and invitation
const INVITATION_DATA = {
    title: "A MOST FURIOUS INVITATION!",
    body: "YOU ARE INVITED! YES, YOU!<br>To a party of such magnitude, its magnificentness will echo in the mustard of your soul!<br>Come to my castle (formerly the boring one of Peach) for an evening of...<br><strong>FAWFUL'S GRAND GALA OF FURIOUS FESTIVITIES!</strong><br>There will be chortles! There will be minions! There will be snacks that have the taste of VICTORY!<br>Do not be a sad lump of loser-ness! Be a guest! Your attendance is not optional if I decide it is mandatory! I HAVE FURY!"
};

const GUEST_DATA = [
    {
        name: "The Evil Toad God",
        role: "Guest of Honor",
        description: "A legendary artifact, the Star of Radiance, has fallen into the hands of an Evil Toad, who has absorbed its power to ascend to godhood. His influence warps reality, and he attends Fawful's party as a being of immense, chaotic power, his mere presence causing the castle's lights to flicker erratically.",
        isHonorary: true,
        commentary: "A GOD! Of TOADS! His power has the delicious crunch of a well-baked doom-biscuit! He understands true fury! A most excellent guest!"
    },
    {
        name: "Chief Thornpaw",
        role: "Rakasha Emissary",
        description: "The wise and stoic leader of the Rakasha Clans attends the party with a quiet, watchful intensity. He seems utterly unfazed by the surrounding chaos, observing all with an ancient patience, as if the entire gala is merely a fleeting, bizarre storm.",
        isHonorary: false,
        commentary: "A cat-man of smells! He smells of dirt and trees and secrets! He does not have the chortles, but his silence is... loud. And interesting! Like a sandwich that is all bread!"
    },
    {
        name: "Crimson Spore",
        role: "Flamboyant Storyteller",
        description: "Arrives with a flair, his stout three-foot frame adorned in a deep crimson vest that shimmers with sequins. His mushroom cap is a matching crimson with bold white spots. He clutches a goblet of Fawful’s strange purple brew, eager to entertain with tales of his daring escapes.",
        commentary: "This one has the flair of a firework that fizzles! All sparkle and no bang! But his stories have... distractions I can use!"
    },
    {
        name: "Sapphire Bloom",
        role: "Serene Musician",
        description: "Enters with a calming elegance. Her skin is a soft sky-blue, and her brilliant sapphire cap has faint silver spots. She wears a flowing lavender dress and carries a small lyre, ready to play soothing melodies that are immediately drowned out by Fawful's chortles.",
        commentary: "BAH! Her music is like the sleepy-time tea of boredom! I invited her only to prove my tolerance of things that are quiet and WRONG!"
    },
    {
        name: "Obsidian Crunch",
        role: "Gruff Mercenary",
        description: "Strides in with a stern demeanor, his sturdy three-and-a-half-foot frame built for battle. His skin is a dark obsidian-black, and his cap is reinforced with metal studs. A broad axe rests on his shoulder, and his presence is a silent threat amid the revelry.",
        commentary: "BEEF! This one is a walking fist with the personality of a grumpy rock! Excellent for guarding the snack table of doom!"
    },
    {
        name: "Amber Whistle",
        role: "Playful Jester",
        description: "Hops in with a playful bounce, his three-foot form brimming with youthful energy. His bright amber cap has irregular green spots, and bells sewn into his boots jingle with each step. He carries a wooden flute, adding a lively, if chaotic, note to the party.",
        commentary: "The jingling! The hopping! It is like a mosquito of happiness in my ear! I will soon have need of swatting him."
    },
    {
        name: "Jade Grit",
        role: "Stoic Laborer",
        description: "Enters with a practical air, his jade-green skin toughened with calluses. He wears a rugged brown vest and a tool belt, appearing more like a worker who took a wrong turn than an invited guest. He seems primarily interested in the castle's strange plumbing.",
        commentary: "He has the look of a mushroom who knows how to fix a leaky faucet of despair. Useful! But also... a plumber? IN MY CASTLE?! The irony has fury!"
    },
    {
        name: "Violet Hush",
        role: "Mysterious Occultist",
        description: "Slips in with a subtle aura. Her pale violet cap is pulled low over her eyes, and she wears a dark purple cloak. She holds a crystal orb that glows faintly, her presence a quiet enigma at Fawful’s twisted celebration.",
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

function init() {
    renderInvitation();
    renderGuestList();
}

init();