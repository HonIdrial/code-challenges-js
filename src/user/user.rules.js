const { param } = require('express-validator');

module.exports = {
  isValidName: () => {
    return [
      param('name', 'input is mandatory').exists()
    ]
  }
};
