export const authPaths = {
    "/auth/login": {
        post: {
            tags: ["Authentification"],
            summary: "Login a user.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                username: { type: "string" },
                                password: { type: "string" },
                            },
                            required: ["username", "password"],
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Successful login",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiSuccessResponse" },
                        },
                    },
                },
                400: {
                    description: "Bad request",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiErrorResponse" },
                        },
                    },
                },
                401: {
                    description: "Unauthorized",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiErrorResponse" },
                        },
                    },
                },
            },
        },
    },
    "/auth/register": {
        post : {
            tags: ["Authentification"],
            summary: "Register a new user",
            requestBody: {
                required : true,
                content : {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                username: { type: "string" },
                                password: { type: "string" },
                            },
                            required: ["username", "password"],
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "User successfully registered.",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiSuccessResponse" },
                        },
                    },
                },
                400: {
                    description: "Bad request",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiErrorResponse" },
                        },
                    },
                },
                409: {
                    description: "Prisma error (e.g., email already exists).",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/ApiErrorResponse" },
                        },
                    },
                },
            },
        },
    },
};
