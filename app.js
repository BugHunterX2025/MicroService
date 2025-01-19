const express = require("express");
const morgon = require("morgan");
const app = express();
app.use(morgon("dev"));

app.get("/", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {}
  res.send("hello");
});
app.get("/stress-test", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {}
  res.send("hello");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
