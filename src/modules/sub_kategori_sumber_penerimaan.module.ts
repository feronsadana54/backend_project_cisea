// sub-kategori-sumber-penerimaan.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubKategoriSumberPenerimaanController } from 'src/controller/sub-kategori-sumber-penerimaan.controller';
import { SubKategoriSumberPenerimaan } from 'src/entity/sub_kategori_sumber_penerimaan.entity';
import { SubKategoriSumberPenerimaanService } from 'src/service/sub-kategori-sumber-penerimaan.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubKategoriSumberPenerimaan])],
  providers: [SubKategoriSumberPenerimaanService],
  controllers: [SubKategoriSumberPenerimaanController],
  exports: [SubKategoriSumberPenerimaanService],
})
export class SubKategoriSumberPenerimaanModule {}
