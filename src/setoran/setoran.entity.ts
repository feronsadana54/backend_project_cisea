import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('setoran')
export class Setoran {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  date: string;
}
