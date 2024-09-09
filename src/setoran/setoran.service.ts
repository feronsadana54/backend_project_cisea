import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setoran } from './setoran.entity';

@Injectable()
export class SetoranService {
  constructor(
    @InjectRepository(Setoran)
    private readonly setoranRepository: Repository<Setoran>,
  ) {}

  async findAll(): Promise<Setoran[]> {
    return this.setoranRepository.find();
  }

  async create(setoran: Setoran): Promise<Setoran> {
    return this.setoranRepository.save(setoran);
  }

  async update(id: number, setoran: Setoran): Promise<void> {
    await this.setoranRepository.update(id, setoran);
  }

  async delete(id: number): Promise<void> {
    await this.setoranRepository.delete(id);
  }
}
