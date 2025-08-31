import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hospital_tb')
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
