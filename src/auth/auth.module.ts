import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from './user/user.module';
import { PrismaService } from 'src/config/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './user/constants';

@Module({
   imports: [
      JwtModule.register({
         global: true,
         secret: jwtConstants.secret,
         signOptions: { expiresIn: '1d' },
      }),
      UserModule,
   ],
   controllers: [AuthController],
   providers: [AuthService, PrismaService],
})
export class AuthModule {}
