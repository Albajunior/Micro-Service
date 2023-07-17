const express = require('express');
const app = express();
const router = require("./App/routes/index.js");

//Ajout des routes
app.use(express.json());
app.use("", router);

module.exports = app;