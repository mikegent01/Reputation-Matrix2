import { state, saveState, loadState, initFocusTreeState } from './state.js';
import { FOCUS_TREES } from './focus-tree.js';
import { LORE_DATA } from './lore.js';
import { DIARY_ENTRIES } from './diary-content.js';

const rosterList = document.getElementById('toad-roster-list');
const treeHeader = document.getElementById('focus-tree-header');
const treeContainer = document.getElementById('focus-tree-container');
const treeContent = document.getElementById('focus-tree-content');
const tooltip = document.getElementById('focus-tooltip');
const dayCounter = document.querySelector('#info-day-counter .day-number');
const logList = document.getElementById('log-list');
const inventoryContainer = document.getElementById('inventory-bookshelf');
const resetFocusBtn = document.getElementById('reset-focus-btn');
const diaryModal = document.getElementById('diary-modal');
const diaryModalClose = document.getElementById('diary-modal-close');
const diaryPagesContainer = document.getElementById('diary-pages-container');


// Load state immediately to ensure all data is available for rendering.
loadState();

let activeToadKey = state.focusTreeState.activeToad;

function init() {
    renderAll();
    setupEventListeners();
}

function renderAll() {
    renderToadRoster();
    renderFocusTree(activeToadKey);
    renderInfoPanel();
}

function renderToadRoster() {
    rosterList.innerHTML = '';
    const sortedToads = Object.keys(LORE_DATA.auxiliary_party)
        .filter(key => key !== 'traitor_toad')
        .sort((a, b) => (state.focusTreeState.influences[b] || 0) - (state.focusTreeState.influences[a] || 0));

    for (const toadKey of sortedToads) {
        const toadData = LORE_DATA.auxiliary_party[toadKey];
        const influence = state.focusTreeState.influences[toadKey] || 0;
        const activeFocus = state.focusTreeState.activeFocuses.find(f => f.toadKey === toadKey);

        const card = document.createElement('li');
        card.className = 'roster-toad-card';
        card.dataset.toadKey = toadKey;
        if (toadKey === activeToadKey) {
            card.classList.add('active');
        }

        let focusHTML = '<p class="roster-focus-info">Idle</p>';
        if (activeFocus) {
            const focusNode = findFocusNode(toadKey, activeFocus.nodeId);
            focusHTML = `
                <p class="roster-focus-info">
                    Focus: <span class="focus-name">${focusNode.title}</span><br>
                    (${activeFocus.remainingDays} days remaining)
                </p>`;
        }

        card.innerHTML = `
            <div class="roster-header">
                <span class="roster-name">${toadData.name}</span>
                <span class="roster-influence">Influence: <strong>${influence}</strong></span>
            </div>
            ${focusHTML}
        `;
        rosterList.appendChild(card);
    }
}

function renderFocusTree(toadKey) {
    activeToadKey = toadKey;
    const focusData = FOCUS_TREES[toadKey];
    if (!focusData) {
        treeContent.innerHTML = '<p>No focus tree available.</p>';
        treeHeader.textContent = 'No Data';
        return;
    }

    treeHeader.textContent = `${focusData.name}'s Focus Tree`;
    treeContent.innerHTML = `<svg id="focus-tree-svg"></svg>`;
    const svg = document.getElementById('focus-tree-svg');

    focusData.tree.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'focus-node';
        nodeEl.id = node.id;
        nodeEl.style.left = `${node.position.x}px`;
        nodeEl.style.top = `${node.position.y}px`;

        const unlocked = state.focusTreeState.unlocked[toadKey].includes(node.id);
        const activeFocus = state.focusTreeState.activeFocuses.find(f => f.nodeId === node.id);
        const prerequisitesMet = node.prerequisites.every(p => state.focusTreeState.unlocked[toadKey].includes(p));
        const canStart = prerequisitesMet && !unlocked && !activeFocus && !state.focusTreeState.activeFocuses.some(f => f.toadKey === toadKey);

        if (unlocked) nodeEl.classList.add('completed');
        else if (activeFocus) nodeEl.classList.add('in-progress');
        else if (prerequisitesMet) nodeEl.classList.add('available');
        
        let progressBarHTML = '';
        if (activeFocus) {
            const progress = ((activeFocus.totalDays - activeFocus.remainingDays) / activeFocus.totalDays) * 100;
            progressBarHTML = `
                <div class="focus-progress-bar">
                    <div class="focus-progress-bar-inner" style="width: ${progress}%"></div>
                </div>
            `;
        }
        
        nodeEl.innerHTML = `
            <div class="focus-icon"><img src="${node.icon}" alt="${node.title}"></div>
            <p class="focus-title">${node.title}</p>
            ${progressBarHTML}
        `;
        treeContent.appendChild(nodeEl);
        
        // Draw lines
        node.prerequisites.forEach(prereqId => {
            const prereqNode = focusData.tree.find(n => n.id === prereqId);
            if (prereqNode) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', prereqNode.position.x + 40);
                line.setAttribute('y1', prereqNode.position.y + 50);
                line.setAttribute('x2', node.position.x + 40);
                line.setAttribute('y2', node.position.y);
                line.classList.add('focus-line');
                if (state.focusTreeState.unlocked[toadKey].includes(prereqId)) {
                     line.classList.add('unlocked');
                }
                 if (state.focusTreeState.unlocked[toadKey].includes(node.id)) {
                     line.classList.add('completed');
                }
                svg.appendChild(line);
            }
        });
    });

    // Update active state in roster list
    document.querySelectorAll('.roster-toad-card').forEach(c => {
        c.classList.toggle('active', c.dataset.toadKey === toadKey);
    });
}

