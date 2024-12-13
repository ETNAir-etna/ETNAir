import { PrismaClient } from "@prisma/client";
import { User } from "../../../shared/types/User";
// import { User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserModel {
  static update: any;

  static async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  static async findById(id: string): Promise<User | null> {
    console.log(id);
    return await prisma.user.findUnique({ where: { id } });
  }

  //     static async findAll(): Promise<User[]> {
  //     const bob = prisma.user.findMany({ include: { wishlists: true } });
  //     return bob[0].wishlists
  // }

  // static async create(data: Partial<User>): Promise<User> {
  //     return await prisma.user.create({ data });
  // }

  // static async update(id: string, data: Partial<User>): Promise<User> {
  //     return await prisma.user.update({ where: { id }, data });
  // }

  // static async delete(id: string): Promise<User> {
  //     return await prisma.user.delete({ where: { id } });
  // }
}
