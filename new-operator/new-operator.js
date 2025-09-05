import { LORE_DATA } from '../lore.js';
import { playSound } from '../common.js';
import { WALUIGI_REGION_TIPS, RACES, RACE_QUESTS, FACTIONS, REGION_STARTING_ITEMS } from './new-operator-data.js';
import { MAP_DATA } from '../map-data.js';

// --- STATE ---
let currentStep = 1;
const totalSteps = 6;
const newOperator = {
    name: '',
    race: '',
    customRace: '',
    reason: '',
    region: '',
    faction: 'unaligned',
    quests: [],
    regionMap: '',
    skills: {},
    baseSkills: {},
    tokenUrl: '',
    attributes: {},
};

const SKILL_LIST = [
    { id: 'athletics', name: 'Athletics', attr: 'STR' },
    { id: 'acrobatics', name: 'Acrobatics', attr: 'DEX' },
    { id: 'stealth', name: 'Stealth', attr: 'DEX' },
    { id: 'investigation', name: 'Investigation', attr: 'INT' },
    { id: 'technology', name: 'Technology', attr: 'INT' },
    { id: 'survival', name: 'Survival', attr: 'WIS' },
    { id: 'perception', name: 'Perception', attr: 'WIS' },
    { id: 'persuasion', name: 'Persuasion', attr: 'CHA' },
    { id: 'intimidation', name: 'Intimidation', attr: 'CHA' },
];

let skillPoints = 4; // Player gets 4 free points, 6 are predetermined

// --- DOM ELEMENTS ---
const commentaryText = document.getElementById('waluigi-commentary-text');
const wizardSteps = document.querySelectorAll('.wizard-step');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');
const regionSelectionGrid = document.getElementById('region-selection-grid');
const regionPreviewPlaceholder = document.getElementById('region-preview-placeholder');
const regionPreviewImage = document.getElementById('region-preview-image');
const operatorNameInput = document.getElementById('operator-name');
const operatorRaceSelect = document.getElementById('operator-race');
const operatorRaceCustomInput = document.getElementById('operator-race-custom');
const operatorReasonTextarea = document.getElementById('operator-reason');
const questAssignmentDisplay = document.getElementById('quest-assignment-display');
const operatorFactionSelect = document.getElementById('operator-faction');
const factionTipBox = document.getElementById('faction-tip-box');
const characterSheetContainer = document.getElementById('character-sheet');
const skillAllocator = document.getElementById('skill-allocator');
const skillPointsValue = document.getElementById('points-value');


function init() {
    renderStepContent(currentStep);
    updateNavigation();
    setupEventListeners();
}

// --- RENDER FUNCTIONS ---

function renderStepContent(step) {
    wizardSteps.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.step, 10) === step);
    });

    switch (step) {
        case 1: renderRegionSelector(); break;
        case 2: renderRaceSelector(newOperator.region); break;
        case 3: renderQuestAssignment(); break;
        case 4: renderFactionStep(); break;
        case 5: renderSkillStep(); break;
        case 6: renderCharacterSheet(); break;
    }
}

function getMapForRegion(regionName) {
    const regionMap = {
        'Mushroom Kingdom': 'mushroom_kingdom_full',
        'The Midlands': 'midlands_full',
        'Middle-earth': 'middle_earth_full',
        'The Fated Place': 'warhammer_full',
        'The Internet': 'internet_full',
        'Kivotos': 'kivotos_full',
        'The Doughnut Hole': 'doughnut_hole_full',
    };

    const key = Object.keys(regionMap).find(k => regionName.includes(k.split(' (')[0]));
    const mapId = regionMap[key];
    if (mapId && MAP_DATA[mapId]) return `../${MAP_DATA[mapId].imageSrc}`;

    // Fallback for more specific regions
    for (const mapKey in MAP_DATA) {
        if (MAP_DATA[mapKey].name.includes(regionName.split(' (')[0])) return `../${MAP_DATA[mapKey].imageSrc}`;
    }
    return '../maps/map_placeholder.png';
}


function renderRegionSelector() {
    const regions = [
        { name: "Mushroom Kingdom", map: getMapForRegion("Mushroom Kingdom") },
        { name: "The Midlands", map: getMapForRegion("The Midlands") },
        { name: "The Internet", map: getMapForRegion("The Internet") },
        { name: "Middle-earth", map: getMapForRegion("Middle-earth") },
        { name: "The Fated Place", map: getMapForRegion("The Fated Place") },
        { name: "Kivotos", map: getMapForRegion("Kivotos") },
        { name: "The Doughnut Hole", map: getMapForRegion("The Doughnut Hole") },
    ];
    regionSelectionGrid.innerHTML = regions.map(region => `
        <div class="region-card" data-region="${region.name}" data-map="${region.map}">
            <img src="${region.map}" alt="${region.name} map">
            <span>${region.name}</span>
        </div>
    `).join('');
}


