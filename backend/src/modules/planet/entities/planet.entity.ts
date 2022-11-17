import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'planets' })
export class Planet {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  rotation_period: string;

  @Column()
  @IsString()
  orbital_period: string;

  @Column()
  @IsString()
  diameter: string;

  @Column()
  @IsString()
  climate: string;

  @Column()
  @IsString()
  gravity: string;

  @Column()
  @IsString()
  terrain: string;

  @Column()
  @IsString()
  surface_water: string;

  @Column()
  @IsString()
  population: string;

  @Column()
  @IsString()
  residents: string;

  @Column()
  @IsString()
  films: string;

  @Column()
  @IsString()
  url: string;
}
