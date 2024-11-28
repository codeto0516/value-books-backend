export class Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  description?: string;
  publisher?: string;
  publicationYear?: number;
  pages?: number;
  price?: number;

  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<Book>) {
    Object.assign(this, init);
  }
}
