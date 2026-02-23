import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CheckPositiveNumberPipe implements PipeTransform {
  // Default method of PIPE
  transform(value: number) {
    if (value <= 0) {
      throw new BadRequestException('The value must be a Positive Number.');
    }

    return value;
  }
}
