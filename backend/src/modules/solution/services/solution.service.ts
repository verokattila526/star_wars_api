import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solution } from '../entities/solution.entity';
import { CreateSolution } from '../models/create-solution.dto';
import { UpdateSolution } from '../models/update-solution.dto';

@Injectable()
export class SolutionService {
  constructor(
    @InjectRepository(Solution)
    private _solutionRepository: Repository<Solution>,
  ) {}

  async create(solution: CreateSolution): Promise<Solution> {
    return await this._solutionRepository.save(solution);
  }

  async update(id: number, solution: UpdateSolution): Promise<Solution> {
    const found = await this._solutionRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._solutionRepository.update(id, solution);

    return this._solutionRepository.findOneBy({ id });
  }

  async findAll(): Promise<Solution[]> {
    return await this._solutionRepository.find();
  }

  async findByID(id: number): Promise<Solution> {
    const solution = await this._solutionRepository.findOneBy({ id });

    if (!solution) {
      throw new NotFoundException();
    }

    return solution;
  }

  async delete(id: number): Promise<void> {
    await this._solutionRepository.delete({ id });
  }
}
