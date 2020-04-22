const express = require('express');
const mathRouter = require('./math/math.router');
const timeRouter = require('./time/time.router');

const app = express();
app.use('/math', mathRouter);
app.use('/time', timeRouter);

module.exports = app;
