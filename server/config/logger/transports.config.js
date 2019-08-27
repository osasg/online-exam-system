const winston = require('winston')
const { format } = winston
const appRoot = require('app-root-path');

const logFormat = format.printf(({ timestamp, level, label, message, metadata }) =>
  `${timestamp} ${level} [${label}]: ${message}
${Object.keys(metadata).length === 0 ? '' : JSON.stringify(metadata, null, 4)}`.trim());

module.exports = {
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
