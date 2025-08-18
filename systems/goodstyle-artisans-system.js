const ARTIFACT_DATA = [
    {
        name: "The Gilded Teapot",
        status: "secure",
        description: "A teapot of pure gold, said to brew the most delicious tea in the world. A symbol of high society.",
        location: "Goodstyle Vault, Diamond City"
    },
    {
        name: "The Crystal Banana",
        status: "stolen",
        description: "An artifact of immense comedic value, but also rumored to have minor reality-bending properties.",
        location: "Wario's Hoard"
    },
    {
        name: "The Sunstone of Yal Belanor",
        status: "secure",
        description: "A massive gemstone that glows with the light of the sun. Powers many of the capital's eternal flames.",
        location: "Imperial Treasury, Capital Province"
    },
    {
        name: "The Weeping Mask",
        status: "lost",
        description: "An ancient theatrical mask that is said to contain the sorrow of a forgotten god.",
        location: "Unknown, lost in the Autumnwood"
    },
    {
        name: "The Star of Radiance",
        status: "stolen",
        description: "A celestial artifact of immense power, capable of empowering a being to god-like status.",
        location: "Absorbed by the Evil Toad God"
    },
     {
        name: "The Fire Crystal",
        status: "lost",
        description: "A crystal that burns with an eternal, magical flame. Key to ancient fire magic.",
        location: "Volcanic Dungeon, Wilderlands"
    }
];

export function renderGoodstyleArtisansSystem() {
    const artifactHTML = ARTIFACT_DATA.map(artifact => `
        <div class="artifact-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h6>${artifact.name}</h6>
                <span class="artifact-status ${artifact.status}">${artifact.status}</span>
            </div>
            <p class="artifact-description">${artifact.description}</p>
            <p class="artifact-location"><strong>Location:</strong> ${artifact.location}</p>
        </div>
    `).join('');

    return `
        <div class="system-content goodstyle-artisans-system">
             <p class="system-description">The Artisans meticulously track the world's most priceless cultural treasures, many of which have been stolen or lost to the chaos of the age.</p>
            <div class="artisans-registry-system">
                ${artifactHTML}
            </div>
        </div>
    `;
}
