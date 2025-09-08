import { LORE_DATA } from './lore.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { WAHBOOK_EVENTS } from './assembly-events-data.js';
import { playSound } from './common.js';
import { state, saveState, loadState } from './state.js';

const tabsContainer = document.getElementById('wahbook-tabs-container');
const contentContainer = document.getElementById('wahbook-content');

const feedContainer = document.getElementById('feed-content');
const eventsContainer = document.getElementById('events-content');
const followedContainer = document.getElementById('followed-content');
const trendingContainer = document.getElementById('trending-content');
const mediaContainer = document.getElementById('media-content');

const eventControls = document.getElementById('event-controls');

let currentEventSort = 'newest';

function getPortrait(characterKey) {
    const knownPortraits = {
        'dan': 'toads/dan.png', 'toad_lee': 'toads/toad_lee.png', 'roger': 'toads/roger.png',
        'captain_toad': 'toads/captain_toad.png', 'chancellor_toadsworth': 'toads/chancellor_toadsworth.png',
        'evil_toad_god': 'toads/evil_toad_god.png', 'generic_toad': 'toads/toad.png',
        'giggling_pete': 'faction_jester.png', 'wah_media_collective': 'icon_newspaper.png',
        'freelancer_spy_1': 'faction_freelancer.png', 'regal_empire_delegate': 'faction_regal_empire.png',
        'chai': 'toads/chai.png', 'green_t': 'toads/green_t.png',
    };

    if (knownPortraits[characterKey]) {
        return knownPortraits[characterKey];
    }
    
    // Check main characters
    if (LORE_DATA.characters[characterKey]) {
        return `portraits/${characterKey}.png`;
    }

    // Fallback to faction logo
    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        if (fac.leader === characterKey || fac.notable_people?.some(p => p.name.toLowerCase().replace(/\s/g, '_') === characterKey)) {
            return fac.logo;
        }
    }

    return 'portraits/unknown.png';
}


function getCharacterData(characterKey) {
    // Special cases for entities without formal character entries
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: getPortrait('wah_media_collective'), faction: { name: "The Daily Paradox", logo: 'icon_newspaper.png' } },
        'freelancer_spy_1': { name: "Anonymous Broker", portrait: getPortrait('freelancer_spy_1'), faction: { name: "Freelancer Underworld" } },
        'regal_empire_delegate': { name: "Imperial Delegate", portrait: getPortrait('regal_empire_delegate'), faction: { name: "The Regal Empire" } },
        'generic_toad': { name: "Worried Toad", portrait: getPortrait('generic_toad'), faction: { name: "Mushroom Kingdom Civilian" } }
    };

    if (specialCases[characterKey]) {
        return specialCases[characterKey];
    }

    if (LORE_DATA.characters[characterKey]) {
        const char = LORE_DATA.characters[characterKey];
        let faction = null;
        for (const fKey in LORE_DATA.factions) {
            const fac = LORE_DATA.factions[fKey];
            if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === char.name)) {
                faction = fac;
                break;
            }
        }
        return {
            name: char.name,
            portrait: getPortrait(characterKey),
            faction: faction ? { name: faction.name, logo: faction.logo } : null
        };
    }

    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        const notablePerson = fac.notable_people?.find(p => p.name.toLowerCase().replace(/\s/g, '_') === characterKey);
        if (notablePerson) {
            return {
                name: notablePerson.name,
                portrait: getPortrait(characterKey),
                faction: { name: fac.name, logo: fac.logo }
            };
        }
    }

    return { name: 'Unknown User', portrait: getPortrait('unknown'), faction: null };
}

