// This file contains rendering functions for factions with simpler, non-interactive unique systems.
import { IRON_LEGION_DETAILS } from '../iron-legion-details.js';
import { KOOPA_TROOP_DETAILS } from '../koopa-troop-details.js';
import { SILVER_FLAME_DETAILS } from '../silver-flame-details.js';
import { LORE_DATA } from '../lore.js';
import { FOCUS_TREES } from '../focus-tree.js';

// --- Default Subfaction List ---
export function renderDefaultSubfactionList(subFactions, factionKey, state) {
    const listItems = Object.entries(subFactions).map(([key, data]) => {
        const playerReps = Object.keys(state.players).map(playerKey => {
            const rep = state.finalSubFactionReputations[playerKey]?.[factionKey]?.[key] || 0;
            const repClass = rep > 10 ? 'positive' : rep < -10 ? 'negative' : 'neutral';
            return `<div class="subfaction-player-rep"><span class="char-name">${state.players[playerKey].name}:</span> <span class="rep-value ${repClass}">${rep}</span></div>`;
        }).join('');

        return `
            <li class="subfaction-item">
                <div class="subfaction-header">
                    <span class="subfaction-name">${data.name}</span>
                    <span class="subfaction-influence">Influence: ${data.influence}%</span>
                </div>
                <p class="subfaction-description">${data.description}</p>
                <div class="subfaction-details">
                    <div>
                        <h6>Player Standing</h6>
                        ${playerReps}
                    </div>
                    <div>
                         <h6>Faction Opinion</h6>
                         <p>${data.opinion}</p>
                    </div>
                </div>
            </li>
        `;
    }).join('');

    return `<div class="system-content"><ul class="subfaction-list">${listItems}</ul></div>`;
}

// --- Iron Legion ---
export function renderIronLegionDetailedSystem() {
    const hierarchyHTML = IRON_LEGION_DETAILS.hierarchy.map(level => `
        <div class="org-chart-level">
            <div class="org-rank">${level.rank}</div>
            <div class="org-leader">${level.leader}</div>
            <p class="org-description">${level.description}</p>
        </div>
    `).join('');

    return `
        <div class="faction-detailed-system">
            <div class="system-tabs">
                <button class="system-tab-btn active" data-tab="hierarchy">Chain of Command</button>
                <button class="system-tab-btn" data-tab="recruitment">Recruitment</button>
                <button class="system-tab-btn" data-tab="tactics">Warfare</button>
            </div>
            <div class="system-tab-content active" id="hierarchy">
                <div class="system-org-chart">${hierarchyHTML}</div>
            </div>
            <div class="system-tab-content" id="recruitment">
                <div class="info-card-grid">
                    <div class="info-card"><h6>${IRON_LEGION_DETAILS.recruitment.midlands.title}</h6><p>${IRON_LEGION_DETAILS.recruitment.midlands.description}</p></div>
                    <div class="info-card"><h6>${IRON_LEGION_DETAILS.recruitment.mushroom_kingdom.title}</h6><p>${IRON_LEGION_DETAILS.recruitment.mushroom_kingdom.description}</p></div>
                </div>
            </div>
             <div class="system-tab-content" id="tactics">
                <div class="info-card-grid">
                    <div class="info-card"><h6>${IRON_LEGION_DETAILS.tactics.midlands.title}</h6><p>${IRON_LEGION_DETAILS.tactics.midlands.description}</p></div>
                    <div class="info-card"><h6>${IRON_LEGION_DETAILS.tactics.mushroom_kingdom.title}</h6><p>${IRON_LEGION_DETAILS.tactics.mushroom_kingdom.description}</p></div>
                </div>
            </div>
        </div>
    `;
}

