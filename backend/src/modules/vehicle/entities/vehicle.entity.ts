import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  model: string;

  @Column()
  @IsString()
  manufacturer: string;

  @Column()
  @IsString()
  cost_in_credits: string;

  @Column()
  @IsString()
  length: string;

  @Column()
  @IsString()
  max_atmosphering_speed: string;

  @Column()
  @IsString()
  crew: string;

  @Column()
  @IsString()
  passengers: string;

  @Column()
  @IsString()
  cargo_capacity: string;

  @Column()
  @IsString()
  consumables: string;

  @Column()
  @IsString()
  vehicle_class: string;

  @Column()
  @IsString()
  pilots: string;

  @Column()
  @IsString()
  films: string;

  @Column()
  @IsString()
  url: string;
}
