const logger = require('./logger/');

const envVar = process.env.NODE_ENV || 'development';

const environment = require(`./environments/${envVar}.env`);

const initialize = async () => {
  global.configuration = {
    ...environment,
    logger
  }
}

module.exports = { initialize };
