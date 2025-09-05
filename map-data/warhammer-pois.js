// map-data/warhammer-pois.js
import { theEmpirePois } from './the_empire.js';
import { worldsEdgeMountainsPois } from './worlds_edge_mountains.js';
import { sylvaniaPois } from './sylvania.js';
import { badlandsPois } from './badlands.js';
import { ulthuanPois } from './ulthuan.js';
import { naggarothPois } from './naggaroth.js';
import { lustriaPois } from './lustria.js';
import { landOfTheDeadPois } from './land_of_the_dead.js';
import { arabyPois } from './araby.js';
import { southlandsPois } from './southlands.js';
import { bretonniaPois } from './brettonia.js';
import { darklandsPois } from './darklands.js';
import { ancientGiantLandPois } from './ancient_giant_land.js';
import { grandCathayPois } from './grand_cathay.js';
import { easternSteppesPois } from './eastern_steppes.js';
import { greatBastionPois } from './great_bastion.js';


export const warhammerData = {
    pointsOfInterest: [
        ...theEmpirePois,
        ...worldsEdgeMountainsPois,
        ...sylvaniaPois,
        ...badlandsPois,
        ...ulthuanPois,
        ...naggarothPois,
        ...lustriaPois,
        ...landOfTheDeadPois,
        ...arabyPois,
        ...southlandsPois,
        ...bretonniaPois,
        ...darklandsPois,
        ...ancientGiantLandPois,
        ...grandCathayPois,
        ...easternSteppesPois,
        ...greatBastionPois
    ],
    fogOfWar: []
};
