const cheerio = require('cheerio');
const Downloader = require('node-url-downloader-mod');
const rimraf = require("rimraf");
const axios = require('axios');
import scrape from 'website-scraper';
import Store from '../../models/Store'
import Card from '../../models/Сard'

const {Scraper, Root, DownloadContent, OpenLinks, CollectContent} = require('nodejs-web-scraper');

async function fetchData(url){
    console.log("Crawling data...")

    // make http call to url
    let response = await axios(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Content-Type': 'text/html; charset=UTF-8'
        }
    }).catch((err) => console.log(err));

    if(response?.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }

    return response;

}

export default async (req, res) => {
    const data = [];
    // rimraf("./cache", async function () {
        console.log("removing save: done");

        try {
            const baseUrl = 'https://hardprice.ru';
            const url = `${baseUrl}/?search=3060&mode=match`;

            let resp = await fetchData(url);
            if(!resp?.data){
                console.log("Invalid data Obj");
                return;
            }
            const html = resp.data;

            const $ = cheerio.load(html);


            const products = $('.products-list');
            console.log(products)
            products.children().map(function(i, item) {
                console.log($(item).find('div.products-list-v2__item-head').text())
            });


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
