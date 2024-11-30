import { TransactionContext } from 'src/shared/transaction-context';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export abstract class IUserRepositoryInterface {
  abstract save(
    user: CreateUserDto,
    transactionContext?: TransactionContext,
  ): Promise<User>;
  abstract update(
    id: string,
    user: UpdateUserDto,
    transactionContext?: TransactionContext,
  ): Promise<void>;
  abstract delete(
    id: string,
    transactionContext?: TransactionContext,
  ): Promise<void>;
  abstract findById(
    id: string,
    transactionContext?: TransactionContext,
  ): Promise<User>;
  abstract findAll(transactionContext?: TransactionContext): Promise<User[]>;
  abstract login(
    email: string,
    password: string,
    transactionContext?: TransactionContext,
  ): Promise<void>;
}