// --- Koopa Troop ---
export function renderKoopaTroopHierarchySystem() {
    const hierarchyHTML = KOOPA_TROOP_DETAILS.hierarchy.map(level => `
         <div class="hierarchy-level">
            <strong>${level.rank}:</strong> <span>${level.leader}</span>
         </div>
    `).join('');
    
    return `
         <div class="system-content koopa-troop-system">
            <div class="koopa-hierarchy">
                <h6>Chain of Command</h6>
                ${hierarchyHTML}
            </div>
            <div class="koopa-war-status">
                <h6>${KOOPA_TROOP_DETAILS.civil_war_status.title}</h6>
                <p><strong>Objective:</strong> ${KOOPA_TROOP_DETAILS.civil_war_status.current_objective}</p>
                <p><strong>Field Commander:</strong> ${KOOPA_TROOP_DETAILS.civil_war_status.commander_on_site}</p>
                <p>${KOOPA_TROOP_DETAILS.civil_war_status.disposition}</p>
            </div>
        </div>
    `;
}

// --- Silver Flame ---
export function renderSilverFlameEdictsSystem() {
    const tenetsHTML = SILVER_FLAME_DETAILS.tenets.map(t => `
        <div class="tenet-card">
            <h6>${t.title}</h6>
            <p>${t.text}</p>
        </div>
    `).join('');
    const edictsHTML = SILVER_FLAME_DETAILS.active_edicts.map(e => `
        <div class="edict-card">
            <h6>${e.title}</h6>
            <p>${e.text}</p>
            <span class="edict-status">Status: ${e.status}</span>
        </div>
    `).join('');
    return `
         <div class="system-content silver-flame-edicts-system">
            <div class="edicts-section">
                <h6>Core Tenets</h6>
                ${tenetsHTML}
            </div>
             <div class="edicts-section">
                <h6>Active Edicts of Judgment</h6>
                ${edictsHTML}
            </div>
        </div>
    `;
}

// --- Liberated Toads ---
export function renderLiberatedToadsFocus(factionKey, factionData, currentState) {
    const toadCardsHTML = Object.keys(LORE_DATA.auxiliary_party).map(toadKey => {
        const toadData = LORE_DATA.auxiliary_party[toadKey];
        const influence = currentState.focusTreeState.influences[toadKey] || 0;
        const activeFocus = currentState.focusTreeState.activeFocuses.find(f => f.toadKey === toadKey);

        let focusHTML = '<em>Idle</em>';
        if (activeFocus) {
            const focusNode = FOCUS_TREES[toadKey]?.tree.find(n => n.id === activeFocus.nodeId);
            if (focusNode) {
                 focusHTML = `
                    <p class="focus-title">${focusNode.title}</p>
                    <p class="focus-days">(${activeFocus.remainingDays} days left)</p>
                 `;
            }
        }

        return `
            <div class="toad-focus-card">
                <p class="toad-name">${toadData.name} (Influence: ${influence})</p>
                ${focusHTML}
            </div>
        `;
    }).join('');

    return `
         <div class="system-content liberated-toads-focus-system">
             <p class="system-description">The Liberated Toads' progress is tracked through their individual and group Focus Trees, which determine their skills, alliances, and survival strategies.</p>
            <div class="focus-dashboard-grid">
                ${toadCardsHTML}
            </div>
            <a href="focus.html" class="manage-focus-link">MANAGE FOCUS TREES &raquo;</a>
        </div>
    `;
}

// --- Toad Gang ---
export function renderToadGangBountyBoard() {
    const bountyData = [
        { name: "Archie Miser", bounty: "5,000c", r: -2 },
        { name: "Markop Judi", bounty: "3,000c", r: 3 },
        { name: "Humpik", bounty: "2,500c", r: -1 },
        { name: "Bowser", bounty: "10,000c", r: 2 },
        { name: "Big T", bounty: "???", r: 1, isMissing: true },
    ];

    const postersHTML = bountyData.map(b => `
        <div class="wanted-poster ${b.isMissing ? 'big-t' : ''}" style="--r:${b.r}">
            <h6>WANTED</h6>
            <p>${b.name}</p>
            <p class="bounty">${b.bounty}</p>
        </div>
    `).join('');

     return `
         <div class="system-content toad-gang-bounty-system">
            <div class="bounty-board-grid">${postersHTML}</div>
         </div>
    `;
}
