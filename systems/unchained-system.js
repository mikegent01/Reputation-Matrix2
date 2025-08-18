const UNCHAINED_DATA = {
    slaves_freed: 873,
    goal: 5000,
    operations: [
        { name: "Propaganda Campaign", description: "Spreading pamphlets in Imperial-occupied zones." },
        { name: "Sabotage", description: "Disrupting Iron Legion supply lines near the border." },
        { name: "Underground Railroad", description: "Active route running through the Mushroom Kingdom's underbelly." }
    ]
};

export function renderUnchainedSystem() {
    const progressPercent = (UNCHAINED_DATA.slaves_freed / UNCHAINED_DATA.goal) * 100;

    const operationsHTML = UNCHAINED_DATA.operations.map(op => `
        <li>
            <strong>${op.name}</strong>
            ${op.description}
        </li>
    `).join('');

    return `
        <div class="system-content unchained-liberation-system">
            <div class="liberation-progress">
                <h6>Liberation Front</h6>
                <div class="progress-bar-container" title="${UNCHAINED_DATA.slaves_freed.toLocaleString()} / ${UNCHAINED_DATA.goal.toLocaleString()} estimated freed">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%">
                        ${UNCHAINED_DATA.slaves_freed.toLocaleString()} Freed
                    </div>
                </div>
            </div>

            <div class="success-story">
                <h6>Key Success Story</h6>
                <p>
                    <strong>The Liberated Toads:</strong> The successful liberation and establishment of this independent group serves as a powerful symbol of hope for The Unchained's cause. 
                    <a href="#faction/liberated_toads" class="faction-link">View Dossier</a>
                </p>
            </div>

            <div class="meddling-operations">
                <h6>Current Meddling Operations</h6>
                <ul>${operationsHTML}</ul>
            </div>
        </div>
    `;
}