const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const test = async (req, res) => {
    res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
}

module.exports = {
    test
}