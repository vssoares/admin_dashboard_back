import { PrismaService } from 'src/config/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { NotFoundError } from 'src/helpers/error-middlewere';

@Injectable()
export class AuthService {
   constructor(private jwtService: JwtService, private db: PrismaService) {}

   async login({ email, password }: LoginAuthDto) {
      const user = await this.db.user.findUnique({ where: { email } });
      if (!user) throw new NotFoundError('Usuário não encontrado');

      if (!bcrypt.compare(password, user.password))
         throw new UnauthorizedException('Senha incorreta');

      const payload = { sub: user?.id, nome: user?.name, email: user?.email };

      return {
         access_token: await this.jwtService.signAsync(payload),
      };
   }
}
