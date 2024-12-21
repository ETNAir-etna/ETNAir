export const ApiErrorResponse = {
    type: "object",
    properties: {
        action: { type: "string", example : "Error" },
        error: { $ref: "#/components/schemas/ErrorDetails" },
        redirect: { type: "boolean", example: false, nullable: true },
        success: { type: "boolean", example : false },
        url: { type: "string", example: "/", nullable: true },
    },
};
