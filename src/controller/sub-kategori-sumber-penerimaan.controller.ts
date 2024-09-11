import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateSubKategoriSumberPenerimaanDto } from 'src/dto/create-sub-kategori-sumber-penerimaan.dto';
import { SubKategoriSumberPenerimaanService } from 'src/service/sub-kategori-sumber-penerimaan.service';

@Controller('subkategori-sumber-penerimaan')
export class SubKategoriSumberPenerimaanController {
  constructor(private readonly subKategoriService: SubKategoriSumberPenerimaanService) {}

  @Post('create')
  async create(@Body() dto: CreateSubKategoriSumberPenerimaanDto) {
    return this.subKategoriService.create(dto);
  }

  @Get()
  async findAll() {
    return this.subKategoriService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.subKategoriService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: CreateSubKategoriSumberPenerimaanDto) {
    return this.subKategoriService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.subKategoriService.remove(id);
  }
}
