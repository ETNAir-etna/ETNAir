import winston, { Logger } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, align, label } = winston.format;

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 3,
    debug: 4,
    trace: 5,
    verbose: 6,
    silly: 7,
};
const levelIcons = {
    debug: '👾', 
    info: 'ℹ️',
    warn: '⚠️',
    error: '❌', 
    fatal: '☠️',
    trace: '👣',
    http: '🌐',
    silly: '🤪',
    verbose: '🗨️',
};

const DailyRotateTransport = (level: string, filename: string) => {
    return new winston.transports.DailyRotateFile({
        dirname: `./.logs/%DATE%/`,
        filename: `${filename}`,
        datePattern: 'DD-MM-YYYY', 
        level: level, 
        zippedArchive: true,
        maxSize: '20m', 
        maxFiles: '14d',
        auditFile: `./.logs/.audit/${level}-audit-log.json`,
    });
};

const createLogger = (labelName: string): Logger => {
    return winston.createLogger({
        level: process.env.NODE_ENV === "prod" 
        ? 'info'
        : process.env.LOG_LEVEL, 
        levels: logLevels,
        format: combine(
            label({ label: labelName }),
            timestamp({format: 'DD-MM-YYYY - HH:mm:ss'}),
            align(),
            printf(({ level, message, label, timestamp }) => {
                const icon: string = levelIcons[level as keyof typeof logLevels]  || '❔';
                const formattedLevel = process.env.NODE_ENV === "prod"
                ? level.toUpperCase() 
                : colorize().colorize(level, level.toUpperCase());
                return `[${timestamp}]  ${icon} ${formattedLevel} - ${label} : ${message}`
            })
        ),
        transports: 
        process.env.NODE_ENV === "prod"

        
        ? [
            DailyRotateTransport('info', 'combined.log'),
            DailyRotateTransport('warn', 'warn.log'),
            DailyRotateTransport('error', 'error.log'),
        ]
        : [ new winston.transports.Console()]
        

    })
}

const routesLogger = createLogger('routes');
const dbLogger = createLogger('DB');
const apiLogger = createLogger('API');
const controllersLogger = createLogger('controllers');
const servicesLogger = createLogger('services');
const serverLogger = createLogger('server');
const httpLogger = createLogger('http');
const errorLogger = createLogger('errorHandler');

export { routesLogger, dbLogger, apiLogger, controllersLogger, servicesLogger, serverLogger, httpLogger , errorLogger};
