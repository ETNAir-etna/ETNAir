import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "@etnair-etna/shared/dist/types";
import { UserDTO } from "@etnair-etna/shared/dist/dto";

const prisma = new PrismaClient();

export class UserModel {
  static async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map((user) => UserDTO(user));
  }

  static async findById(id: string): Promise<User> {
    const user = await prisma.user.findUniqueOrThrow({ where: { id } });
    return UserDTO(user);
  }

  static async findByEmail(email: string) {
    return await prisma.user.findUniqueOrThrow({
      where: { email: email },
      select: {
        id: true,
        password: true,
        role: true,
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

  static async update( id: string, data: User ): Promise<User> {
    return await prisma.user.update({ where: { id }, data });
  }

  static async delete(id: string): Promise<User> {
    return await prisma.user.delete({ where: { id } });
  }
}
