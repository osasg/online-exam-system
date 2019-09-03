const bcrypt = require('bcrypt');
const moment = require('moment');
const { ObjectId } = require('mongodb');

const { db } = global.configuration;
const collection = db.collection('accounts');

const findAll = ({  }) => new Promise((resolve, reject) => {
  const cursor = collection.find({});
  const accounts = [];

  cursor.forEach(acc => accounts.push(acc), () => resolve(accounts));
})

const findById = async ({ _id }) => {
  return collection.findOne({ _id: ObjectId(_id) });
}

const findByUsername = async ({ username }) => {
  return collection.findOne({ username });
}

const findRolesById = async ({ _id }) => {
  const account = await collection.findOne({ _id: ObjectId(_id) });

  if (!account)
    return null;
  
  return account.roles;
}

const create = async ({ username, password, email, lastname, firstname }) => {
  const hashPassword = await bcrypt.hash(password, 10);

  const created = await collection.insertOne({
    username, password: hashPassword, email, lastname, firstname
  });

  return created.ops[0];
}

const update = async ({ _id, firstname, lastname, roles }) => {
  return collection.updateOne({ _id: ObjectId(_id) }, { $set: { firstname, lastname, roles } });
}

const remove = async ({ _id }) => {
  return collection.deleteOne({ _id: ObjectId(_id) });
}

/**private */
const generateExpirationDate = () => {
    const date = (new Date).toJSON();
    return moment(date).add(
      process.env.EMAILKEY_DURATION,
      'seconds'
    ).toJSON();
}

const randomKey = length => Array.from({ length })
  .map(() => Math.floor(Math.random() * 10))
  .join('');

module.exports = {
  findAll,
  findById,
  findRolesById,
  findByUsername,
  create,
  update,
  remove
}
