// users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['AM_PPN', 'SPESIALIS_KEUANGAN'], default: 'SPESIALIS_KEUANGAN' })
  role: string;
}
