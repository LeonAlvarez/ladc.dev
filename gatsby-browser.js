import ReactGA from 'react-ga';
import { url, gaTrackId, gaOptimizeId } from './config.json';

import 'prismjs/themes/prism-solarizedlight.css';

const isLocalDevelopment = () => window && window.location && window.location.origin !== url;

if (isLocalDevelopment() === false) {
    ReactGA.initialize(gaTrackId);
    if (gaOptimizeId) {
        ReactGA.ga('require', gaOptimizeId);
    }
}

console.log(
    `${'\n'} %c Leon %c https://ladc.dev ${'\n'}${'\n'}`,
    'color: #6cf; background: #030307; padding:5px 0;',
    'background: #6cf; padding:5px 0;',
);

export const onRouteUpdate = (state) => {
    if (isLocalDevelopment() !== true) {
        ReactGA.pageview(state.location.pathname);
    } else {
        console.log('isLocalDevelopment is true, so ReactGA is not activated');
    }
};