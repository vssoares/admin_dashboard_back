import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class AccountService {
   constructor(private db: PrismaService) {}

   async findAccount(id: number) {
      const account = await this.db.account.findUnique({
         where: { id },
         include: { transactions: true, investiments: true },
      });
      return { ...account, statusCode: 200 };
   }
}
