import { state, loadState } from './state.js';
// Import book data from separate files
import { BOOK_DATA as peachDiary } from './books/peach_diary.js';
import { BOOK_DATA as mkHistory } from './books/mk_history.js';
import { BOOK_DATA as fungalAlchemy } from './books/fungal_alchemy.js';
import { BOOK_DATA as koopaTactics } from './books/koopa_tactics.js';
import { BOOK_DESCRIPTIONS } from './books/book_descriptions.js';

const bookshelfContainer = document.getElementById('bookshelf-main');
const bookModal = document.getElementById('book-reader-modal');
const bookModalClose = document.getElementById('book-modal-close');
const bookModalTitle = document.getElementById('book-modal-title');
const bookCoverView = document.getElementById('book-cover-view');
const bookCoverImage = document.getElementById('book-cover-image');
const bookDescriptionContainer = document.getElementById('book-description-container');
const openBookBtn = document.getElementById('open-book-btn');
const bookPagesView = document.getElementById('book-pages-view');
const bookNavigation = document.querySelector('.book-navigation');
const pageLeft = document.getElementById('book-page-left');
const pageRight = document.getElementById('book-page-right');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageIndicator = document.getElementById('page-indicator');

let currentBook = null;
let currentPage = -1; // -1 for cover, 0 for pg 1-2, 2 for 3-4 etc.

// A map to associate inventory item names with their book data modules.
const bookDataMap = {
    "Princess Peach's Diary": peachDiary,
    "Mushroom Kingdom History, Vol. III": mkHistory,
    "A Field Guide to Fungal Alchemy": fungalAlchemy,
    "Koopa Troop Tactics": koopaTactics,
};

function getBookCoverUrl(bookTitle) {
    if (bookTitle.includes("Diary")) return 'book_cover_diary.png';
    if (bookTitle.includes("History")) return 'book_cover_history.png';
    if (bookTitle.includes("Alchemy")) return 'book_cover_alchemy.png';
    if (bookTitle.includes("Tactics")) return 'book_cover_tactics.png';
    return ''; // default/fallback
}


loadState();

function init() {
    renderBookshelf();
    setupEventListeners();
}

function renderBookshelf() {
    if (!bookshelfContainer) return;

    bookshelfContainer.innerHTML = `
        <div class="shelf" id="shelf-1"></div>
        <div class="shelf" id="shelf-2"></div>
        <div class="shelf" id="shelf-3"></div>
    `;

    const shelves = [
        document.getElementById('shelf-1'),
        document.getElementById('shelf-2'),
        document.getElementById('shelf-3')
    ];
    let shelfIndex = 0;

    for (const ownerKey in state.inventories) {
        const inventory = state.inventories[ownerKey];
        if (!inventory) continue;

        const currentShelf = shelves[shelfIndex % shelves.length];
        
        const label = document.createElement('div');
        label.className = 'shelf-label';
        label.textContent = inventory.name;
        currentShelf.appendChild(label);

        if (inventory.items && inventory.items.length > 0) {
            inventory.items.forEach(item => {
                const bookData = bookDataMap[item];
                const bookEl = document.createElement('div');
                bookEl.className = 'book';
                bookEl.dataset.item = item;

                if (bookData) {
                    const userIsOwner = state.loggedInUser === ownerKey;
                    const isGenericOrDebug = state.loggedInUser === 'generic' || state.debugMode;
                    
                    const ownerFactionMap = { 'bowser': 'koopa_troop', 'humpik': 'koopa_troop', 'shared': 'liberated_toads' };
                    const ownerFactionKey = ownerFactionMap[ownerKey];

                    let isLocked = false;
                    let lockMessage = '';

                    if (!userIsOwner && !isGenericOrDebug && ownerFactionKey) {
                        const reputation = state.finalReputations[state.loggedInUser]?.reputation[ownerFactionKey] || 0;
                        if (reputation < 25) {
                            isLocked = true;
                            let ownerName = 'The owner';
                            if (ownerKey === 'bowser' || ownerKey === 'humpik') ownerName = 'Bowser';
                            else if (ownerKey === 'shared') ownerName = 'The Liberated Toads';
                            lockMessage = `${ownerName} does not trust you enough to share this.`;
                        }
                    }

                    if (isLocked) {
                        bookEl.classList.add('locked');
                        bookEl.title = lockMessage;
                    } else {
                        bookEl.classList.add('interactive');
                        bookEl.dataset.bookKey = item;
                        bookEl.title = item;
                    }
                } else {
                    bookEl.title = item;
                }
                currentShelf.appendChild(bookEl);
            });
        } else {
            const noItems = document.createElement('p');
            noItems.className = 'no-items-text';
            noItems.textContent = '';
            currentShelf.appendChild(noItems);
        }
        shelfIndex++;
    }
}


