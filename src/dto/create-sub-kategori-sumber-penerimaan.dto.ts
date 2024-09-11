import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubKategoriSumberPenerimaanDto {
  @IsNotEmpty()
  @IsNumber()
  kategoriId: number;

  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsNumber()
  persentase_kota_kab: number;

  @IsNotEmpty()
  @IsNumber()
  persentase_provinsi: number;

  @IsNotEmpty()
  @IsNumber()
  persentase_pusat: number;
}
