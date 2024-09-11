import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('wilayah_setoran')
export class WilayahSetoran {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column('decimal')
  persentase_kota_kab: number;

  @Column('decimal')
  persentase_provinsi: number;

  @Column('decimal')
  persentase_pusat: number;
}
