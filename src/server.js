const express = require('express');
const app = express();
const timeRouter = require('./time/time.routes');

app.use('/time', timeRouter);
app.get('/', (req, res) => res.send('Hello World!'));

module.exports = app;
