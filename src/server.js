const express = require('express');
const app = express();

const mathRouter = require('./math/math.router');
const timeRouter = require('./time/time.router');

app.use('/math', mathRouter);
app.use('/time', timeRouter);

module.exports = app;
