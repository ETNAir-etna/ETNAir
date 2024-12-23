import request from "supertest"; 
import app from "../../src/server";
import { UserModel } from "../../src/models/User.model";
import {describe, expect, it, test, jest} from '@jest/globals';

type MockedFunction = jest.Mock<any>;

jest.mock("../../src/models/User.model", () => ({
    UserModel : {
        findAll: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
        findById:  jest.fn()
    }
}));



describe("GET /api-etnair/user/all", () => {
    test("should return a list of users with success=true", async () => {

        const mockUsers = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ];

        (UserModel.findAll as MockedFunction).mockResolvedValue(mockUsers);

        const response = await request(app).get("/api-etnair/user/all");

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
        const mockId = "1";

        const mockUsers = {
                id: mockId,
                email: "example@fakerjs.dev",
                firstName: "Ettie",
                lastName: "Stark"
        };
    

        (UserModel.findById as MockedFunction).mockResolvedValue(mockUsers);

        const response = await request(app).get(`/api-etnair/user/${mockId}`);

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            action: "data",
            data: mockUsers,
            success: true,
        });

        expect(UserModel.findById).toHaveBeenCalledTimes(1);

    })
});

describe("PUT api-etnair/user/update/:id", () => {
    test("Should return the user data and changements on them with success=true", async () => {
        const mockId= "1";

        const newMockUser = {
            id: mockId,
            email: "example@fakerjs.dev",
            firstName: "Ettie",
            lastName: "Stark"
        };

        (UserModel.update as MockedFunction).mockResolvedValue(newMockUser);

        const response = await request(app)
            .put(`/api-etnair/user/update/${mockId}`)
            .send({ lastName: "Stark-Parks" });

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            action: "data",
            success: true,
        });

        expect(UserModel.update).toHaveBeenCalledWith(mockId, { lastName: "Stark-Parks" });
    })
});


