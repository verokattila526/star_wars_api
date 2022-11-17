import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planet } from '../entities/planet.entity';
import { CreatePlanet } from '../models/create-planet.dto';
import { UpdatePlanet } from '../models/update-planet.dto';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet)
    private _planetRepository: Repository<Planet>,
  ) {}

  async create(planet: CreatePlanet): Promise<Planet> {
    return await this._planetRepository.save(planet);
  }

  async update(id: number, planet: UpdatePlanet): Promise<Planet> {
    const found = await this._planetRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._planetRepository.update(id, planet);

    return this._planetRepository.findOneBy({ id });
  }

  async findAll(): Promise<Planet[]> {
    return await this._planetRepository.find();
  }

  async findByID(id: number): Promise<Planet> {
    const planet = await this._planetRepository.findOneBy({ id });

    if (!planet) {
      throw new NotFoundException();
    }

    return planet;
  }

  async delete(id: number): Promise<void> {
    await this._planetRepository.delete({ id });
  }
}
