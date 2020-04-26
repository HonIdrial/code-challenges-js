const express = require('express');
const cryptoRouter = require('./crypto/crypto.router');
const mathRouter = require('./math/math.router');
const timeRouter = require('./time/time.router');
const userRouter = require('./user/user.router');

const app = express();
app.use('/crypto', cryptoRouter);
app.use('/math', mathRouter);
app.use('/time', timeRouter);
app.use('/user', userRouter);

module.exports = app;
