import { OmitType } from '@nestjs/swagger';
import { Planet } from '../entities/planet.entity';

export class CreatePlanet extends OmitType(Planet, ['id'] as const) {}
