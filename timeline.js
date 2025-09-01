
import { HISTORICAL_TIMELINE } from './calendar-data.js';
import { TIMELINE as RECENT_TIMELINE } from './party-and-events.js'; // Import recent events
import { playSound } from './common.js';

const timelineContainer = document.getElementById('timeline-container');
const filterBar = document.getElementById('timeline-filter-bar');

let activeFilters = new Set();
let observer;

// Normalize recent events to match the historical timeline structure
const normalizedRecentEvents = RECENT_TIMELINE.map(event => ({
    date: event.phase,
    title: event.title,
    description: event.description.replace(/<p>|<\/p>/g, ''), // Remove p tags
    icon: 'icon_focus.png', // Assign a default icon
    category: 'Recent Event'
}));

// Combine historical and recent events
const combinedTimeline = [...HISTORICAL_TIMELINE, ...normalizedRecentEvents];

function getSortKey(event) {
    if (event.type === 'era_header') {
        if (event.title.includes('Distant Past')) return -100000;
        if (event.title.includes('Prophesied Era')) return 0.5; // This will come after all BF events
        return 0;
    }
    
    const dateStr = event.date || event.phase;
    const isBF = dateStr.includes('BF');
    const isAF = dateStr.includes('AF');
    
    // Extract only the first sequence of digits for the year
    const yearMatch = dateStr.match(/\d+/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 0;

    if (isBF) return -year;
    if (isAF) return year;
    return -year; // Default assumption for dates without epoch
}

const sortedTimeline = combinedTimeline.sort((a, b) => getSortKey(a) - getSortKey(b));

function renderFilters() {
    if (!filterBar) return;

    const categories = [...new Set(sortedTimeline.filter(e => e.category).map(e => e.category))];
    
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

    timelineContainer.innerHTML = '';

    const filteredEvents = activeFilters.size === 0 
        ? sortedTimeline 
        : sortedTimeline.filter(event => event.type === 'era_header' || activeFilters.has(event.category)); // Always show headers
    
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
