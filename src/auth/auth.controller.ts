import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('login')
   login(@Body() loginAuthDto: LoginAuthDto) {
      return this.authService.login(loginAuthDto);
   }
}
