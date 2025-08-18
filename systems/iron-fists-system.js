const IRON_FISTS_DATA = {
    current_operation: {
        name: "Operation: Silence the Witness",
        phase: 2 // 1: Target, 2: Deploy, 3: Strike, 4: Profit
    },
    phases: {
        1: { name: "Target Acquisition", angle: 0 },
        2: { name: "Asset Deployment", angle: 90 },
        3: { name: "Strike Execution", angle: 180 },
        4: { name: "Profit & Dispersal", angle: 270 }
    }
};

export function renderIronFistsSystem() {
    const currentPhase = IRON_FISTS_DATA.phases[IRON_FISTS_DATA.current_operation.phase];

    return `
        <div class="system-content iron-fists-strike-system">
             <p class="system-description">The Iron Fists operate with brutal efficiency, following a strict four-phase plan for every major operation, visualized by their "Strike Clock".</p>
            <div class="strike-clock-container">
                <div class="clock-face">
                    <div class="clock-marker m1"><span class="clock-marker-text">${IRON_FISTS_DATA.phases[1].name}</span></div>
                    <div class="clock-marker m2"><span class="clock-marker-text">${IRON_FISTS_DATA.phases[2].name}</span></div>
                    <div class="clock-marker m3"><span class="clock-marker-text">${IRON_FISTS_DATA.phases[3].name}</span></div>
                    <div class="clock-marker m4"><span class="clock-marker-text">${IRON_FISTS_DATA.phases[4].name}</span></div>

                    <div class="clock-hand-container" style="transform: rotate(${currentPhase.angle}deg);">
                        <div class="clock-hand"></div>
                    </div>
                    <div class="clock-center"></div>
                </div>
            </div>
            <div class="current-operation">
                <h6>Current Operation</h6>
                <p>${IRON_FISTS_DATA.current_operation.name}</p>
            </div>
        </div>
    `;
}
