import { Injectable } from '@nestjs/common';
import { IUserRepositoryInterface } from '../repositories/user.repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepositoryInterface) {}

  createUser(dto: CreateUserDto): Promise<User> {
    return this.userRepository.save(dto);
  }

  updateUser(id: string, dto: UpdateUserDto): Promise<void> {
    return this.userRepository.update(id, dto);
  }

  deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }

  getUserById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  login(dto: LoginUserDto): Promise<void> {
    return this.userRepository.login(dto.email, dto.password);
  }
}
