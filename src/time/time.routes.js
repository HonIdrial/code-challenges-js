const express = require('express');
const controller = require('./time.controller');
const router = express.Router();

router.get('/m2s/:minutes', controller.minutesToSeconds);

module.exports = router;
