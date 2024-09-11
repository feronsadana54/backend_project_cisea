import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { KategoriSumberPenerimaanModule } from './modules/kategori_sumber_penerimaan.module';
import { SubKategoriSumberPenerimaanModule } from './modules/sub_kategori_sumber_penerimaan.module';
import { PembayaranModule } from './modules/pembayaran.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username:'remote',
      password: 'remote123',
      database: 'db_cisea',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: false,
      },
    }),
    AuthModule, 
    UsersModule, 
    KategoriSumberPenerimaanModule, 
    SubKategoriSumberPenerimaanModule, 
    PembayaranModule, 
  ],
})
export class AppModule {}
