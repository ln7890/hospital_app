import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private readonly workerService: Repository<Worker>,
  ) {}
  async create(createWorkerDto: CreateWorkerDto) {
    let worker = await this.workerService.save(createWorkerDto);
    return worker;
  }

  async findAll() {
    let workers = await this.workerService.find({});
    return workers;
  }

  async findOne(id: number) {
    let worker = await this.workerService.findOne({ where: { id } });
    if (!worker) {
      throw new NotFoundException();
    }
    return worker;
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    await this.workerService.update(id, updateWorkerDto);
    let worker = await this.workerService.findOne({ where: { id } });
    if (!worker) {
      throw new NotFoundException();
    }
    return worker;
  }

  async remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
