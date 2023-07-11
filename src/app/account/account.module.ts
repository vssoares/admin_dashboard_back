import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TransactionModule } from './transaction/transaction.module';

@Module({
   controllers: [AccountController],
   providers: [AccountService],
   imports: [TransactionModule],
})
export class AccountModule {}
