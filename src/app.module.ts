import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './config/prisma.service';
import { AccountModule } from './app/account/account.module';

@Module({
   imports: [AuthModule, AccountModule],
   controllers: [AppController],
   providers: [AppService, PrismaService],
})
export class AppModule {}
