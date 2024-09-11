import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty({ message: 'Token tidak boleh kosong' })
  token: string;

  @IsNotEmpty({ message: 'Password baru tidak boleh kosong' })
  @IsString()
  newPassword: string;
}
