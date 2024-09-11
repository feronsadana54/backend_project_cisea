import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PembayaranController } from 'src/controller/pembayaran.controller';
import { Pembayaran } from 'src/entity/pembayaran.entity';
import { PembayaranService } from 'src/service/pembayaran.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pembayaran])],
  controllers: [PembayaranController],
  providers: [PembayaranService],
})
export class PembayaranModule {}
