import { PartialType } from '@nestjs/swagger';

import { CreateSpecies } from './create-species.dto';

export class UpdateSpecies extends PartialType(CreateSpecies) {}
