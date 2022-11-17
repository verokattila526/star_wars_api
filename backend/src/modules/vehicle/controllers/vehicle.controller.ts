import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicle } from '../models/create-vehicle.dto';
import { UpdateVehicle } from '../models/update-vehicle.dto';
import { VehicleService } from '../services/vehicle.service';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private _vehicleService: VehicleService) {}

  @ApiOperation({ operationId: 'createVehicle', summary: 'Create a {Vehicle}' })
  @Post()
  public createVehicle(@Body() vehicle: CreateVehicle): Promise<Vehicle> {
    return this._vehicleService.create(vehicle);
  }

  @ApiOperation({ operationId: 'updateVehicle', summary: 'Update a {Vehicle}' })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updateVehicle(
    @Param('id') id: number,
    @Body() vehicle: UpdateVehicle,
  ): Promise<Vehicle> {
    return this._vehicleService.update(id, vehicle);
  }

  @ApiOperation({ operationId: 'getVehicle', summary: 'Find all {Vehicle}' })
  @Get('get-vehicles')
  public getVehicles(): Promise<Vehicle[]> {
    return this._vehicleService.findAll();
  }

  @ApiOperation({
    operationId: 'getVehicleByID',
    summary: 'Find a {Vehicle} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getVehicleByID(@Param('id') id: number): Promise<Vehicle> {
    return this._vehicleService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deleteVehicleByID',
    summary: 'Delete a {Vehicle} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deleteVehicleByID(@Param('id') id: number): Promise<void> {
    return this._vehicleService.delete(id);
  }
}
