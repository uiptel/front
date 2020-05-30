// tslint:disable: no-console

import config from './config';

const noop = () => undefined;

export const debug =  config.debug ? console.debug.bind(console) : noop;
export const log = config.debug ? console.log.bind(console) : noop;
export const dir = config.debug ? console.dir.bind(console) : noop;
export const info = console.info.bind(console);
