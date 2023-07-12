import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class InvestimentService {
   constructor(private db: PrismaService) {}
   async getInvestiment() {
      return {
         name: 'Investiment',
         description: 'Investiment description',
         value: 1000,
         date: new Date(),
      };
   }
}
