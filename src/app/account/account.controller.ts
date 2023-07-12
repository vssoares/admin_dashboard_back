import { Body, Controller, Get, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('account')
@ApiTags('Account')
export class AccountController {
   constructor(private accountService: AccountService) {}

   @Get('')
   findAccount(@Query('id') id: string) {
      return this.accountService.findAccount(+id);
   }
}
