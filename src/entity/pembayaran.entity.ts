import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { SubKategoriSumberPenerimaan } from './sub_kategori_sumber_penerimaan.entity';

@Entity('pembayaran')
export class Pembayaran {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => SubKategoriSumberPenerimaan)
  subKategori: SubKategoriSumberPenerimaan;

  @Column('decimal')
  amount: number;

  @Column()
  kota_kab: number;

  @Column()
  provinsi: number;

  @Column()
  pusat: number;

  @Column({ type: 'date' })
  date: Date;
}
