import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { UserService } from 'src/auth/user/user.service';

@Controller('account')
export class AccountController {
   constructor(private accountService: AccountService) {}

   @Get(':id')
   findAccount(@Param('id') id: string) {
      return this.accountService.findAccount(+id);
   }
}
