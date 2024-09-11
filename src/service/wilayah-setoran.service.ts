import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WilayahSetoran } from '../entity/wilayah-setoran.entity';
import { CreateWilayahSetoranDto } from 'src/dto/create-wilayah.dto';

@Injectable()
export class WilayahSetoranService {
  constructor(
    @InjectRepository(WilayahSetoran)
    private readonly wilayahRepository: Repository<WilayahSetoran>,
  ) {}

  async create(createDto: CreateWilayahSetoranDto): Promise<WilayahSetoran> {
    const wilayah = this.wilayahRepository.create(createDto);
    return this.wilayahRepository.save(wilayah);
  }
}
