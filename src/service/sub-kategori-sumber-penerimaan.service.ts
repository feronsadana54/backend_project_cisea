import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubKategoriSumberPenerimaanDto } from 'src/dto/create-sub-kategori-sumber-penerimaan.dto';
import { SubKategoriSumberPenerimaan } from 'src/entity/sub_kategori_sumber_penerimaan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubKategoriSumberPenerimaanService {
  constructor(
    @InjectRepository(SubKategoriSumberPenerimaan)
    private readonly subKategoriRepository: Repository<SubKategoriSumberPenerimaan>,
  ) {}

  async create(dto: CreateSubKategoriSumberPenerimaanDto): Promise<SubKategoriSumberPenerimaan> {
    const subKategori = this.subKategoriRepository.create(dto);
    return this.subKategoriRepository.save(subKategori);
  }

  async findAll(): Promise<SubKategoriSumberPenerimaan[]> {
    return this.subKategoriRepository.find({ relations: ['kategori'] });
  }

  async findOne(id: number): Promise<SubKategoriSumberPenerimaan> {
    return this.subKategoriRepository.findOne({
      where: { id },
      relations: ['kategori'],
    });
  }  

  async update(id: number, dto: CreateSubKategoriSumberPenerimaanDto): Promise<void> {
    await this.subKategoriRepository.update(id, dto);
  }

  async remove(id: number): Promise<void> {
    await this.subKategoriRepository.delete(id);
  }
}
