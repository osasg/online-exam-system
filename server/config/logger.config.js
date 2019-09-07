const path = require('path')
const { createLogger, format, transports } = require('winston');
const appRoot = require('app-root-path');

const logFormat = format.printf(({ timestamp, level, label, message, metadata }) =>
  `${timestamp} ${level} [${label}]: ${message}
${Object.keys(metadata).length === 0 ? '' : JSON.stringify(metadata, null, 4)}`.trim());

const configs = {
  file: {
    format: format.combine(
      format.json()
    ),
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    format: format.combine(
      format.colorize(),
      logFormat
    ),
    level: 'info',
    handleExceptions: true,
    json: true,
    colorize: true,
    prettyPrint: true,
    humanReadableUnhandledException: true
  },
};

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),
  transports: [
    new transports.File(configs.file),
    new transports.Console(configs.console)
  ],
  exitOnError: false,
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
