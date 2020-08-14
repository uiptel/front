interface AppEnv {
  'build_date': string,
  'digest_image': string,
  'vcs_ref': string,
  version: string,
  hostname: string,
}

declare var __app_env: AppEnv;
