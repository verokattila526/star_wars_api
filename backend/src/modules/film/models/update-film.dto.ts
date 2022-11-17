import { PartialType } from '@nestjs/swagger';

import { CreateFilm } from './create-film.dto';

export class UpdateFilm extends PartialType(CreateFilm) {}
