// import * as dotenv from "dotenv";
// dotenv.config();

const dotenv = require("dotenv");

const express = require("express");
const app = express();

const port = 5500;
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, function () {
  console.log("App listening on port " + port);
});
