import { PrismaClient, Prisma } from '@prisma/client';
import { Property, PropertyDTO } from '../../../shared/types/Property';

const prisma = new PrismaClient();

export class PropertyModel {


    static async findAll(): Promise<Property[]> {
        const properties = await prisma.property.findMany();
        return properties.map( property => PropertyDTO(property))
    }

    static async findById(id: string): Promise<Property | null> {
        const property = await prisma.property.findUnique({where: {id : id}})
        return !property ? null : PropertyDTO(property)
    };


    static async createProperty(data : Prisma.PropertyCreateInput): Promise<Property> {
        const newProperty = await prisma.property.create({data})
        return PropertyDTO(newProperty);
    }


}