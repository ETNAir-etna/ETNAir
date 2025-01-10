
import { httpLogger } from '../configs/logger';
import morgan from 'morgan';
import { red, yellow, cyan, green, white } from 'colorette';

const colorStatus = (status: number) => {
    if (status >= 500) return red(status.toString());
    if (status >= 400) return yellow(status.toString());
    if (status >= 300) return cyan(status.toString());
    if (status >= 200) return green(status.toString());
    return white(status.toString());
};

const formatLog = (tokens: morgan.TokenIndexer, req: any, res: any) => {
    const authorization = tokens.req(req, res, 'authorization') || '';
    const method = tokens.method(req, res);
    const url = tokens.url(req, res);
    const status = process.env.NODE_ENV === "production" ?  tokens.status(req, res): colorStatus(Number(tokens.status(req, res)));
    const responseTime = tokens['response-time'](req, res);

    return `${authorization} ${method} ${url} ${status} - ${responseTime} ms`;
};

export const morganMiddleware = morgan(
    formatLog, {
    stream: {
        write: (message: string) => httpLogger.http(message.trim()),
    },
});