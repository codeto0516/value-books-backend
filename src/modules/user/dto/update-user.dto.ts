import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  Min,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty({ message: '名前は必須項目です。' })
  name: string;

  @IsEmail({}, { message: '有効なメールアドレスを入力してください。' })
  email: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'パスワードは空にできません。' })
  password?: string;

  @IsNumber()
  @Min(0, { message: '予算は0以上でなければなりません。' })
  budget: number;
}
