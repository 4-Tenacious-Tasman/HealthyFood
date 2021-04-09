require("dotenv").config();
const path = require("path");
const express = require("express");
const axios = require("axios");
const compression = require("compression");
const db = require("../database/index.js");
const { mealPlan, apiKey } = require("./config.js");
const routes = require("../server/controllers/routes/routes.js");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/", routes.healthyfood);
app.use("/*", express.static(path.join(__dirname, "../client/public")));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
