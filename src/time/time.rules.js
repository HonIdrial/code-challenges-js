const { param } = require('express-validator');

module.exports = {
  minutesToSeconds: () => {
    return [
      param('minutes', 'input must be integer').exists().isInt()
    ]
  }
};
