import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "../../../shared/types/User";

const prisma = new PrismaClient();

export class UserModel {
  static async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  static async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  static async findByEmail(email: string) {
    return await prisma.user.findUniqueOrThrow({
      where: { email: email },
      select: {
        id: true,
        password: true,
      },
    });
  }

  static async createUser(email: string, password: string) {
    return prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
  }

  static async update(
    id: string,
    data: Prisma.PropertyUpdateInput
  ): Promise<User> {
    return await prisma.user.update({ where: { id }, data });
  }

  static async delete(id: string): Promise<User> {
    return await prisma.user.delete({ where: { id } });
  }
}
