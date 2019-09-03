const joi = require('@hapi/joi');

const examValidator = joi.object().keys({
  teacher_id: joi.string().required(),
  subject_id: joi.string().required(),
  participant_ids: joi.string().required(),
  name: joi.string().required(),
  descriptions: joi.string().required(),
  status: joi.valid('WAITING', 'CONDUCTING', 'CLOSED'),
  duration: joi.string().required(),
  startDate: joi.string().required(),
  dueDate: joi.string().required(),
  questions: joi.array().items(joi.object().keys({
    a: joi.string().required(),
    b: joi.string().required(),
    c: joi.string().required(),
    d: joi.string().required(),
    rightAnswer: joi.string().required(),
    fileAttach: joi.string().required()
  }))
});

module.exports = examValidator;
