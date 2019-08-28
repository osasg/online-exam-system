const moment = require('moment');
const { ObjectId } = require('mongodb');

const { db } = global.configuration;
const collection = db.collection('exams');

const findAll = () => new Promise((resolve, reject) => {
  const cursor = collection.find();
  const exams = [];

  cursor.forEach(doc => exams.push(doc), () => resolve(exams));
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const create = async ({
  name, subject_id, teacher_id, participant_ids,
  duration, dueDate, startDate, description, status
}) => {
  const exam = {};

  exam.name = name;
  exam.subject_id = subject_id;
  exam.teacher_id = teacher_id;
  exam.participant_ids = participant_ids;
  exam.duration = duration;
  exam.dueDate = dueDate;
  exam.startDate = startDate;
  exam.description = description;
  exam.status = status;

  return collection.insertOne(exam);
}

const update = async ({
  _id,
  name, subject_id, teacher_id, participant_ids,
  duration, dueDate, startDate, description, status
}) => {
  const exam = {};

  exam.name = name;
  exam.subject_id = subject_id;
  exam.teacher_id = teacher_id;
  exam.participant_ids = participant_ids;
  exam.duration = duration;
  exam.dueDate = dueDate;
  exam.startDate = startDate;
  exam.description = description;
  exam.status = status;

  return collection.updateOne({ _id: ObjectId(_id) }, { $set: exam });
}

const remove = async ({ _id }) => {
  return collection.deleteOne({ _id: ObjectId(_id) });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}
