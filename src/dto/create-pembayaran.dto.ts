import { IsNotEmpty, IsNumber, IsDate, IsPositive } from 'class-validator';

export class CreatePembayaranDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  subKategoriId: number;

  @IsNotEmpty()
  @IsPositive()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  kota_kab: number;

  @IsNotEmpty()
  @IsNumber()
  provinsi: number;

  @IsNotEmpty()
  @IsNumber()
  pusat: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}
