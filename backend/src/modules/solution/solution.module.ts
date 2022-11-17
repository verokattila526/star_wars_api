import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolutionController } from './controllers/solution.controller';
import { Solution } from './entities/solution.entity';
import { SolutionService } from './services/solution.service';

@Module({
  imports: [TypeOrmModule.forFeature([Solution])],
  controllers: [SolutionController],
  providers: [SolutionService],
})
export class SolutionModule {}
