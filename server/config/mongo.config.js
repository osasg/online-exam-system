'use strict';

const { MongoClient } = require('mongodb');

const connect = () => new Promise((resolve, reject) => {
  const { database: configs, logger } = global.configuration;

  MongoClient.connect(
    configs.connectionString,
    configs.attributes,
    (err, client) => {
      if (err)
        return reject(err);

      const db = client.db(configs.dbName);
      resolve({ db, client });
    }
  )
})

module.exports = { connect };
