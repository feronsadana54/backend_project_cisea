import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { KategoriSumberPenerimaan } from './sumber-penerimaan.entity';

@Entity('sub_kategori_sumber_penerimaan')
export class SubKategoriSumberPenerimaan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => KategoriSumberPenerimaan)
  kategori: KategoriSumberPenerimaan;

  @Column()
  nama: string;

  @Column('decimal')
  persentase_kota_kab: number;

  @Column('decimal')
  persentase_provinsi: number;

  @Column('decimal')
  persentase_pusat: number;
}
