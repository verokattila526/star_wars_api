import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'films' })
export class Film {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsNumber()
  episode_id: number;

  @Column()
  @IsString()
  opening_crawl: string;

  @Column()
  @IsString()
  director: string;

  @Column()
  @IsString()
  producer: string;

  @Column()
  @IsDate()
  release_date: Date;

  @Column()
  @IsString()
  characters: string;

  @Column()
  @IsString()
  planets: string;

  @Column()
  @IsString()
  starships: string;

  @Column()
  @IsString()
  vehicles: string;

  @Column()
  @IsString()
  species: string;

  @Column()
  @IsString()
  url: string;
}
