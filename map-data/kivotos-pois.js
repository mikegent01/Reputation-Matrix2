// map-data/kivotos-pois.js
import { kivotosPois } from './Kivotos.js';
import { grandLatinPois } from './GrandLatin.js';
import { austelarassiaPois } from './Austelarassia.js';
import { silbaarstadtPois } from './Silbaarstadt.js';
import { alhaoungPois } from './AL_haoung.js';
import { northernAureanPolePois } from './NorthernAureanPole.js';
import { newCairoPois } from './NewCairo.js';
import { newAmericaPois } from './NewAmerica.js';
import { southernAureanPolePois } from './SouthernAureanPole.js';


export const kivotosData = {
    pointsOfInterest: [
        ...kivotosPois,
        ...grandLatinPois,
        ...austelarassiaPois,
        ...silbaarstadtPois,
        ...alhaoungPois,
        ...northernAureanPolePois,
        ...newCairoPois,
        ...newAmericaPois,
        ...southernAureanPolePois,
    ]
};
