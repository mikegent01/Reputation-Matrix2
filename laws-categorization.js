export const LAW_SYSTEM_ARCHETYPES = {
    authoritarian: { name: 'Authoritarian Regime', color: '#8B0000' }, // Dark Red
    militaristic: { name: 'Militaristic State', color: '#B22222' },   // Firebrick
    democratic: { name: 'Democratic Governance', color: '#4169E1' }, // Royal Blue
    clandestine: { name: 'Clandestine Rule', color: '#483D8B' },    // Dark Slate Blue
    primal: { name: 'Primal Law', color: '#8B4513' },          // Saddle Brown
    chaotic: { name: 'Chaotic Misrule', color: '#FF00FF' },       // Magenta
    digital: { name: 'Digital Federation', color: '#00FFFF' },    // Cyan
    theocratic: { name: 'Theocratic Order', color: '#C0C0C0' },       // Silver
    other: { name: 'Other Systems', color: '#6c757d' }            // Grey
};

export const FACTION_LEGAL_SYSTEM_MAP = {
    // Authoritarian
    regal_empire: 'authoritarian',
    // Militaristic
    iron_legion: 'militaristic',
    koopa_troop: 'militaristic',
    peach_loyalists: 'militaristic',
    kremling_krew: 'militaristic',
    // Democratic
    mushroom_regency: 'democratic',
    liberated_toads: 'democratic',
    beanbean_kingdom: 'democratic',
    flower_kingdom: 'democratic',
    yoshi_clans: 'democratic',
    knights_of_the_gilded_lily: 'democratic',
    dk_crew: 'democratic',
    // Clandestine
    onyx_hand: 'clandestine',
    freelancer_underworld: 'clandestine',
    iron_fists: 'clandestine',
    toad_gang: 'clandestine',
    wario_land: 'clandestine',
    crimson_fleet: 'clandestine',
    tea_leaf_syndicate: 'clandestine',
    diamond_city_investigators: 'clandestine',
    // Primal
    moonfang_pack: 'primal',
    rakasha_clans: 'primal',
    // Chaotic
    cosmic_jesters: 'chaotic',
    fawfuls_furious_freaks: 'chaotic',
    ratchet_raiders: 'chaotic',
    // Digital
    internet_federation: 'digital',
    // Theocratic
    silver_flame: 'theocratic',
    toad_cult: 'theocratic',
    // Other
    mages_guild: 'other', // Magocracy
    oathbound_judges: 'other', // Kritarchy
    goodstyle_artisans: 'other',
    rebel_clans: 'other', // Confederation
    the_unchained: 'other', // Revolutionary Council
    unaligned: 'other'
};
