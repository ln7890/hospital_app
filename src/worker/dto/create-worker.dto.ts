import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateWorkerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  //   @IsNumber()
  //   age: number;

  //   @IsNumber()
  //   appointment_id: number;

  @IsNumber()
  workplace_id: number;

  @IsEnum(Role)
  role: Role;
}
