// map-data/internet-pois.js
import { borderPois } from './border.js';
import { surfaceWebPois } from './surface-web.js';
import { deviantWebPois } from './deviant-web.js';
import { criminalWebPois } from './criminal-web.js';
import { deepWebPois } from './deep-web.js';
import { seaOfArchivesPois } from './sea-of-archives.js';
import { capitolPois } from './capitol.js';
import { bigTechPois } from './big-tech.js';
import { appleIslandPois } from './apple-island.js';
import { intelCorpPois } from './intel-corp.js';
import { wastefillPois } from './wastefill.js';


export const internetData = {
    pointsOfInterest: [
        ...borderPois,
        ...surfaceWebPois,
        ...deviantWebPois,
        ...criminalWebPois,
        ...deepWebPois,
        ...seaOfArchivesPois,
        ...capitolPois,
        ...bigTechPois,
        ...appleIslandPois,
        ...intelCorpPois,
        ...wastefillPois,
    ],
    fogOfWar: []
};
