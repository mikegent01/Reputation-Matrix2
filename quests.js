import { QUEST_DATA } from './quests-data.js';
import { BOUNTY_BOARD_QUESTS } from './bounty-quests-data.js';
import { playSound } from './common.js';
import { state } from './state.js';
import { LORE_DATA } from './lore.js';

const mainQuestContainer = document.getElementById('quest-container');
const bountyBoardContainer = document.getElementById('quest-board-list');
const questCounter = document.getElementById('quest-counter');
const sorterContainer = document.getElementById('quest-sorter');

let currentSort = 'status'; // Default sort

function renderQuests() {
    if (!mainQuestContainer) return;

    // 1. Separate quests into buckets
    const completedQuests = [];
    const failedQuests = [];
    const otherQuests = [];

    for (const questId in QUEST_DATA) {
        const quest = QUEST_DATA[questId];
        if (quest.status === 'hidden' && quest.steps.every(s => s.status === 'locked')) {
            continue; // Skip fully hidden quests
        }
        
        switch (quest.status) {
            case 'completed':
                completedQuests.push(quest);
                break;
            case 'failed':
                failedQuests.push(quest);
                break;
            default: // active, available, hidden
                otherQuests.push(quest);
                break;
        }
    }

    // 2. Group the "other" quests by their category
    const questsByCategory = {};
    for (const quest of otherQuests) {
        const category = quest.category || 'Miscellaneous';
        if (!questsByCategory[category]) {
            questsByCategory[category] = [];
        }
        questsByCategory[category].push(quest);
    }
    
    // 3. Sort quests within each category
    const statusOrder = { 'active': 1, 'available': 2, 'hidden': 3, 'completed': 4, 'failed': 5 };
    const typeOrder = { 'main': 1, 'personal': 2, 'side': 3, 'mystery': 4 };

    const sortFn = (a, b) => {
        if (currentSort === 'status') {
            return statusOrder[a.status] - statusOrder[b.status];
        }
        if (currentSort === 'type') {
            return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
        }
        // 'category' sort is handled by the grouping, but we can add a secondary sort by title
        return a.title.localeCompare(b.title);
    };

    for (const category in questsByCategory) {
        questsByCategory[category].sort(sortFn);
    }
    completedQuests.sort((a,b) => a.title.localeCompare(b.title));
    failedQuests.sort((a,b) => a.title.localeCompare(b.title));


    // 4. Build the final HTML
    let html = '';
    const sortedCategories = Object.keys(questsByCategory).sort((a, b) => {
        if (a === 'Main Story') return -1;
        if (b === 'Main Story') return 1;
        return a.localeCompare(b);
    });
    
    // Render active/available categories
    for (const category of sortedCategories) {
        const quests = questsByCategory[category];
        html += renderCategory(category, quests);
    }
    
    // Render completed category if it has quests
    if (completedQuests.length > 0) {
        html += renderCategory('Completed Quests', completedQuests, 'completed-quests');
    }
    
    // Render failed category if it has quests
    if (failedQuests.length > 0) {
        html += renderCategory('Failed Quests', failedQuests, 'failed-quests');
    }

    mainQuestContainer.innerHTML = html;

    // 5. Update quest counter
    const players = state.party; // ['archie', 'markop', 'humpik']
    const questLimit = 3;
    let counterHTML = '';

    players.forEach(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        if (!player) return;

        const playerFirstName = player.name.split(' ')[0];
        const activeQuests = Object.values(QUEST_DATA).filter(q => q.assignee === playerFirstName && q.status === 'active').length;

        const isOverLimit = activeQuests >= questLimit;
        counterHTML += `
            <div class="player-quest-count ${isOverLimit ? 'limit-reached' : ''}" title="${player.name}'s Active Quests">
                ${playerFirstName}: ${activeQuests} / ${questLimit}
            </div>
        `;
    });

    questCounter.innerHTML = counterHTML;
}

