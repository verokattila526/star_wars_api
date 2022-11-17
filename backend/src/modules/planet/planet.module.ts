import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetController } from './controllers/planet.controller';
import { Planet } from './entities/planet.entity';
import { PlanetService } from './services/planet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Planet])],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
