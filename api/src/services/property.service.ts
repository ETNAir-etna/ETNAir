import { Prisma } from '@prisma/client';
import { PropertyModel } from '../models/PropertyModel';
import { Property } from '../../../shared/types/Property'; // import { Property } from '@prisma/client';
import { query, validationResult} from 'express-validator';
import { Result } from '../interfaces/result';

export class PropertyService {


    static async getProperties(): Promise<Result> {
        const data: Property[] = await PropertyModel.findAll();
        return { action: "data", data: data, success : true};
    };

    static async getPropertyById(id : string): Promise<Result> {
        const data: Property | null= await  PropertyModel.findById(id);
        return { action: "data", data: data, success : true};
    };

    static async createProperty(propertyInfos: Prisma.PropertyCreateInput): Promise<Result> {
        await PropertyModel.createProperty(propertyInfos);
        return { action: "create", redirect: true, success : true, url: "#"};
    };

    static async editProperty(propertyInfos: Prisma.PropertyCreateInput): Promise<Result> {
        const data: Property = await PropertyModel.updateProperty(propertyInfos);
        return { action: "update", data: data, success : true};
    };

    static async deleteProperty(id : string): Promise<Result> {
        await PropertyModel.deleteProperty(id);
        return { action: "delete", success : true};
    };

    static async deleteAllProperties(id: string): Promise<Result> {
        await PropertyModel.deleteManyProperties(id)
        return { action: "delete", success : true};
    };
}