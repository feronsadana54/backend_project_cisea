import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/service/auth.service';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { RedisService } from 'src/service/redis.service';
import { AuthController } from 'src/controller/auth.controller';

@Module({
  imports: [
    UsersModule,  // Tambahkan UsersModule ke dalam imports
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'mysecretkey', // Sesuaikan secret
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, RedisService],
  controllers: [AuthController],
})
export class AuthModule {}
