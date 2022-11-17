import { PartialType } from '@nestjs/swagger';

import { CreatePlanet } from './create-planet.dto';

export class UpdatePlanet extends PartialType(CreatePlanet) {}
