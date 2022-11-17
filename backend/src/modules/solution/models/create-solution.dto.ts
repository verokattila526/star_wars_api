import { OmitType } from '@nestjs/swagger';
import { Solution } from '../entities/solution.entity';

export class CreateSolution extends OmitType(Solution, ['id'] as const) {}
