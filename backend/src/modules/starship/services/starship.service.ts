import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Starship } from '../entities/starship.entity';
import { CreateStarship } from '../models/create-starship.dto';
import { UpdateStarship } from '../models/update-starship.dto';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship)
    private _starshipRepository: Repository<Starship>,
  ) {}

  async create(starship: CreateStarship): Promise<Starship> {
    return await this._starshipRepository.save(starship);
  }

  async update(id: number, starship: UpdateStarship): Promise<Starship> {
    const found = await this._starshipRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._starshipRepository.update(id, starship);

    return this._starshipRepository.findOneBy({ id });
  }

  async findAll(): Promise<Starship[]> {
    return await this._starshipRepository.find();
  }

  async findByID(id: number): Promise<Starship> {
    const starship = await this._starshipRepository.findOneBy({ id });

    if (!starship) {
      throw new NotFoundException();
    }

    return starship;
  }

  async delete(id: number): Promise<void> {
    await this._starshipRepository.delete({ id });
  }
}
