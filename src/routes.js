const express = require("express");
const { getData, getExports, getCommodity, getTraders, getDate } = require("./controllers/TradeInfoAPI");
const { Home } = require("./controllers/Home");
const routes = express.Router();

routes.get("/", Home);
routes.get("/TradeInfo-API", getData);
routes.get("/TradeInfo-API/Exports", getExports);
routes.get("/TradeInfo-API/Commodity", getCommodity);
routes.get("/TradeInfo-API/Trader", getTraders);
routes.get("/TradeInfo-API/Date", getDate);

module.exports = routes;