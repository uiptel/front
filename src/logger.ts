// tslint:disable: no-console

import { environment } from './environments/environment';

const noop = () => undefined;

export const debug =  environment.debug ? console.debug.bind(console) : noop;
export const log = environment.debug ? console.log.bind(console) : noop;
export const dir = environment.debug ? console.dir.bind(console) : noop;
export const info = console.info.bind(console);
