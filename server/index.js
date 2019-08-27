'use-strict';

const config = require('./config');

config.initialize()
  .then(configuration => {
    const server = require('./app/application');

    return server.start();
  })
  .then(() => {})
  .catch(err => {
    const { logger } = global.configuration;

    logger.error(err.message);
    logger.error(err.stack);
  });
