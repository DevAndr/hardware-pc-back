const puppeteer = require('puppeteer-core');
const chrome = require('chrome-aws-lambda');
const cheerio = require('cheerio');
const Store = require('../models/Store')
const Card = require('../models/Сard')

const parseSite = async () => {
    const data = [];

    try {
        const baseUrl = 'https://hardprice.ru';
        const url = `${baseUrl}/?search=3060+3080&mode=match`;

        const browser = await puppeteer.launch(process.env.AWS_EXECUTION_ENV ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
            ignoreDefaultArgs: ['--disable-extensions']
        } : {
            args: [],
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            ignoreDefaultArgs: ['--disable-extensions']
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        const content = await page.content();
        const $ = cheerio.load(content);

        const products = $('.products-list');
        products.children().map((i, item) => {
            const divHead = $(item).find('div.products-list-v2__item-head');
            const icon = `${baseUrl}${$(divHead).find('img').attr('src')}`;
            const title = $(divHead).find('a.title').text().trim();
            const description = $(divHead).find('p.products-list-v2__item-description').text().trim();

            const stores = [];
            const divPrices = $(item).find('div.products-list-v2__item-prices');
            divPrices.children().map((i, store) => {
                const price = $(store).attr('data-price');
                const dateUpdatePrice = $(store).find('div.store-caption-v').text().trim();
                const nameStore = $(store).find('span.text-warning').text().trim();
                const priceFormat = $(store).find('.price').text().trim();
                const priceChange = $(store).find('.label').text().trim();
                stores.push(new Store(price, dateUpdatePrice, nameStore, priceFormat, priceChange));
            });

            const card = new Card(title, icon, description, stores, stores);
            data.push(card);
        });

        await browser.close();
    } catch (e) {
        console.log(e);
        data.push(e.toString())
    }

    return data;
}

module.exports = {
    parseSite
}