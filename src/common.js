const { validationResult } = require('express-validator')

module.exports = {
  checkValidation: (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  }
};
