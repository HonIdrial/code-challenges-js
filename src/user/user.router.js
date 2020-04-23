const express = require('express');
const common = require('../common');
const controller = require('./user.controller');
const rules = require('./user.rules');

const router = express.Router();

/**
 * Checks that the input is a valid name
 * Rules:
 *  - Both initials and words must be capitalized.
 *  - Initials must end with a dot.
 *  - A name must be either 2 or 3 terms long.
 *  - If the name is 3 words long, you can expand the first and middle name or
 *    expand the first name only. You cannot keep the first name as an initial
 *    and expand the middle name only.
 *  - The last name must be a word (not an initial).
 * Definitions:
 *  - A term is either an initials or word.
 *  - Initials = 1 character
 *  - Words = 2+ characters (no dots allowed)
 * @param {string} name - The name to be checked
 * @returns {boolean} True if the name acknowledges the defined rules. False
*    otherwise
 */
router.get(
  '/is-valid-name/:name',
  rules.isValidName(),
  common.checkValidation,
  controller.isValidName);

module.exports = router;
