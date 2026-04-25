import { IsString } from 'class-validator';

export class CreateUserDto {
  //Dto do usuário, onde serão definidos os campos necessários para criar um usuário
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
