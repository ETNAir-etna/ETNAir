import { PrismaClient, Prisma } from '@prisma/client';
import { Property, PropertyDTO } from '../../../shared/types/Property';

const prisma = new PrismaClient();

export class PropertyModel {


    static async findAll(): Promise<Property[]> {
        const properties = await prisma.property.findMany();
        console.log(properties)
        return properties.map( property => PropertyDTO(property));
    };

    static async findById(id: string): Promise<Property | null> {
        const property = await prisma.property.findUnique({where: {id : id}});
        return !property ? null : PropertyDTO(property);
    };

    static async createProperty(data : Prisma.PropertyCreateInput): Promise<Property> {
        const newProperty = await prisma.property.create({
            data : {
                ...data,
                pricePerNight: Number(data.pricePerNight),
                totalBedrooms: Number(data.totalBedrooms),
                totalBathrooms: Number(data.totalBathrooms),
                area: Number(data.area),
                roomNumber: Number(data.roomNumber),
                floorNumber: Number(data.floorNumber),
                streetNumber: Number(data.streetNumber),
                latitude: Number(data.latitude),
                longitude: Number(data.longitude)
            }
        });
        return PropertyDTO(newProperty);
    };

    static async updateProperty(data : Prisma.PropertyCreateInput): Promise<Property> {
        const updateUser = await prisma.property.update({
            where: {
                id: data.id,
            },
            data : {
                ...data,
                pricePerNight: Number(data.pricePerNight),
                totalBedrooms: Number(data.totalBedrooms),
                totalBathrooms: Number(data.totalBathrooms),
                area: Number(data.area),
                roomNumber: Number(data.roomNumber),
                floorNumber: Number(data.floorNumber),
                streetNumber: Number(data.streetNumber),
                latitude: Number(data.latitude),
                longitude: Number(data.longitude)
            }
        });
        return PropertyDTO(updateUser);
    };

    static async deleteProperty(id : string): Promise<void> {
        await prisma.property.delete({
            where: {
                id: id,
            },
        });
    };

    static async deleteManyProperties(ownerId : string): Promise<number> {
        const deleteResult = await prisma.property.deleteMany({
            where: {
                ownerId: ownerId,
            },
        });
        return deleteResult.count
    };


};