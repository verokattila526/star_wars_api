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
import { People } from '../entities/people.entity';
import { CreatePeople } from '../models/create-people.dto';
import { UpdatePeople } from '../models/update-people.dto';
import { PeopleService } from '../services/people.service';

@ApiTags('Peoples')
@Controller('peoples')
export class PeopleController {
  constructor(private _peopleService: PeopleService) {}

  @ApiOperation({ operationId: 'createPeople', summary: 'Create a {People}' })
  @Post()
  public createPeople(@Body() people: CreatePeople): Promise<People> {
    return this._peopleService.create(people);
  }

  @ApiOperation({ operationId: 'updatePeople', summary: 'Update a {People}' })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updatePeople(
    @Param('id') id: number,
    @Body() people: UpdatePeople,
  ): Promise<People> {
    return this._peopleService.update(id, people);
  }

  @ApiOperation({ operationId: 'getPeoples', summary: 'Find all {People}' })
  @Get('get-peoples')
  public getPeoples(): Promise<People[]> {
    return this._peopleService.findAll();
  }

  @ApiOperation({
    operationId: 'getPeopleByID',
    summary: 'Find a {People} by id',
  })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getPeopleByID(@Param('id') id: number): Promise<People> {
    return this._peopleService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deletePeopleByID',
    summary: 'Delete a {People} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deletePeopleByID(@Param('id') id: number): Promise<void> {
    return this._peopleService.delete(id);
  }
}
