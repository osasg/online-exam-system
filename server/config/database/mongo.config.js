'use strict';

const { MongoClient } = require('mongodb');
const configs = require('./db.config');

const connect = () => new Promise((resolve, reject) => {
  MongoClient.connect(
    configs.connectionString,
    configs.attributes,
    (err, client) => {
      if (err) 
        return reject(err);
      
      const db = client.db(configs.dbName);
      resolve(db);
    }
  )
})

module.exports = Object.create({ connect });
