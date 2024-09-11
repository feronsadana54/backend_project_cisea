import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('kategori_sumber_penerimaan')
export class KategoriSumberPenerimaan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;
}
