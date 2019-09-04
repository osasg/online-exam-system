const moment = require('moment');
const { ObjectId } = require('mongodb');

const { db } = global.configuration;
const collection = db.collection('examHistories');

const findAll = () => new Promise((resolve, reject) => {
  const cursor = collection.find();
  const examHistories = [];

  cursor.forEach(doc => examHistories.push(doc), () => resolve(examHistories));
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const findByStatus = ({ student_id, status }) => new Promise((resolve, reject) => {
  const cursor = collection.find({ student_id, status });
  const exams = [];

  cursor.forEach(doc => exams.push(doc), () => resolve(exams));
})

const create = async ({ exam_id, student_id, questions  }) => {
  const examHistory = {};

  examHistory.exam_id = exam_id;
  examHistory.student_id = student_id;
  examHistory.questions = questions;
  examHistory.status = 'ENROLLED';

  const response = await collection.insertOne(examHistory);
  
  return response.ops[0];
}

const update = async ({ _id, questions  }) => {
  const examHistory = {};

  examHistory.questions = questions;

  return collection.updateOne({ _id: ObjectId(_id) }, { $set: examHistory });
}

const updateSingleAnswer = async ({ _id, answer }) => {
  return collection.updateOne({
    _id: ObjectId(_id),
    questions: { $elemMatch: { no: answer.no} }
  },{
    $set: {
      'questions.$.answer': answer.answer,
      'questions.$.flag': answer.flag
    }
  });
}

const remove = async ({ _id }) => {
  return collection.deleteOne({ _id: ObjectId(_id) });
}

const updateStatus = async ({ _id, status }) => {
  return collection.updateOne({ _id: ObjectId(_id) }, { $set: { status } });
}

module.exports = {
  findAll,
  findById,
  findByStatus,
  create,
  update,
  remove,
  updateStatus,
  updateSingleAnswer
}
