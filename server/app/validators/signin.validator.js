const joi = require('@hapi/joi');

const signInValidator = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required()
});

module.exports = signInValidator;
