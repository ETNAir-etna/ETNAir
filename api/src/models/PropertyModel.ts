import { PrismaClient } from '@prisma/client';
// // import { Property } from '@prisma/client';
import { Property } from '../../../shared/types/Property';

const prisma = new PrismaClient();

export class PropertyModel {


    static async findAll(): Promise<Property[]> {
        return prisma.property.findMany();
    }

    static async findById(id: string): Promise<Property | null> {
        return prisma.property.findUnique({where : {id : id}});
    };


    // static async createProperty(data : Property): Promise<Property> {
    //     return prisma.property.create({
    //         data : data
    //     });
    // }


}