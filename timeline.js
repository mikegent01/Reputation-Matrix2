import { HISTORICAL_TIMELINE as combinedTimeline } from './timeline-data.js';
import { playSound } from './common.js';

const timelineContainer = document.getElementById('timeline-container');
const filterBar = document.getElementById('timeline-filter-bar');

let activeFilters = new Set();
let observer;

/**
 * Generates a numeric key for sorting timeline events.
 * Handles headers, BF/AF epochs, and day-of-the-year sorting.
 * @param {object} event - The timeline event object.
 * @returns {number|string} A value for sorting. Higher numbers are older.
 */
function getSortKey(event) {
    // Headers sort first/last
    if (event.type === 'era_header') {
        if (event.title.includes('Distant Past')) return Infinity;
        if (event.title.includes('Prophesied Era')) return -0.5;
        return 0;
    }

    const dateStr = event.date || event.phase;
    const isAF = dateStr.includes('AF');

    // Match the primary year number (e.g., the '1' in '1 BF (Year 1040)')
    const yearMatch = dateStr.match(/^c\.\s*(\d+)|(\d+)/);
    const year = yearMatch ? parseInt(yearMatch[1] || yearMatch[2], 10) : 0;
    
    // Match the day number if present
    const dayMatch = dateStr.match(/Day (\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 0;

    if (isAF) {
        // AF dates sort ascending (1 AF, 2 AF...).
        // We make them negative so they appear after BF dates in a reverse sort.
        return -(year + day / 100);
    } else {
        // BF dates sort descending (8000 BF, ..., 1 BF...).
        // Larger number is older. We subtract the day fraction to sort within a year.
        return year - day / 100;
    }
}


function renderFilters() {
    if (!filterBar) return;

    const categories = [...new Set(combinedTimeline.filter(e => e.category).map(e => e.category))];
    
    let filterHTML = '<button class="filter-btn active" data-category="all">All</button>';
    filterHTML += categories.sort().map(cat => 
        `<button class="filter-btn" data-category="${cat}">${cat}</button>`
    ).join('');

    filterBar.innerHTML = filterHTML;
}

function renderTimeline() {
    if (!timelineContainer) return;

    if (observer) {
        observer.disconnect();
    }

    // Sort descending, so largest year (oldest BF date) comes first
    const sortedTimeline = combinedTimeline.sort((a, b) => getSortKey(b) - getSortKey(a));

    timelineContainer.innerHTML = '';

    const filteredEvents = activeFilters.size === 0 
        ? sortedTimeline 
        : sortedTimeline.filter(event => event.type === 'era_header' || activeFilters.has(event.category));
    
    filteredEvents.forEach(event => {
        const eventElement = document.createElement('div');
        
        if (event.type === 'era_header') {
            eventElement.className = 'timeline-era-header';
            eventElement.innerHTML = `<h2>${event.title}</h2>`;
        } else {
            const categoryClass = event.category ? `category-${event.category.toLowerCase().replace(/\s/g, '-')}` : '';
            eventElement.className = `timeline-card ${categoryClass}`;
            eventElement.innerHTML = `
                <div class="timeline-card-icon">
                    <img src="${event.icon}" alt="${event.category} Icon">
                </div>
                <div class="timeline-card-header">
                    <h4>${event.title}</h4>
                    <span class="timeline-date">${event.date}</span>
                </div>
                <p class="timeline-card-description">${event.description}</p>
            `;
        }
        timelineContainer.appendChild(eventElement);
    });
    
    initAnimations();
}

function handleFilterClick(e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    playSound('click.mp3');
    const category = btn.dataset.category;

    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

    if (category === 'all') {
        activeFilters.clear();
        filterBar.querySelector('[data-category="all"]').classList.add('active');
    } else {
        filterBar.querySelector('[data-category="all"]').classList.remove('active');
        if (activeFilters.has(category)) {
            activeFilters.delete(category);
        } else {
            activeFilters.add(category);
        }
        
        if (activeFilters.size === 0) {
            filterBar.querySelector('[data-category="all"]').classList.add('active');
        } else {
            activeFilters.forEach(cat => {
                const activeBtn = filterBar.querySelector(`[data-category="${cat}"]`);
                if(activeBtn) activeBtn.classList.add('active');
            });
        }
    }
    
    renderTimeline();
}


function initAnimations() {
    const cards = document.querySelectorAll('.timeline-card');
    if (cards.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
}

function setupEventListeners() {
    if (filterBar) {
        filterBar.addEventListener('click', handleFilterClick);
    }
}

function init() {
    if (!timelineContainer) return;
    renderFilters();
    renderTimeline();
    setupEventListeners();
}

init();