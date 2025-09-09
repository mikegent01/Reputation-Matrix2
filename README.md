# Vigilance Terminal Project

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

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

Libraries are key locations for discovering new information and books.

1.  **Create a POI:** Create a POI with the `type: 'library'`.
2.  **Add Library Data:** In the POI's data object, add two new keys:
    *   `library_summary`: A brief, in-character description of the library and its collection.
    *   `libraryStockKey`: A unique key (e.g., `'royal_archives'`) that will be used to link to the book list.
3.  **Create a Book List:**
    *   In the `books/` directory, create a new file (e.g., `royal_archives_stock.js`).
    *   In this file, export a constant array of strings, where each string is the exact title of a book from `books/book_descriptions.js`.
4.  **Register the Stock:**
    *   Open `books/library_stocks.js`.
    *   Import your new stock file.
    *   Add a new key-value pair to the `LIBRARY_STOCKS` object, where the key is the `libraryStockKey` you defined in the POI, and the value is the imported array of book titles.

Example of a library POI:
```javascript
{
    id: 'poi_mc_royal_archives',
    type: 'library',
    name: "The Royal Archives",
    description: "...",
    library_summary: "The official repository of the Mushroom Kingdom's history...",
    libraryStockKey: 'mushroom_kingdom'
}
```
Example of a stock file (`books/mushroom_library_stock.js`):
```javascript
export const MUSHROOM_KINGDOM_LIBRARY_STOCK = [
    "Mushroom Kingdom History, Vol. III",
    "A History of the Star Sprites",
    // ... more book titles
];
```
Example of registering in `books/library_stocks.js`:
```javascript
import { MUSHROOM_KINGDOM_LIBRARY_STOCK } from './mushroom_library_stock.js';
// ... other imports

export const LIBRARY_STOCKS = {
    mushroom_kingdom: MUSHROOM_KINGDOM_LIBRARY_STOCK,
    // ... other libraries
};
```

## Adding Books

Adding a new readable book to the game world involves several steps to ensure it appears correctly in both the party's inventory and public libraries. We will use "Codex: The Punchline" as an example.

1.  **Create the Content File:** In the `books/` directory, create a new file (e.g., `codex_punchline.js`). This file should export a `BOOK_DATA` constant containing the book's `title` and an array of strings for its `pages`.

    ```javascript
    // books/codex_punchline.js
    export const BOOK_DATA = {
        title: "Codex: The Punchline",
        pages: [ `Foreword:\n\nThese are not rules...`, `Political Law: The Rule of Random...` ]
    };
    ```
2.  **Add Book Description:** Open `books/book_descriptions.js`. Add a new entry to the `BOOK_DESCRIPTIONS` object. The key should be the exact title of the book. This data is used for the cover view when a player inspects the book.

    ```javascript
    "Codex: The Punchline": {
        summary: "The official-unofficial legal text of the Cosmic Jester's cult...",
        reading_time: "Approx. 5 minutes...",
        pages: 5,
        effect: "Grants insight into the illogical reasoning of the Cosmic Jesters..."
    }
    ```
3.  **Register in `bookshelf.js` (Party Inventory):**
    *   Import your new content file: `import { BOOK_DATA as codexPunchline } from './books/codex_punchline.js';`
    *   Add an entry to the `bookDataMap` object, mapping the book's title to the imported data: `"Codex: The Punchline": codexPunchline,`
    *   Assign a cover image in the `getBookCoverUrl` function: `if (bookTitle.includes("Punchline")) return 'book_cover_jester.png';`

4.  **Register in `library.js` (Public Terminal):**
    *   Repeat the same steps as for `bookshelf.js`: import the content file, add it to `bookDataMap`, and assign a cover in `getBookCoverUrl`. This ensures the book is accessible from both interfaces.

5.  **(Optional) Add to Library Stock:** If the book can be found in a specific library, open the relevant stock file (e.g., `books/cosmic_library_stock.js`) and add the book's exact title to the exported array. Ensure this stock is registered in `books/library_stocks.js`.
