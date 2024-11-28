import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookService } from 'src/modules/book/services/book.service';

@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/')
  createBook(): Promise<any> {
    return this.bookService.createBook();
  }

  @Patch('/:id')
  updateBook(): Promise<any> {
    return this.bookService.updateBook();
  }

  @Delete('/:id')
  deleteBook(): Promise<void> {
    return this.bookService.deleteBook();
  }

  @Get('/:id')
  getBookById(): Promise<any> {
    return this.bookService.getBookById();
  }

  @Get('/')
  getBooks(): Promise<any> {
    return this.bookService.getBooks();
  }
}
