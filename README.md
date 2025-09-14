# Vigilance Terminal Project

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

## Adding New Map Pages

To maintain application stability and a consistent user experience, all new tactical map pages **must** adhere to the standardized map grouping system. Creating custom, one-off UI or filtering logic for a single map page can conflict with the global data loaders for POIs and tactical units, causing them to fail to render.

The system works as follows:
-   The `map-ui.js` file is responsible for rendering the map selection tabs.
-   It detects which HTML page the user is on (e.g., `mushroom-kingdom-maps.html`, `midlands-maps.html`).
-   Based on the page, it identifies a `group` name (e.g., 'Mushroom Kingdom Regions').
-   It then finds all map entries in `map-data.js` that have a matching `group` property.
-   Finally, it renders a tab button for each of these maps.

To add a new map page correctly:
1.  **Create the HTML File:** Build your new map page (e.g., `new-world-maps.html`), using an existing one as a template.
2.  **Define a Map Group:** In `map-data.js`, create your new map data objects. Crucially, assign a consistent `group` property to all maps that should appear on your new page (e.g., `group: 'New World Regions'`).
3.  **Update the UI Logic:** In `map-ui.js`, add an `else if` condition to the `renderTabs` function to recognize your new HTML file and associate it with the `group` name you defined in `map-data.js`.
4.  **Add to Gallery:** In `maps.html`, add a new `.gallery-item` div that links to your new map page.

By following this structure, any new map page will automatically inherit the correct UI, functionality, and data-loading capabilities of the existing system.

## Advancing the In-Game Day

Simulating the passage of one in-game day requires updating several interconnected systems. This guide provides a step-by-step process to ensure all changes are cohesive and reflected across the application.

### 1. Update the Calendar

The simplest and most important step is to update the world's date.

-   **File:** `calendar.js`
-   **Action:** Modify the `CURRENT_GAME_DATE` constant. Increment the `day` value by one. If the day exceeds the number of days in the month, reset it to 1 and increment `monthIndex`.

    ```javascript
    // Example: Advancing from Highsun, Day 13 to Day 14
    const CURRENT_GAME_DATE = {
        year: 1040,
        monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
        day: 14 // Was 13, now 14
    };
    ```

### 2. Advance the Toad Focus Tree

The Toad Focus system is the primary driver of daily events for the Liberated Toads.

-   **File:** `focus.js`
-   **Action:** In the `advanceDay` function, ensure the `state.focusTreeState.day` is incremented. The rest of the logic in this function handles the countdown and completion of focuses.
-   **When a Focus Finishes:** The `advanceDay` function will automatically handle moving a completed focus to the `unlocked` array. Your main task is to implement the narrative and mechanical consequences of its completion. Check the `effects` object of the completed focus in `focus-tree.js`:
    -   **`influence`**: No manual action needed. The system handles this.
    -   **`log`**: No manual action needed. The system handles this.
    -   **`unlocksAbility`**: Find the toad in `state.auxiliary_party_state` (in `state.js` or via the save state in localStorage) and add the new ability object to their `abilities` array. You can find the ability details in `abilities.js`.
    -   **`storyEvent`**: This is a narrative trigger. This should inspire a new WAHbook post, a new quest, or a change on the world map. For example, an event like `'regency_alliance_offer'` should lead to a new quest for the party to negotiate with the Mushroom Regency.
    -   **`factionRep`**: Update the base reputation for the relevant party member in `state.js` under `state.players[playerKey].reputation[factionKey]`.
    -   **`unlocksBuilding` / `unlocksUnit`**: Create a WAHbook post or a timeline event describing this new development for the Toads.

### 3. Update the World Map & Tactical Situation

The world is not static. A day's passage can mean new discoveries or shifts in military power.

-   **File:** `map-battle-data-base.js`
-   **Action:** Increment the `currentDay` of the `vigilance_journey` object. This moves the airship along its path on the Midlands map.

