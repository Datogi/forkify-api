const express = require("express");

const foodRouter = require("./routes/foodRouter");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(`/api/v1/foods`, foodRouter);

module.exports = app;
