const ParsingService = require("../services/ParsingService")
const Card = require('../models/Сard')

const parsingData = async (req, res) => {
    const data = await ParsingService.parseSite();
    res.json(data);
}

module.exports = {
    parsingData
}