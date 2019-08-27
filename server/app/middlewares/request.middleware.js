const status = require('http-status');

const { logger } = global.configuration;

const wirePreRequest = (req, res, next) => {
  logger.info(`Handle ${req.method} request <---- ${req.url}`);
  next();
};

const wirePostRequest = (err, req, res, next) => {
  if (!err) return next();

  logger.error(`ERROR :{} ${status.BAD_GATEWAY} ${err.message}`);
  logger.error(err.stack);

  res.status(status.BAD_GATEWAY).send({
    success: false,
    status: status.BAD_GATEWAY,
    message: err.message,
    error: {
      message: err.message,
      stack: err.stack
    }
  });
}

const wireNotFoundMiddleware = (req, res, next) => {
  logger.warn(`ERROR :{} ${status.NOT_FOUND}`);
  
  res.status(status.NOT_FOUND).send({
    success: false,
    status: status.NOT_FOUND,
    url: req.url,
    method: req.method
  });
}

module.exports = {
  wirePostRequest,
  wirePreRequest,
  wireNotFoundMiddleware
}
