/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateEpisodeDto {

  @IsString()
  name: string;

  
  featured?: boolean;

  year: number;

  publishedAt: Date;
}
