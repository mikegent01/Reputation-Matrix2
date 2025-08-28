import { QUEST_DATA, BOUNTY_BOARD_QUESTS } from './quests-data.js';
import { playSound } from './common.js';

const mainQuestContainer = document.getElementById('quest-container');
const bountyBoardContainer = document.getElementById('quest-board-list');

function renderMainQuests() {
    if (!mainQuestContainer) return;

    const questsByStatus = {
        active: [],
        available: [],
        completed: [],
        failed: []
    };

    for (const questId in QUEST_DATA) {
        const quest = QUEST_DATA[questId];
        if (quest.status !== 'hidden') {
            questsByStatus[quest.status].push(quest);
        }
    }

    let html = '';

    const categoryOrder = ['active', 'available', 'completed', 'failed'];
    categoryOrder.forEach(status => {
        if (questsByStatus[status].length > 0) {
            html += `
                <div class="quest-category">
                    <h3 class="quest-category-title ${status}">${status.charAt(0).toUpperCase() + status.slice(1)} Quests</h3>
                    <div class="quest-list">
                        ${questsByStatus[status].map(renderQuestCard).join('')}
                    </div>
                </div>
            `;
        }
    });

    mainQuestContainer.innerHTML = html;
}

function renderQuestCard(quest) {
    return `
        <div class="quest-card status-${quest.status}" id="${quest.id}">
            <div class="quest-header">
                <div class="quest-title-section">
                    <h4 class="quest-title">${quest.title}</h4>
                    <p class="quest-assignee">Assigned to: ${quest.assignee}</p>
                </div>
                <div class="quest-status">${quest.status}</div>
            </div>
            <div class="quest-body">
                <div class="quest-objective">
                    <h5>Objective</h5>
                    <p>${quest.objective}</p>
                </div>
                <div class="quest-steps-container">
                    <h5>Checkpoints</h5>
                    <ul class="quest-step-list">
                        ${quest.steps.map(renderQuestStep).join('')}
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

function renderQuestStep(step) {
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
}

function init() {
    if (!mainQuestContainer) return; // Only run on the quests page
    renderMainQuests();
    renderBountyBoard();
    setupEventListeners();
}

init();