import { IUserRepositoryInterface } from './repositories/user.repository.interface';
// src/modules/book/book.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepositoryPrisma } from './repositories/user.repository.prisma';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UserController], // UserControllerを登録
  providers: [
    UserService, // UserServiceを登録
    {
      provide: IUserRepositoryInterface, // UserRepositoryInterfaceの依存性を提供
      useClass: UserRepositoryPrisma, // UserRepositoryを実装として指定
    },
  ],
  exports: [UserService], // 他のモジュールでUserServiceを利用できるようにエクスポート
  imports: [PrismaModule], // 他のモジュールをインポート
})
export class UserModule {}
