// const puppeteer = require('puppeteer-core');
const chromium = require('chrome-aws-lambda');
// const AWS = require('aws-sdk');
const axios = require('axios');
const Downloader = require('node-url-downloader');
const cheerio = require('cheerio');
const Store = require('../models/Store')
const Card = require('../models/Сard')
const playwright = require('playwright');


async function getBrowserInstance() {
    const executablePath = await chromium.executablePath

    if (!executablePath) {
        // running locally
        const puppeteer = require('puppeteer')
        return puppeteer.launch({
            args: chromium.args,
            headless: true,
            ignoreHTTPSErrors: true
        })
    }

    return chromium.puppeteer.launch({
        args: chromium.args,
        executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true
    })
}

const parseSite = async () => {
    const data = [];

    try {
        const baseUrl = 'https://hardprice.ru';
        const url = `${baseUrl}/?search=3060+3080&mode=match`;

        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();

        await page.goto(url);
        const content = await page.content();
        const $ = cheerio.load(content);
        console.log($('.products-list'))
        await browser.close();


        // const download = new Downloader();
        // download.get(url);
        // download.on('done', (dst) => {
        //     console.log(dst)
        // });

        // const resp = await axios.get(url);
        // console.log(resp.data)

        // const browser = await getBrowserInstance();
        // const page = await browser.newPage();
        // await page.goto(url, { waitUntil: 'networkidle0' });
        // const content = await page.content();
        // const $ = cheerio.load(content);
        //
        // const products = $('.products-list');
        // products.children().map((i, item) => {
        //     const divHead = $(item).find('div.products-list-v2__item-head');
        //     const icon = `${baseUrl}${$(divHead).find('img').attr('src')}`;
        //     const title = $(divHead).find('a.title').text().trim();
        //     const description = $(divHead).find('p.products-list-v2__item-description').text().trim();
        //
        //     const stores = [];
        //     const divPrices = $(item).find('div.products-list-v2__item-prices');
        //     divPrices.children().map((i, store) => {
        //         const price = $(store).attr('data-price');
        //         const dateUpdatePrice = $(store).find('div.store-caption-v').text().trim();
        //         const nameStore = $(store).find('span.text-warning').text().trim();
        //         const priceFormat = $(store).find('.price').text().trim();
        //         const priceChange = $(store).find('.label').text().trim();
        //         stores.push(new Store(price, dateUpdatePrice, nameStore, priceFormat, priceChange));
        //     });
        //
        //     const card = new Card(title, icon, description, stores, stores);
        //     data.push(card);
        // });
        //
        // await browser.close();
    } catch (e) {
        console.log(e);
        data.push(e.toString())
    }

    return data;
}

module.exports = {
    parseSite
}