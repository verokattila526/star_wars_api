import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'people' })
export class People {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsOptional()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  height: string;

  @Column()
  @IsString()
  mass: string;

  @Column()
  @IsString()
  hair_color: string;

  @Column()
  @IsString()
  skin_color: string;

  @Column()
  @IsString()
  eye_color: string;

  @Column()
  @IsString()
  birth_year: string;

  @Column()
  @IsString()
  gender: string;

  @Column()
  @IsString()
  homeworld: string;

  @Column()
  @IsString()
  films: string;

  @Column()
  @IsString()
  species: string;

  @Column()
  @IsString()
  vehicles: string;

  @Column()
  @IsString()
  starships: string;

  @Column()
  @IsString()
  url: string;
}