-   **Files:** `map-data/*.js` (e.g., `mushroom-kingdom-pois.js`)
-   **Action:** If a focus completion or quest event changes a location, update its `description` and potentially its `factionId`. For example, if the Toads complete "Fortify Position," update the description of their home base POI to reflect its new defenses.

-   **Files:** `map-battle-data-*.js`
-   **Action:** Consider the narrative. Did a battle occur? Should a patrol unit move? Update the `x` and `y` coordinates of tactical units to reflect a day's movement or the outcome of a skirmish.

### 4. Update Quests

A day's events will often advance existing quests or create new ones.

-   **Files:** `quests/quests-*.js`
-   **Action (Advancing):** Find the relevant quest and update the `status` of a `step` from `'active'` to `'completed'`. Then, change the next step's status from `'locked'` to `'active'`. Add a sentence to the new active step's `description` summarizing what happened.
-   **Action (Creating):** If a new story beat occurs (e.g., from a Focus `storyEvent`), create a new quest object in the appropriate file. Use the existing quests as a template for the object structure.

### 5. Add New WAHbook Posts

This is the most crucial step for making the world feel alive. A new day should always bring new chatter.

-   **File:** `assembly-data.js` or `assembly-intel-data.js`
-   **Action:** Add new post objects to the top of the `WAHBOOK_POSTS` or `WAHBOOK_INTEL_POSTS` array.
-   **Guidance:**
    -   The `order` property determines the post's position in the feed; a higher number means a more recent post. Increment the highest existing order number for your new posts.
    -   Write posts from the perspective of different characters reacting to the day's events. Did a focus complete? Have Dan post about it. Did a battle happen? Have a news agency or a faction leader comment on it.
    -   If the post is related to an ongoing rumor, be sure to include the `rumorId`.

    ```javascript
    // Example of a new post object
    {
        id: 'new_event_post_1', // Must be a unique ID
        order: 101, // Must be higher than the previous highest order
        characterKey: 'dan', // The character posting
        timestamp: '1 hour ago',
        content: `We've finished building the new watchtower! Thanks to Toad Lee's training, everyone worked together perfectly. For the first time, our home feels a little safer.`,
        likes: 150,
        comments: [
            { characterKey: 'markop', text: "Excellent work, Dan. A leader builds hope as well as walls." }
        ],
        rumorId: 'dan_training' // Optional, links to an active rumor
    }
    ```

### 6. Update the Timeline

For major, world-shaking events, add an entry to the historical record.

-   **File:** `timeline-data.js`
-   **Action:** If a truly significant event occurred (e.g., a major battle was won, a key character was assassinated, a city was captured), add a new event object to the `HISTORICAL_TIMELINE` array.

    ```javascript
    // Example of a new timeline entry
    {
        date: "1040 IE (1040 BF), Day 14",
        title: "The Watchtower of Hope",
        description: "The Liberated Toads, under the guidance of Dan and Toad Lee, completed construction of their first major defensive structure, a watchtower they named 'Hope's Rise'.",
        icon: "icon_fortify.png",
        category: "Social"
    }
    ```

### 7. Update Relationships (If Applicable)

If an event would logically change how two characters feel about each other, reflect it in their personal opinions.

-   **File:** `character-relations.js`
-   **Action:** Find the character object and update the `text` field for their opinion of another character. For example, if Archie recklessly endangers Dan, Markop's opinion of Archie (`markop.archie.text`) should be updated to reflect his disapproval.

### 8. Update NPC Plots & World Events

Quests with the type `npc_plot` are not tasks for the party to complete, but are ongoing stories in the world driven by non-player characters (NPCs). In the quest log, they are clearly marked with the status **"Ongoing"** to differentiate them from active player quests. These plots make the world feel alive and reactive to the party's actions or inaction.

When a day advances, consider if these plots have progressed. This can happen in two ways:

