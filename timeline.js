import { HISTORICAL_TIMELINE } from './calendar-data.js';

function renderTimeline() {
    const container = document.getElementById('timeline-page-container');
    if (!container) return;

    const getSortKey = (event) => {
        if (event.type === 'era_header') {
            // Assign sort keys to headers to place them correctly in a newest-first list.
            // The key should be slightly higher (newer) than the newest event in that era.
            if (event.title.includes('Distant Past')) return 8001; // Newest event is 8000 AF.
            if (event.title.includes('Prophesied Era')) return 101; // Newest event is 100 AF.
            if (event.title.includes('Before Fabian')) return -899; // Newest event is ~900 BF (-900).
            return 0; // Fallback for other headers.
        }
        const dateStr = event.date;
        const isBF = dateStr.includes('BF');
        const isAF = dateStr.includes('AF');
        const year = parseInt(dateStr.replace(/[^0-9]/g, ''));

        if (isBF) return -year;
        if (isAF) return year;
        return -year; // Default to BF for sorting purposes if no era is specified
    };

    // Sort events and headers together into a single chronological list (oldest to newest).
    const sortedTimeline = [...HISTORICAL_TIMELINE].sort((a, b) => {
        return getSortKey(a) - getSortKey(b);
    });

    let html = '';
    let eventCounter = 0;
    // Render sorted events, newest first
    sortedTimeline.slice().reverse().forEach((event) => {
        if (event.type === 'era_header') {
            html += `<div class="timeline-era-header"><h2>${event.title}</h2></div>`;
        } else {
            const side = eventCounter % 2 === 0 ? 'left' : 'right';
            html += `
                <div class="timeline-event ${side}">
                    <div class="timeline-content">
                        <div class="timeline-header">
                             <img src="${event.icon}" alt="${event.category} Icon" class="timeline-icon">
                             <div class="timeline-title-group">
                                <h4>${event.title}</h4>
                                <span class="timeline-date">${event.date}</span>
                             </div>
                        </div>
                        <p>${event.description}</p>
                    </div>
                </div>
            `;
            eventCounter++;
        }
    });

    container.innerHTML = html;
}


function init() {
    renderTimeline();
}

init();