
import { PrismaClient } from '@prisma/client';
import { User } from '../../../shared/types/User';
import { comparePassword } from '../utils/hashPassword.util';
var createError = require('http-errors');
// import { User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserModel  {

    static async findAll(): Promise<User[]> {
        return prisma.user.findMany();
    };

    static async findById(id: string): Promise<User | null> {
        return prisma.user.findUnique({where: { id }});
    };

    static async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email: email },
            select: { 
                password: true
            },
        });
    }

    static async createUser(email: string, password: string) {
        return prisma.user.create({
            data : {
                email: email,
                password: password
            }
        })
    };

    static async connectUser(email: string): Promise<string> {
        const user = await this.findByEmail(email)
        
        if (!user ) {
            // TODO : Change the message
            throw createError(404, "User not found, try to create a account");
        }
        else {
            return user.password
        }
        
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