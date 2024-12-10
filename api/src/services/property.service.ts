import { Prisma } from '@prisma/client';
import { PropertyModel } from '../models/PropertyModel';
import { Property } from '../../../shared/types/Property'; // import { Property } from '@prisma/client';
import { query, validationResult} from 'express-validator';

export class PropertyService {


    static async getProperties(): Promise<Property[]> {
        return PropertyModel.findAll();
    }

    static async getPropertyById(id : string): Promise<Property | null> {
        // query('id').notEmpty()
        // const result  = validationResult(id);
        return PropertyModel.findById(id);
    }

    static async createProperty(data: Prisma.PropertyCreateInput): Promise<Property> {
        return PropertyModel.createProperty(data);
    }
}