function renderFeedPost(post, options = {}) {
    const author = getCharacterData(post.characterKey);
    const factionHTML = author.faction ? `<span class="post-meta">${author.faction.name} · ${post.timestamp}</span>` : `<span class="post-meta">${post.timestamp}</span>`;
    
    const commentsHTML = (post.comments || []).map(comment => {
        const commenter = getCharacterData(comment.characterKey);
        return `
            <div class="comment">
                <a href="profile.html?user=${comment.characterKey}" class="profile-link">
                    <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp">
                </a>
                <div class="comment-body">
                    <a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a>
                    <span class="comment-text">${comment.text}</span>
                </div>
            </div>
        `;
    }).join('');

    const imageHTML = post.image ? `<img src="${post.image}" alt="${post.image_alt}" class="post-image">` : '';
    const trendingBadgeHTML = options.showTrendingScore ? `<div class="trending-badge" title="Trending Score: ${options.trendingScore}">🔥</div>` : '';

    return `
        <div class="feed-post" id="post-${post.id}">
            ${trendingBadgeHTML}
            <div class="post-header">
                 <a href="profile.html?user=${post.characterKey}" class="profile-link">
                    <img src="${author.portrait}" alt="${author.name}" class="post-pfp">
                </a>
                <div class="post-author-info">
                     <a href="profile.html?user=${post.characterKey}" class="profile-link">
                        <span class="post-author-name">${author.name}</span>
                    </a>
                    ${factionHTML}
                </div>
            </div>
            <p class="post-content">${post.content}</p>
            ${imageHTML}
            <div class="post-interactions">
                <div class="interaction-btn" data-likes="${post.likes}"><span class="interaction-btn-icon">👍</span> Like (${post.likes})</div>
                <div class="interaction-btn"><span class="interaction-btn-icon">💬</span> Comment (${(post.comments || []).length})</div>
                <div class="interaction-btn share-btn"><span class="interaction-btn-icon">↪️</span> Share</div>
            </div>
            ${commentsHTML ? `<div class="post-comments">${commentsHTML}</div>` : ''}
        </div>
    `;
}

function renderCreatePostBox() {
    const loggedInUserKey = state.loggedInUser === 'generic' ? 'waluigi' : state.loggedInUser;
    const user = getCharacterData(loggedInUserKey);
    return `
        <div class="create-post-container">
            <div class="create-post-header">
                <img src="${user.portrait}" alt="Your profile picture" class="create-post-pfp">
                <button class="create-post-input">What's on your mind, ${user.name.split(' ')[0]}?</button>
            </div>
        </div>
    `;
}

function renderMainFeed() {
    const container = document.getElementById('feed-content');
    if (!container) return;
    const sortedPosts = [...WAHBOOK_POSTS].sort((a, b) => (b.order || 0) - (a.order || 0));
    container.innerHTML = `<div class="wahbook-feed-container">${renderCreatePostBox() + sortedPosts.map(p => renderFeedPost(p)).join('')}</div>`;
}

function renderEvent(event) {
    const attendeesHTML = event.attendees.map(attendee => {
        const character = getCharacterData(attendee.characterKey);
        const hostClass = attendee.host ? 'event-host' : '';
        return `
            <div class="attendee-card ${hostClass}">
                <img src="${character.portrait}" alt="${character.name}" class="attendee-pfp">
                <div class="attendee-info">
                    <span class="attendee-name">${character.name}</span>
                    <p class="attendee-justification">${attendee.justification}</p>
                </div>
            </div>
        `;
    }).join('');

    const newsPosts = event.news_ids.map(id => WAHBOOK_POSTS.find(p => p.id === id)).filter(Boolean);
    const regularPosts = event.post_ids.map(id => WAHBOOK_POSTS.find(p => p.id === id)).filter(Boolean);

    const newsHTML = newsPosts.map(p => renderFeedPost(p)).join('');
    const postsHTML = regularPosts.map(p => renderFeedPost(p)).join('');
    
    return `
        <div class="event-container" data-event-id="${event.id}">
            <div class="event-main-header">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <span class="event-toggle-icon">▼</span>
            </div>
            <div class="event-collapsible-body">
                <div class="event-details-grid">
                    <div class="attendees-list-container">
                        <h4>Key Attendees</h4>
                        <div class="attendees-list">${attendeesHTML}</div>
                    </div>
                    <div class="related-content-container">
                        ${newsHTML ? `<div class="related-news"><h4>News Coverage</h4>${newsHTML}</div>` : ''}
                        ${postsHTML ? `<div class="related-posts"><h4>Public Reactions</h4>${postsHTML}</div>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderEventsFeed() {
    const container = document.getElementById('events-feed-container');
    if (!container) return;
    
    const sortedEvents = [...WAHBOOK_EVENTS].sort((a, b) => {
        if (currentEventSort === 'newest') {
            return (a.order || 99) - (b.order || 99);
        } else {
            return (b.order || 0) - (a.order || 0);
        }
    });
    container.innerHTML = sortedEvents.map(renderEvent).join('');
}

function renderFollowedFeed() {
    const container = document.getElementById('followed-feed-container');
    if (!container) return;
    loadState();
    
    if (state.loggedInUser === 'generic' || !state.userState.following || state.userState.following.length === 0) {
        container.innerHTML = `<p class="page-subtitle">You are not following anyone yet. Visit a user's profile to follow them!</p>`;
        return;
    }

    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey))
                                      .sort((a, b) => (b.order || 0) - (a.order || 0));

    if (followedPosts.length === 0) {
        container.innerHTML = `<p class="page-subtitle">The accounts you follow haven't posted anything yet.</p>`;
        return;
    }
    
    container.innerHTML = followedPosts.map(p => renderFeedPost(p)).join('');
}

