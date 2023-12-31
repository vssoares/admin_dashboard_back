import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
   @ApiProperty()
   @IsNotEmpty({ message: 'Informe o nome do usuário' })
   @IsString({ message: 'Nome: String' })
   name: string;

   @ApiProperty()
   @IsNotEmpty({ message: 'Informe o email do usuário' })
   @IsEmail({}, { message: 'Informe um email válido' })
   @IsString({ message: 'Email: String' })
   email: string;

   @ApiProperty()
   @IsNotEmpty({ message: 'Informe a senha do usuário' })
   @IsString({ message: 'Senha: String' })
   password: string;
}
