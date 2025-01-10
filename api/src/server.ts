import express, { Request, Response, Application } from "express";
import router from "./routes/routes";
import './configs/env.config';
/* DOC */
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swaggerConfig";
/* LOGGER */
import { serverLogger } from "./configs/logger";
/* MIDDLEWARE */
import cookieParser from "cookie-parser";
import cors from "cors";
import { morganMiddleware } from "./middleware/morgan.middleware";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { corsOptions } from "./configs/cors.config";


const app: Application = express();

app.use(cookieParser()); // Ajoutez ceci avant vos middlewares de route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(cors(corsOptions));

/* ROUTER & ROUTES */

app.use("/api-etnair", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    error: {
      status: 404,
      message: "Route not found",
    },
  });
});


const port = process.env.API_PORT ?? 3001;

if (process.env.NODE_ENV !== "test") {
app.listen(port, () => {
  serverLogger.info(`App listening on port  http://localhost:${port}/api-etnair`);
  serverLogger.info(
    `Swagger docs available at http://localhost:${port}/api-docs`
  );
})
}

export default app

