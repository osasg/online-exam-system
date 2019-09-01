const { to } = require('await-to-js');

const { examHistoryRepository: ExamHistory } = require('../repositories');

const messages = {
  EXAM_HISTORY_FIND_ALL: 'EXAM_HISTORY_FIND_ALL',
  EXAM_HISTORY_FIND_BY_ID: 'EXAM_HISTORY_FIND_BY_ID',
  EXAM_HISTORY_CREATED: 'EXAM_HISTORY_CREATED',
  EXAM_HISTORY_UPDATED: 'EXAM_HISTORY_UPDATED',
  EXAM_HISTORY_REMOVED: 'EXAM_HISTORY_REMOVED'
}

const findAll = async (req, res, next) => {
  const [ err, examHistories ] = await to(ExamHistory.findAll());
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_FIND_ALL,
    examHistories
  });
}

const findById = async (req, res, next) => {
  const [ err, examHistory ] = await to(ExamHistory.findById(req.params._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_FIND_BY_ID,
    examHistory
  });
}

const create = async (req, res, next) => {
  const [ err, examHistory ] = await to(ExamHistory.create(req.body));
  if (err) return next(err);
  
  res.send({
    success: true,
    message: messages.EXAM_HISTORY_CREATED,
    examHistory
  });
}

const update = async (req, res, next) => {
  const [ err ] = await to(ExamHistory.update(req.body));
  if (err) return next(err);

  res.send({
    success: false,
    message: messages.EXAM_HISTORY_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(ExamHistory.remove(req.user._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_REMOVED
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}
