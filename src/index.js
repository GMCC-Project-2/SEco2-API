const express = require("express");
const routes = require("./routes");

const timeout = require("connect-timeout");
const app = express();
const port = 4000;

app.use(timeout("1800s"));

app.use(routes);

const server = app.listen(port, () => {
  console.log("🚀 Server ready at PORT:" + port);
});
