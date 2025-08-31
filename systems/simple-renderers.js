// This module contains a collection of simpler render functions for faction systems
// that do not require complex, separate initialization logic.

import { state } from '../state.js';
import { LORE_DATA, CHARACTER_RELATIONS } from '../lore.js';
import { buildDetailedSystemHTML } from './common.js';
import { IRON_LEGION_DETAILS } from '../iron-legion-details.js';
import { SILVER_FLAME_DETAILS } from '../silver-flame-details.js';
import { KOOPA_TROOP_DETAILS } from '../koopa-troop-details.js';

export function renderIronLegionDetailedSystem() {
    return buildDetailedSystemHTML(
        IRON_LEGION_DETAILS,
        "The Iron Legion is a well-oiled machine of conquest, with a rigid hierarchy and distinct operational doctrines for different territories. Explore their structure and methods below."
    );
}

export function renderSilverFlameEdictsSystem() {
    const data = SILVER_FLAME_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content silver-flame-edicts-system">
            <div class="edicts-section">
                <h6>Core Tenets of the Flame</h6>
                ${data.tenets.map(tenet => `
                    <div class="tenet-card">
                        <h6>${tenet.title}</h6>
                        <p>${tenet.text}</p>
                    </div>
                `).join('')}
            </div>
            <div class="edicts-section">
                <h6>Active Edicts</h6>
                ${data.active_edicts.map(edict => `
                    <div class="edict-card">
                        <h6>${edict.title}</h6>
                        <p>${edict.text}</p>
                        <span class="edict-status">Status: ${edict.status}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export function renderKoopaTroopHierarchySystem() {
    const data = KOOPA_TROOP_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content koopa-troop-system">
            <div class="koopa-hierarchy">
                <h6>Chain of Command</h6>
                ${data.hierarchy.map(level => `
                    <div class="hierarchy-level">
                        <strong>${level.rank}: ${level.leader}</strong>
                        <span>Key Units: ${level.units}</span>
                    </div>
                `).join('')}
            </div>
            <div class="koopa-war-status">
                <h6>${data.civil_war_status.title}</h6>
                <p><strong>Commander on Site:</strong> ${data.civil_war_status.commander_on_site}</p>
                <p><strong>Objective:</strong> ${data.civil_war_status.current_objective}</p>
                <p>${data.civil_war_status.disposition}</p>
            </div>
        </div>
    `;
}

export function renderTurfWar(subFactions) {
    const totalInfluence = Object.values(subFactions).reduce((sum, sf) => sum + sf.influence, 0);
    return `
        <p class="system-description">Power in the Toad Gang is measured in street corners and controlled rackets. After Big T's fall, the radical Mushroom Skulls have seized the most influence, but other factions still control significant portions of the criminal enterprise.</p>
        <div class="system-content turf-war-bars">
             ${Object.values(subFactions).map(sf => `
                <div class="bar-item">
                    <div class="bar-label">
                        <span>${sf.name}</span>
                        <span>${sf.influence}%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${sf.influence / totalInfluence * 100}%;"></div>
                    </div>
                </div>
             `).join('')}
        </div>
    `;
}

/**
 * Renders the unique opinion list for the Liberated Toads.
 */
export function renderLiberatedToads(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;
    const subFactionListHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const playerRepHTML = currentState.party.map(playerKey => {
            const relation = CHARACTER_RELATIONS[subKey]?.[playerKey];
            let opinionText = "No strong opinion.";
            if (relation && relation.text) {
                const parts = relation.text.split(':');
                if (parts.length > 1) {
                    opinionText = parts.slice(1).join(':').trim();
                } else {
                    opinionText = relation.text; // Fallback for unexpected format
                }
            }

            return `<div class="subfaction-opinion">
                        <span class="char-name">${LORE_DATA.characters[playerKey].name}:</span>
                        <p>"${opinionText}"</p>
                    </div>`;
        }).join('');
        
        let extraMechanicHTML = '';
         if (subFaction.current_focus) {
            extraMechanicHTML = `
                <div class="subfaction-details">
                    <h6>Current Focus</h6>
                    <p>${subFaction.current_focus}</p>
                </div>
            `;
        }
        return `<li class="subfaction-item">
                    <div class="subfaction-header">
                        <span class="subfaction-name">${subFaction.name}</span>
                        <span class="subfaction-influence">(${subFaction.influence || '??'}% Influence)</span>
                    </div>
                    <p class="subfaction-description">${subFaction.description}</p>
                    ${extraMechanicHTML}
                    <div class="subfaction-opinions-container">
                        ${playerRepHTML}
                    </div>
                </li>`;
    }).join('');

    return `
        <p class="system-description">The Liberated Toads are not a monolithic bloc, but a diverse group of individuals with strong opinions shaped by their recent trauma and newfound freedom. Their support is personal and must be earned. Their development is tracked on the <a href="focus.html">Toad Focus</a> page.</p>
        <div class="system-content">
            <ul class="subfaction-list">
                ${subFactionListHTML}
            </ul>
        </div>
    `;
}
