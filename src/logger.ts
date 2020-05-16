/* global console */

import config from './config';

// tslint:disable: no-shadowed-variable
// tslint:disable: no-console
export const debug = (({debug}) => (debug ? console.debug.bind(console) : () => undefined))(config);
export const log = (({debug}) => (debug ? console.log.bind(console) : () => undefined))(config);
export const info = console.info.bind(console);
export const dir = (({debug}) => (debug ? console.dir.bind(console) : () => undefined))(config);