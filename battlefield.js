const BATTLEFIELD_STATE = {
    day: 3,
    time: "Mid-day",
    title: "The Battle of Ravencreek",
    status: "Active Skirmishing",
    factions: {
        werewolves: {
            name: "Moonfang Pack Vanguard",
            commander: "Grak Ironhide",
            morale: 75,
            strength: "Approx. 450 warriors",
            orders: "Harass vampire flanks; secure the northern bridge access.",
            color: "var(--regional-powers-color)",
            icon: "faction_moonfang.png",
        },
        vampires: {
            name: "Sanguine Legion",
            commander: "Baron Von Hess",
            morale: 85,
            strength: "Approx. 300 thralls, 50 knights",
            orders: "Hold Ravencreek at all costs; break the werewolf assault at the river.",
            color: "var(--negative-color)",
            icon: "faction_onyx_hand.png",
        },
        regal: {
            name: "Imperial Expeditionary Force",
            commander: "Sir Reginald Stonebridge",
            morale: 100,
            strength: "120 Legionnaires",
            orders: "Observe and contain the conflict. Do not engage unless Imperial assets are threatened.",
            color: "var(--major-powers-color)",
            icon: "faction_regal_empire.png",
        }
    },
    log: [
        { time: "12:05", entry: "Vampire Blood Knights clash with Werewolf Pack Warriors at the Old Bridge." },
        { time: "11:45", entry: "Werewolf Stalkers spotted moving through the western woods, threatening supply lines." },
        { time: "11:00", entry: "Gargoyles take positions on Ravencreek rooftops, providing aerial recon." },
        { time: "10:15", entry: "Regal forces establish a fortified observation post on the southern ridge." },
        { time: "09:30", entry: "The main werewolf force began its assault on the north bank of the river." },
    ]
};


function renderBattleInfo() {
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
         pageTitle.innerHTML = `Battle of Ravencreek: <span class="battle-meta">Day ${BATTLEFIELD_STATE.day}, ${BATTLEFIELD_STATE.time} | Status: <span class="neutral">${BATTLEFIELD_STATE.status}</span></span>`;
    }

    const commandContainer = document.getElementById('faction-command-container');
    if (commandContainer) {
        commandContainer.innerHTML = '';
        Object.entries(BATTLEFIELD_STATE.factions).forEach(([key, data]) => {
            const card = document.createElement('div');
            card.className = `faction-command-card faction-${key}`;
            card.innerHTML = `
                <h4>${data.name}</h4>
                <div class="command-details">
                    <p><strong>Commander:</strong> ${data.commander}</p>
                    <p><strong>Strength:</strong> ${data.strength}</p>
                    <p><strong>Morale:</strong> ${data.morale}%</p>
                    <p class="command-orders"><strong>Orders:</strong> ${data.orders}</p>
                </div>
            `;
            commandContainer.appendChild(card);
        });
    }
    
    const logContainer = document.getElementById('log-entries');
    if(logContainer) {
        logContainer.innerHTML = '';
        BATTLEFIELD_STATE.log.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="log-time">${item.time}</span>${item.entry}`;
            logContainer.appendChild(li);
        });
    }
}


function init() {
    if (!document.getElementById('battlefield-display')) return;
    renderBattleInfo();
}

init();
