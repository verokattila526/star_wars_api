import { OmitType } from '@nestjs/swagger';
import { Starship } from '../entities/starship.entity';

export class CreateStarship extends OmitType(Starship, ['id'] as const) {}
