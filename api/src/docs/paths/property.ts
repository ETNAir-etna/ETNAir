export const propertyPaths = {
    "/property/all": {
        post: {
            tags: ["Property"],
            summary: "Retrieve all properties with an optional filter.",
            requestBody: {
                required: false,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                filter: {
                                    type: "object",
                                    description: "Filter criteria",
                                    example: { ownerId: "42" },
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    tags: ["Property"],
                    description: "List of retrieved properties",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
                        },
                    },
                },
            },
        },
    },
    "/property/{id}": {
        get: {
            tags: ["Property"],
            summary: "Retrieve a specific property by ID.",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string",
                    },
                    description: "Property ID",
                },
            ],
            responses: {
                200: {
                    description: "Property found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
                        },
                    },
                },
                404: {
                    description: "Property not found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiErrorResponse",
                            },
                        },
                    },
                },
            },
        },
    },
    "/property/create": {
        post: {
            tags: ["Property"],
            summary: "Create a new property.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Property",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Property created",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
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
            },
        },
    },
    "/property/update": {
        put: {
            tags: ["Property"],
            summary: "Update an existing property.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Property",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Property updated",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
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
            },
        },
    },
    "/property/delete": {
        delete: {
            tags: ["Property"],
            summary: "Delete a property by ID.",
            parameters: [
                {
                    name: "id",
                    in: "query",
                    required: true,
                    schema: {
                        type: "string",
                    },
                    description: "ID of the property to delete",
                },
            ],
            responses: {
                200: {
                    description: "Property deleted",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
                        },
                    },
                },
            },
        },
    },
    "/property/delete/all": {
        delete: {
            tags: ["Property"],
            summary: "Delete all properties of an owner.",
            parameters: [
                {
                    name: "ownerId",
                    in: "query",
                    required: true,
                    schema: {
                        type: "string",
                    },
                    description: "Owner ID",
                },
            ],
            responses: {
                200: {
                    description: "All properties deleted",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ApiSuccessResponse",
                            },
                        },
                    },
                },
            },
        },
    },
};
