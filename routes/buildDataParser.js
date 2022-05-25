const Router = require("express").Router;
const {parsingData} = require("../controllers/parserController");

const routerParser = new Router();
const ROUTE_NAME = "parser";

routerParser.get(`/${ROUTE_NAME}`, parsingData)

module.exports = routerParser