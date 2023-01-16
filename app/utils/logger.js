const winston = require('winston');
const ConfigEnv = require('../config/config');

const formato = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  winston.format.printf((info) => {
    if(info.hasOwnProperty('stack') ){
      return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${info.message}
      ${info.stack}`
    } else {
      return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${info.message}`
    }
  })
);

const logger = winston.createLogger({
  format: formato,
  transports: [
    new winston.transports.Console({level: ConfigEnv.LEVEL_LOG_CONSOLE}),
    new winston.transports.File({ filename: 'logs/app.log', level: ConfigEnv.LEVEL_LOG_FILE})
  ]
});

module.exports = logger;