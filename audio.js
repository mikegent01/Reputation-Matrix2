// Manages all audio playback for the application.

let audioContext;
const audioBuffers = {};

export function initAudio() {
    if (audioContext) return;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        // Load all sounds at once
        loadSound('click.mp3');
        loadSound('wah.mp3');
        loadSound('confirm.mp3');
    } catch (e) {
        console.warn('Web Audio API is not supported in this browser');
    }
}

async function loadSound(url) {
    if (!audioContext || audioBuffers[url]) return;
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = await audioContext.decodeAudioData(arrayBuffer);
        audioBuffers[url] = buffer;
    } catch (e) {
        console.error(`Failed to load sound: ${url}`, e);
    }
}

export function playSound(url, volume = 0.7) {
    if (!audioContext || !audioBuffers[url]) {
        return;
    }
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffers[url];
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    source.connect(gainNode).connect(audioContext.destination);
    source.start(0);
}