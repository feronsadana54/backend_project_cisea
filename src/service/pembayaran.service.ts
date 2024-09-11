import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePembayaranDto } from 'src/dto/create-pembayaran.dto';
import { UpdatePembayaranDto } from 'src/dto/update-pembayaran.dto';
import { Pembayaran } from 'src/entity/pembayaran.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PembayaranService {
  constructor(
    @InjectRepository(Pembayaran)
    private readonly pembayaranRepository: Repository<Pembayaran>,
  ) {}

  async create(createPembayaranDto: CreatePembayaranDto): Promise<Pembayaran> {
    const pembayaran = this.pembayaranRepository.create(createPembayaranDto);
    return this.pembayaranRepository.save(pembayaran);
  }

  async update(id: number, updatePembayaranDto: UpdatePembayaranDto): Promise<void> {
    await this.pembayaranRepository.update(id, updatePembayaranDto);
  }
}
