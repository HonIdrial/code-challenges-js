const express = require('express');
const common = require('../common');
const controller = require('./math.controller');
const rules = require('./math.rules');

const router = express.Router();
router.get('/next/:num', rules.getNextNumber(), common.checkValidation, controller.getNextNumber);
router.get('/sum2nums/:num1/:num2', rules.sumTwoNumbers(), common.checkValidation, controller.sumTwoNumbers);

module.exports = router;
