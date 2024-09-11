import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    console.log(req.headers); // Log all headers to inspect what is being received

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      console.error('Authorization header is missing');
      throw new Error('Authorization header is missing');
    }

    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7);

      if (!token) {
        console.error('Token not found');
        throw new Error('Token not found');
      }

      return this.authService.logout(token);
    } else {
      console.error('Authorization header format is incorrect');
      throw new Error('Authorization header format is incorrect');
    }
  }
}
