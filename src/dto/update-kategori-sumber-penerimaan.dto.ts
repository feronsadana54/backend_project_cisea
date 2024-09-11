import { IsOptional, IsString } from 'class-validator';

export class UpdateKategoriSumberPenerimaanDto {
  @IsOptional()
  @IsString()
  nama?: string;
}
