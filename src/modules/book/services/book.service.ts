import { Inject, Injectable } from '@nestjs/common';
import { BookRepositoryInterface } from '../repositories/book.repository.interface';

@Injectable()
export class BookService {
  constructor(
    @Inject('BookRepositoryInterface')
    private readonly bookRepository: BookRepositoryInterface,
  ) {}

  createBook(): Promise<any> {
    return this.bookRepository.create({ title: 'Book 1' });
  }

  updateBook(): Promise<any> {
    return this.bookRepository.update('1', { title: 'Book 2' });
  }

  deleteBook(): Promise<void> {
    return this.bookRepository.delete('1');
  }

  getBookById(): Promise<any> {
    return this.bookRepository.findById('1');
  }

  getBooks(): Promise<any> {
    return this.bookRepository.findAll();
  }
}
