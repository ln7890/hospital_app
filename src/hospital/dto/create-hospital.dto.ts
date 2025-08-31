import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
