import { GUILD_DATA } from './guilds-data.js';
import { LORE_DATA } from './lore.js';
import { playSound } from './common.js';

function renderGuilds() {
    const container = document.getElementById('guilds-container');
    if (!container) return;

    let html = '';
    for (const guildKey in GUILD_DATA) {
        const guild = GUILD_DATA[guildKey];
        const sponsor = guild.sponsoring_faction ? LORE_DATA.factions[guild.sponsoring_faction] : null;
        
        // --- Prepare Tab Content ---
        const goalsHTML = guild.goals.map(goal => `<li>${goal}</li>`).join('');
        const ranksHTML = guild.ranks.map(rank => `<li><strong>${rank.title}:</strong> ${rank.description}</li>`).join('');
        const rulesHTML = guild.rules.map(rule => `<li>${rule}</li>`).join('');
        const hasSubGuilds = guild.sub_guilds.length > 0;
        const subGuildsHTML = hasSubGuilds ? guild.sub_guilds.map(sub => `
            <div class="sub-guild-card">
                <h6>${sub.name}</h6>
                <p><strong>Leader:</strong> ${sub.leader}</p>
                <p><em>${sub.description}</em></p>
            </div>
        `).join('') : '';

        // --- Build Tabs ---
        let tabsHTML = `
            <button class="guild-tab-btn active" data-tab="goals">Goals</button>
            <button class="guild-tab-btn" data-tab="ranks">Ranks</button>
            <button class="guild-tab-btn" data-tab="rules">Rules</button>
            <button class="guild-tab-btn" data-tab="recruitment">Recruitment</button>
        `;
        if (hasSubGuilds) {
            tabsHTML += `<button class="guild-tab-btn" data-tab="subguilds">Sub-Guilds</button>`;
        }

        // --- Build Content Panes ---
        let contentHTML = `
            <div class="guild-tab-content active" data-tab-content="goals">
                <h5>Primary Goals</h5>
                <ul>${goalsHTML}</ul>
            </div>
            <div class="guild-tab-content" data-tab-content="ranks">
                <h5>Ranks & Hierarchy</h5>
                <ul>${ranksHTML}</ul>
            </div>
            <div class="guild-tab-content" data-tab-content="rules">
                <h5>Code of Conduct</h5>
                <ul>${rulesHTML}</ul>
            </div>
            <div class="guild-tab-content" data-tab-content="recruitment">
                <h5>Joining the Guild</h5>
                <p>${guild.recruitment}</p>
            </div>
        `;
        if (hasSubGuilds) {
            contentHTML += `
                <div class="guild-tab-content" data-tab-content="subguilds">
                    <h5>Known Sub-Guilds</h5>
                    ${subGuildsHTML}
                </div>
            `;
        }

        html += `
            <div class="guild-card" id="guild-${guildKey}">
                <div class="guild-header">
                    <img src="${sponsor ? sponsor.logo : 'icon_focus.png'}" alt="${guild.name} Logo" class="guild-logo">
                    <div class="guild-title-group">
                        <h3>${guild.name}</h3>
                        <p>Sponsored by: ${sponsor ? sponsor.name : 'Independent'}</p>
                    </div>
                </div>
                <div class="guild-body">
                    <p>${guild.description}</p>
                    <div class="guild-info-block">
                        <ul>
                            <li><strong>Leader:</strong> ${guild.leader}</li>
                            <li><strong>HQ:</strong> ${guild.headquarters}</li>
                        </ul>
                    </div>
                    <div class="guild-details-tabs">${tabsHTML}</div>
                    <div class="guild-details-content">${contentHTML}</div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function setupEventListeners() {
    const container = document.getElementById('guilds-container');
    if (!container) return;

    container.addEventListener('click', e => {
        const tabBtn = e.target.closest('.guild-tab-btn');
        if (tabBtn) {
            playSound('click.mp3', 0.6);
            const card = tabBtn.closest('.guild-card');
            const tabName = tabBtn.dataset.tab;

            card.querySelectorAll('.guild-tab-btn').forEach(btn => btn.classList.remove('active'));
            card.querySelectorAll('.guild-tab-content').forEach(content => content.classList.remove('active'));

            tabBtn.classList.add('active');
            const activeContent = card.querySelector(`.guild-tab-content[data-tab-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
    });
}


function init() {
    if (!document.getElementById('guilds-container')) return;
    renderGuilds();
    setupEventListeners();
}

init();
