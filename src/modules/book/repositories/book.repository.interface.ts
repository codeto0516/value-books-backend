import { Book } from '../entities/book.entity';

export interface BookRepositoryInterface {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(data: Partial<Book>): Promise<Book>;
  update(id: string, data: Partial<Book>): Promise<Book>;
  delete(id: string): Promise<void>;
}
