export const homePaths = {
    "/": {
        get: {
            tags: ["Home"],
            summary: "ETNAir API home page",
            description: "This endpoint returns a simple welcome message to indicate that the ETNAir API is running.",
            responses: {
                200: {
                    description: "Successful response with a welcome message.",
                    content: {
                        "text/plain": {
                            schema: {
                                type: "string",
                                example: "Welcome to ETNAir !"
                            }
                        }
                    }
                },
                500: {
                    description: "Internal server error. This might happen if there's an issue with the server.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    error: {
                                        type: "string",
                                        example: "Internal server error"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
