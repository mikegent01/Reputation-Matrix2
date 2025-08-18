const DCI_DATA = {
    cases: [
        {
            id: 'case_001',
            title: "The Wario Enigma",
            status: "COLD",
            summary: "Investigation into the bizarre death and funeral of the infamous treasure hunter, Wario. The discovery of two identical robot bodies suggests a complex plot far beyond a simple death. One of the party members was detained and subsequently escaped, leaving the case stalled.",
            clues: ["Scrap metal from a Ratchet Raider workshop", "Conflicting witness reports", "Traces of ectoplasm on one of the bodies"],
            persons_of_interest: ["Waluigi", "Lario", "Detective Penny", "Wario (deceased?)"]
        },
        {
            id: 'case_002',
            title: "The Artifact Heist",
            status: "ACTIVE",
            summary: "A string of high-profile thefts targeting priceless cultural artifacts. All evidence points to Wario's old 'Goldgrubber Gang', who have recently resurfaced. Their motives appear to be pure greed, but the scale of their operation is unprecedented.",
            clues: ["A single gold coin left at each scene", "Eyewitness reports of a large, garlic-scented individual", "Insider information from the Freelancer Underworld"],
            persons_of_interest: ["Master Goodstyle (victim)", "Wario's Ghost (rumored leader)", "Lario"]
        }
    ]
};

export function renderDCISystem() {
    const tabsHTML = DCI_DATA.cases.map((c, index) => `
        <button class="system-tab-btn ${index === 0 ? 'active' : ''}" data-tab="dci-case-${c.id}">${c.title}</button>
    `).join('');

    const contentHTML = DCI_DATA.cases.map((c, index) => `
        <div class="system-tab-content ${index === 0 ? 'active' : ''}" id="dci-case-${c.id}">
            <div class="case-file">
                <div class="case-header">
                    <h4>Case #${c.id.split('_')[1]}: ${c.title}</h4>
                    <span class="case-status status-${c.status.toLowerCase()}">${c.status}</span>
                </div>
                <div class="case-body">
                    <p><strong>Summary:</strong> ${c.summary}</p>
                    <h6>Clues & Evidence:</h6>
                    <ul>${c.clues.map(clue => `<li>${clue}</li>`).join('')}</ul>
                    <h6>Persons of Interest:</h6>
                    <ul>${c.persons_of_interest.map(poi => `<li>${poi}</li>`).join('')}</ul>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="faction-detailed-system dci-system">
             <p class="system-description">The DCI maintains active case files on major criminal activities. Intel is updated as new leads emerge.</p>
            <div class="system-tabs">${tabsHTML}</div>
            <div class="system-content-wrapper">${contentHTML}</div>
        </div>
    `;
}


export function initDCISystem() {
    const system = document.querySelector('.dci-system');
    if (!system) return;

    const tabs = system.querySelectorAll('.system-tab-btn');
    const contents = system.querySelectorAll('.system-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => {
                content.classList.toggle('active', content.id === targetId);
            });
        });
    });
}