function renderCategory(title, quests, cssClass = '') {
    return `
        <div class="quest-category ${cssClass}">
            <h3 class="quest-category-title">${title}</h3>
            <div class="quest-list">
                ${quests.map(renderQuestCard).join('')}
            </div>
        </div>
    `;
}


function renderQuestCard(quest) {
    const contextHTML = quest.motivation ? `
        <div class="quest-context">
            <strong>Motivation:</strong> <p>${quest.motivation}</p>
        </div>
    ` : quest.start_condition ? `
        <div class="quest-context">
            <strong>Start Condition:</strong> <p>${quest.start_condition}</p>
        </div>
    ` : '';
    
    const isHidden = quest.status === 'hidden';

    return `
        <div class="quest-card status-${quest.status}" id="${quest.id}">
            <div class="quest-header">
                <div class="quest-title-section">
                    <h4 class="quest-title">${quest.title}</h4>
                    <p class="quest-type">${quest.type}</p>
                    <p class="quest-assignee">Assignee: ${quest.assignee}</p>
                </div>
                <div class="quest-status">${quest.status}</div>
            </div>
            <div class="quest-body">
                <div class="quest-objective">
                    <h5>Objective</h5>
                    <p>${quest.objective}</p>
                </div>
                ${contextHTML}
                <div class="quest-steps-container">
                    <h5>Checkpoints</h5>
                    <ul class="quest-step-list">
                        ${quest.steps.map(step => renderQuestStep(step, isHidden)).join('')}
                    </ul>
                </div>
                ${quest.finalDecision ? `
                <div class="quest-final-decision">
                    <h5>Final Decision</h5>
                    <p>${quest.finalDecision.description}</p>
                </div>` : ''}
            </div>
        </div>
    `;
}

function renderQuestStep(step, isParentHidden) {
    if (isParentHidden && step.status === 'locked') {
        return `
            <li class="quest-step status-locked">
                <div class="step-marker"></div>
                <div class="step-content">
                    <p class="step-title">Undiscovered Step</p>
                    <p class="step-description">Further objectives are unknown at this time.</p>
                </div>
            </li>
        `;
    }

    return `
        <li class="quest-step status-${step.status}">
            <div class="step-marker"></div>
            <div class="step-content">
                <p class="step-title">${step.title}</p>
                <p class="step-description">${step.description}</p>
                ${step.options ? `
                <div class="step-options">
                    <h6>Options:</h6>
                    <ul>
                        ${step.options.map(opt => `<li>${opt}</li>`).join('')}
                    </ul>
                </div>` : ''}
            </div>
        </li>
    `;
}

function renderBountyBoard() {
    if (!bountyBoardContainer) return;

    bountyBoardContainer.innerHTML = BOUNTY_BOARD_QUESTS.map(quest => {
        const rewardClass = quest.reward_type || 'neutral';
        return `
            <div class="quest-note">
                <div class="quest-pin"></div>
                <h4 class="note-title">${quest.title}</h4>
                <p class="note-content">${quest.description}</p>
                <div class="note-footer">
                    <p><strong>Reward:</strong> <span class="${rewardClass}">${quest.reward}</span></p>
                    <p>- ${quest.posted_by}</p>
                </div>
            </div>
        `;
    }).join('');
}

function setupEventListeners() {
    mainQuestContainer.addEventListener('click', e => {
        const header = e.target.closest('.quest-header');
        if (header) {
            playSound('click.mp3');
            const card = header.closest('.quest-card');
            card.classList.toggle('is-expanded');
        }
    });

    sorterContainer.addEventListener('click', e => {
        const button = e.target.closest('.sort-btn');
        if (button && !button.classList.contains('active')) {
            playSound('confirm.mp3', 0.5);
            currentSort = button.dataset.sort;
            sorterContainer.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderQuests();
        }
    });
}

function init() {
    if (!mainQuestContainer) return;
    renderQuests();
    renderBountyBoard();
    setupEventListeners();
}

init();