import { OmitType } from '@nestjs/swagger';
import { Film } from '../entities/film.entity';

export class CreateFilm extends OmitType(Film, ['id'] as const) {}
