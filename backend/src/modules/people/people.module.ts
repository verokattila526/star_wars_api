import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from './controllers/people.controller';
import { People } from './entities/people.entity';
import { PeopleService } from './services/people.service';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