function renderTrendingFeed() {
    const container = document.getElementById('trending-feed-container');
    if (!container) return;

    const scoredPosts = WAHBOOK_POSTS.map(post => {
        const score = (post.likes || 0) + ((post.comments?.length || 0) * 2);
        return { ...post, trendingScore: score };
    })
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, 15);

    container.innerHTML = scoredPosts.map(p => renderFeedPost(p, { showTrendingScore: true, trendingScore: p.trendingScore })).join('');
}

function renderMediaFeed() {
    const container = document.getElementById('media-feed-container');
    if (!container) return;

    const mediaPosts = WAHBOOK_POSTS.filter(p => p.image || p.characterKey === 'wah_media_collective')
                                    .sort((a, b) => (b.order || 0) - (a.order || 0));
    
    if (mediaPosts.length === 0) {
        container.innerHTML = `<p class="page-subtitle">No media posts found.</p>`;
        return;
    }

    container.innerHTML = mediaPosts.map(p => renderFeedPost(p)).join('');
}

function handleShare(button) {
    const post = button.closest('.feed-post');
    if (!post) return;

    const postId = post.id;
    const url = `${window.location.origin}${window.location.pathname}#${postId}`;
    
    navigator.clipboard.writeText(url).then(() => {
        const tooltip = document.createElement('div');
        tooltip.className = 'share-tooltip';
        tooltip.textContent = 'Copied!';
        button.appendChild(tooltip);
        setTimeout(() => tooltip.remove(), 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function scrollToPostFromHash() {
    if (window.location.hash) {
        try {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.style.boxShadow = '0 0 20px var(--neutral-color)';
                setTimeout(() => element.style.boxShadow = '', 2000);
            }
        } catch (e) {
            // Invalid selector from hash, do nothing
            console.warn("Invalid hash for scrolling:", window.location.hash);
        }
    }
}

function setupEventListeners() {
    tabsContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab-btn');
        if (!tab) return;
        
        playSound('click.mp3');

        const tabName = tab.dataset.tab;

        tabsContainer.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contentContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const activeContent = document.getElementById(`${tabName}-content`);
        activeContent.classList.add('active');

        // Render content on demand
        if (activeContent.childElementCount === 0 || (activeContent.firstElementChild && activeContent.firstElementChild.classList.contains('wahbook-feed-container') && activeContent.firstElementChild.childElementCount === 0)) {
            switch(tabName) {
                case 'followed': renderFollowedFeed(); break;
                case 'trending': renderTrendingFeed(); break;
                case 'media': renderMediaFeed(); break;
            }
        }
    });

    document.body.addEventListener('click', e => {
        const likeBtn = e.target.closest('.interaction-btn');
        if (likeBtn && likeBtn.textContent.includes('Like')) {
            playSound('click.mp3', 0.5);
            likeBtn.classList.toggle('liked');
            let likes = parseInt(likeBtn.dataset.likes, 10);
            likes += likeBtn.classList.contains('liked') ? 1 : -1;
            likeBtn.dataset.likes = likes;
            likeBtn.innerHTML = `<span class="interaction-btn-icon">👍</span> Like (${likes})`;
        }
        
        const shareBtn = e.target.closest('.share-btn');
        if (shareBtn) {
            handleShare(shareBtn);
        }

        const eventHeader = e.target.closest('.event-main-header');
        if (eventHeader) {
            playSound('click.mp3');
            eventHeader.parentElement.classList.toggle('expanded');
        }

        const sortBtn = e.target.closest('#event-controls .control-btn');
        if (sortBtn && !sortBtn.classList.contains('active')) {
            playSound('confirm.mp3', 0.6);
            currentEventSort = sortBtn.dataset.sort;
            document.querySelectorAll('#event-controls .control-btn').forEach(btn => btn.classList.remove('active'));
            sortBtn.classList.add('active');
            renderEventsFeed();
        }
    });
}

function updateSeenPosts() {
    loadState();
    const allPostIds = WAHBOOK_POSTS.map(p => p.id);
    const seenIds = new Set(state.userState.seenPostIds);
    allPostIds.forEach(id => seenIds.add(id));
    state.userState.seenPostIds = [...seenIds];
    saveState();
}

function init() {
    if (!feedContainer || !eventsContainer) return;
    renderMainFeed();
    renderEventsFeed();
    setupEventListeners();
    updateSeenPosts();
    // Use a timeout to ensure all content is on the page before scrolling
    setTimeout(scrollToPostFromHash, 100);
}

init();