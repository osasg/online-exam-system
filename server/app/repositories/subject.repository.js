const moment = require('moment');
const { ObjectId } = require('mongodb');

const { db } = global.configuration;
const collection = db.collection('subjects');

const findAll = () => new Promise((resolve, reject) => {
  const cursor = collection.find();
  const subjects = [];

  cursor.forEach(doc => subjects.push(doc), () => resolve(subjects));
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const create = async ({ name, description }) => {
  const subject = {};

  subject.name = name;
  subject.description = description;

  const response = await collection.insertOne(subject);
  return response.ops[0];
}

const update = async ({ _id, name, description }) => {
  const subject = {};

  subject.name = name;
  subject.description = description;

  return collection.updateOne({ _id: ObjectId(_id) }, { $set: subject });
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
