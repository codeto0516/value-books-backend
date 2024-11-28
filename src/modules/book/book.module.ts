// src/modules/book/book.module.ts
import { Module } from '@nestjs/common';
import { BookController } from './controllers/book.controller';
import { BookService } from './services/book.service';
import { BookRepositoryPrisma } from './repositories/book.repository.prisma';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [BookController], // BookControllerを登録
  providers: [
    BookService, // BookServiceを登録
    {
      provide: 'BookRepositoryInterface', // BookRepositoryInterfaceの依存性を提供
      useClass: BookRepositoryPrisma, // BookRepositoryを実装として指定
    },
  ],
  exports: [BookService], // 他のモジュールでBookServiceを利用できるようにエクスポート
  imports: [PrismaModule], // 他のモジュールをインポート
})
export class BookModule {}
