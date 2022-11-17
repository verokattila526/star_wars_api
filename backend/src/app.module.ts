import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmModule } from './modules/film/film.module';
import { ConfigModule } from '@nestjs/config';
import { PeopleModule } from './modules/people/people.module';
import { PlanetModule } from './modules/planet/planet.module';
import { SpeciesModule } from './modules/species/species.module';
import { StarshipModule } from './modules/starship/starship.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { SolutionModule } from './modules/solution/solution.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.STAGE}`],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'swapi',
      autoLoadEntities: true,
    }),
    FilmModule,
    PeopleModule,
    PlanetModule,
    SpeciesModule,
    StarshipModule,
    VehicleModule,
    SolutionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
