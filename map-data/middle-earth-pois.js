// map-data/middle-earth-pois.js
import { forlindonData } from './Forlindon.js';
import { eriadorData } from './Eriador.js';
import { haradwaithData } from './Haradwaith.js';
import { umbarData } from './Umbar.js';
import { gondorData } from './Gondor.js';
import { rhovanionData } from './Rhovanion.js';
import { mordorData } from './Mordor.js';
import { minhiriathData } from './Minhiriath.js';


export const middleEarthData = {
    pointsOfInterest: [
        ...forlindonData.pointsOfInterest,
        ...eriadorData.pointsOfInterest,
        ...haradwaithData.pointsOfInterest,
        ...umbarData.pointsOfInterest,
        ...gondorData.pointsOfInterest,
        ...rhovanionData.pointsOfInterest,
        ...mordorData.pointsOfInterest,
        ...minhiriathData.pointsOfInterest,
    ],
    fogOfWar: [
        ...(forlindonData.fogOfWar || []),
        ...(eriadorData.fogOfWar || []),
        ...(haradwaithData.fogOfWar || []),
        ...(umbarData.fogOfWar || []),
        ...(gondorData.fogOfWar || []),
        ...(rhovanionData.fogOfWar || []),
        ...(mordorData.fogOfWar || []),
        ...(minhiriathData.fogOfWar || []),
    ]
};
