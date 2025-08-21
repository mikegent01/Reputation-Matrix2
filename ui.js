import { state } from './state.js';
import { LORE_DATA } from './lore.js';
import { getReputation, getNotoriety, getDetailedFactionAssessment, getGenericFactionAssessment } from './reputation.js';
import { playSound } from './common.js';
import * as factionSystems from './faction-systems.js';

const viewContainer = document.getElementById('view-container');
const partyList = document.getElementById('party-list');
const eventList = document.getElementById('event-list');
let currentFactionDetail = null;
let currentSort = 'power'; // Default sort order

// --- ROUTING ---

export function router() {
    const hash = window.location.hash;
    const [path, param] = hash.substring(1).split('/');

    // Clear old chart instances before rendering new view
    Object.values(state.chartInstances).forEach(chart => chart.destroy());
    state.chartInstances = {};

    if (path === 'faction' && param && LORE_DATA.factions[param]) {
        currentFactionDetail = param;
        renderFactionDetail(param);
    } else {
        currentFactionDetail = null;
        renderFactionDirectory();
    }
}

// --- CORE RENDERERS ---

export function renderPartyList() {
    if (!partyList) return;
    partyList.innerHTML = '';
    state.party.forEach(playerKey => {
        const li = document.createElement('li');
        const player = LORE_DATA.characters[playerKey];
        if (player) {
            li.textContent = player.name;
            partyList.appendChild(li);
        }
    });
}

export function renderEventList() {
    const eventListContainer = document.getElementById('event-list');
    if (!eventListContainer) return;
    eventListContainer.innerHTML = '';
    // Show the last 5 events, most recent first.
    const recentEvents = [...LORE_DATA.timeline].reverse().slice(0, 5); 

    recentEvents.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.title}</strong><br><span style="font-size: 0.9em; opacity: 0.8;">${event.phase}</span>`;
        eventListContainer.appendChild(li);
    });
}

function renderRegionLegend(regions) {
    const legendList = document.getElementById('faction-legend-list');
    if (!legendList) return;

    legendList.innerHTML = '';
    regions.forEach(regionName => {
        const regionId = regionName.toLowerCase().replace(/\s/g, '-').replace(/[\(\)]/g, '');
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${regionId}">${regionName}</a>`;
        legendList.appendChild(li);
    });
}

// --- VIEW-SPECIFIC RENDERERS ---

function getIntelForFaction(factionKey) {
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    // Provide a fallback chain: user-specific -> user's default -> generic for that faction -> 0
    const defaultIntel = userIntel.default ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;
    return userIntel[factionKey] ?? defaultIntel;
}


