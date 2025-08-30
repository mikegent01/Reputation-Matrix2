// This file contains all location-based "Request" quests.
export const REQUESTS = {
    'request_oakhaven_pests': {
        id: 'request_oakhaven_pests',
        title: "Request: Pest Control",
        type: 'request',
        category: 'Requests',
        objective: "Martha Oakhaven of Oakhaven town needs help. Unusually large and aggressive Swoopers have been preying on her livestock. Clear out their nest in the nearby hills.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_lw_oakhaven'
    },
    'request_crossroads_reinforcements': {
        id: 'request_crossroads_reinforcements',
        title: "Request: Reinforcements Needed",
        type: 'request',
        category: 'Requests',
        objective: "The Iron Legion commander at Crossroads Keep is requesting reinforcements. A recent Rebel Clan ambush has thinned their ranks and they need able-bodied warriors to help them hold the line until a relief column arrives.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_lh_crossroads_keep'
    },
    'request_port_yale_delivery': {
        id: 'request_port_yale_delivery',
        title: "Request: A Discreet Delivery",
        type: 'request',
        category: 'Requests',
        objective: "A nervous merchant in Port Yale needs a 'sensitive' package delivered to the Crossroads Inn in Lockerwood. He's offering a high price for couriers who don't ask questions and can avoid both Regency patrols and pirate ambushes.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ys_port_yale'
    },
    'request_toad_town_patrol': {
        id: 'request_toad_town_patrol',
        title: "Request: Join the Watch",
        type: 'request',
        category: 'Requests',
        objective: "The Toadstool Guard in Toad Town is stretched thin. They are offering a bounty to any capable adventurers willing to help them patrol the city's outer districts and clear out any Toad Gang agitators or Fawful's stray minions.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mk_toadtown'
    },
    'request_wayfinders_escort': {
        id: 'request_wayfinders_escort',
        title: "Request: Escort a Cartographer",
        type: 'request',
        category: 'Requests',
        objective: "The Wayfinders' Guild needs an armed escort for a cartographer mapping the dangerous Ruins of Aeridor. The area is known to be haunted by elven spirits who do not take kindly to trespassers.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_yb_wayfinders_lodge'
    }
};