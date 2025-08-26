import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS } from './calendar-data.js';

const CURRENT_GAME_DATE = {
    year: 1040,
    monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
    day: 10
};

let displayedDate = {
    year: CURRENT_GAME_DATE.year,
    monthIndex: CURRENT_GAME_DATE.monthIndex
};

let selectedDate = { ...CURRENT_GAME_DATE };

/**
 * Generates a pseudo-random number from a seed.
 * @param {number} seed - The seed value.
 * @returns {number} A random number between 0 and 1.
 */
function getSeededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

/**
 * Generates a thematic weather forecast for a given day.
 * @param {number} year - The current year.
 * @param {number} monthIndex - The 0-indexed month.
 * @param {number} day - The day of the month.
 * @returns {object} An object containing weather details.
 */
function generateWeatherForDay(year, monthIndex, day) {
    const monthData = CALENDAR_DATA.months.values[monthIndex];
    const season = CALENDAR_DATA.seasons.values.find(s => {
        const startMonth = s.monthStart - 1;
        const endMonth = s.monthEnd - 1;
        if (startMonth <= endMonth) {
            return monthIndex >= startMonth && monthIndex <= endMonth;
        } else { // Handle winter wrapping around the year
            return monthIndex >= startMonth || monthIndex <= endMonth;
        }
    });

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    const tempRand = getSeededRandom(seed + 1);
    
    // Magical weather check (e.g., 8% chance)
    if (getSeededRandom(seed + 2) < 0.08 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalIndex = Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length);
        const magicalEvent = MAGICAL_WEATHER_EVENTS[magicalIndex];
        return {
            temp: `??°C`,
            icon: magicalEvent.icon,
            desc: magicalEvent.name,
            isMagical: true
        };
    }


    let baseTemp, tempVariation, weatherOptions;

    switch (season.name) {
        case 'Golden Summer':
            baseTemp = 24;
            tempVariation = 10;
            weatherOptions = [
                { icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 },
                { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 },
                { icon: '☁️', desc: 'Overcast', chance: 0.1 },
                { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 },
                { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }
            ];
            break;
        case 'Hoarfrost Winter':
            baseTemp = -5;
            tempVariation = 8;
             weatherOptions = [
                { icon: '❄️', desc: 'Light Snowfall', chance: 0.4 },
                { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 },
                { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 },
                { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }
            ];
            break;
        default: // Spring & Fall
            baseTemp = 12;
            tempVariation = 12;
             weatherOptions = [
                { icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4 },
                { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25 },
                { icon: '🌦️', desc: 'Light Showers', chance: 0.2 },
                { icon: '💨', desc: 'Windy', chance: 0.15 }
            ];
            break;
    }

    const temperature = Math.floor(baseTemp + (tempRand * tempVariation) - (tempVariation / 2));
    
    let cumulativeChance = 0;
    const chosenWeather = weatherOptions.find(w => {
        cumulativeChance += w.chance;
        return rand <= cumulativeChance;
    }) || weatherOptions[0];

    return {
        temp: `${temperature}°C`,
        ...chosenWeather
    };
}


function renderCalendar(year, monthIndex) {
    const grid = document.getElementById('calendar-grid');
    const headerDisplay = document.getElementById('calendar-header-display');
    if (!grid || !headerDisplay) return;

    const monthData = CALENDAR_DATA.months.values[monthIndex];
    headerDisplay.textContent = `${monthData.name}, ${year} BF`;

    grid.innerHTML = '';
    
    // Add day headers
    CALENDAR_DATA.days.values.forEach(day => {
        grid.innerHTML += `<div class="calendar-header">${day.abbreviation}</div>`;
    });
    
    // Robust calculation for the first day of the week
    const firstOfMonth = new Date(year, monthIndex, 1);
    let firstDayOfWeek = firstOfMonth.getDay() - CALENDAR_DATA.days.values[0].ordinal;
    if (firstDayOfWeek < 0) {
        firstDayOfWeek += 7;
    }

    const daysInMonth = monthData.days;

    // Add blank days for padding
    for (let i = 0; i < firstDayOfWeek; i++) {
        grid.innerHTML += `<div class="calendar-day other-month"></div>`;
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthData.ordinal && h.day === day);
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.dataset.day = day;

        const isCurrentGameDay = day === CURRENT_GAME_DATE.day && monthIndex === CURRENT_GAME_DATE.monthIndex && year === CURRENT_GAME_DATE.year;
        const isSelectedDay = day === selectedDate.day && monthIndex === selectedDate.monthIndex && year === selectedDate.year;

        if (isCurrentGameDay) dayElement.classList.add('current-day');
        if (isSelectedDay) dayElement.classList.add('selected');

        let dayHTML = `<div class="day-number">${day}</div>`;
        if (holiday) {
            dayHTML += `<div class="day-holiday" title="${holiday.description}">${holiday.name}</div>`;
        }
        dayElement.innerHTML = dayHTML;
        grid.appendChild(dayElement);
    }
}

