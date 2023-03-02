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
    /*FIXME: 
    - Filter applied in this way dont work:  https://api.uktradeinfo.com/Exports?($filter=MonthId ge 201901 and MonthId le 201912)
    - But if we apply the filter without parentheses and only for one condition it works
    */

    const resultAggregation = [];
    let urlChange =
      "https://api.uktradeinfo.com/Export?$filter=MonthId eq 202211";

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

exports.getTraders = async (req, res) => {
  try {
    

    const resultAggregation = [];
    let urlChange =
      "https://api.uktradeinfo.com/Trader";

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

exports.getCommodity = async (req, res) => {
  try {
    

    const resultAggregation = [];
    let urlChange =
      "https://api.uktradeinfo.com/Commodity";

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

exports.getDate = async (req, res) => {
  try {
    

    const resultAggregation = [];
    let urlChange =
      "https://api.uktradeinfo.com/Date?$filter=MonthId eq 202211";

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