function renderRaceSelector(selectedRegion) {
    const filteredRaces = RACES.filter(race => race.region === 'Universal' || race.region === selectedRegion);
    operatorRaceSelect.innerHTML = filteredRaces.map(race => `<option value="${race.name}">${race.name}</option>`).join('');
    operatorRaceSelect.insertAdjacentHTML('afterbegin', '<option value="" selected disabled>Select a Race...</option>');
}

function renderQuestAssignment() {
    const raceData = RACES.find(r => r.name === newOperator.race);
    if (!raceData) return;

    newOperator.quests = raceData.availableQuests || [];
    
    questAssignmentDisplay.innerHTML = newOperator.quests.map(id => {
        const quest = RACE_QUESTS[id];
        return `
            <div class="quest-option">
                <label>
                    <h5>${quest.title}</h5>
                    <p>${quest.description}</p>
                </label>
            </div>
        `;
    }).join('') || '<p>No specific directives assigned. You are a free agent of chaos! WAH!</p>';
}

function renderFactionStep() {
    const factions = Object.entries(LORE_DATA.factions)
        .sort(([, a], [, b]) => a.name.localeCompare(b.name));
    let optionsHTML = '<option value="unaligned">Unaligned / Independent</option>';
    optionsHTML += factions.map(([key, faction]) => `<option value="${key}">${faction.name}</option>`).join('');
    operatorFactionSelect.innerHTML = optionsHTML;

    const raceData = RACES.find(r => r.name === newOperator.race);
    if (raceData && raceData.faction) {
        operatorFactionSelect.value = raceData.faction;
        operatorFactionSelect.disabled = true;
    } else {
        operatorFactionSelect.value = newOperator.faction;
        operatorFactionSelect.disabled = false;
    }
    
    operatorFactionSelect.dispatchEvent(new Event('change'));
}


function renderSkillStep() {
    const raceBonuses = RACES.find(r => r.name === newOperator.race)?.skillBonuses || {};
    const factionBonuses = FACTIONS[newOperator.faction]?.skillBonuses || {};
    
    newOperator.baseSkills = {};
    SKILL_LIST.forEach(skill => {
        const raceBonus = raceBonuses[skill.id] || 0;
        const factionBonus = factionBonuses[skill.id] || 0;
        newOperator.baseSkills[skill.id] = raceBonus + factionBonus;
        if (!newOperator.skills[skill.id] || newOperator.skills[skill.id] < newOperator.baseSkills[skill.id]) {
            newOperator.skills[skill.id] = newOperator.baseSkills[skill.id];
        }
    });
    
    let spentPoints = 0;
    SKILL_LIST.forEach(skill => {
        spentPoints += (newOperator.skills[skill.id] - newOperator.baseSkills[skill.id]);
    });
    skillPoints = 4 - spentPoints;


    skillAllocator.innerHTML = SKILL_LIST.map(skill => `
        <div class="skill-row" data-skill-id="${skill.id}">
            <span class="skill-name ${newOperator.baseSkills[skill.id] > 0 ? 'bonus' : ''}">${skill.name} (${skill.attr})</span>
            <div class="skill-controls">
                <button class="skill-btn minus" data-skill="${skill.id}">-</button>
                <span class="skill-value" id="skill-value-${skill.id}">0</span>
                <button class="skill-btn plus" data-skill="${skill.id}">+</button>
            </div>
        </div>
    `).join('');

    updateSkillDisplay();
}