function renderDayDetails() {
    let detailPanel = document.getElementById('day-detail-panel');
    const sidebar = document.getElementById('calendar-sidebar');
    if (!sidebar) return;

    if (!detailPanel) {
        detailPanel = document.createElement('div');
        detailPanel.id = 'day-detail-panel';
        sidebar.prepend(detailPanel);
    }

    const monthData = CALENDAR_DATA.months.values[selectedDate.monthIndex];
    const daySuffix = (d => (d % 10 === 1 && d !== 11) ? "st" : (d % 10 === 2 && d !== 12) ? "nd" : (d % 10 === 3 && d !== 13) ? "rd" : "th")(selectedDate.day);

    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthData.ordinal && h.day === selectedDate.day);
    const weather = generateWeatherForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);

    let eventsHTML = holiday ? `<li><strong>Holiday:</strong> ${holiday.name}</li>` : '<li>No scheduled events.</li>';

    const weatherClass = weather.isMagical ? 'magical-weather' : '';

    detailPanel.innerHTML = `
        <h3>${selectedDate.day}${daySuffix} of ${monthData.name}</h3>
        <div class="weather-forecast ${weatherClass}">
            <div class="weather-icon">${weather.icon}</div>
            <div class="weather-details">
                <p class="weather-temp">${weather.temp}</p>
                <p>${weather.desc}</p>
            </div>
        </div>
        <ul class="day-events-list">
            ${eventsHTML}
        </ul>
    `;
    detailPanel.style.display = 'block';
}


function renderMoons(year, monthIndex, day) {
    const container = document.getElementById('moons-display');
    if (!container) return;
    
    // More accurate calculation based on total days passed in the year
    let daysPassed = 0;
    for (let i = 0; i < monthIndex; i++) {
        daysPassed += CALENDAR_DATA.months.values[i].days;
    }
    daysPassed += day;

    container.innerHTML = CALENDAR_DATA.moons.values.map(moon => {
        const daysIntoCycle = (daysPassed + moon.offset) % moon.cycleLength;
        const phaseIndex = Math.floor((daysIntoCycle / moon.cycleLength) * moon.phaseNames.length);
        const phaseName = moon.phaseNames[phaseIndex];

        return `<div class="moon-info">
                    <h4 style="color: ${moon.color};">${moon.name}</h4>
                    <p class="moon-phase">${phaseName}</p>
                </div>`;
    }).join('');
}

function renderSidebar(year, monthIndex) {
    const holidaysContainer = document.getElementById('holidays-list');
    
    if (holidaysContainer) {
        const header = holidaysContainer.parentElement.querySelector('h3');
        const monthName = CALENDAR_DATA.months.values[monthIndex].name;
        if (header) {
             header.textContent = `Holidays in ${monthName}`;
        }
       
        const monthHolidays = CALENDAR_DATA.holidays.values
            .filter(h => h.month === monthIndex + 1)
            .sort((a,b) => a.day - b.day);
            
        holidaysContainer.innerHTML = monthHolidays.map(h => `
             <li class="holiday-item">
                <div class="holiday-header">
                    <strong>Day ${h.day}: ${h.name}</strong>
                </div>
                <p class="holiday-description">${h.description}</p>
                <p class="holiday-traditions"><em>Traditions:</em> ${h.traditions}</p>
            </li>
        `).join('') || '<li>No holidays this month.</li>';
    }
}


function setupEventListeners() {
    const grid = document.getElementById('calendar-grid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            const dayCell = e.target.closest('.calendar-day:not(.other-month)');
            if (dayCell && dayCell.dataset.day) {
                selectedDate = { ...displayedDate, day: parseInt(dayCell.dataset.day, 10) };
                renderCalendar(displayedDate.year, displayedDate.monthIndex);
                renderDayDetails();
            }
        });
    }

    const navButtons = {
        'prev-year': () => displayedDate.year--,
        'prev-month': () => {
            displayedDate.monthIndex--;
            if (displayedDate.monthIndex < 0) {
                displayedDate.monthIndex = 11;
                displayedDate.year--;
            }
        },
        'next-month': () => {
            displayedDate.monthIndex++;
            if (displayedDate.monthIndex > 11) {
                displayedDate.monthIndex = 0;
                displayedDate.year++;
            }
        },
        'next-year': () => displayedDate.year++,
    };

    for (const [id, action] of Object.entries(navButtons)) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                action();
                renderCalendar(displayedDate.year, displayedDate.monthIndex);
                renderSidebar(displayedDate.year, displayedDate.monthIndex);
            });
        }
    }
}

function init() {
    renderCalendar(displayedDate.year, displayedDate.monthIndex);
    renderMoons(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    renderSidebar(displayedDate.year, displayedDate.monthIndex);
    renderDayDetails();
    setupEventListeners();
}

init();