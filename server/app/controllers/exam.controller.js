const { to } = require('await-to-js');

const { examRepository: Exam } = require('../repositories');
const { examValidator } = require('../validators/');

const messages = {
  EXAM_FOUND: 'EXAM_FOUND',
  EXAM_NOT_FOUND: 'EXAM_NOT_FOUND',
  EXAM_CREATED: 'EXAM_CREATED',
  EXAM_UPDATED: 'EXAM_UPDATED',
  EXAM_REMOVED: 'EXAM_REMOVED',
  VALIDATION_ERROR: 'VALIDATION_ERROR'
}

const findAll = async (req, res, next) => {
  const [ err, exams ] = await to(Exam.findAll(req.queries));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_FOUND,
    exams
  });
}

const findById = async (req, res, next) => {
  const [ err, exam ] = await to(Exam.findById({ _id: req.params._id }));
  if (err) return next(err);

  if (!exam)
    return res.send({
      success: false,
      message: messages.EXAM_NOT_FOUND,
      exam: null
    });

  res.send({
    success: true,
    message: messages.EXAM_FOUND,
    exam
  });
}

const create = async (req, res, next) => {
  const { err0, value } = examValidator.validate(req.body);
  if (err0)
    return res.send({
      success: false,
      message: messages.VALIDATION_ERROR,
      error: err0
    });

  const [ err1, exam ] = await to(Exam.create(req.body));
  if (err1) return next(err1);
  
  res.send({
    success: true,
    message: messages.EXAM_CREATED,
    exam
  });
}

const update = async (req, res, next) => {
  const { _id } = req.params;
  const { err0, value } = examValidator.validate({ _id, ...req.body });
  if (err0)
    return res.send({
      success: false,
      message: messages.VALIDATION_ERROR,
      error: err0
    });

  const [ err ] = await to(Exam.update(req.body));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(Exam.remove({ _id: req.params._id}));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_REMOVED
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}
