const cheerio = require('cheerio');
const Downloader = require('node-url-downloader-mod');
const rimraf = require("rimraf");
import scrape from 'website-scraper';
import Store from '../../models/Store'
import Card from '../../models/Сard'

const {Scraper, Root, DownloadContent, OpenLinks, CollectContent} = require('nodejs-web-scraper');

export default async (req, res) => {
    const data = [];
    // rimraf("./cache", async function () {
        console.log("removing save: done");

        try {
            const baseUrl = 'https://jut.su/anime';
            const url = `${baseUrl}/anime`;

            // const download = new Downloader();
            // download.get(url, './cache', 'index.html');
            // download.on('done', (dst) => {
            //     console.log(dst)
            //
            // });

            // const options = {
            //     urls: [{url: baseUrl, filename: 'query.html'}],
            //     directory: './save/'
            // };
            //
            // const content = await scrape(options);
            // // console.log(content)
            // const $ = cheerio.load(content);
            // const products = $('.all_anime_content.anime_some_margin');
            // console.log(products.children())
            //
            // products.children().map((i, item) => {
            //     console.log(item)
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

            // const config = {
            //     baseSiteUrl: url,
            //     startUrl: baseUrl,
            //     filePath: './save/images/',
            //     concurrency: 10,
            //     maxRetries: 3,
            //     delay: 1000,
            //     removeStyleAndScriptTags: true,
            //     cloneFiles: true,
            //     timeout: 6000,
            //     logPath: './save/logs/'
            // }
            // const scraper = new Scraper(config);
            // const root = new Root();
            // const product = new CollectContent('.all_anime_content', {name:'products'});
            // root.addOperation(product);
            // await scraper.scrape(root);


            // const config = {
            //     baseSiteUrl: url,
            //     startUrl: baseUrl
            // }
            //
            // function getElementContent(element) {
            //     console.log(element)
            // }
            //
            // const scraper = new Scraper(config);
            // const root = new Root({
            //     getPageHtml: (htmlString, pageAddress) => {
            //         console.log(htmlString)
            //     }
            // });
            // const title = new CollectContent('.all_anime_content', {getElementContent,
            //     getElementList:(elementList,pageAddress)=>{
            //         console.log(elementList)
            //     }
            // });
            //
            // root.addOperation(title);
            // await scraper.scrape(root);


            // const browser = await playwright.chromium.launch();
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
//     }
// );
//
// await browser.close();
        } catch
            (e) {
            console.log(e);
            data.push(e.toString())
        }
    // });

    res.json({data});
}
