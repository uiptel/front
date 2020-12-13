import { AppEnv } from 'src/global';

const env: AppEnv = window.__app_env;

export const environment = {
  production: true,
  debug: false,
  defaultLang: 'en-US',
  apiUrl: env.API_URL,
  buildDate: env.BUILD_DATE,
  vcsRef: env.VCS_REF,
  version: env.VERSION,
  nodeEnv: env.NODE_ENV,
};
