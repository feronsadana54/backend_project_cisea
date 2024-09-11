import { IsNotEmpty } from 'class-validator';

export class CreateKategoriDto {
  @IsNotEmpty({ message: 'Nama kategori tidak boleh kosong' })
  nama: string;
}
