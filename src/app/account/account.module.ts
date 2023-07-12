import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TransactionModule } from './transaction/transaction.module';
import { PrismaService } from 'src/config/prisma.service';
import { InvestimentModule } from './investiment/investiment.module';

@Module({
   controllers: [AccountController],
   providers: [AccountService, PrismaService],
   imports: [TransactionModule, InvestimentModule],
})
export class AccountModule {}
