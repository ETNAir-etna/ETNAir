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
            // USER
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
            Property: {
                type: "object",
                properties: {
                    id: { type: "string", example: "1" },
                    name: { type: "string", example: "Cozy Apartment" },
                    address: { type: "string", example: "123 Main St" },
                    ownerId: { type: "string", example: "42" },
                },
                required: ["id", "name", "address", "ownerId"],
            },
            PropertyResponse: {
                type: "object",
                properties: {
                    action: { type: "string", example: "data" },
                    success: { type: "boolean", example: true },
                    data: {
                        oneOf: [
                            { $ref: "#/components/schemas/Property" },
                            { type: "array", items: { $ref: "#/components/schemas/Property" } },
                        ],
                    },
                },
            },
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
            // ERROR
            ErrorApiResponse: {
                type: "object",
                properties: {
                    action: {
                        type: "string",
                        example: "Error",
                    },
                    success: {
                        type: "boolean",
                        example: false,
                    },
                    redirect: {
                        type: "boolean",
                        example: false,
                    },
                    error: {
                        type: "object",
                        properties: {
                            errorType: {
                                type: "string",
                                example: "GENERIC_ERROR",
                            },
                            message: {
                                type: "string",
                                example: "An error occurred.",
                            },
                            status: {
                                type: "integer",
                                example: 500,
                            },
                        },
                        required: ["errorType", "message", "status"],
                    },
                },
                required: ["action", "success", "error"],
            },
            ValidationErrorApiResponse: {
                allOf: [
                    { $ref: "#/components/schemas/ErrorApiResponse" },
                    {
                        type: "object",
                        properties: {
                            error: {
                                type: "object",
                                properties: {
                                    errorType: {
                                        type: "string",
                                        example: "VALIDATION_ERROR",
                                    },
                                    message: {
                                        type: "string",
                                        example: "The field is invalid.",
                                    },
                                    status: {
                                        type: "integer",
                                        example: 400,
                                    },
                                    details: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                field: {
                                                    type: "string",
                                                    example: "email",
                                                },
                                                issue: {
                                                    type: "string",
                                                    example: "Email is invalid.",
                                                },
                                            },
                                        },
                                    },
                                },
                                required: ["errorType", "message", "status"],
                            },
                        },
                    },
                ],
            },
            PrismaErrorApiResponse: {
                allOf: [
                    { $ref: "#/components/schemas/ErrorApiResponse" },
                    {
                        type: "object",
                        properties: {
                            error: {
                                type: "object",
                                properties: {
                                    errorType: {
                                        type: "string",
                                        example: "PRISMA_ERROR",
                                    },
                                    message: {
                                        type: "string",
                                        example: "Already exists in the database.",
                                    },
                                    status: {
                                        type: "integer",
                                        example: 409,
                                    },
                                },
                                required: ["errorType", "message", "status"],
                            },
                        },
                    },
                ],
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
