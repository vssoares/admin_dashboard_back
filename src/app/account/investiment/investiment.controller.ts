import { Controller, Get } from '@nestjs/common';
import { InvestimentService } from './investiment.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('investiment')
@ApiTags('Investiment')
export class InvestimentController {
   constructor(private readonly investimentService: InvestimentService) {}

   @Get('')
   getInvestiment() {
      return this.investimentService.getInvestiment();
   }
}
