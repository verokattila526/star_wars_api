import { PartialType } from '@nestjs/swagger';

import { CreateSolution } from './create-solution.dto';

export class UpdateSolution extends PartialType(CreateSolution) {}
