
const axios = require("axios");

exports.getData = async (req, res) => {
  try {
    axios.get("https://api.uktradeinfo.com").then((response) => {
      return res.status(201).json(response.data.value);
    });
  } catch (error) {
    return res.status(400).json("message: " + error);
  }
};

exports.getExports = async (req, res) => {
  try {
    return res.send("TO BE CREATED");
  } catch (error) {
    return res.status(400).json("message: " + error);
  }
};
