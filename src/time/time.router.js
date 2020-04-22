const express = require('express');
const router = express.Router();

const common = require('../common');
const controller = require('./time.controller');
const validator = require('./time.validator');

router.get(
  '/m2s/:minutes',
  validator.minutesToSeconds(),
  common.checkValidation,
  controller.minutesToSeconds);

module.exports = router;
