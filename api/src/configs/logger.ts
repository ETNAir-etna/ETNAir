import winston, { Logger } from 'winston';

let logger: Logger;

const devLogger =() => {
  return  winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
          // winston.format.colorize(),
          winston.format.timestamp({format: 'DD-MM-YYYY - HH:mm:ss'}),
          winston.format.printf(({level, message, timestamp}) => {
              return `[${timestamp}] ${level.toUpperCase()} : ${message}`
          })
      ),
      transports: [
          new winston.transports.Console({format: winston.format.combine(
              winston.format.colorize({ all: true })
          )}),
      ],
})}

const prodLogger =() => {
  return  winston.createLogger({
      level: 'info', // debug ?
      format: winston.format.combine(
          winston.format.colorize(),
          winston.format.label({ label: 'dev' }),
          winston.format.timestamp({format: 'DD-MM-YYYY - HH:mm:ss'}),
          winston.format.printf(({level,label, message, timestamp}) => {
              return `${timestamp} [ ${level.toUpperCase()} ] - ${label} : ${message}`
          })
      ),
      transports: [
          new winston.transports.File({ filename: './src/.logs/app.log', level: 'info' }),
          new winston.transports.File({ filename: './src/.logs/error.log', level: 'error' })
      ],
})}



if (process.env.NODE_ENV === 'production') {
  logger = prodLogger();
} else {
  logger = devLogger();
}



export { logger };
