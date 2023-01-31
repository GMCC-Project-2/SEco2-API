const axios = require("axios");

exports.getData = async (req, res) => {
  try {
    await axios.get("https://api.uktradeinfo.com").then((response) => {
      return res.status(201).json(response.data.value);
    });
  } catch (error) {
    return res.status(400).json("message: " + error);
  }
};

exports.getExports = async (req, res) => {
  try {
    /*:FIXME: 
    - Create a variable to store response from original API
    - Create a While Condition to keep running while we have a SKIP answer at the end of the response
    - Create a variable to store API URL or partialURL
    */

    const resultAggregation = [];
    let urlChange = "https://api.uktradeinfo.com/Export";
    let count = 0


    while (urlChange != null) {
      //axios works like a postman on javascript code
      await axios.get(urlChange).then((response) => {
        resultAggregation.push(response.data.value);

        if (response.data["@odata.nextLink"]) {
          urlChange = String(response.data["@odata.nextLink"]);
        } else {
          urlChange = null;
        }
      });
    }
    return res.send(resultAggregation);
  } catch (error) {
    return res.status(400).json("message: " + error);
  }
};
