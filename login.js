import { LORE_DATA } from './lore.js';

// --- Element Cache ---
const startupScreen = document.getElementById('startup-screen');
const enterAppBtn = document.getElementById('enter-app-btn');
const soundtrackBtn = document.getElementById('soundtrack-btn');
const soundtrackModal = document.getElementById('soundtrack-modal');
const playGameBtn = document.getElementById('play-game-btn');
const playGameTimer = document.getElementById('play-game-timer');
const closeModalBtn = soundtrackModal ? soundtrackModal.querySelector('.modal-close') : null;

const loginScreen = document.getElementById('character-login-screen');
const grid = document.getElementById('character-select-grid');
const genericBtn = document.getElementById('generic-login-btn');
const skipBtn = document.getElementById('skip-intro-btn');

const MAIN_CHARACTERS = ['archie', 'markop', 'humpik', 'bowser'];

// --- Functions ---

function selectProfile(profileKey) {
    localStorage.setItem('vigilanceTerminalUser', profileKey);
    // Fade out login screen before redirecting for a smoother experience
    if (loginScreen) {
        loginScreen.style.opacity = '0';
    }
    setTimeout(() => {
        window.location.href = 'directory.html';
    }, 500); // Match CSS transition, gives time for fade
}

function setupLoginScreen() {
    if (!grid) return;

    // Create character cards
    grid.innerHTML = ''; // Clear any existing cards
    MAIN_CHARACTERS.forEach(charKey => {
        const character = LORE_DATA.characters[charKey];
        const card = document.createElement('div');
        card.className = 'char-card';
        card.dataset.charKey = charKey;
        const imageName = `${charKey}.png`; 
        card.innerHTML = `
            <img src="${imageName}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        grid.appendChild(card);
    });

    // Add event listeners for login screen elements
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.char-card');
        if (card) {
            selectProfile(card.dataset.charKey);
        }
    });
    
    if (genericBtn) genericBtn.addEventListener('click', () => selectProfile('generic'));
    if (skipBtn) skipBtn.addEventListener('click', () => selectProfile('generic'));
}

function setupPlayGameButton() {
    if (!playGameBtn || !playGameTimer) return;

    const gameUrl = "http://introduction-proceed.gl.at.ply.gg:62000/join";

    function updateTimerAndButton() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

        // Enable button only on Sunday
        playGameBtn.disabled = (dayOfWeek !== 0);

        // Calculate time to next Sunday
        let nextSunday = new Date(now);
        nextSunday.setHours(0, 0, 0, 0); // Set to midnight

        let daysToAdd = (0 - dayOfWeek + 7) % 7;
        if (daysToAdd === 0) { // If it's Sunday, we want next week's Sunday for the countdown
            daysToAdd = 7;
        }

        nextSunday.setDate(now.getDate() + daysToAdd);

        const diff = nextSunday - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const timerString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        playGameTimer.textContent = dayOfWeek === 0
            ? `Game is available! Next session in: ${timerString}`
            : `Next session in: ${timerString}`;
    }

    playGameBtn.addEventListener('click', () => window.open(gameUrl, '_blank'));

    updateTimerAndButton(); // Initial call
    setInterval(updateTimerAndButton, 1000); // Update every second
}

function showLoginOrApp() {
    // This function is triggered when the user clicks "Main Website" on the startup screen.
    if (startupScreen) {
       startupScreen.style.opacity = '0';
       setTimeout(() => {
           startupScreen.style.display = 'none';
           
           const savedUser = localStorage.getItem('vigilanceTerminalUser');
            if (savedUser) {
                // If already logged in, go straight to the directory.
                window.location.href = 'directory.html';
            } else {
                // Otherwise, show the character login screen.
                if (loginScreen) {
                    loginScreen.style.display = 'flex'; 
                    setTimeout(() => loginScreen.style.opacity = '1', 10); // Fade in after a tick
                    setupLoginScreen();
                }
            }
       }, 500); // Match CSS transition
    }
}


function main() {
    // Hide login screen initially
    if (loginScreen) {
        loginScreen.style.display = 'none';
        loginScreen.style.opacity = '0'; // For fade-in transition
    }

    // Setup startup screen event listeners
    if (startupScreen && enterAppBtn) {
        enterAppBtn.addEventListener('click', showLoginOrApp);
        
        soundtrackBtn.addEventListener('click', () => {
            if (soundtrackModal) soundtrackModal.style.display = 'flex';
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                if (soundtrackModal) soundtrackModal.style.display = 'none';
                // Stop video playback by reloading iframe
                const iframe = soundtrackModal.querySelector('iframe');
                if (iframe) iframe.src = iframe.src;
            });
        }
        
        if (soundtrackModal) {
            soundtrackModal.addEventListener('click', (e) => {
                if (e.target === soundtrackModal) {
                    soundtrackModal.style.display = 'none';
                    const iframe = soundtrackModal.querySelector('iframe');
                    if (iframe) iframe.src = iframe.src;
                }
            });
        }

        setupPlayGameButton();
    } else {
        // Fallback if there is no startup screen for some reason.
        const savedUser = localStorage.getItem('vigilanceTerminalUser');
        if (savedUser) {
            window.location.href = 'directory.html';
        } else {
            if (loginScreen) {
                loginScreen.style.display = 'flex';
                loginScreen.style.opacity = '1';
                setupLoginScreen();
            }
        }
    }
}

main();