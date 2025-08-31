import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospital } from './entities/hospital.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital) private hostipitalService: Repository<Hospital>,
  ) {}
  async create(createHospitalDto: CreateHospitalDto) {
    let hospital = await this.hostipitalService.save(createHospitalDto);
    return hospital;
  }

  async findAll() {
    let hospitals = await this.hostipitalService.find({});
    return hospitals;
  }

  async findOne(id: number) {
    let hospital = await this.hostipitalService.findOne({ where: { id } });
    return hospital;
  }

  async update(id: number, updateHospitalDto: UpdateHospitalDto) {
    await this.hostipitalService.update(id, updateHospitalDto);
    let hospital = await this.hostipitalService.findOne({ where: { id } });

    if (!hospital) {
      throw new NotFoundException(`Not found`);
    }
    return hospital;
  }

  async remove(id: number) {
    const hospital = await this.hostipitalService.findOne({ where: { id } });

    if (!hospital) {
      throw new NotFoundException(`Hospital ${id} not found`);
    }

    await this.hostipitalService.remove(hospital);
    return { message: `Hospital with id ${id} removed` };
  }
}
