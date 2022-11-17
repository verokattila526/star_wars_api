import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Solution } from '../entities/solution.entity';
import { CreateSolution } from '../models/create-solution.dto';
import { UpdateSolution } from '../models/update-solution.dto';
import { SolutionService } from '../services/solution.service';

@ApiTags('Solutions')
@Controller('solutions')
export class SolutionController {
  constructor(private _solutionService: SolutionService) {}

  @ApiOperation({
    operationId: 'createSolution',
    summary: 'Create a {Solution}',
  })
  @Post()
  public createSolution(@Body() film: CreateSolution): Promise<Solution> {
    return this._solutionService.create(film);
  }

  @ApiOperation({
    operationId: 'updateSolution',
    summary: 'Update a {Solution}',
  })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updateSolution(
    @Param('id') id: number,
    @Body() film: UpdateSolution,
  ): Promise<Solution> {
    return this._solutionService.update(id, film);
  }

  @ApiOperation({ operationId: 'getSolutions', summary: 'Find all {Solution}' })
  @Get('get-films')
  public getSolutions(): Promise<Solution[]> {
    return this._solutionService.findAll();
  }

  @ApiOperation({
    operationId: 'getSolutionByID',
    summary: 'Find a {Solution} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getSolutionByID(@Param('id') id: number): Promise<Solution> {
    return this._solutionService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deleteSolutionByID',
    summary: 'Delete a {Solution} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deleteSolutionByID(@Param('id') id: number): Promise<void> {
    return this._solutionService.delete(id);
  }
}