function renderCharacterSheet() {
    const race = newOperator.race === 'Custom' ? newOperator.customRace : newOperator.race;
    const raceData = RACES.find(r => r.name === newOperator.race);
    const abilityText = raceData ? raceData.ability : "None.";
    const faction = LORE_DATA.factions[newOperator.faction] || { name: 'Unaligned' };
    
    // --- Attribute Calculation ---
    const calculatedStats = { ...raceData.baseStats };
    const keyAttrLower = raceData.keyAttribute.toLowerCase();
    if (calculatedStats[keyAttrLower]) {
        calculatedStats[keyAttrLower] += 2;
    }
    newOperator.attributes = calculatedStats;

    const attributesHTML = Object.entries(calculatedStats).map(([key, value]) => {
        const modifier = Math.floor((value - 10) / 2);
        const sign = modifier >= 0 ? '+' : '';
        return `
            <div class="sheet-attribute-box">
                <h5>${key.toUpperCase()}</h5>
                <span class="attr-score">${value}</span>
                <span class="attr-modifier">${sign}${modifier}</span>
            </div>
        `;
    }).join('');

    const questsHTML = newOperator.quests.map(id => {
        const quest = RACE_QUESTS[id];
        return `<li><strong>${quest.title}:</strong> ${quest.description}</li>`;
    }).join('');

    const skillsHTML = SKILL_LIST.map(skill => `
        <div class="sheet-skill-item">
            <span class="sheet-skill-name">${skill.name}</span>
            <span class="sheet-skill-value">+${newOperator.skills[skill.id] || 0}</span>
        </div>
    `).join('');

    const tokenHTML = newOperator.tokenUrl 
        ? `<img id="sheet-token-img" src="${newOperator.tokenUrl}" alt="Operator Token" class="sheet-token-img">`
        : `<div id="sheet-token-img" class="sheet-token-img placeholder">?</div>`;

    const regionItems = REGION_STARTING_ITEMS[newOperator.region] || [];
    const raceItems = raceData?.startingItems || [];
    const equipmentHTML = [...regionItems, ...raceItems].map(item => 
        `<li><strong>${item.name}:</strong> ${item.effect}</li>`
    ).join('');

    characterSheetContainer.querySelector('.sheet-header').innerHTML = `
         <div class="sheet-token-container">
            ${tokenHTML}
            <button id="upload-token-btn" class="wizard-btn upload-token-btn">Upload Token</button>
            <input type="file" id="token-upload-input" accept="image/*" style="display: none;">
        </div>
        <div class="sheet-header-vitals">
            <div class="sheet-header-item"><span>Operator Name</span><p>${newOperator.name || 'Nameless Loser'}</p></div>
            <div class="sheet-header-item"><span>Race</span><p>${race || 'Unknown'}</p></div>
            <div class="sheet-header-item"><span>Affiliation</span><p>${faction.name}</p></div>
        </div>`;
    
    characterSheetContainer.querySelector('.sheet-main-grid').innerHTML = `
        <div class="sheet-attributes">
            <h4>Attributes</h4>
            <div class="sheet-attributes-grid">${attributesHTML}</div>
        </div>
        <div class="sheet-skills">
            <h4>Skills</h4>
            <div class="sheet-skills-list">${skillsHTML}</div>
        </div>
        <div class="sheet-abilities full-width">
            <h4>Racial Trait</h4>
            <p>${abilityText}</p>
            <h4>Backstory</h4>
            <p>${newOperator.reason || 'No good reason.'}</p>
        </div>`;

    document.getElementById('sheet-equipment-list').innerHTML = equipmentHTML || '<li>Nothing but your wits!</li>';
    document.getElementById('sheet-quests-list').innerHTML = questsHTML || '<li>None - A True Slacker!</li>';


    document.getElementById('upload-token-btn').addEventListener('click', () => {
        document.getElementById('token-upload-input').click();
    });
    document.getElementById('token-upload-input').addEventListener('change', handleTokenUpload);
}


// --- LOGIC & NAVIGATION ---

function updateWaluigiCommentary(text) {
    commentaryText.innerHTML = text;
}

function changeStep(direction) {
    if (direction > 0 && !validateStep(currentStep)) return;

    const nextStep = currentStep + direction;
    if (nextStep > 0 && nextStep <= totalSteps) {
        playSound('click.mp3');
        updateOperatorState();
        currentStep = nextStep;
        updateWaluigiCommentary(`WAH! Step ${currentStep}! Keep going!`);
        if(currentStep === totalSteps) {
            updateWaluigiCommentary(`WAH-HA-HA! You're finished! Admire my brilliant work!`);
        }
        renderStepContent(currentStep);
        updateNavigation();
    }
}

function validateStep(step) {
    switch(step) {
        case 1:
            if (!newOperator.region) {
                alert("WAH! You have to pick a region, you lazy bum!");
                return false;
            }
            break;
        case 2:
            if (!operatorNameInput.value || !operatorRaceSelect.value) {
                alert("WAH! A nameless, raceless nobody? I don't think so! Fill it out!");
                return false;
            }
            if (operatorRaceSelect.value === 'Custom' && !operatorRaceCustomInput.value) {
                alert("WAH! If you pick 'Custom', you have to actually write something!");
                return false;
            }
            break;
        case 5:
             if (skillPoints > 0) {
                alert(`WAH! You still have ${skillPoints} skill points to spend! Don't be a slacker!`);
                return false;
            }
            break;
    }
    return true;
}

