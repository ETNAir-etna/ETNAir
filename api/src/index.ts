import express, { Request, Response, Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configs/swaggerConfig";
import router from "./routes/routes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";
dotenv.config();

import { serverLogger } from "./configs/logger";

/* MIDDLEWARE */
import { morganMiddleware } from "./middleware/morgan.middleware";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { corsOptions } from "./configs/cors.config";

const app: Application = express();

// app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser()); // Ajoutez ceci avant vos middlewares de route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(cors(corsOptions));

/* ROUTER / ROUTES */

app.use("/api-etnair", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

// console.log(JSON.stringify(swaggerSpec, null, 2));

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
  serverLogger.info(`App listening on port  http://localhost:${port}/api-etnair`);
  serverLogger.info(
    `Swagger docs available at http://localhost:${port}/api-docs`
  );
});
