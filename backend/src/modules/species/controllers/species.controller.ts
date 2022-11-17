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
import { Species } from '../entities/species.entity';
import { CreateSpecies } from '../models/create-species.dto';
import { UpdateSpecies } from '../models/update-species.dto';
import { SpeciesService } from '../services/species.service';

@ApiTags('Species')
@Controller('species')
export class SpeciesController {
  constructor(private _speciesService: SpeciesService) {}

  @ApiOperation({ operationId: 'createSpecies', summary: 'Create a {Species}' })
  @Post()
  public createSpecies(@Body() species: CreateSpecies): Promise<Species> {
    return this._speciesService.create(species);
  }

  @ApiOperation({ operationId: 'updateSpecies', summary: 'Update a {Species}' })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updateSpecies(
    @Param('id') id: number,
    @Body() species: UpdateSpecies,
  ): Promise<Species> {
    return this._speciesService.update(id, species);
  }

  @ApiOperation({ operationId: 'getSpecies', summary: 'Find all {Species}' })
  @Get('get-species')
  public getSpecies(): Promise<Species[]> {
    return this._speciesService.findAll();
  }

  @ApiOperation({
    operationId: 'getSpeciesByID',
    summary: 'Find a {Species} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getSpeciesByID(@Param('id') id: number): Promise<Species> {
    return this._speciesService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deleteSpeciesByID',
    summary: 'Delete a {Species} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deleteSpeciesByID(@Param('id') id: number): Promise<void> {
    return this._speciesService.delete(id);
  }
}
