/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDto {

  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()   // To mark it optional property in input
  featured?: boolean;

  @IsNumber()
  year: number;

  //Need to pass Date as string in input/POST call, so here it will convert that string into Date.
  @IsDate()
  @Type(() => Date)
  publishedAt: Date;
}
