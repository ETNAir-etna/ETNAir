import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();


async function main() {
    const hashedPassword = await bcrypt.hash('pwd', 10);

    await prisma.user.createMany({
        data: [
        {
            email: "admin@example.com",
            password: hashedPassword,
            firstName: "Admin",
            lasrName: "Data",
            gender: "OTHER",
            role: "ADMIN",
            phoneNumber: 1234567890,
            guestRating: 4.5,
            hostRating: 5.0,
            summary: "Admin user for the system",
        },
        {
            email: "guest1@example.com",
            password: hashedPassword,
            firstName: "John",
            lasrName: "Doe",
            gender: "MAN",
            role: "USER",
            status: ["guest"],
            phoneNumber: 9876543210,
            guestRating: 4.0,
            hostRating: 4.8,
            summary: "A regular user",
        },
        {
            email: "guest2@example.com",
            password: hashedPassword,
            firstName: "Jane",
            lasrName: "Smith",
            gender: "WOMAN",
            role: "USER",
            status: ["guest"],
            guestRating: 4.2,
            hostRating: 4.6,
            summary: "Another regular guest",
        }
    ],
});

const host1 = await prisma.user.create({
    data: {
    id: uuidv4(),
    email: "host1@example.com",
    password: hashedPassword,
    firstName: "David",
    lasrName: "Moe",
    gender: "MAN",
    role: "USER",
    status: ["host"],
    phoneNumber: 9878303210,
    guestRating: 4.0,
    hostRating: 4.8,
    summary: "A kind host",
    },
});

const host2 = await prisma.user.create({
    data: {
    id: uuidv4(),
    email: "host2@example.com",
    password: hashedPassword,
    firstName: "Marie",
    lasrName: "Davinson",
    gender: "WOMAN",
    role: "USER",
    status: ["host"],
    guestRating: 4.2,
    hostRating: 4.6,
    summary: "A warm hoste",
    },
});

const guesthost = await prisma.user.create({
    data: {
    id: uuidv4(),
    email: "guesthost2@example.com",
    password: hashedPassword,
    firstName: "Paula",
    lasrName: "Curie",
    gender: "WOMAN",
    role: "USER",
    status: ["guest", "host"],
    guestRating: 4.2,
    hostRating: 4.6,
    summary: "A warm hoste",
    },
});


await prisma.property.createMany({
    data: [
        {
            id: uuidv4(),
            title: 'Luxury Villa with Pool',
            description: 'A spacious and luxurious villa with a private pool and garden.',
            propertyType: 'VILLA',
            occupancyMax: 8,
            totalBedrooms: 4,
            totalBathrooms: 3,
            area: 250.5,
            pricePerNight: 500,
            mainImgUrl: 'https://example.com/villa.jpg',
            streetNumber: 123,
            streetName: 'Ocean Drive',
            city: 'Miami',
            zip: '33139',
            country: 'USA',
            latitude: 25.790654,
            longitude: -80.1300455,
            equipments: ['Pool', 'Wi-Fi', 'Air Conditioning'],
            ownerId: host1.id,
        },
        {
            id: uuidv4(),
            title: 'Modern Apartment Downtown',
            description: 'A cozy apartment in the heart of downtown.',
            propertyType: 'APARTMENT',
            occupancyMax: 4,
            totalBedrooms: 2,
            totalBathrooms: 1,
            area: 85.0,
            pricePerNight: 150,
            mainImgUrl: 'https://example.com/apartment.jpg',
            streetNumber: 456,
            streetName: 'Main Street',
            city: 'New York',
            zip: '10001',
            country: 'USA',
            latitude: 40.712776,
            longitude: -74.005974,
            equipments: ['Wi-Fi', 'Kitchen', 'Heating'],
            ownerId: guesthost.id,
        },
        {
            id: uuidv4(),
            title: 'Charming Countryside Cottage',
            description: 'A peaceful retreat surrounded by nature with all modern amenities.',
            propertyType: 'HOUSE',
            occupancyMax: 6,
            totalBedrooms: 3,
            totalBathrooms: 2,
            area: 120.0,
            pricePerNight: 200,
            mainImgUrl: 'https://example.com/cottage.jpg',
            streetNumber: 789,
            streetName: 'Willow Lane',
            city: 'Nashville',
            zip: '37221',
            country: 'USA',
            latitude: 36.162664,
            longitude: -86.781602,
            equipments: ['Fireplace', 'Wi-Fi', 'Washer/Dryer', 'BBQ'],
            ownerId: guesthost.id,
        },
        {
            id: uuidv4(),
            title: 'Cozy Loft in Historic District',
            description: 'A modern loft in a charming historic building with great city views.',
            propertyType: 'LOFT',
            occupancyMax: 2,
            totalBedrooms: 1,
            totalBathrooms: 1,
            area: 55.0,
            pricePerNight: 120,
            mainImgUrl: 'https://example.com/loft.jpg',
            streetNumber: 321,
            streetName: 'Elm Street',
            city: 'Boston',
            zip: '02108',
            country: 'USA',
            latitude: 42.360082,
            longitude: -71.058880,
            equipments: ['Wi-Fi', 'Kitchen', 'Smart TV'],
            ownerId: guesthost.id,
        },
    ]

})
}


main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});

console.log("Database seeded successfully!");