function renderFactionDirectory(sortBy = currentSort) {
    currentSort = sortBy;
    viewContainer.innerHTML = ''; // Clear previous view

    const homeViewWrapper = document.createElement('div');
    homeViewWrapper.id = 'home-view';
    
    // Render components that are only on the home view
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'character-summary-container';
    homeViewWrapper.appendChild(summaryContainer);

    const auxContainer = document.createElement('div');
    auxContainer.id = 'auxiliary-party-container';
    homeViewWrapper.appendChild(auxContainer);

    const directoryContainer = document.createElement('div');
    directoryContainer.id = 'faction-directory';
    directoryContainer.innerHTML = `<h2 class="page-title" style="margin-bottom: 24px;">Faction Directory</h2>`;
    const grid = document.createElement('div');
    grid.className = 'faction-directory-grid';
    directoryContainer.appendChild(grid);
    homeViewWrapper.appendChild(directoryContainer);
    
    viewContainer.appendChild(homeViewWrapper);
    
    // Now render the content into the created containers
    renderCharacterSummaries();
    renderAuxiliaryParty();

    const factionKeys = Object.keys(LORE_DATA.factions);
    
    // Sort factions based on the selected criteria
    const sortedFactionKeys = factionKeys.sort((a, b) => {
        const factionA = LORE_DATA.factions[a];
        const factionB = LORE_DATA.factions[b];
        switch(currentSort) {
            case 'name':
                return factionA.name.localeCompare(factionB.name);
            case 'region':
                return (factionA.region || 'ZZZ').localeCompare(factionB.region || 'ZZZ');
            case 'power':
            default:
                 return (factionB.power_level || 0) - (factionA.power_level || 0);
        }
    });
    
    const legendList = document.getElementById('faction-legend-list');
    if (legendList) legendList.innerHTML = '';

    grid.innerHTML = ''; // Clear existing grid before re-rendering
    
    const isDebug = state.debugMode;

    sortedFactionKeys.forEach(factionKey => {
        const faction = LORE_DATA.factions[factionKey];
        const intelLevel = getIntelForFaction(factionKey);
        const categoryClass = `legend-${faction.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

        // Leader
        let leaderHTML = '';
        if (intelLevel >= 40 || isDebug) {
            const leaderKey = faction.leader;
            if (leaderKey && LORE_DATA.characters[leaderKey]) {
                const leaderName = LORE_DATA.characters[leaderKey].name;
                leaderHTML = `<p class="assessment-text" style="font-size: 0.8rem; margin-top: 8px; font-style: normal;"><strong>Leader:</strong> ${leaderName}</p>`;
            }
        }
    
        // Power level
        let powerHTML = '';
        if (intelLevel >= 40 || isDebug) {
            powerHTML = `<strong>Power:</strong> ${faction.power_level || 'N/A'}`;
        }

        // Party Standing
        let partyRepTotal = 0;
        state.party.forEach(playerKey => { partyRepTotal += getReputation(playerKey, factionKey); });
        const partyRep = Math.round(partyRepTotal / state.party.length);
        const partyRepClass = partyRep > 10 ? 'positive' : partyRep < -10 ? 'negative' : 'neutral';
        const partyBarWidth = Math.min(Math.abs(partyRep), 100);
        const partyRepDisplay = `<span class="${partyRepClass}">${partyRep}</span>`;
        
        // Personal Standing
        let personalStandingHTML = '';
        const loggedInUser = state.loggedInUser;
        if (loggedInUser && loggedInUser !== 'generic') {
            const personalRep = getReputation(loggedInUser, factionKey);
            const personalRepClass = personalRep > 10 ? 'positive' : personalRep < -10 ? 'negative' : 'neutral';
            const personalBarWidth = Math.min(Math.abs(personalRep), 100);
            const personalRepDisplay = `<span class="${personalRepClass}">${personalRep}</span>`;
            const userName = LORE_DATA.characters[loggedInUser]?.name || 'Operator';
            personalStandingHTML = `
                <div class="personal-standing" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                    <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">${userName}'s Standing:${personalRepDisplay}</h5>
                    <div class="reputation-bar-container">
                        <div class="reputation-bar ${personalRepClass}" style="width: ${personalBarWidth}%; background-color: var(--${personalRepClass}-color);"></div>
                    </div>
                </div>
            `;
        }
        
        // Intel Bar
        const intelBarHTML = `
            <div class="intel-level" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">Intel: <span style="color: var(--accent-color);">${intelLevel}</span></h5>
                <div class="reputation-bar-container">
                    <div class="reputation-bar" style="width: ${intelLevel}%; background-color: var(--accent-color);"></div>
                </div>
            </div>
        `;

        const standingHTML = `
            <div class="party-reputation" style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-color);">
                <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">Party Standing:${partyRepDisplay}</h5>
                <div class="reputation-bar-container">
                    <div class="reputation-bar ${partyRepClass}" style="width: ${partyBarWidth}%; background-color: var(--${partyRepClass}-color);"></div>
                </div>
                ${personalStandingHTML}
                ${intelBarHTML}
            </div>
        `;

        const card = document.createElement('a');
        card.className = `faction-directory-card ${categoryClass}-border`;
        card.href = `#faction/${factionKey}`;
        card.innerHTML = `
            <div class="faction-directory-header">
                <img src="${faction.logo}" class="faction-directory-logo" alt="${faction.name} Logo">
                <div class="faction-info">
                    <h4 class="faction-directory-title">${faction.name}</h4>
                     <p class="assessment-text" style="font-size: 0.8rem; margin-top: 4px; font-style: normal;">
                        <strong>Region:</strong> ${faction.region || 'Unknown'}<br/>
                        ${powerHTML}
                     </p>
                     ${leaderHTML}
                </div>
            </div>
             <p class="assessment-text" style="font-size: 0.8rem">${faction.description}</p>
            ${standingHTML}
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll('#directory-controls button').forEach(button => {
        button.classList.toggle('active', button.dataset.sort === currentSort);
    });
}


function renderCharacterSummaries() {
    const container = document.getElementById('character-summary-container');
    if (!container) return; // Exit if container doesn't exist
    container.innerHTML = '';

    state.party.forEach(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        if (!player) return;

        const playerIntel = state.intelLevels[playerKey] || {};
        const partyReps = state.players[playerKey].reputation;

        const topAllies = Object.entries(partyReps).filter(([fKey, rep]) => rep >= 25).sort((a, b) => b[1] - a[1]).slice(0, 3);
        const topEnemies = Object.entries(partyReps).filter(([fKey, rep]) => rep <= -25).sort((a, b) => a[1] - b[1]).slice(0, 3);

        const categoryReps = {};
        const categoryCounts = {};
        for (const fKey in LORE_DATA.factions) {
            const category = LORE_DATA.factions[fKey].category || 'Uncategorized';
            if (!categoryReps[category]) {
                categoryReps[category] = 0;
                categoryCounts[category] = 0;
            }
            categoryReps[category] += getReputation(playerKey, fKey);
            categoryCounts[category]++;
        }

        const categoryAverages = {};
        const categoryOrder = ['Major Powers', 'Regional Powers', 'Mystical & Ancient', 'Underworld & Fringe', 'Interdimensional Threats'];
        categoryOrder.forEach(cat => {
            if (categoryReps[cat] !== undefined) {
                categoryAverages[cat] = Math.round(categoryReps[cat] / categoryCounts[cat]);
            }
        });

        let overallStandingHTML = `<div class="char-overall-standing" style="display: block;">
            <h5>Overall Standing</h5>
            <ul>`;
        for (const cat in categoryAverages) {
            const avg = categoryAverages[cat];
            const avgClass = avg > 10 ? 'positive' : avg < -10 ? 'negative' : 'neutral';
            overallStandingHTML += `<li>${cat}: <span class="${avgClass}">${avg}</span></li>`;
        }
        overallStandingHTML += `</ul>`;

        if (topAllies.length > 0) {
            overallStandingHTML += `<h6>Key Allies:</h6><ul>${topAllies.map(a => {
                const factionData = LORE_DATA.factions[a[0]];
                if (!factionData) return ''; // Gracefully handle missing faction
                return `<li>${factionData.name} <span class="positive">(+${a[1]})</span></li>`;
            }).join('')}</ul>`;
        }
        if (topEnemies.length > 0) {
            overallStandingHTML += `<h6>Key Enemies:</h6><ul>${topEnemies.map(e => {
                const factionData = LORE_DATA.factions[e[0]];
                if (!factionData) return ''; // Gracefully handle missing faction
                return `<li>${factionData.name} <span class="negative">(${e[1]})</span></li>`;
            }).join('')}</ul>`;
        }
        overallStandingHTML += `</div>`;

        const totalIntel = Object.values(playerIntel).reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);
        const factionCount = Object.keys(LORE_DATA.factions).length;
        const averageIntel = factionCount > 0 ? Math.round(totalIntel / factionCount) : 0;

        const card = document.createElement('div');
        card.className = 'character-summary-card';

        card.innerHTML = `
            <h3>${player.name}</h3>
            ${overallStandingHTML}
            <div class="char-intel-section">
                <h5>Average Intel Level: ${averageIntel}</h5>
                <div class="intel-bar-container">
                    <div class="intel-bar" style="width: ${averageIntel}%"></div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderAuxiliaryParty() {
    const container = document.getElementById('auxiliary-party-container');
    if (!container) return;
    container.innerHTML = `
        <h3 class="page-title" style="font-size: 1.5rem; color: var(--text-secondary);">
            Liberated Toads: Strategic Focus
            <a href="focus.html" class="faction-link" style="font-size: 0.9rem; color: var(--accent-color); text-decoration: none; margin-left: 8px;">
                (Manage Focus Trees)
            </a>
        </h3>
    `;

    const grid = document.createElement('div');
    grid.className = 'auxiliary-party-grid';
    container.appendChild(grid);
    
    // Now render the content into the created containers
    Object.entries(state.auxiliary_party_state).forEach(([key, member]) => {
        if (key === 'group') {
            return; // Skip the 'group' entry, it's for the focus page
        }

        const card = document.createElement('div');
        card.className = 'aux-member-card';

        const xpPercentage = (member.xp / member.xp_to_next) * 100;

        const statusClass = member.status?.includes("Injured") || member.status?.includes("Kidnapped") || member.status?.includes("Captured") ? 'negative' : 'positive';
        const statusTextClass = member.status?.includes("Injured") || member.status?.includes("Kidnapped") || member.status?.includes("Captured") ? 'negative' : 'status-ok';

        if(statusClass === 'negative'){
            card.classList.add('negative');
        } else {
            card.classList.add('positive');
        }

        const logHTML = member.log.slice().reverse().map(entry => { // .slice().reverse() to show newest first
             if (entry.isLevelUp) {
                return `<li class="log-levelup">${entry.reason}</li>`;
            }
            if(entry.isAbility) {
                return `<li class="log-ability">${entry.reason}</li>`;
            }
            return `<li>${entry.reason} <span>[+${entry.xp} XP]</span></li>`;
        }).join('');

        const abilitiesHTML = member.abilities.length > 0 ?
            member.abilities.map(ability => `
                <div class="aux-ability">
                    <strong>${ability.name}:</strong> ${ability.description}
                </div>
            `).join('') :
            '<p class="no-abilities">No special abilities learned yet.</p>';

        card.innerHTML = `
            <div class="aux-card-header">
                <span class="aux-name">${member.name}</span>
                <span class="aux-level">Level ${member.level}</span>
            </div>
            <div class="aux-details">
                <span><strong>Weapon:</strong> ${member.weapon}</span>
                <span><strong>Status:</strong> <span class="${statusTextClass}">${member.status}</span></span>
            </div>
            <div class="xp-bar-container">
                <div class="xp-bar" style="width: ${xpPercentage}%"></div>
                <span class="xp-text">${member.xp} / ${member.xp_to_next} XP</span>
            </div>
            <div class="aux-abilities">
                <h6>Abilities</h6>
                ${abilitiesHTML}
            </div>
            <div class="aux-log">
                <h6>Progression Log</h6>
                <ul>
                    ${logHTML}
                </ul>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderFactionDetail(factionKey) {
    viewContainer.innerHTML = ''; // Clear previous view
    const faction = LORE_DATA.factions[factionKey];
    if (!faction) {
        viewContainer.innerHTML = `<h2 class="page-title">Faction Not Found</h2><a href="#" class="terminal-back-button">&laquo; Back to Directory</a>`;
        return;
    }
    
    const detailWrapper = document.createElement('div');
    detailWrapper.id = 'faction-detail-view';
    viewContainer.appendChild(detailWrapper);

    const intelLevel = getIntelForFaction(factionKey);
    const isDebug = state.debugMode;

    const categoryClass = `legend-${faction.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
    
    // Party Reputation
    let partyRepHTML = '';
    if (intelLevel >= 40 || isDebug) {
        let partyRepTotal = 0;
        state.party.forEach(playerKey => {
            partyRepTotal += getReputation(playerKey, factionKey);
        });
        const partyRep = Math.round(partyRepTotal / state.party.length);
        const partyRepClass = partyRep > 10 ? 'positive' : partyRep < -10 ? 'negative' : 'neutral';
        const partyBarWidth = Math.min(Math.abs(partyRep), 100);
        const showNumbers = intelLevel >= 80 || isDebug;
        const partyRepDisplay = showNumbers ? `<span class="${partyRepClass}">${partyRep}</span>` : '';

        partyRepHTML = `
            <div class="party-reputation">
                <h4>Total Party Reputation: ${partyRepDisplay}</h4>
                <div class="reputation-bar-container">
                    <div class="reputation-bar ${partyRepClass}" style="width: ${partyBarWidth}%; background-color: var(--${partyRepClass}-color);"></div>
                </div>
                <p class="assessment-text"><strong>Overall Stance:</strong> ${getGenericFactionAssessment(partyRep)}</p>
            </div>
        `;
    }

    // Rumors & Intel
    let rumorsHTML = '';
    if (intelLevel >= 60 || isDebug) {
        const relevantRumors = LORE_DATA.rumors.filter(rumor =>
            state.activeRumors.includes(rumor.id) && rumor.effects[factionKey]
        );
        if (relevantRumors.length > 0) {
            rumorsHTML = `
                <div class="character-assessments-container">
                    <h4>Active Rumors & Intel:</h4>
                    ${relevantRumors.map(rumor => `
                        <div class="rumor">
                            <strong class="rumor-title">${rumor.title}</strong>
                            <p class="assessment-text">${rumor.description} (Rep ${rumor.effects[factionKey] > 0 ? '+' : ''}${rumor.effects[factionKey]})</p>
                        </div>`).join('')
                    }
                </div>
            `;
        }
    }

    // Notable People
    let notablePeopleHTML = '';
    if ((intelLevel >= 25 || isDebug) && faction.notable_people && faction.notable_people.length > 0) {
        const showDetails = intelLevel >= 60 || isDebug;
        notablePeopleHTML = `
            <div class="notable-people-container">
                <h5>Notable People</h5>
                <div class="notable-people-grid">
                    ${faction.notable_people.map(person => `
                        <div class="notable-person">
                            <div class="person-header">
                                <span class="person-name">${person.name}</span>
                                <span class="person-role">${person.role}</span>
                            </div>
                            ${showDetails ? `<p class="person-description">${person.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Unique System
    const uniqueSystemHTML = (intelLevel >= 60 || isDebug) ? factionSystems.renderSystemForFaction(factionKey, faction, state) : '';

    // Individual Character Assessments
    let characterAssessmentsHTML = '';
    if (intelLevel >= 80 || isDebug) {
        let assessments = '';
        const loggedInUser = state.loggedInUser;
        state.party.forEach(playerKey => {
            const player = state.players[playerKey];
            const reputation = getReputation(playerKey, factionKey);
            const repClass = reputation > 10 ? 'positive' : reputation < -10 ? 'negative' : 'neutral';
            const personalStandingClass = (loggedInUser !== 'generic' && loggedInUser === playerKey) ? 'personal-standing' : '';
            const notoriety = getNotoriety(playerKey, factionKey);
            const hasMeaningfulConnection = state.calculationBreakdown[playerKey]?.[factionKey] && (
                state.calculationBreakdown[playerKey][factionKey].rumors.length > 0 ||
                (state.calculationBreakdown[playerKey][factionKey].propagation && state.calculationBreakdown[playerKey][factionKey].propagation.length > 0) ||
                Math.abs(state.calculationBreakdown[playerKey][factionKey].base) > 10
            );

            assessments += `
                <div class="character-assessment ${personalStandingClass}">
                    <div class="char-rep-header">
                        <span class="char-name ${repClass}">${player.name}: ${reputation}</span>
                        <span class="char-notoriety">Notoriety: ${notoriety}</span>
                    </div>
                    <div class="assessment-text">${getDetailedFactionAssessment(factionKey, playerKey, reputation, notoriety)}</div>
                    ${hasMeaningfulConnection ? `
                    <div class="calculation-breakdown">
                        <details>
                            <summary class="calculation-breakdown summary">Show Calculation</summary>
                            <ul>
                                <li>Base Reputation: ${state.calculationBreakdown[playerKey][factionKey].base}</li>
                                ${state.calculationBreakdown[playerKey][factionKey].rumors.map(r => `<li>Rumor: "${r.title}": ${r.value > 0 ? '+' : ''}${r.value}</li>`).join('')}
                                ${state.calculationBreakdown[playerKey][factionKey].propagation ? state.calculationBreakdown[playerKey][factionKey].propagation.map(p => `<li>From ${p.source}: ${p.value > 0 ? '+' : ''}${p.value}</li>`).join('') : ''}
                                <li><em>(Further propagation passes applied)</em></li>
                                <li><strong>Final Total: ${reputation}</strong></li>
                            </ul>
                        </details>
                    </div>` : ''}
                </div>`;
        });
        characterAssessmentsHTML = `
            <div class="character-assessments-container">
                <h4>Individual Standing & Overall Faction Opinion:</h4>
                ${assessments}
            </div>
        `;
    }

    // Waluigi Tip
    let waluigiTipHTML = '';
    if (intelLevel >= 90 || isDebug) {
        let tipText = faction.waluigi_tip;
        if (tipText) {
            waluigiTipHTML = `
            <div class="waluigi-faction-tip">
                <img src="logo.png" alt="Waluigi Logo">
                <div>
                    <h6>Waluigi's Cunning Plan</h6>
                    <p>${tipText}</p>
                </div>
            </div>`;
        }
    }

    detailWrapper.innerHTML = `
        <a href="#" class="terminal-back-button">&laquo; Back to Directory</a>
        <div class="card faction-card ${categoryClass}-border" id="${factionKey}">
             <div class="faction-card-header">
                <img src="${faction.logo}" class="faction-logo" alt="${faction.name} Logo">
                <div class="faction-info">
                    <h3 class="card-title" style="font-size: 2rem;">${faction.name}</h3>
                    <p class="faction-description">${faction.description}</p>
                </div>
            </div>
            ${partyRepHTML}
            ${rumorsHTML}
            ${notablePeopleHTML}
            ${uniqueSystemHTML}
            ${characterAssessmentsHTML}
            ${waluigiTipHTML}
        </div>
    `;
    
    factionSystems.initSystem(factionKey, faction);
}


// --- EVENT LISTENERS ---

export function setupEventListeners() {
    window.addEventListener('hashchange', router);

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.nav-button') || e.target.closest('.back-button') || e.target.closest('.terminal-back-button')) {
            playSound('click.mp3', 0.6);
        }
        if(e.target.matches('summary')) {
            const details = e.target.closest('details');
            if (details && !details.open) {
                 playSound('confirm.mp3', 0.5);
            }
        }
    });

    const directoryControls = document.getElementById('directory-controls');
    if (directoryControls) {
        directoryControls.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const sortBy = e.target.dataset.sort;
                if (sortBy) {
                    playSound('click.mp3');
                    renderFactionDirectory(sortBy);
                }
            }
        });
    }

    const switchOperatorBtn = document.getElementById('switch-operator-btn');
    if (switchOperatorBtn) {
        switchOperatorBtn.addEventListener('click', () => {
            playSound('wah.mp3');
            localStorage.removeItem('vigilanceTerminalUser');
            localStorage.removeItem('vigilanceDebugMode');
            window.location.href = 'index.html';
        });
    }
}
