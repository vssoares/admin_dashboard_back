import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class LoginAuthDto {
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
