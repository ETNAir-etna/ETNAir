import request from "supertest"; // Import supertest to simulate HTTP requests.
import app from "../../src/server"; // Import the app/server to test the routes.
import { UserModel as ExampleModel } from "../../src/models/User.model"; // Import the model to mock its behavior.
import { describe, it, jest, expect } from "@jest/globals"; // Import Jest functions.

// Define a type alias for mocked functions used in tests.
// Step: Why define `MockedFunction`? 
// Explanation: This type alias is used to make it easier to refer to mocked functions in our code. 
// Jest provides a generic `jest.Mock` type, but explicitly defining it as `MockedFunction` improves code readability 
// and ensures consistency when mocking multiple methods or functions.
type MockedFunction = jest.Mock<any>;

// Step 1: Mock the database model.
// Explanation: Instead of making real calls to the database, we mock the behavior of `ExampleModel` to control the data it returns.
// This makes tests faster and avoids external dependencies like a real database.
jest.mock("../../src/models/Example.model", () => ({
    ExampleModel: {
        findAll: jest.fn(), // Mocking the `findAll` method of the model.
    },
}));

describe("GET /api/example", () => {
    // Step 2: Write a test case for the GET route.
    // Explanation: Each `it` block defines a single test case. Here, we are testing if the route returns a list of examples.
    it("should return a list of examples with success=true", async () => {
        // Step 3: Define the mock data.
        // Explanation: This is the data we expect the model's `findAll` method to return. It simulates data from a database.
        const mockExamples = [
            { id: 1, name: "Example 1" },
            { id: 2, name: "Example 2" },
        ];

        // Step 4: Configure the mock's behavior.
        // Explanation: Here, we tell Jest to make the mocked `findAll` method return the mockExamples data.
        // Cast the mocked method to the `MockedFunction` type.
        // Step: Why cast the method?
        // Explanation: Casting ensures that TypeScript understands the mocked method as being a Jest mock,
        // giving access to mock-specific properties like `mockResolvedValue`.
        (ExampleModel.findAll as MockedFunction).mockResolvedValue(mockExamples);

        // Step 5: Send an HTTP GET request to the route being tested.
        // Explanation: Using `supertest`, we simulate an HTTP GET request to the `/api/example` route.
        const response = await request(app).get("/api/example");

        // Step 6: Assert the HTTP response status.
        // Explanation: We check if the server returned a 200 status code, indicating a successful response.
        expect(response.status).toBe(200);

        // Step 7: Assert the response body.
        // Explanation: We verify if the response contains the correct structure and data.
        expect(response.body).toEqual({
            action: "data", // Expected action type.
            data: mockExamples, // Expected data (same as the mocked return value).
            success: true, // Expected success flag.
        });

        // Step 8: Verify the mock method was called.
        // Explanation: We ensure the mocked `findAll` method was called exactly once during the test.
        expect(ExampleModel.findAll).toHaveBeenCalledTimes(1);
    });
});
