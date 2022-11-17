import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from '../entities/people.entity';
import { CreatePeople } from '../models/create-people.dto';
import { UpdatePeople } from '../models/update-people.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private _peopleRepository: Repository<People>,
  ) {}

  async create(people: CreatePeople): Promise<People> {
    return await this._peopleRepository.save(people);
  }

  async update(id: number, people: UpdatePeople): Promise<People> {
    const found = await this._peopleRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._peopleRepository.update(id, people);

    return this._peopleRepository.findOneBy({ id });
  }

  async findAll(): Promise<People[]> {
    return await this._peopleRepository.find();
  }

  async findByID(id: number): Promise<People> {
    const people = await this._peopleRepository.findOneBy({ id });

    if (!people) {
      throw new NotFoundException();
    }

    return people;
  }

  async delete(id: number): Promise<void> {
    await this._peopleRepository.delete({ id });
  }
}
