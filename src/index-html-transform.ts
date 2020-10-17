import { TargetOptions } from '@angular-builders/custom-webpack';
import * as cheerio from 'cheerio';
import * as minfier from 'html-minifier';
import { AppEnv } from './global';

const serve = $ => {
    const  { API_URL, VERSION, DIGEST_IMAGE, BUILD_DATE, VCS_REF, NODE_ENV, HOSTNAME } = process.env;
    const env: AppEnv = { API_URL, VERSION, DIGEST_IMAGE, BUILD_DATE, VCS_REF, NODE_ENV, HOSTNAME };

     $('head').append(`<script id="__app_env">__app_env = ${JSON.stringify(env)};</script>`);
     return $.html();
};

const build = $ => {
     $('head').append('<script id="__app_env" data-env="${JSON}">\
        __app_env = JSON.parse(atob(document.querySelector("#__app_env").dataset.env))</script>');

    return minfier.minify($.html(), {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
    });
};


export default (targetOptions: TargetOptions, indexHtml: string) => {

    const $ = cheerio.load(indexHtml);
    const transformers = { serve, build };

    return transformers[targetOptions.target]($);
};
