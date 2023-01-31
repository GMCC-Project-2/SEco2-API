const express = require("express");
const axios = require("axios");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("essa eh a api seco2");
});

app.get("/TradeInfo-API", async (req, res) => {
    try {
        axios.get("https://api.uktradeinfo.com").then((response) => {
            return res.status(201).json(response.data.value);
        });
    } catch (error) {
        return res.status(400).json("message: " + error);
    }
});

app.listen(port, () => {
    console.log("🚀 Server ready at PORT:" + port);
});