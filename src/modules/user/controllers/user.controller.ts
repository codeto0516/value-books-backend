import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from './../services/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('/')
  createUser(@Body() dto: CreateUserDto): Promise<any> {
    return this.UserService.createUser(dto);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<any> {
    return this.UserService.updateUser(id, dto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.UserService.deleteUser(id);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<any> {
    return this.UserService.getUserById(id);
  }

  @Get('/')
  getUsers(): Promise<any> {
    return this.UserService.getUsers();
  }

  @Post('/login')
  login(@Body() dto: LoginUserDto): Promise<any> {
    return this.UserService.login(dto);
  }
}
