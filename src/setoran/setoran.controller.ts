import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SetoranService } from './setoran.service';

@Controller('setoran')
export class SetoranController {
  constructor(private readonly setoranService: SetoranService) {}

  @Get()
  async getAll() {
    return this.setoranService.findAll();
  }

  @Post()
  async create(@Body() setoranDto: any) {
    return this.setoranService.create(setoranDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() setoranDto: any) {
    return this.setoranService.update(id, setoranDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.setoranService.delete(id);
  }
}
