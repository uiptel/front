import { TargetOptions } from '@angular-builders/custom-webpack';
import * as cheerio from 'cheerio';
import * as minfier from 'html-minifier';
import { AppEnv } from './global';

const serve = $ => {
    const  { API_URL, VERSION, BUILD_DATE, VCS_REF, NODE_ENV } = process.env;
    const env: AppEnv = { API_URL, VERSION, BUILD_DATE, VCS_REF, NODE_ENV, DIGEST_IMAGE: 'PROD000FFF' };

     $('head').append(`<script>__app_env = ${JSON.stringify(env)};</script>`);
     return $.html();
};

const build = $ => minfier.minify(serve($), {
    removeComments: true,
    removeAttributeQuotes: true,
    collapseWhitespace: true,
});

export default (targetOptions: TargetOptions, indexHtml: string) => {
    const $ = cheerio.load(indexHtml);
    const transformers = { serve, build };
    return transformers[targetOptions.target]($);
};
