import { Inject, Injectable } from '@nestjs/common';
import { BookRepositoryInterface } from './book.repository.interface';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookRepositoryPrisma implements BookRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async findById(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async create(data: Book): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
  }

  async update(id: string, data: Partial<Book>): Promise<Book> {
    return this.prisma.book.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    this.prisma.book.delete({
      where: { id },
    });
  }

  async findByTitle(title: string): Promise<Book[]> {
    return this.prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }
}
