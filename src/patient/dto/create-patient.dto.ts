import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsNotEmpty()
  doctor_id: number;

  @IsNumber()
  @IsNotEmpty()
  appointment_id: number;
}
