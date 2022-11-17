import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmController } from './controllers/film.controller';
import { Film } from './entities/film.entity';
import { FilmService } from './services/film.service';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
