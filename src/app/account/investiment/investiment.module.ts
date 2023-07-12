import { Module } from '@nestjs/common';
import { InvestimentService } from './investiment.service';
import { InvestimentController } from './investiment.controller';
import { PrismaService } from 'src/config/prisma.service';

@Module({
   controllers: [InvestimentController],
   providers: [InvestimentService, PrismaService],
})
export class InvestimentModule {}
