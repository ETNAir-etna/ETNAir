import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.1.1",
    info: {
        title: "ETNAir API Documentation",
        version: "1.0.0",
        description: "Documentation pour mon backend Express",
    },
    servers: [
        {
            url: `http://localhost:${process.env.API_PORT}`,
            description: "Serveur local",
        },
    ],
    components: {
        schemas: {
            // Requête pour les routes Auth
            UserRequest: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        format: "email",
                        example: "user@example.com",
                    },
                    password: {
                        type: "string",
                        example: "Password123!",
                    },
                },
                required: ["email", "password"],
            },
            // Réponse pour les utilisateurs
            UserResponse: {
                type: "object",
                properties: {
                    action: {
                        type: "string",
                        example: "create",
                    },
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    data: {
                        type: "object",
                        example: {
                            id: 1,
                            email: "user@example.com",
                            createdAt: "2024-12-18T00:00:00Z",
                        },
                    },
                    redirect: {
                        type: "boolean",
                        example: true,
                    },
                    url: {
                        type: "string",
                        example: "/profile",
                    },
                },
            },
            // Réponse générique
            ApiResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    message: {
                        type: "string",
                        example: "Operation successful",
                    },
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.routes.ts"],
};

const swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec;
