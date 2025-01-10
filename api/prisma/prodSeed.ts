import { faker } from '@faker-js/faker';

import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const equipmentList = [
    'Pool', 'Wi-Fi', 'Air Conditioning', 'Gym', 'Parking', 'TV', 
    'Fireplace', 'Washer', 'Dryer', 'Dishwasher', 'Microwave', 
    'Refrigerator', 'Oven', 'Stove', 'Balcony', 'Terrace', 
    'Garden', 'BBQ', 'Jacuzzi', 'Sauna', 'Elevator', 
    'Security System', 'Workspace', 'Game Room', 'Home Theater', 
    'Sound System', 'Coffee Maker', 'Toaster', 'Kettle', 
    'Hair Dryer', 'Iron', 'Towels', 'Linens', 'Cleaning Service',
    'Child-Friendly', 'Pet-Friendly', 'High-Speed Internet', 
    'Outdoor Dining', 'Private Entrance', 'Beach Access', 
    'Mountain View', 'City View', 'Eco-Friendly', 'Solar Panels', 
    'Electric Vehicle Charger', 'Library', 'Bicycle Rental', 
    'Kayak Rental', 'Board Games', 'Smart Lock', 'Smart Lighting'
];

async function createHosts(count: number): Promise<Prisma.UserCreateManyInput[]> {
    const hashedPassword = await bcrypt.hash('pwd', 10);
    const users: Prisma.UserCreateManyInput[] = [];

    for (let i = 0; i < count; i++) {

        const statusRandom: string = i % 2 === 0 ? "host" : "guest";
        
        const firstName: string[] = faker.helpers.uniqueArray(faker.person.firstName, 50);
        const lastName: string[] = faker.helpers.uniqueArray(faker.person.lastName, 50);
        const summary = `${faker.person.bio()} ${faker.lorem.lines(2)}`;
    
        const user: Prisma.UserCreateInput = {
            id: faker.string.uuid(),
            email: faker.internet.email({ firstName: firstName[i], lastName: lastName[i], provider: 'fakerjs.dev' }),
            password: hashedPassword,
            firstName: firstName[i],
            lastName: lastName[i],
            phoneNumber: faker.phone.number({ style: 'human' }),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            guestRating: statusRandom === "host" ? faker.number.float({ min: 0, max: 5, fractionDigits: 1 }) :  undefined,
            hostRating: statusRandom === "guest" ? faker.number.float({ min: 0, max: 5, fractionDigits: 1 }) :  undefined,
            summary: summary,
            profileImg: faker.image.urlLoremFlickr({ category: 'person' }),
            status: [statusRandom],
        };
    
        users.push(user);
    }
    return users

}

async function createProperty( users: Prisma.UserCreateManyInput[], count: number): Promise<Prisma.PropertyCreateManyInput[]> {
    const properties: Prisma.PropertyCreateManyInput[] = [];

    for (let i = 0; i < count; i++) {
        const randomHost = users.filter(user => user.hostRating);

        const property = {
            title: faker.lorem.words(3),
            description: faker.lorem.paragraph(2),
            propertyType: faker.helpers.arrayElement(['APARTMENT', 'HOUSE', 'VILLA', 'STUDIO', 'BUNGALOW', 'CONDO', 'LOFT', 'ROOM']),
            occupancyMax: faker.number.int({ min: 1, max: 12 }),
            totalBedrooms: faker.number.int({ min: 1, max: 6 }),
            totalBathrooms: faker.number.int({ min: 1, max: 4 }),
            area: faker.number.float({ min: 30, max: 500, fractionDigits: 1 }),
            pricePerNight: faker.number.float({ min: 50, max: 1000 }),
            mainImgUrl: `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`,
            streetNumber: faker.number.int({ min: 1, max: 5000 }),
            streetName: faker.location.street(),
            city: faker.location.city(),
            zip: faker.location.zipCode(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
            equipments: faker.helpers.arrayElements(equipmentList, faker.number.int({ min: 5, max: 15 })),
            ownerId: faker.helpers.arrayElement(randomHost).id || "dc682ea0-fb99-4102-85a7-4bf734c1d4ad",
            rating: faker.number.float({ min: 0, max: 5, fractionDigits: 2 })
        };

        properties.push(property)
    }
    return properties;

}


async function main() {

    const usersList = await createHosts(50);
    const propertiesList = await createProperty(usersList, 25);

    await prisma.user.createMany({
        data : usersList
    });

    await prisma.property.createMany({
        data: propertiesList
    });

};

try {
    main()
} catch(e) {
    console.error(e);
    process.exit(1);
} finally {
    prisma.$disconnect();
};

console.log("Database seeded successfully! PROD SEED");