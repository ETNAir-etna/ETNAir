import express, { Request, Response, Application } from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
/* ROUTES */
import homeRoutes from './routes/home.routes';
import userRoutes from './routes/user.routes';
import accommodationsRoutes from './routes/accomodations.routes';

dotenv.config()

const app: Application = express();

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/accommodation', accommodationsRoutes);

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.use("*", (req: Request, res: Response) => {
    res.status(500).send('Bad request');
});


const port = process.env.API_PORT || 3001;

console.log(process.env.API_PORT)
app.listen(port, () => {
    console.log(`App listening on port  http://localhost:${port}`)
}) 
