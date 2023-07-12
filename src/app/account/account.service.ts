import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class AccountService {
   constructor(private db: PrismaService) {}

   async findAccount(id: number) {
      const accounts = await this.db.account.findMany({
         where: {
            userId: id,
         },
      });

      return { accounts };
   }
}
