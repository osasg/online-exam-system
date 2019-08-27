const { to } = require('await-to-js');

const logger = require('./logger/');
const database = require('./database/mongo.config');
const envVar = process.env.NODE_ENV || 'development';

const environment = require(`./environments/${envVar}.env`);

const initialize = async () => {
  const [ err, db ] = await to(database.connect());
  if (err) {
    logger.error('An error occurred while connecting to database');
    logger.error(err.message);
    logger.error(err.stack);

    return;
  }

  const configuration = {
    ...environment,
    logger,
    db
  }

  global.configuration = configuration;

  return configuration;
}

module.exports = { initialize };
