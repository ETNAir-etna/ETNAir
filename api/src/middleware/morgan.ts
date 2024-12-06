
import morgan from 'morgan';
import { Logger } from 'winston';

let logger: Logger;


export const morganMiddleware = morgan(
    ':method :url :status - :response-time ms',
    {
    stream: {
        write: (message: string) => logger.http(message.trim()),
},
    }
);