const express = require('express');
const common = require('../common');
const controller = require('./crypto.controller');
const rules = require('./crypto.rules');

const router = express.Router();

/**
 * Creates a hash from the input Convert Minutes into Seconds in 3 steps:
 *  - Creates a sha256 hash from an array of strings.
 *  - Sorts the hash, alphas first digits second.
 *  - Returns a new sha256 hash from the sorted string.
 * @param {string} seed - Variable number of input strings to seed the hash
 * @returns {hash} Resulting hash
 */
router.get(
  '/juggle-hash/*',
  rules.juggleHash(),
  common.checkValidation,
  controller.juggleHash);

module.exports = router;