function renderCurrentView() {
    if (!currentBook) return;

    if (currentPage === -1) { // Cover view
        bookCoverView.style.display = 'flex';
        bookPagesView.style.display = 'none';
        bookNavigation.style.display = 'none';
        bookCoverImage.src = getBookCoverUrl(currentBook.title);
        bookCoverImage.alt = currentBook.title;
    } else { // Pages view
        bookCoverView.style.display = 'none';
        bookPagesView.style.display = 'grid';
        bookNavigation.style.display = 'flex';

        const totalPages = currentBook.pages.length;
        const leftPageIndex = currentPage;
        const rightPageIndex = currentPage + 1;

        pageLeft.textContent = currentBook.pages[leftPageIndex] || '';
        pageRight.textContent = currentBook.pages[rightPageIndex] || '';

        prevPageBtn.disabled = false; // Always enabled on pages view to return to cover
        nextPageBtn.disabled = (rightPageIndex >= totalPages);

        pageIndicator.textContent = `Page ${leftPageIndex + 1}${totalPages > leftPageIndex + 1 ? ` - ${rightPageIndex + 1}` : ''} of ${totalPages}`;
    }
}

function showBookModal(bookKey) {
    currentBook = bookDataMap[bookKey];
    if (!bookModal || !currentBook) return;

    // Reset description container
    bookDescriptionContainer.innerHTML = '';
    bookDescriptionContainer.style.display = 'none';

    // Check for and render detailed description
    const detailedDescription = BOOK_DESCRIPTIONS[bookKey];
    if (detailedDescription) {
        let descriptionHTML = `
            <h5>Summary</h5>
            <p>${detailedDescription.summary}</p>
            
            <h5>Details</h5>
            <p><strong>Reading Time:</strong> ${detailedDescription.reading_time}</p>
            <p><strong>Pages:</strong> ${detailedDescription.pages}</p>
            <p><strong>Effect:</strong> <em>${detailedDescription.effect}</em></p>
        `;

        bookDescriptionContainer.innerHTML = descriptionHTML;
        bookDescriptionContainer.style.display = 'block';
    }


    currentPage = -1; // Start at cover view
    bookModalTitle.textContent = currentBook.title;
    renderCurrentView();

    bookModal.style.display = 'flex';
}

function hideBookModal() {
    if (bookModal) {
        bookModal.style.display = 'none';
        currentBook = null;
    }
}

function changePage(direction) {
    if (!currentBook) return;
    
    if (direction === -1 && currentPage === 0) {
        // Go back to cover from the first page
        currentPage = -1;
    } else {
        const newPage = currentPage + (2 * direction);
        // Ensure new page is within valid range
        if (newPage >= 0 && newPage < currentBook.pages.length) {
            currentPage = newPage;
        }
    }
    renderCurrentView();
}

function setupEventListeners() {
    if (bookshelfContainer) {
        bookshelfContainer.addEventListener('click', (e) => {
            const interactiveBook = e.target.closest('.book.interactive');
            if (interactiveBook) {
                const bookKey = interactiveBook.dataset.bookKey;
                if (bookKey) {
                    showBookModal(bookKey);
                }
            }
        });
    }

    if (bookModal) {
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) hideBookModal();
        });
    }

    if (openBookBtn) {
        openBookBtn.addEventListener('click', () => {
            currentPage = 0;
            renderCurrentView();
        });
    }

    if (bookModalClose) bookModalClose.addEventListener('click', hideBookModal);
    if (prevPageBtn) prevPageBtn.addEventListener('click', () => changePage(-1));
    if (nextPageBtn) nextPageBtn.addEventListener('click', () => changePage(1));
}

init();