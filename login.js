import { LORE_DATA } from './lore.js';

const loginScreen = document.getElementById('character-login-screen');
const appFrame = document.querySelector('.tablet-frame');
const grid = document.getElementById('character-select-grid');
const genericBtn = document.getElementById('generic-login-btn');
const skipBtn = document.getElementById('skip-intro-btn');

const MAIN_CHARACTERS = ['archie', 'markop', 'humpik', 'bowser'];

function transitionToApp() {
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        appFrame.style.display = 'block';
        
        // Dynamically load and execute the main application script
        const mainScript = document.createElement('script');
        mainScript.type = 'module';
        mainScript.src = 'main.js';
        document.body.appendChild(mainScript);
        
    }, 500); // Match CSS transition
}

function selectProfile(profileKey) {
    localStorage.setItem('vigilanceTerminalUser', profileKey);
    transitionToApp();
}

function setupLoginScreen() {
    if (!loginScreen || !appFrame || !grid) return;

    // Create character cards
    MAIN_CHARACTERS.forEach(charKey => {
        const character = LORE_DATA.characters[charKey];
        const card = document.createElement('div');
        card.className = 'char-card';
        card.dataset.charKey = charKey;
        // Simple image name convention
        const imageName = `${charKey}.png`; 
        card.innerHTML = `
            <img src="${imageName}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        grid.appendChild(card);
    });

    // Add event listeners
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.char-card');
        if (card) {
            selectProfile(card.dataset.charKey);
        }
    });
    
    genericBtn.addEventListener('click', () => selectProfile('generic'));
    skipBtn.addEventListener('click', () => selectProfile('generic'));
}


function main() {
    const savedUser = localStorage.getItem('vigilanceTerminalUser');
    if (savedUser) {
        // User is already logged in, skip the login screen entirely
        loginScreen.style.display = 'none';
        appFrame.style.display = 'block';

        const mainScript = document.createElement('script');
        mainScript.type = 'module';
        mainScript.src = 'main.js';
        document.body.appendChild(mainScript);
    } else {
        // No saved user, set up the login screen for selection
        setupLoginScreen();
    }
}

main();