const data: any[] = [
    { id : 1 , firstName: "John", lastName: "Doe"},
    { id : 2 , firstName: "Morgan", lastName: "Stewart"}
];

export const ApiSuccessResponse = {
    type: "object",
    properties: {
        key: { type: "boolean", nullable: true },
        token: { type: "string", nullable: true },
        action: { type: "string", example: "data" },
        data: { type: "object", example: data, nullable: true },
        deletedCount: { type: "integer", example: 1, nullable: true },
        message: { type: "string", example: "Your data was successfully edited", nullable: true },
        redirect: { type: "boolean", example: false, nullable: true },
        status: { type: "integer", example: 200, nullable: true },
        success: { type: "boolean", example : true },
        url: { type: "string", example: "/", nullable: true },
    },
};
