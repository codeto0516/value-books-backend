// transaction-context.interface.ts
import { Prisma } from '@prisma/client';
export interface TransactionContext {
  // PrismaClientやその他のORMのトランザクションクライアントを含める
  prisma: Prisma.TransactionClient;
}
