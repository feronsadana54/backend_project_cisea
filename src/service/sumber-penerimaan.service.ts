import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateKategoriDto } from 'src/dto/create-kategori-sumber-penerimaan.dto';
import { KategoriSumberPenerimaan } from 'src/entity/sumber-penerimaan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SumberPenerimaanService {
  constructor(
    @InjectRepository(KategoriSumberPenerimaan)
    private readonly kategoriRepository: Repository<KategoriSumberPenerimaan>,
  ) {}

  async create(createDto: CreateKategoriDto): Promise<KategoriSumberPenerimaan> {
    const kategori = this.kategoriRepository.create(createDto);
    return this.kategoriRepository.save(kategori);
  }
}
