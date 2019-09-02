const joi = require('@hapi/joi');

const signUpValidator = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required()
});

module.exports = signUpValidator;
