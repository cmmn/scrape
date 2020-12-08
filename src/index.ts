#!/usr/bin/env node

require('dotenv').config();
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [['@babel/transform-runtime']],
});
import 'module-alias/register';
import puppeteer from 'puppeteer';
import { init, downloader, parser } from './services';
import { config, WaitUntil } from './data';
// import { getUserListData, getMoreUserData, writeUsersToIndex, writeHtmlToIndex } from './services';

puppeteer
  .launch()
  .then(async (browser) => {
    // setup directories, puppeteer and queue inputs
    await init();
    // initialize page
    const page = await browser.newPage();
    // navigate to url
    await page.goto('https://github.com', { waitUntil: config.waitUntil as WaitUntil });
    // download html from page
    const html = await downloader(page, config.selector as string);
    // parse data from html
    const data = await parser(page, html);
    console.log({ data });

    // store data

    // dequeue url

    // close browser
    await browser.close();
  })
  .catch((rejected) => console.log('Catching all errors here', rejected));
