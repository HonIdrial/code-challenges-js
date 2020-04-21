const express = require('express');
const controller = require('./math.controller');
const router = express.Router();

router.get('/next/:num', controller.getNextNumber);
router.get('/sum2nums/:num1/:num2', controller.sumTwoNumbers);

module.exports = router;
