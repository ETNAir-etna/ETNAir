import request from "supertest";
import app from "../../src/server";
import { UserModel } from "../../src/models/User.model";
import { describe, expect, it, jest } from "@jest/globals";

type MockedFunction = jest.Mock<any>;

jest.mock("../../src/models/User.model", () => ({
    UserModel: {
        createUser: jest.fn(),
    }
}));

describe("POST api-etnair/auth/register", () => {
    it("should create a new user and send the satus code 201 with success equal to true", async () => {
        const mockUser = {
            email: "test@test.com",
            password: "Test-1111"
        };

        (UserModel.createUser as MockedFunction).mockResolvedValue(mockUser);

        const response = await request(app)
            .post("/api-etnair/auth/register")
            .send(mockUser);

        expect(response.status).toBe(201);

        expect(response.body).toEqual({
            action: "create",
            success: true,
        });

        expect(UserModel.createUser).toBeCalledTimes(1);
    });

    it("should fail with missing email", async () => {
        const mockUser = { password: "Password1!" };

        const response = await request(app)
            .post("/api-etnair/auth/register")
            .send(mockUser);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            action: "Error",
            success: false,
            redirect: false,
            error: {
                errorType: "VALIDATION_ERROR(S)",
                status: 400,
                message: "Invalid field(s)",
                details: [
                    {
                    "type": "field",
                    "value": "",
                    "msg": "Email is invalid.",
                    "path": "email",
                    "location": "body"
                },
                {
                    "type": "field",
                    "value": "",
                    "msg": "Email is required.",
                    "path": "email",
                    "location": "body"
                }
                ]
        }
        });
    });

    it("should fail with weak password", async () => {
        const mockUser = { email: "test@test.com", password: "123" };

        const response = await request(app)
            .post("/api-etnair/auth/register")
            .send(mockUser);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            action: "Error",
            success: false,
            redirect: false,
            error: {
                errorType: "VALIDATION_ERROR(S)",
                status: 400,
                message: "Invalid field(s)",
                details: [
                    {
                        "type": "field",
                        "value": "123",
                        "msg": "Password must contain: 5 characters min, 1 uppercase letter, 1 special character",
                        "path": "password",
                        "location": "body"
                    }
                ]
        }
        });
    });
})