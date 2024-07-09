/* eslint-disable no-undef */

const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const app = express();

const routes = require("./routes/routes");

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

module.exports = app;
