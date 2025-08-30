import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Hospital_tb')
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
