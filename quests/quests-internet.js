// This file contains all side quests related to The Internet region.
export const INTERNET_QUESTS = {
    'request_inet_oracle_purge': {
        id: 'request_inet_oracle_purge',
        title: "Request: Purge the Logic Virus",
        type: 'request',
        category: 'Requests',
        objective: "A notice from the Data Archivists faction of the Internet Federation: 'An ancient, self-replicating logic virus is corrupting search results in the Oracle's Spire. We need a team of digital exterminators to enter the Spire's core and purge the corrupted data streams. High reward for discretion and success.'",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_inet_oracle_spire'
    },
    'request_inet_meme_injection': {
        id: 'request_inet_meme_injection',
        title: "Request: An Injection of Nonsense",
        type: 'request',
        category: 'Requests',
        objective: "A chaotic notice appears in the Anonymity Cauldron: 'The Cauldron grows stagnant with predictable rage! A new, nonsensical meme must be forged in the Meme-Weavers' Bazaar and injected into the Great Social Forum to stir the pot! Do this, and the Jester will smile upon you.'",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_inet_anonymity_cauldron'
    },
    'request_inet_whistleblower_escort': {
        id: 'request_inet_whistleblower_escort',
        title: "Request: Data Packet Extraction",
        type: 'request',
        category: 'Requests',
        objective: "A coded message from The Unchained is circulating in the Deep Web: 'Federation defector requires escort. A data packet containing proof of Admin Zero's surveillance overreach must be extracted from the Whistleblower's Sanctuary and delivered to our network. High risk, high reward. Trust no one.'",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_inet_whistleblower_sanctuary'
    }
};