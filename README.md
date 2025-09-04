# Vigilance Terminal Project

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

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

## New Region: Kivotos

The groundwork for the new Kivotos region has been laid. This academic city-state, located west of Middle-earth, is now integrated into the terminal's data structure. Factions, map files, and navigation have been prepared, but as requested, no Points of Interest have been created yet, leaving the map a blank canvas for future development.
