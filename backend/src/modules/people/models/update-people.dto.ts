import { PartialType } from '@nestjs/swagger';

import { CreatePeople } from './create-people.dto';

export class UpdatePeople extends PartialType(CreatePeople) {}
