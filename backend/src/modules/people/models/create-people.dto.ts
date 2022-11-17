import { OmitType } from '@nestjs/swagger';
import { People } from '../entities/people.entity';

export class CreatePeople extends OmitType(People, ['id'] as const) {}
