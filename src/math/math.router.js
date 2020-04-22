const express = require('express');
const router = express.Router();

const common = require('../common');
const controller = require('./math.controller');
const validator = require('./math.validator');

router.get(
  '/next/:num',
  validator.getNextNumber(),
  common.checkValidation,
  controller.getNextNumber);

router.get(
  '/sum2nums/:num1/:num2',
  validator.sumTwoNumbers(),
  common.checkValidation,
  controller.sumTwoNumbers);

module.exports = router;
