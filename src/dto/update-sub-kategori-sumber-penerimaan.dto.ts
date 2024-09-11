import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateSubKategoriSumberPenerimaanDto {
  @IsOptional()
  @IsString()
  nama?: string;

  @IsOptional()
  @IsNumber()
  alokasi_kota_kab?: number;

  @IsOptional()
  @IsNumber()
  alokasi_provinsi?: number;

  @IsOptional()
  @IsNumber()
  alokasi_pusat?: number;
}
