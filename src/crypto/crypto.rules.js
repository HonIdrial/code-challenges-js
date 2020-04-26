const { param } = require('express-validator');

module.exports = {
  juggleHash: () => {
    return [
      param('*', 'the seed is mandatory').exists()
    ]
  }
};
