const express = require('express');
const common = require('../common');
const controller = require('./time.controller');
const rules = require('./time.rules');

const router = express.Router();

/**
 * Convert Minutes into Seconds
 * @param {number} minutes the number of minutes to convert into seconds
 */
router.get('/m2s/:minutes', rules.minutesToSeconds(), common.checkValidation, controller.minutesToSeconds);

module.exports = router;
