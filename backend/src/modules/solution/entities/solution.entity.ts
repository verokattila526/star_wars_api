import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'solutions' })
export class Solution {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;

  @Column()
  @IsString()
  @MaxLength(60)
  interviewee: string;

  @Column()
  @IsNumber()
  @Max(6)
  task_number: number;

  @Column()
  @IsString()
  solution: string;
}
