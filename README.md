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

### World Connectivity & Embassies

To make the world feel more interconnected and politically dynamic, embassies and diplomatic outposts are key points of interest. When adding an embassy, please consider the following:

1.  **Reciprocity:** If Faction A has an embassy in Faction B's capital, Faction B should likely have one in Faction A's capital. This demonstrates a formal diplomatic relationship.
2.  **Location:** Place embassies in logical locations, typically within the capital city or a major port of the host nation. They should be accessible but distinct.
3.  **Description:** The description should reflect the culture clash between the two factions. For example, a stern Imperial embassy in the whimsical Mushroom Kingdom should be described as imposing and out-of-place. A Mushroom Kingdom embassy in the digital realm of The Internet might be a quirky, mushroom-shaped data-construct.
4.  **Purpose:** Embassies are more than just landmarks. They are hubs for quests related to diplomacy, espionage, political intrigue, and cross-cultural interaction. Keep this in mind when writing the description.
