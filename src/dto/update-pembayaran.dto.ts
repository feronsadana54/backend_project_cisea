import { IsOptional, IsNumber, IsPositive, IsDate } from 'class-validator';

export class UpdatePembayaranDto {
  @IsOptional()
  @IsNumber()
  subKategoriId?: number;

  @IsOptional()
  @IsPositive()
  amount?: number;

  @IsOptional()
  @IsNumber()
  kota_kab?: number;

  @IsOptional()
  @IsNumber()
  provinsi?: number;

  @IsOptional()
  @IsNumber()
  pusat?: number;

  @IsOptional()
  @IsDate()
  date?: Date;
}
