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
import { Planet } from '../entities/planet.entity';
import { CreatePlanet } from '../models/create-planet.dto';
import { UpdatePlanet } from '../models/update-planet.dto';
import { PlanetService } from '../services/planet.service';

@ApiTags('Planets')
@Controller('planets')
export class PlanetController {
  constructor(private _planetService: PlanetService) {}

  @ApiOperation({ operationId: 'createPlanet', summary: 'Create a {Planet}' })
  @Post()
  public createPlanet(@Body() planet: CreatePlanet): Promise<Planet> {
    return this._planetService.create(planet);
  }

  @ApiOperation({ operationId: 'updatePlanet', summary: 'Update a {Planet}' })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updatePlanet(
    @Param('id') id: number,
    @Body() planet: UpdatePlanet,
  ): Promise<Planet> {
    return this._planetService.update(id, planet);
  }

  @ApiOperation({ operationId: 'getPlanets', summary: 'Find all {Planet}' })
  @Get('get-planets')
  public getPlanets(): Promise<Planet[]> {
    return this._planetService.findAll();
  }

  @ApiOperation({
    operationId: 'getPlanetByID',
    summary: 'Find a {Planet} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getPlanetByID(@Param('id') id: number): Promise<Planet> {
    return this._planetService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deletePlanetByID',
    summary: 'Delete a {Planet} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deletePlanetByID(@Param('id') id: number): Promise<void> {
    return this._planetService.delete(id);
  }
}
