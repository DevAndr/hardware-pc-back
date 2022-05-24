const Router = require("express").Router;
const {test} = require("../controllers/parserController");

const routerParser = new Router();
const ROUTE_NAME = "data-parser";

routerParser.get(`/${ROUTE_NAME}/test`, test)

module.exports = routerParser