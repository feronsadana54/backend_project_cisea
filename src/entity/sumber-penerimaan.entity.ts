import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SubKategoriSumberPenerimaan } from './sub_kategori_sumber_penerimaan.entity';

@Entity('kategori_sumber_penerimaan')
export class KategoriSumberPenerimaan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @OneToMany(() => SubKategoriSumberPenerimaan, (subKategori) => subKategori.kategori)
  subKategori: SubKategoriSumberPenerimaan[];
}
