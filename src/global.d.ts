interface AppEnv {
  BUILD_DATE: string,
  DIGEST_IMAGE: string,
  VCS_REF: string,
  VERSION: string,
  HOSTNAME: string,
  NODE_ENV: string,
}

declare var __app_env: AppEnv;
