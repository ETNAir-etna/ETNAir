import express, { Request, Response, Application } from 'express';
import path from 'path';
import router from "./routes";
import dotenv from 'dotenv';
dotenv.config()
/* ROUTES */
import { serverLogger } from './configs/logger';
import { morganMiddleware } from './middleware/morgan';


const app: Application = express();

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morganMiddleware)

app.use(router)

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.use("*", (req: Request, res: Response) => {
    res.status(500).send('Bad request');
});


const port = process.env.API_PORT || 3001;
app.listen(port, () => {
    serverLogger.info(`App listening on port  http://localhost:${port}`)
}) 
