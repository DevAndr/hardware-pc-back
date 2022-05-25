const Router = require("express").Router;
const {test} = require("../controllers/parserController");

const routerParser = new Router();
const ROUTE_NAME = "parser";

routerParser.get(`/${ROUTE_NAME}`, test)

module.exports = routerParser