import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SumberPenerimaanService } from '../service/sumber-penerimaan.service';
import { SetMetadata } from '@nestjs/common';
import { CreateKategoriDto } from 'src/dto/create-kategori-sumber-penerimaan.dto';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('kategori-sumber-penerimaan')
export class SumberPenerimaanController {
  constructor(private readonly sumberPenerimaanService: SumberPenerimaanService) {}

  @UseGuards(RolesGuard)
  @Post('create')
  @SetMetadata('role', 'AM_PPN')
  async createKategori(@Body() createDto: CreateKategoriDto) {
    return this.sumberPenerimaanService.create(createDto);
  }
}
