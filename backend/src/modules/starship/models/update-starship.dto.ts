import { PartialType } from '@nestjs/swagger';

import { CreateStarship } from './create-starship.dto';

export class UpdateStarship extends PartialType(CreateStarship) {}
