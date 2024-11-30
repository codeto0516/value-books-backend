import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: '有効なメールアドレスを入力してください。' })
  email: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'パスワードは空にできません。' })
  password?: string;
}
