import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('integer')
  age: number;

  @Column('integer')
  doctor_id: number;

  @Column('integer')
  appointment_id: number;
}
