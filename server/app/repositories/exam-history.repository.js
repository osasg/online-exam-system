const moment = require('moment');
const { ObjectId } = require('mongodb');

const { db } = global.configuration;
const collection = db.collection('examHistories');

const findAll = () => new Promise((resolve, reject) => {
  const cursor = collection.find();
  const examHistories = [];

  cursor.forEach(doc => examHistories.push(doc), () => resolve(examHistory));
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const create = async ({ exam_id, student_id, questions  }) => {
  const examHistory = {};

  examHistory.exam_id = exam_id;
  examHistory.student_id = student_id;
  examHistory.questions = questions;

  return collection.insertOne(examHistory);
}

const update = async ({ questions  }) => {
  const examHistory = {};

  examHistory.questions = questions;

  return collection.updateOne({ _id: ObjectId(_id) }, { $set: examHistory });
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
