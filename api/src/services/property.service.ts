import { PropertyModel } from "../models/Property.model";
import { Property, PropertyFilter } from "@etnair-etna/shared/dist/types";
import { Result } from "../interfaces/result";

export class PropertyService {
  static async getProperties(filter: PropertyFilter): Promise<Result> {
    const data: Property[] = await PropertyModel.findAll(filter);
    return { action: "data", data, success: true };
  }

  static async getPropertyById(id: string): Promise<Result> {
    const data: Property | null = await PropertyModel.findById(id);
    return { action: "data", data, success: true };
  }

  static async createProperty(propertyInfos: Property): Promise<Result> {
    const data: Property = await PropertyModel.createProperty(propertyInfos);
    return { action: "create", data, success: true };
  }

  static async updateProperty(propertyInfos: Property): Promise<Result> {
    await PropertyModel.updateProperty(propertyInfos);
    return { action: "update", success: true };
  }

  static async deleteProperty(id: string, ownerId: string): Promise<Result> {
    await PropertyModel.deleteProperty(id, ownerId);
    return { action: "delete", success: true };
  }

  static async deleteAllProperties(ownerId: string): Promise<Result> {
    const count = await PropertyModel.deleteManyProperties(ownerId);
    console.log("Deleted count:", count);
    return { action: "deleteAll", success: true, deletedCount: count };
  }
}
