import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateKategoriDto } from 'src/dto/create-kategori-sumber-penerimaan.dto';
import { UpdateKategoriSumberPenerimaanDto } from 'src/dto/update-kategori-sumber-penerimaan.dto';
import { KategoriSumberPenerimaan } from 'src/entity/sumber-penerimaan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KategoriSumberPenerimaanService {
  constructor(
    @InjectRepository(KategoriSumberPenerimaan)
    private readonly kategoriRepository: Repository<KategoriSumberPenerimaan>,
  ) {}

  async create(dto: CreateKategoriDto): Promise<KategoriSumberPenerimaan> {
    const kategori = this.kategoriRepository.create(dto);
    return this.kategoriRepository.save(kategori);
  }

  async findAll(): Promise<KategoriSumberPenerimaan[]> {
    return this.kategoriRepository.find();
  }

  async findOne(id: number): Promise<KategoriSumberPenerimaan> {
    return this.kategoriRepository.findOne({where: {id: id}});
  }

  async update(id: number, dto: UpdateKategoriSumberPenerimaanDto): Promise<void> {
    await this.kategoriRepository.update(id, dto);
  }

  async remove(id: number): Promise<void> {
    await this.kategoriRepository.delete(id);
  }
}
