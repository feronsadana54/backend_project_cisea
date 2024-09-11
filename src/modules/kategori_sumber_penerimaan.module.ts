import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KategoriSumberPenerimaanController } from 'src/controller/kategori_sumber_penerimaan.controller';
import { KategoriSumberPenerimaan } from 'src/entity/sumber-penerimaan.entity';
import { KategoriSumberPenerimaanService } from 'src/service/kategori_sumber_penerimaan.service';

@Module({
  imports: [TypeOrmModule.forFeature([KategoriSumberPenerimaan])],
  providers: [KategoriSumberPenerimaanService],
  controllers: [KategoriSumberPenerimaanController],
})
export class KategoriSumberPenerimaanModule {}
