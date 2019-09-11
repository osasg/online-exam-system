'use strict';

const spdy = require('spdy');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const appRoot = require('app-root-path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressJsonViews= require('express-json-views');
const path = require('path');

const { requestMiddleware } = require('./middlewares');
const { rootRoute } = require('./routes');
const helpers = require('./helpers');

const start = async () => {
  const { server: { port, ssl }, logger } = global.configuration;
  let morganFormat = ':method :url :status :res[content-length] - :response-time ms';

  process.on('uncaughtException', err => {
    logger.error('Unhandled Exception', err);
  });

  process.on('uncaughtRejection', (err, promise) => {
    logger.error('Unhandled Rejection', err);
  });

  if (!port)
    throw new Error('port is require');

  const app = express();

  if (process.env.NODE_ENV === 'production')
    morganFormat = 'combined';

  app.use(express.static(path.join(__dirname, '/../../build')));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.engine('json', expressJsonViews({ helpers }));
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'json');

  app.use(helmet());
  app.use(morgan(morganFormat, { stream: logger.stream }));

  app.use(cookieParser());

  app.use(requestMiddleware.wirePreRequest);

  app.use('/', rootRoute);

  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../../build/index.html'));
  });

  app.use(requestMiddleware.wirePostRequest);

  const server = await app.listen(port);
  logger.info(`SERVER IS NOW LISTENING ON PORT ${server.address().port}`);

  return server;
}

module.exports = { start };
