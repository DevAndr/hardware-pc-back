const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const test = async (req, res) => {
    res.json({data: 'ok'})
}

module.exports = {
    test
}