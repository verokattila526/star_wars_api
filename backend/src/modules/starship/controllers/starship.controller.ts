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
import { Starship } from '../entities/starship.entity';
import { CreateStarship } from '../models/create-starship.dto';
import { UpdateStarship } from '../models/update-starship.dto';
import { StarshipService } from '../services/starship.service';

@ApiTags('Starships')
@Controller('starships')
export class StarshipController {
  constructor(private _starshipService: StarshipService) {}

  @ApiOperation({
    operationId: 'createStarship',
    summary: 'Create a {Starship}',
  })
  @Post()
  public createStarship(@Body() starship: CreateStarship): Promise<Starship> {
    return this._starshipService.create(starship);
  }

  @ApiOperation({
    operationId: 'updateStarship',
    summary: 'Update a {Starship}',
  })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updateStarship(
    @Param('id') id: number,
    @Body() starship: UpdateStarship,
  ): Promise<Starship> {
    return this._starshipService.update(id, starship);
  }

  @ApiOperation({ operationId: 'getStarship', summary: 'Find all {Starship}' })
  @Get('get-starships')
  public getStarships(): Promise<Starship[]> {
    return this._starshipService.findAll();
  }

  @ApiOperation({
    operationId: 'getStarshipByID',
    summary: 'Find a {Starship} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getStarshipByID(@Param('id') id: number): Promise<Starship> {
    return this._starshipService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deleteStarshipByID',
    summary: 'Delete a {Starship} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deleteStarshipByID(@Param('id') id: number): Promise<void> {
    return this._starshipService.delete(id);
  }
}