function renderInfoPanel() {
    dayCounter.textContent = state.focusTreeState.day;

    // Log
    logList.innerHTML = '';
    state.focusTreeState.log.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${entry.who}:</strong> ${entry.what}`;
        logList.appendChild(li);
    });

    // Inventory Bookshelf
    inventoryContainer.innerHTML = '';

    function getItemType(itemName) {
        const lowerItem = itemName.toLowerCase();
        if (lowerItem.includes('diary')) return 'diary';
        if (lowerItem.includes('sun') || lowerItem.includes('needle')) return 'artifact';
        return 'mundane';
    }
    
    function getItemDescription(itemName) {
        const lowerItem = itemName.toLowerCase();
        if (lowerItem.includes('diary')) {
            return "Princess Peach's personal diary, recovered from the castle. Its pages are filled with her thoughts in the days leading up to her death. What secrets does it hold about the true cause of the Mushroom Kingdom Civil War, and who was really responsible for her demise?";
        }
        if (lowerItem.includes('sun')) {
            return "A strange, polished brass object that seems to absorb light. It feels warm to the touch.";
        }
        if (lowerItem.includes('needle')) {
            return "The needle from a complex pressure gauge. It hums with a faint, residual energy.";
        }
        return "A mundane item of some importance.";
    }

    let hasItems = false;
    const allowedToReadDiary = state.loggedInUser === 'markop' || state.loggedInUser === 'generic' || state.debugMode;

    for (const ownerKey in state.inventories) {
        const inventory = state.inventories[ownerKey];
        const itemsToRender = inventory.items.filter(item => {
            if (item.toLowerCase().includes('diary')) {
                return allowedToReadDiary;
            }
            return true;
        });

        if (itemsToRender.length > 0) {
            hasItems = true;
            const shelfLabel = document.createElement('div');
            shelfLabel.className = 'shelf-label';
            shelfLabel.textContent = inventory.name;
            inventoryContainer.appendChild(shelfLabel);
    
            const shelf = document.createElement('div');
            shelf.className = 'bookshelf-shelf';
            
            itemsToRender.forEach(item => {
                const itemEl = document.createElement('div');
                const itemType = getItemType(item);

                let extraClasses = '';
                if (item.toLowerCase().includes('diary')) {
                    extraClasses = ' interactive';
                    itemEl.dataset.itemId = 'peach_diary';
                }

                itemEl.className = `inventory-item ${itemType}${extraClasses}`;
                itemEl.textContent = item;
                itemEl.title = getItemDescription(item);
                
                shelf.appendChild(itemEl);
            });
            inventoryContainer.appendChild(shelf);
        }
    }

    if (!hasItems) {
        inventoryContainer.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-secondary); font-size: 0.8rem; padding-top: 20px;">All inventories are empty.</p>';
    }
}


function startFocus(toadKey, nodeId) {
    const node = findFocusNode(toadKey, nodeId);
    if (!node) return;

    const isOccupied = state.focusTreeState.activeFocuses.some(f => f.toadKey === toadKey);
    if (isOccupied) {
        alert(`${LORE_DATA.auxiliary_party[toadKey].name} is already busy with a focus.`);
        return;
    }

    state.focusTreeState.activeFocuses.push({
        toadKey: toadKey,
        nodeId: nodeId,
        remainingDays: node.cost,
        totalDays: node.cost
    });

    addToLog(LORE_DATA.auxiliary_party[toadKey].name, `Began focus: "${node.title}" [${node.cost} days].`);
    
    saveState();
    renderAll();
}

function resetFocusTree() {
    if (confirm("Are you sure you want to reset all focus tree progress? This action cannot be undone.")) {
        initFocusTreeState();
        addToLog('System', 'Focus tree progress has been reset.');
        saveState();
        renderAll();
    }
}

// --- Diary Modal Logic ---
function showDiaryModal() {
    if (!diaryModal || !diaryPagesContainer) return;

    diaryPagesContainer.innerHTML = '';
    
    const page1 = document.createElement('div');
    page1.className = 'diary-page';
    const page2 = document.createElement('div');
    page2.className = 'diary-page';

    DIARY_ENTRIES.forEach((entry, index) => {
        const entryHTML = `
            <div class="diary-entry">
                <h6>${entry.date}</h6>
                <p>${entry.entry}</p>
            </div>
        `;
        // Distribute entries between two pages
        if (index < DIARY_ENTRIES.length / 2) {
            page1.innerHTML += entryHTML;
        } else {
            page2.innerHTML += entryHTML;
        }
    });

    diaryPagesContainer.appendChild(page1);
    diaryPagesContainer.appendChild(page2);

    diaryModal.style.display = 'flex';
}

function hideDiaryModal() {
    if (diaryModal) {
        diaryModal.style.display = 'none';
    }
}


// --- HELPERS ---
function findFocusNode(toadKey, nodeId) {
    return FOCUS_TREES[toadKey]?.tree.find(n => n.id === nodeId);
}

function addToLog(who, what) {
    state.focusTreeState.log.push({ who, what, when: new Date().toISOString() });
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    rosterList.addEventListener('click', e => {
        const card = e.target.closest('.roster-toad-card');
        if (card) {
            const toadKey = card.dataset.toadKey;
            renderFocusTree(toadKey);
        }
    });

    treeContent.addEventListener('mouseover', e => {
        const nodeEl = e.target.closest('.focus-node');
        if (nodeEl) {
            const node = findFocusNode(activeToadKey, nodeEl.id);
            if (node) {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
                
                let prereqHTML = 'Requires: None';
                if(node.prerequisites.length > 0) {
                    prereqHTML = 'Requires: ' + node.prerequisites.map(pId => {
                        const pNode = findFocusNode(activeToadKey, pId);
                        const isMet = state.focusTreeState.unlocked[activeToadKey].includes(pId);
                        return `<span style="color: ${isMet ? 'var(--positive-color)' : 'var(--negative-color)'}">${pNode.title}</span>`;
                    }).join(', ');
                }

                tooltip.innerHTML = `
                    <h5>${node.title}</h5>
                    <p>${node.description}</p>
                    <p class="cost">${node.cost} Days</p>
                    <p class="prereqs">${prereqHTML}</p>
                `;
            }
        }
    });
    
    treeContent.addEventListener('mousemove', e => {
        tooltip.style.left = `${e.clientX + 15}px`;
        tooltip.style.top = `${e.clientY + 15}px`;
    });

    treeContent.addEventListener('mouseout', e => {
        const nodeEl = e.target.closest('.focus-node');
        if (nodeEl) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    treeContent.addEventListener('click', e => {
        const nodeEl = e.target.closest('.focus-node');
        if (nodeEl && nodeEl.classList.contains('available')) {
            if (confirm(`Start focus "${findFocusNode(activeToadKey, nodeEl.id).title}"?`)) {
                startFocus(activeToadKey, nodeEl.id);
            }
        }
    });

    resetFocusBtn.addEventListener('click', resetFocusTree);
    
    if (inventoryContainer) {
        inventoryContainer.addEventListener('click', (e) => {
            if (e.target.closest('[data-item-id="peach_diary"]')) {
                showDiaryModal();
            }
        });
    }

    if (diaryModal) {
        diaryModal.addEventListener('click', (e) => {
            if (e.target === diaryModal) {
                hideDiaryModal();
            }
        });
    }

    if (diaryModalClose) {
        diaryModalClose.addEventListener('click', hideDiaryModal);
    }
}


init();