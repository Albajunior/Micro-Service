const express = require('express');
require("dotenv").config();
const app = express();
const proxy = require("express-http-proxy")
const apiMiddleware = require('./App/middleware/apiMiddleware.js')

app.use("/api/auth", proxy("http://localhost:8081"))
app.use("/api/product", apiMiddleware, proxy("http://localhost:8082"))

app.listen(3000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});