import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  @IsString()
  @MaxLength(10, { message: 'Username maksimal 10 karakter' })
  username: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @IsString()
  password: string;
}
