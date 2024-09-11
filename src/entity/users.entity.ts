import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  AM_PPN = 'AM_PPN',
  SPESIALIS_KEUANGAN = 'SPESIALIS_KEUANGAN',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', default: UserRole.SPESIALIS_KEUANGAN })
  role: UserRole;

  @Column({ default: false })
  isVerified: boolean;
}