function updateNavigation() {
    prevBtn.disabled = currentStep === 1;
    if (currentStep === totalSteps) {
        nextBtn.textContent = 'Finish';
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.disabled = false;
    }
    stepIndicator.textContent = `Step ${currentStep} of ${totalSteps}`;
}

function updateOperatorState() {
    newOperator.name = operatorNameInput.value;
    newOperator.race = operatorRaceSelect.value;
    newOperator.customRace = operatorRaceCustomInput.value;
    newOperator.reason = operatorReasonTextarea.value;
    newOperator.faction = operatorFactionSelect.value;
}

function updateSkill(skillId, change) {
    const currentScore = newOperator.skills[skillId] || 0;
    const baseScore = newOperator.baseSkills[skillId] || 0;

    if (change > 0 && skillPoints > 0 && (currentScore - baseScore) < 5) {
        skillPoints--;
        newOperator.skills[skillId]++;
        playSound('confirm.mp3', 0.4);
    } else if (change < 0 && currentScore > baseScore) {
        skillPoints++;
        newOperator.skills[skillId]--;
        playSound('click.mp3', 0.4);
    }
    updateSkillDisplay();
}

function updateSkillDisplay() {
    skillPointsValue.textContent = skillPoints;
    SKILL_LIST.forEach(skill => {
        document.getElementById(`skill-value-${skill.id}`).textContent = newOperator.skills[skill.id];
    });
}

function handleTokenUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            newOperator.tokenUrl = e.target.result;
            const imgElement = document.getElementById('sheet-token-img');
            if(imgElement.tagName === 'DIV') { // Is placeholder
                const newImg = document.createElement('img');
                newImg.id = 'sheet-token-img';
                newImg.className = 'sheet-token-img';
                newImg.src = newOperator.tokenUrl;
                newImg.alt = "Operator Token";
                imgElement.replaceWith(newImg);
            } else {
                imgElement.src = newOperator.tokenUrl;
            }
        };
        reader.readAsDataURL(file);
    }
}

// --- EVENT LISTENERS ---

function setupEventListeners() {
    prevBtn.addEventListener('click', () => changeStep(-1));
    nextBtn.addEventListener('click', () => changeStep(1));

    regionSelectionGrid.addEventListener('click', e => {
        const card = e.target.closest('.region-card');
        if (card) {
            playSound('confirm.mp3', 0.5);
            document.querySelectorAll('.region-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            newOperator.region = card.dataset.region;
            newOperator.regionMap = card.dataset.map;
            regionPreviewPlaceholder.style.display = 'none';
            regionPreviewImage.src = newOperator.regionMap;
            regionPreviewImage.style.display = 'block';
            updateWaluigiCommentary(WALUIGI_REGION_TIPS[newOperator.region] || "WAH! I have no strong opinions on this place. It must be boring!");
            
            renderRaceSelector(newOperator.region);
        }
    });

    operatorRaceSelect.addEventListener('change', () => {
        newOperator.race = operatorRaceSelect.value;
        operatorRaceCustomInput.style.display = newOperator.race === 'Custom' ? 'block' : 'none';
        const raceData = RACES.find(r => r.name === newOperator.race);
        if (raceData) {
            updateWaluigiCommentary(raceData.waluigiCommentary || `<strong>Ability: ${raceData.ability}</strong><br><br><em>Standing: ${raceData.standing}</em>`);
            newOperator.faction = raceData.faction || 'unaligned';
        }
    });

    operatorFactionSelect.addEventListener('change', () => {
        newOperator.faction = operatorFactionSelect.value;
        const faction = LORE_DATA.factions[newOperator.faction];
        if (faction && faction.waluigi_tip) {
            factionTipBox.innerHTML = `<img src="../logo.png" alt="Waluigi Logo"><div><h6>Waluigi's Cunning Plan for the ${faction.name}</h6><p>${faction.waluigi_tip}</p></div>`;
            factionTipBox.style.display = 'flex';
        } else {
            factionTipBox.style.display = 'none';
        }
    });
    
    skillAllocator.addEventListener('click', e => {
        const button = e.target.closest('.skill-btn');
        if (!button) return;
        const skillId = button.dataset.skill;
        const change = button.classList.contains('plus') ? 1 : -1;
        updateSkill(skillId, change);
    });
}

init();