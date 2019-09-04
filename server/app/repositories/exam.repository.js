const moment = require('moment');
const { ObjectId } = require('mongodb');

const { utils } = require('../libs');

const { db } = global.configuration;
const collection = db.collection('exams');

const findAll = ({ teacher_id, subject_id, name, status, skip, limit }) => new Promise((resolve, reject) => {
  const queryOptions = utils.filterEmptyFields({ teacher_id, subject_id, name, status });
  const cursor = collection.find(queryOptions)
    .skip(parseInt(skip))
    .limit(parseInt(limit));

  const exams = [];

  cursor.forEach(doc => exams.push(doc), err => {
    if (err)
      return reject(err);

    resolve(exams)
  });
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const addEnrollment = async ({ _id, enrollment_id }) => {
  return collection.updateOne({ _id: ObjectId(_id) }, { $push: {
    enrollment_ids: enrollment_id
  }});
}

const create = async ({
  name, subject_id, teacher_id,
  duration, dueDate, startDate, description, status
}) => {
  const exam = {};

  exam.name = name;
  exam.subject_id = subject_id;
  exam.teacher_id = teacher_id;
  exam.duration = duration;
  exam.dueDate = dueDate;
  exam.startDate = startDate;
  exam.description = description;
  exam.status = status;

  const response = await collection.insertOne(exam);

  return response.ops[0];
}

const update = async ({
  _id,
  name, subject_id, teacher_id, enrollment_ids,
  duration, dueDate, startDate, description, status
}) => {
  const exam = {};

  exam.name = name;
  exam.subject_id = subject_id;
  exam.teacher_id = teacher_id;
  exam.enrollment_ids = enrollment_ids;
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
  addEnrollment,
  create,
  update,
  remove
}