1.  **Player Influence:** Did the party do something to help or hinder one of the NPCs involved? If so, update the quest steps to reflect the consequences. For example, if the party provided crucial information to Diddy Kong, you might complete his current step and move the plot forward.
2.  **Inaction:** If the party ignores the situation, the NPCs will act on their own. After a few in-game days, the plot should advance based on the most likely outcome. For example, if Chunky Kong is left to mediate the DK Crew's dispute without interference, he might succeed or fail on his own.

Advancing an `npc_plot` should almost always generate a new WAHbook post from the involved characters. This informs the party of the latest developments and makes the world feel dynamic, showing them that the world moves on even without their direct involvement.

By following these steps, you ensure that the passage of time is meaningful and consistently reflected across all parts of the application.

## Contributing Map Data

### Drawing Points of Interest (POIs)

When adding new points of interest to the map data files, please adhere to the following guidelines to maintain quality and consistency:

1.  **Lore-Relevance:** POIs should fit the theme of the region and the broader game world. A location should feel like it belongs.
2.  **Strategic Value:** Each POI should have a clear purpose. Consider its role from different perspectives:
    *   **Political:** Does it influence a faction's control or serve as a seat of power?
    *   **Economic:** Is it a source of resources, a trade hub, or a financial center?
    *   **Military:** Is it a fortress, a chokepoint, or a strategic observation post?
    *   **Narrative:** Does it serve as a key location for a quest or a piece of world-building?
3.  **Clarity and Conciseness:** Descriptions should be evocative but not overly long. A few sentences are usually sufficient to convey the essence of a location.
4.  **Data Completeness:** Ensure all required fields are filled out. This includes coordinates (`x`, `y`), `type`, `name`, `factionId`, `intelReq`, and the values for the map modes: `political_influence`, `economic_value`, and `military_strength`.
5.  **Placement:** Place POIs logically within their designated region. Avoid overcrowding areas. The best way to get accurate coordinates is to use the in-app **Edit Map** feature (available in Debug Mode) and then use the **Generate Code** function to get the correct format and values.
6.  **POI Count:** The number of POIs should be appropriate for the size of the region to ensure it feels populated and interesting. Use the following as a guideline:
    *   **Small Area (e.g., a single city, a small island):** Aim for 20-30 POIs.
    *   **Medium Area (e.g., a province, a large forest):** Aim for 40-60 POIs.
    *   **Large Area (e.g., a kingdom, a vast desert):** Aim for 75-100+ POIs.
7.  **Fog of War:** The `points` string provided in the prompt defines the region's fog of war polygon. This polygon serves two purposes:
    *   **Boundary Reference:** Use these coordinates as a strict boundary. All POIs you create for the region **must** be placed inside this polygon.
    *   **Data Entry:** This `points` string **must** be included in the `fogOfWar` array within the new map data file you create (e.g., in `map-data/middle-earth/Gondor.js`). This allows the map system to render the fog correctly.
8.  **Requests:** To keep the world feeling alive and interactive, aim to add at least one location-based "Request" quest (in `quests/quests-requests.js`) for every 50 POIs created in a region. This provides players with clear, discoverable objectives as they explore new areas.

### Adding Laws & Customs

Laws and customs enrich the world by defining how different societies function. There are two main types: codified **Laws** that are formally enforced by a ruling body, and unwritten **Traditions** that are socially enforced customs.

#### Traditions & Customs

To add a new tradition or associate one with a POI, edit `legal_data.js`.

*   **To add a new tradition:** Add it to the `traditions` object under the appropriate category (e.g., `martial`, `social`). Give it a unique `id`, `name`, `icon`, `description`, and list the `followers` (faction keys) who primarily adhere to it.

*   **To add a region's baseline traditions:** In the `regional_traditions` object, add an entry where the key is the landmass ID (e.g., `middle_earth_full`) and the value is an array of tradition IDs. These traditions will apply to any unaligned POI in that region. For example:
    ```javascript
    regional_traditions: {
        // ... other regions
        middle_earth_full: ['hospitality', 'oath_binding', 'gift_giving', 'duty_and_vigilance', 'the_long_defeat', 'doom_of_mandos']
    }
    ```
