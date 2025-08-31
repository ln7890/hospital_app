import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientService: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const patient = await this.patientService.save(createPatientDto);
    return patient;
  }

  async findAll() {
    let patients = this.patientService.find({});
    return patients;
  }

  async findOne(id: number) {
    let patient = await this.patientService.findOne({ where: { id } });
    if (!patient) {
      throw new NotFoundException();
    }
    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    let patient = await this.patientService.update(id, updatePatientDto);
    if (!patient) {
      throw new NotFoundException();
    }
    return patient;
  }

  async remove(id: number) {
    let patient = await this.patientService.findOne({ where: { id } });
    if (!patient) {
      throw new NotFoundException();
    }

    await this.patientService.remove(patient);

    return `Patient removed #${id} `;
  }
}
