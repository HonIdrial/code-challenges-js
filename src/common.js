const { validationResult } = require('express-validator');

module.exports = {
  checkValidation: (req, res, next) => {
    const errors = validationResult(req);

    return errors.isEmpty()
      ? next()
      : res.status(422).json({ errors: errors.array() });
  }
};
