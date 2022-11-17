import { OmitType } from '@nestjs/swagger';
import { Species } from '../entities/species.entity';

export class CreateSpecies extends OmitType(Species, ['id'] as const) {}
