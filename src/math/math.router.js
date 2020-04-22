const express = require('express');
const common = require('../common');
const controller = require('./math.controller');
const rules = require('./math.rules');

const router = express.Router();

/**
 * Return the Next Number from the Integer Passed
 * @param {number} num - Base number to the next in line
 * @returns {number} Next number of num
 */
router.get('/next/:num', rules.getNextNumber(), common.checkValidation, controller.getNextNumber);

/**
 * Return the Sum of Two Numbers
 * @param {number} num1 - First summand in the operation
 * @param {number} num2 - Second summand in the operation
 * @returns {number} Sum of num1 and num2
 */
router.get('/sum2nums/:num1/:num2', rules.sumTwoNumbers(), common.checkValidation, controller.sumTwoNumbers);

module.exports = router;
