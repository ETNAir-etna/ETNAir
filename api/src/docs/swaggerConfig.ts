import swaggerJSDoc from "swagger-jsdoc";
import { authPaths } from "./paths/auth";
import { components } from "./components";
import { propertyPaths } from "./paths/property";

export const swaggerDocument = {
    openapi: "3.1.1",
    info: {
        title: "ETNAir API Documentation",
        version: "1.0.0",
        description: "Documentation pour mon backend Express",
    },
    servers: [
        {
            url: `http://localhost:${process.env.API_PORT}/api-etnair`,
            description: "Serveur local",
        },
    ],
    paths: {
        ...authPaths,
        ...propertyPaths,
    },
    components,
};

// const options = {
//     swaggerDefinition,
//     apis: ["./src/routes/*.routes.ts"],
// };
// const swaggerSpec = swaggerJSDoc(options);
// export default swaggerSpec;
