import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Species } from '../entities/species.entity';
import { CreateSpecies } from '../models/create-species.dto';
import { UpdateSpecies } from '../models/update-species.dto';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private _speciesRepository: Repository<Species>,
  ) {}

  async create(species: CreateSpecies): Promise<Species> {
    return await this._speciesRepository.save(species);
  }

  async update(id: number, species: UpdateSpecies): Promise<Species> {
    const found = await this._speciesRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._speciesRepository.update(id, species);

    return this._speciesRepository.findOneBy({ id });
  }

  async findAll(): Promise<Species[]> {
    return await this._speciesRepository.find();
  }

  async findByID(id: number): Promise<Species> {
    const species = await this._speciesRepository.findOneBy({ id });

    if (!species) {
      throw new NotFoundException();
    }

    return species;
  }

  async delete(id: number): Promise<void> {
    await this._speciesRepository.delete({ id });
  }
}
