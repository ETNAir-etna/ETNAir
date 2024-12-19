
import { Prisma, PrismaClient } from '@prisma/client';
import { User } from '../../../shared/types/User';

const prisma = new PrismaClient();

export class UserModel  {

    static async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    };

    static async findById(id: string): Promise<User | null> {
        return await  prisma.user.findUniqueOrThrow({where: { id }});
    };

    static async findByEmail(email: string) {
        return await prisma.user.findUniqueOrThrow({
            where: { email: email },
            select: { 
                password: true
            },
        });
    };

    static async createUser(email: string, password: string) {
        const user = await prisma.user.create({
            data : {
                email: email,
                password: password
            }
        });
        return user.email
    };

    static async updateUser(data: Prisma.UserCreateInput): Promise<User> {
        return await prisma.user.update({ where: { id : data.id }, data });
    };

    static async deleteUser(id: string): Promise<User> {
        return await prisma.user.delete({ where: { id } });
    };
};