export interface AppEnv {
  BUILD_DATE: string;
  VCS_REF: string;
  VERSION: string;
  API_URL: string;
  NODE_ENV: string;
  HOSTNAME?: string;
  DIGEST_IMAGE?: string;
}

declare global {
    interface Window { __app_env: AppEnv; }
}
