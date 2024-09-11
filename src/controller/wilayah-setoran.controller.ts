import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { WilayahSetoranService } from '../service/wilayah-setoran.service';
import { SetMetadata } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateWilayahSetoranDto } from 'src/dto/create-wilayah.dto';

@Controller('wilayah-setoran')
export class WilayahSetoranController {
  constructor(private readonly wilayahSetoranService: WilayahSetoranService) {}

  @UseGuards(RolesGuard)
  @Post('create')
  @SetMetadata('role', 'AM_PPN')
  async createWilayahSetoran(@Body() createDto: CreateWilayahSetoranDto) {
    return this.wilayahSetoranService.create(createDto);
  }
}
