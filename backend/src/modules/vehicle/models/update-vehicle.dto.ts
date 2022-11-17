import { PartialType } from '@nestjs/swagger';

import { CreateVehicle } from './create-vehicle.dto';

export class UpdateVehicle extends PartialType(CreateVehicle) {}
