import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateKategoriDto } from 'src/dto/create-kategori-sumber-penerimaan.dto';
import { UpdateKategoriSumberPenerimaanDto } from 'src/dto/update-kategori-sumber-penerimaan.dto';
import { KategoriSumberPenerimaanService } from 'src/service/kategori_sumber_penerimaan.service';

@Controller('kategori-sumber-penerimaan')
export class KategoriSumberPenerimaanController {
  constructor(private readonly kategoriService: KategoriSumberPenerimaanService) {}

  @Post('create')
  async create(@Body() dto: CreateKategoriDto) {
    return this.kategoriService.create(dto);
  }

  @Get()
  async findAll() {
    return this.kategoriService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.kategoriService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateKategoriSumberPenerimaanDto) {
    return this.kategoriService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.kategoriService.remove(id);
  }
}
