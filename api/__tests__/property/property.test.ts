import request from "supertest";
import app from "../../src/server";
import { PropertyModel } from "../../src/models/Property.model";
import { describe, expect, it, jest } from "@jest/globals";

type MockedFunction = jest.Mock<any>;

jest.mock("../../src/models/Property.model", () => ({
    PropertyModel : {
        createProperty: jest.fn(),
    }
}));


describe("POST /api-etnair/property/create", () => {
    it("should create a property and return status 201 with redirect info", async () => {
        const mockProperty = {
                title: "WOOOW WOOOW",
                propertyType: "VILLA",
                pricePerNight:"30",
                mainImgUrl: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440",
                streetNumber: "2",
                streetName: "rue de l'Etna",
                city: "Ivry",
                country: "France",
                ownerId: "7719e31e-acb9-4a1c-b3fc-d7d9291dcadf"
        };

        (PropertyModel.createProperty  as MockedFunction).mockResolvedValue(mockProperty);

        const response = await request(app)
            .post("/api-etnair/dashboard/property/create")
            .send(mockProperty);

        console.log(response.body)

        expect(response.status).toBe(201);

        expect(response.body).toEqual({
            action: "create", 
            data : mockProperty,
            success: true
        });

        expect(PropertyModel.createProperty).toHaveBeenCalledTimes(1);
    });
})