// This file acts as a dispatcher for rendering unique faction systems.
// It imports modular rendering and initialization functions from the `/systems` directory.

import { state } from './state.js';
import { renderDefaultSubfactionList } from './systems/common.js';

// Import all system renderers and initializers
import { renderHolyMidlandsDiet, initHolyMidlandsDietListeners } from './systems/regal-empire-system.js';
import { renderFreelancerNetwork, initFreelancerNetwork } from './systems/freelancer-system.js';
import { renderOnyxHandCovenSystem, initOnyxHandSystem } from './systems/onyx-hand-system.js';
import { renderMagesGuildSystem, initMagesGuildSystem } from './systems/mages-guild-system.js';
import { renderMoonfangPackSystem, initMoonfangPackSystem } from './systems/moonfang-pack-system.js';
import { renderCosmicJestersSystem, initCosmicJestersSystem } from './systems/cosmic-jesters-system.js';
import { renderDCISystem, initDCISystem } from './systems/dci-system.js';
import { renderOathboundJudgesSystem, initOathboundJudgesSystem } from './systems/oathbound-judges-system.js';
import { renderUnchainedSystem } from './systems/unchained-system.js';
import { renderCrimsonFleetSystem, initCrimsonFleetSystem } from './systems/crimson-fleet-system.js';
import { renderIronFistsSystem } from './systems/iron-fists-system.js';
import { renderMushroomRegencySystem, initMushroomRegencySystem } from './systems/mushroom-regency-system.js';
import { renderGoodstyleArtisansSystem } from './systems/goodstyle-artisans-system.js';
import * as simpleRenderers from './systems/simple-renderers.js';
import { initTabbedSystem } from './systems/common.js';

/**
 * Selects and renders the appropriate unique system display for a given faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderSystemForFaction(factionKey, factionData, currentState) {
    const detailedSystems = ['iron_legion', 'onyx_hand', 'moonfang_pack', 'mages_guild', 'regal_empire', 'silver_flame', 'oathbound_judges', 'koopa_troop', 'the_unchained', 'crimson_fleet', 'iron_fists', 'mushroom_regency', 'toad_gang', 'goodstyle_artisans'];
    if (!detailedSystems.includes(factionKey) && !factionData.internal_politics?.sub_factions && factionKey !== 'liberated_toads') {
        return '';
    }
    
    const systemHTML = getSystemHTML(factionKey, factionData, currentState);
    
    return `
        <div class="unique-system-container">
            <h5>Internal Faction Dynamics</h5>
            ${systemHTML}
        </div>
    `;
}

/**
 * Calls the correct rendering function based on the faction key.
 * @returns {string} HTML for the specific system.
 */
function getSystemHTML(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics?.sub_factions;
    switch (factionKey) {
        case 'regal_empire': return renderHolyMidlandsDiet();
        case 'iron_legion': return simpleRenderers.renderIronLegionDetailedSystem();
        case 'onyx_hand': return renderOnyxHandCovenSystem();
        case 'moonfang_pack': return renderMoonfangPackSystem();
        case 'mages_guild': return renderMagesGuildSystem();
        case 'koopa_troop': return simpleRenderers.renderKoopaTroopHierarchySystem();
        case 'silver_flame': return simpleRenderers.renderSilverFlameEdictsSystem();
        case 'oathbound_judges': return renderOathboundJudgesSystem();
        case 'freelancer_underworld': return renderFreelancerNetwork();
        case 'toad_gang': return simpleRenderers.renderToadGangBountyBoard();
        case 'cosmic_jesters': return renderCosmicJestersSystem();
        case 'diamond_city_investigators': return renderDCISystem();
        case 'liberated_toads': return simpleRenderers.renderLiberatedToadsFocus(factionKey, factionData, currentState);
        case 'the_unchained': return renderUnchainedSystem();
        case 'crimson_fleet': return renderCrimsonFleetSystem();
        case 'mushroom_regency': return renderMushroomRegencySystem();
        case 'iron_fists': return renderIronFistsSystem();
        case 'goodstyle_artisans': return renderGoodstyleArtisansSystem();
        default:
            if (subFactions) return renderDefaultSubfactionList(subFactions, factionKey, state);
            return `<div class="system-content"><p>No unique system data available for this faction.</p></div>`;
    }
}

/**
 * Initializes any dynamic JS for a system after it has been rendered.
 * @param {string} factionKey - The key of the faction.
 */
export function initSystem(factionKey) {
    // Call specific initializers for complex systems
    switch (factionKey) {
        case 'regal_empire':
            initHolyMidlandsDietListeners();
            break;
        case 'freelancer_underworld':
            initFreelancerNetwork();
            break;
        case 'onyx_hand':
            initOnyxHandSystem();
            break;
        case 'mages_guild':
            initMagesGuildSystem();
            break;
        case 'moonfang_pack':
            initMoonfangPackSystem();
            break;
        case 'cosmic_jesters':
            initCosmicJestersSystem();
            break;
        case 'diamond_city_investigators':
            initDCISystem();
            break;
        case 'oathbound_judges':
            initOathboundJudgesSystem();
            break;
        case 'crimson_fleet':
            initCrimsonFleetSystem();
            break;
        case 'mushroom_regency':
            initMushroomRegencySystem();
            break;
    }
    
    // Handle generic tabbed systems (like Iron Legion)
    const tabbedSystems = ['iron_legion'];
    if (tabbedSystems.includes(factionKey)) {
        initTabbedSystem();
    }
}