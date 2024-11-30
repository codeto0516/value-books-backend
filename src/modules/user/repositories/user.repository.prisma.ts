import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import { User } from '../entities/user.entity';
import { IUserRepositoryInterface } from './user.repository.interface';

@Injectable()
export class UserRepositoryPrisma implements IUserRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async save(data: User): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: Partial<User>): Promise<void> {
    this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    this.prisma.user.delete({
      where: { id },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async login(email: string, password: string): Promise<void> {
    this.prisma.user.findUnique({
      where: { email, password },
    });
  }
}
