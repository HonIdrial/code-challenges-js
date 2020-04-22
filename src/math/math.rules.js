const { param } = require('express-validator');

module.exports = {
  getNextNumber: () => {
    return [
      param('num', 'input must be numeric').exists().isNumeric()
    ]
  },

  sumTwoNumbers: () => {
    return [
      param('num1', 'input must be numeric').exists().isNumeric(),
      param('num2', 'input must be numeric').exists().isNumeric()
    ]
  }
};
