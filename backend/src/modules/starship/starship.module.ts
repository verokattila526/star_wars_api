import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarshipController } from './controllers/starship.controller';
import { Starship } from './entities/starship.entity';
import { StarshipService } from './services/starship.service';

@Module({
  imports: [TypeOrmModule.forFeature([Starship])],
  controllers: [StarshipController],
  providers: [StarshipService],
})
export class StarshipModule {}
