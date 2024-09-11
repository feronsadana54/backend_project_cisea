import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWilayahSetoranDto {
  @IsNotEmpty({ message: 'Nama wilayah tidak boleh kosong' })
  @IsString()
  nama: string;

  @IsNotEmpty({ message: 'Persentase kota/kabupaten tidak boleh kosong' })
  @IsNumber()
  persentaseKotaKabupaten: number;

  @IsNotEmpty({ message: 'Persentase provinsi tidak boleh kosong' })
  @IsNumber()
  persentaseProvinsi: number;

  @IsNotEmpty({ message: 'Persentase pusat tidak boleh kosong' })
  @IsNumber()
  persentasePusat: number;
}
