import express, { Request, Response, Application } from 'express';
import router from "./routes/routes";
import dotenv from 'dotenv';
dotenv.config();

import { serverLogger } from './configs/logger';

/* MIDDLEWARE */
import { morganMiddleware } from './middleware/morgan.middleware';
import { errorHandler } from './middleware/errorHandler.middleware';

const app: Application = express();

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware)

/* ROUTER / ROUTES */
app.use(router)

app.use(errorHandler)

app.use("*", (req: Request, res: Response) => {
    res.status(404).json({
        error: {
            status: 404,
            message: "Route not found",
        },
    });
});

const port = process.env.API_PORT || 3001;
app.listen(port, () => {
    serverLogger.info(`App listening on port  http://localhost:${port}`)
})  
