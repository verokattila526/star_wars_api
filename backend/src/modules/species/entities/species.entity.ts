import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'species' })
export class Species {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  classification: string;

  @Column()
  @IsString()
  designation: string;

  @Column()
  @IsString()
  average_height: string;

  @Column()
  @IsString()
  skin_colors: string;

  @Column()
  @IsString()
  hair_colors: string;

  @Column()
  @IsString()
  eye_colors: string;

  @Column()
  @IsString()
  average_lifespan: string;

  @Column()
  @IsString()
  homeworld: string;

  @Column()
  @IsString()
  language: string;

  @Column()
  @IsString()
  people: string;

  @Column()
  @IsString()
  films: string;

  @Column()
  @IsString()
  url: string;
}
