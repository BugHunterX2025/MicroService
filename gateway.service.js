const express = require("express");
const app = express();
const proxy = require("express-http-proxy");
app.use("/main", proxy("http://localhost:3001"));
app.use("/", proxy("https://jln03q0s-5000.inc1.devtunnels.ms"));
app.listen(3000, () => {
  console.log("Server gateway is running on port 3000");
});
