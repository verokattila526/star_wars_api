import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicle } from '../models/create-vehicle.dto';
import { UpdateVehicle } from '../models/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private _vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(vehicle: CreateVehicle): Promise<Vehicle> {
    return await this._vehicleRepository.save(vehicle);
  }

  async update(id: number, vehicle: UpdateVehicle): Promise<Vehicle> {
    const found = await this._vehicleRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }

    await this._vehicleRepository.update(id, vehicle);

    return this._vehicleRepository.findOneBy({ id });
  }

  async findAll(): Promise<Vehicle[]> {
    return await this._vehicleRepository.find();
  }

  async findByID(id: number): Promise<Vehicle> {
    const vehicle = await this._vehicleRepository.findOneBy({ id });

    if (!vehicle) {
      throw new NotFoundException();
    }

    return vehicle;
  }

  async delete(id: number): Promise<void> {
    await this._vehicleRepository.delete({ id });
  }
}