*   **To add a POI-specific custom:** In the `poi_traditions` object, add an entry with the POI's full `id` as the key. The value should be an object with a `summary` and an array of `traditions` (IDs from the master list).
    ```javascript
    'poi_lw_crossroads_inn': {
        summary: 'The Crossroads Inn operates under a strict, ancient code of neutrality enforced by its belligerent innkeeper.',
        traditions: ['neutral_ground', 'storytelling_pact']
    }
    ```

#### Codified Laws

To give a faction a formal legal code that appears in the "Laws & Customs" pop-up on the map, follow these steps. We'll use the Cosmic Jesters and their "Codex: The Punchline" as an example.

1.  **Create/Update a Law Data File:** In the `laws-data` directory, find a thematic file (e.g., `laws-data-mystical.js`) or create a new one.
2.  **Define the Codex:** Inside this file, add an object for your faction. This object should contain the `name` of the codex, its `description`, and the laws broken down by category (`political`, `social`, `economic`, `penal`). Each law is an object with a `name`, `icon`, and `description`.

    *Example from `laws-data-mystical.js`:*
    ```javascript
    cosmic_jesters: {
        name: "Codex: The Punchline",
        description: "There are no laws, only suggestions, and they change hourly...",
        political: [{
            name: "The Rule of Random",
            icon: "🏛️",
            description: "All decisions are made by rolling dice..."
        }],
        // ... other categories
    }
    ```
3.  **Register the Codex:** Open `laws-data.js` and ensure your new law data file is imported and included in the `ALL_LEGAL_CODES` export. This makes the system aware of your new laws.

### Adding Libraries

Libraries are key locations for discovering new information and books. To add a new one:

1.  **Create the POI:** In the appropriate POI data file, create a POI with `type: 'library'`.
2.  **Add Library Data to POI:** In the new POI's data object, add two keys:
    *   `library_summary`: A brief, in-character description of the library and its collection.
    *   `libraryStockKey`: A unique key (e.g., `'royal_archives'`) that will be used to link to the book list.
3.  **Create the Book Stock File:**
    *   In the `books/` directory, create a new file (e.g., `royal_archives_stock.js`).
    *   In this file, export a constant array of strings, where each string is the exact title of a book from `books/book_descriptions.js`.
4.  **Register the Stock:**
    *   Open `books/library_stocks.js`.
    *   Import your new stock file.
    *   Add a new key-value pair to the `LIBRARY_STOCKS` object, where the key is the `libraryStockKey` you defined in the POI, and the value is the imported array of book titles.

### Adding Books

Adding a new readable book to the game world involves several steps to ensure it appears correctly in both the party's inventory and public libraries.

1.  **Create the Content File:** In the `books/` directory, create a new file (e.g., `new_book.js`). This file should export a `BOOK_DATA` constant containing the book's `title` and an array of strings for its `pages`. Each string represents a page or a pair of pages.

2.  **Add Book Description:** Open `books/book_descriptions.js`. Add a new entry to the `BOOK_DESCRIPTIONS` object. The key must be the exact title of the book. This data is used for the cover view when a player inspects the book, providing a summary, reading time, and in-game effect.

3.  **Register in `bookshelf.js` (Party Inventory):**
    *   Import your new content file: `import { BOOK_DATA as newBook } from './books/new_book.js';`
    *   Add an entry to the `bookDataMap` object, mapping the book's title to the imported data: `"My New Book": newBook,`
    *   Assign a cover image in the `getBookCoverUrl` function by adding a new condition, e.g., `if (bookTitle.includes("My New")) return 'book_cover_custom.png';`

4.  **Register in `library.js` (Public Terminal):**
    *   Repeat the same registration steps as for `bookshelf.js`: import the content file, add it to `bookDataMap`, and assign a cover in `getBookCoverUrl`. This ensures the book is accessible from both interfaces.

5.  **Add to Inventory/Stock:** To make the book appear in the world, either add its title to a character's `items` array in `state.js` or to a library's stock file as described in the section above.
