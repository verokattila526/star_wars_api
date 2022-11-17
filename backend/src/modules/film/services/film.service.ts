import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from '../entities/film.entity';
import { CreateFilm } from '../models/create-film.dto';
import { UpdateFilm } from '../models/update-film.dto';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private _filmRepository: Repository<Film>,
  ) {}

  async create(film: CreateFilm): Promise<Film> {
    return await this._filmRepository.save(film);
  }

  async update(id: number, film: UpdateFilm): Promise<Film> {
    const found = await this._filmRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._filmRepository.update(id, film);

    return this._filmRepository.findOneBy({ id });
  }

  async findAll(): Promise<Film[]> {
    return await this._filmRepository.find();
  }

  async findByID(id: number): Promise<Film> {
    const film = await this._filmRepository.findOneBy({ id });

    if (!film) {
      throw new NotFoundException();
    }

    return film;
  }

  async delete(id: number): Promise<void> {
    await this._filmRepository.delete({ id });
  }
}
