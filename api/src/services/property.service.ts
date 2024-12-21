import { Prisma } from "@prisma/client";
import { PropertyModel } from "../models/Property.model";
import { Property } from "../../../shared/types/Property";
import { Result } from "../interfaces/result";
import { PropertyFilter } from "../../../shared/types/PropertyFilter";

export class PropertyService {
    static async getProperties(filter : PropertyFilter): Promise<Result> {
        const data: Property[] = await PropertyModel.findAll(filter);
        return { action: "data", data: data, success: true };
    }

    static async getPropertyById(id: string): Promise<Result> {
        const data: Property | null = await PropertyModel.findById(id);
        return { action: "data", data: data, success: true };
    }

    static async createProperty(propertyInfos: Prisma.PropertyCreateInput): Promise<Result> {
        await PropertyModel.createProperty(propertyInfos);
        return { action: "create", redirect: true, success: true, url: "#" };
    }

    static async updateProperty(propertyInfos: Prisma.PropertyCreateInput): Promise<Result> {
        const data: Property = await PropertyModel.updateProperty(propertyInfos);
        return { action: "update", data: data, success: true };
    }

    static async deleteProperty(id: string): Promise<Result> {
        await PropertyModel.deleteProperty(id);
        return { action: "delete", success: true };
    }

    static async deleteAllProperties(ownerId: string): Promise<Result> {
        const count = await PropertyModel.deleteManyProperties(ownerId);
        return { action: "delete", success: true, deletedCount: count };
    }
}
