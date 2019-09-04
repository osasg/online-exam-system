const { to } = require('await-to-js');

const { examHistoryRepository: ExamHistory } = require('../repositories');

const messages = {
  EXAM_HISTORY_FIND_ALL: 'EXAM_HISTORY_FIND_ALL',
  EXAM_HISTORY_FOUND: 'EXAM_HISTORY_FOUND',
  EXAM_HISTORY_NOT_FOUND: 'EXAM_HISTORY_NOT_FOUND',
  EXAM_HISTORY_FIND_ENROLLED_EXAM: 'EXAM_HISTORY_FIND_ENROLLED_EXAM',
  EXAM_HISTORY_STARTED: 'EXAM_HISTORY_STARTED',
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
  const [ err, examHistory ] = await to(ExamHistory.findById({ _id: req.params._id }));
  if (err) return next(err);

  if(!examHistory)
    return res.send({
      success: true,
      message: messages.EXAM_HISTORY_NOT_FOUND,
      examHistory: null
    });

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_FOUND,
    examHistory
  });
}

const findEnrolledExams = async (req, res, next) => {
  const [ err, enrolledExams ] = await to(ExamHistory.findEnrolledExams({ student_id: req.user._id }));
  if (err) return next(err);
  console.log(enrolledExams)

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_FIND_ENROLLED_EXAM,
    enrolledExams
  });
}

const start = async (req, res, next) => {
  const [ err ] = await to(ExamHistory.updateStatus({ _id: req.params._id, status: 'DOING' }));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_STARTED
  });
}

const update = async (req, res, next) => {
  const { _id } = req.params;
  const [ err ] = await to(ExamHistory.update({ _id, ...req.body }));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(ExamHistory.remove({ _id: req.params._id }));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.EXAM_HISTORY_REMOVED
  });
}

module.exports = {
  findAll,
  findById,
  findEnrolledExams,
  start,
  update,
  remove
}
