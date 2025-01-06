import request from "supertest";
import app from "../../src/server";
import { UserModel } from "../../src/models/User.model";
import { describe, expect, test, jest } from "@jest/globals";
import jwt from "jsonwebtoken";

type MockedFunction = jest.Mock<any>;

console.log(process.env.JWT_SECRET);

const token = jwt.sign({ id: 1, email: "admin@admin.com", role: "ADMIN" }, process.env.JWT_SECRET || "test-secret");

jest.mock("../../src/models/User.model", () => ({
    UserModel: {
        findAll: jest.fn(),
        findById: jest.fn(),
        update: jest.fn(),
    },
}));

describe("GET /api-etnair/authenticated/admin/user/all", () => {
    test("should return a list of users with success=true", async () => {
        const mockUsers = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ];

        (UserModel.findAll as MockedFunction).mockResolvedValue(mockUsers);

        const response = await request(app)
            .get("/api-etnair/authenticated/admin/user/all")
            .set("Cookie", `jwt=${token}`);

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            action: "data",
            data: mockUsers,
            success: true,
        });

        expect(UserModel.findAll).toHaveBeenCalledTimes(1);
    });
});

describe("GET /api-etnair/user/:id", () => {
    test("should return the data of the user with success=true", async () => {
        const mockId = 1;

        const mockUsers = {
            id: mockId,
            email: "example@fakerjs.dev",
            firstName: "Ettie",
            lastName: "Stark",
        };

        (UserModel.findById as MockedFunction).mockResolvedValue(mockUsers);

        const response = await request(app).get(`/api-etnair/user/${mockId}`);

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            action: "data",
            data: mockUsers,
            success: true,
        });

        expect(UserModel.findById).toHaveBeenCalledTimes(mockId);
    });
});

describe("PUT api-etnair/dashboard/profile/update/:id", () => {
    test("Should return the user data and changements on them with success=true", async () => {
        const mockId = "1";

        const oldMockUser = {
            id: mockId,
            email: "example@fakerjs.dev",
            firstName: "Ettie",
            lastName: "Stark",
        };

        (UserModel.update as MockedFunction).mockResolvedValue(oldMockUser);

        const response = await request(app)
            .put(`/api-etnair/authenticated/account/profile/update/${mockId}`)
            .send({ lastName: "Stark-Parks" })
            .set("Cookie", `jwt=${token}`);

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            action: "data",
            success: true,
        });

        expect(UserModel.update).toHaveBeenCalledWith(mockId, {
            lastName: "Stark-Parks",
        });
    });
});
