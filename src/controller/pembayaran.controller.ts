import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { CreatePembayaranDto } from 'src/dto/create-pembayaran.dto';
import { UpdatePembayaranDto } from 'src/dto/update-pembayaran.dto';
import { PembayaranService } from 'src/service/pembayaran.service';

@Controller('pembayaran')
export class PembayaranController {
  constructor(private readonly pembayaranService: PembayaranService) {}

  @Post('create')
  async create(@Body() createPembayaranDto: CreatePembayaranDto) {
    return this.pembayaranService.create(createPembayaranDto);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() updatePembayaranDto: UpdatePembayaranDto) {
    return this.pembayaranService.update(id, updatePembayaranDto);
  }
}
