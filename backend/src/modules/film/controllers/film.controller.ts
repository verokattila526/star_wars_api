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
import { Film } from '../entities/film.entity';
import { CreateFilm } from '../models/create-film.dto';
import { UpdateFilm } from '../models/update-film.dto';
import { FilmService } from '../services/film.service';

@ApiTags('Films')
@Controller('films')
export class FilmController {
  constructor(private _filmService: FilmService) {}

  @ApiOperation({ operationId: 'createFilm', summary: 'Create a {Film}' })
  @Post()
  public createFilm(@Body() film: CreateFilm): Promise<Film> {
    return this._filmService.create(film);
  }

  @ApiOperation({ operationId: 'updateFilm', summary: 'Update a {Film}' })
  @ApiParam({ name: 'id' })
  @Put(':id')
  public updateFilm(
    @Param('id') id: number,
    @Body() film: UpdateFilm,
  ): Promise<Film> {
    return this._filmService.update(id, film);
  }

  @ApiOperation({ operationId: 'getFilms', summary: 'Find all {Film}' })
  @Get('get-films')
  public getFilms(): Promise<Film[]> {
    return this._filmService.findAll();
  }

  @ApiOperation({ operationId: 'getFilmByID', summary: 'Find a {Film} by id' })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public getFilmByID(@Param('id') id: number): Promise<Film> {
    return this._filmService.findByID(id);
  }

  @ApiOperation({
    operationId: 'deleteFilmByID',
    summary: 'Delete a {Film} by id',
  })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  public deleteFilmByID(@Param('id') id: number): Promise<void> {
    return this._filmService.delete(id);
  }
}
