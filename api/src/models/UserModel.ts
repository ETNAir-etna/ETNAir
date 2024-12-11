
import { PrismaClient } from '@prisma/client';
import { User } from '../../../shared/types/User';
// import { User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserModel  {

    static async findAll(): Promise<User[]> {
        return prisma.user.findMany();
    };

    static async findById(id: string): Promise<User | null> {
        return prisma.user.findUnique({where: { id }});
    };

    static async createUser(email: string, password: string) {
        return prisma.user.create({
            data : {
                email: email,
                password: password
            }
        })
    };

    static async connectUser(email: string, password: string) {
        // TODO : finish the login of the user 
    }

    static async disconnectUser() {
        // TODO : finish the logout of the user 
    }

    // static async update(id: string, data: Partial<User>): Promise<User> {
    //     return await prisma.user.update({ where: { id }, data });
    // }

    // static async delete(id: string): Promise<User> {
    //     return await prisma.user.delete({ where: { id } });
    // }
}