import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { Setoran } from './setoran/setoran.entity';
import { SetoranModule } from './setoran/setoran.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      database: 'cisea_db',
      username: '',
      password: '',
      synchronize: true,
      entities: [User, Setoran],
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      extra: {
        options: {
          trustedConnection: true,
        },
      },
    }),
    AuthModule,
    UsersModule,
    SetoranModule,
  ],
})
export class AppModule {}
