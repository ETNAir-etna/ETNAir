export const ErrorDetails = {
    type: "object",
    properties: {
        errorType: { type: "string", example: "SERVER" },
        message: { type: "string", example: "Internal Server Error" },
        status: { type: "integer", example: 500 },
    },
};
