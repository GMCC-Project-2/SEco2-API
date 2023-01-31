const express = require("express");
const { getData, getExports } = require("./controllers/TradeInfoAPI");
const { Home } = require("./controllers/Home");
const routes = express.Router();

routes.get("/", Home);
routes.get("/TradeInfo-API", getData);
routes.get("/TradeInfo-API/Exports", getExports);

module.exports = routes;