import { Prisma } from '@prisma/client';
import { PropertyModel } from '../models/PropertyModel';
import { Property } from '../../../shared/types/Property'; // import { Property } from '@prisma/client';
import { query, validationResult} from 'express-validator';
import { Result } from '../interfaces/result';

export class PropertyService {


    static async getProperties(): Promise<Result> {
        const data: Property[] = await PropertyModel.findAll();
        return { action: "data", data: data, success : true};
    }

    static async getPropertyById(id : string): Promise<Result> {
        const data: Property | null= await  PropertyModel.findById(id);
        return { action: "data", data: data, success : true};
    }

    static async createProperty(propertyInfos: Prisma.PropertyCreateInput): Promise<Result> {
        const data: Property = await PropertyModel.createProperty(propertyInfos);
        // TODO : choose the final action for create propety 
        return { action: "redirect", data: data, success : true, url: "#"};
    }
}