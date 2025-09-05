// map-data/doughnut-hole.js
import { jestersPlaygroundPois } from './jesters_playground.js';
import { causalityChainPois } from './causality_chain.js';
import { driftersDebrisFieldPois } from './drifters_debris_field.js';
import { weaversTapestryPois } from './weavers_tapestry.js';
import { outerAnomalyPois } from './outer_anomaly.js';


export const doughnutHoleData = {
    pointsOfInterest: [
        ...jestersPlaygroundPois,
        ...causalityChainPois,
        ...driftersDebrisFieldPois,
        ...weaversTapestryPois,
        ...outerAnomalyPois,
    ],
    fogOfWar: []
};
