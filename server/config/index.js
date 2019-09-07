const { to } = require('await-to-js');

const logger = require('./logger.config');
const database = require('./mongo.config');

const environment = require(`./environment.config`);

const initialize = async () => {
  const configuration = { ...environment };
  global.configuration = configuration;

  const [ err, { db, client } ] = await to(database.connect());
  if (err) {
    logger.error('An error occurred while connecting to database');
    logger.error(err.message);
    logger.error(err.stack);

    return;
  }

  configuration.db = db;
  configuration.mongoClient = client;
  configuration.logger = logger;

  return configuration;
}

module.exports = { initialize };
