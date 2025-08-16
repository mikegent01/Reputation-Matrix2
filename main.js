import { loadState } from './state.js';
import { router, renderPartyList, renderEventList, setupEventListeners } from './ui.js';

function initLoginSequence() {
    const loginScreen = document.getElementById('login-screen');
    const appFrame = document.querySelector('.tablet-frame');

    if (!loginScreen || !appFrame) {
        if (appFrame) appFrame.style.display = 'block';
        return;
    }

    setTimeout(() => {
        loginScreen.style.transition = 'opacity 0.5s ease-out';
        loginScreen.style.opacity = '0';
        
        setTimeout(() => {
             loginScreen.style.display = 'none';
             appFrame.style.display = 'block';
        }, 500);
    }, 3500); // Wait for progress bar animation
}


/**
 * Renders the main UI components that are present on every view.
 */
function renderCoreUI() {
    renderPartyList();
    renderEventList();
}

/**
 * Main application entry point.
 */
function main() {
    const viewContainer = document.getElementById('view-container');
    if (!viewContainer) {
        // This script is likely running on a page without the main app structure,
        // like relations.html. Exit gracefully to prevent errors.
        return;
    }

    initLoginSequence();
    loadState();
    renderCoreUI();
    setupEventListeners();
    router(); // Initial route call
}

main();