const { to } = require('await-to-js');

const { examRepository: Exam } = require('../repositories');

const messages = {
  EXAM_FIND_ALL: 'EXAM_FIND_ALL',
  EXAM_FIND_BY_ID: 'EXAM_FIND_BY_ID',
  EXAM_CREATED: 'EXAM_CREATED',
  EXAM_UPDATED: 'EXAM_UPDATED',
  EXAM_REMOVED: 'EXAM_REMOVED'
}

const findAll = async (req, res, next) => {
  const [ err, exams ] = await to(Exam.findAll());
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_FIND_All,
    exams
  });
}

const findById = async (req, res, next) => {
  const [ err, exam ] = await to(Exam.findById(req.params._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_FIND_BY_ID,
    exam
  });
}

const create = async (req, res, next) => {
  const [ err, exam ] = await to(Exam.create(req.body));
  if (err) return next(err);
  
  res.send({
    success: true,
    message: messages.EXAM_CREATED,
    exam
  });
}

const update = async (req, res, next) => {
  const [ err ] = await to(Exam.update(req.body));
  if (err) return next(err);

  res.send({
    success: false,
    message: messages.EXAM_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(Exam.remove(req.user._id));
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
