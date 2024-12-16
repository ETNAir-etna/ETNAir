
import { PrismaClient, PrismaPromise } from '@prisma/client';
import { User } from '../../../shared/types/User';
// import { User } from '@prisma/client';

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
    }

    static async createUser(email: string, password: string) {
        return await prisma.user.create({
            data : {
                email: email,
                password: password
            }
        });
    };

    static async connectUser(email: string): Promise<{password : string} | null> {
        return await this.findByEmail(email)
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