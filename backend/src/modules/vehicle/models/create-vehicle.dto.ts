import { OmitType } from '@nestjs/swagger';
import { Vehicle } from '../entities/vehicle.entity';

export class CreateVehicle extends OmitType(Vehicle, ['id'] as const) {}
