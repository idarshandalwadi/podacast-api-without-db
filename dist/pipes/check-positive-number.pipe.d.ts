import { PipeTransform } from '@nestjs/common';
export declare class CheckPositiveNumberPipe implements PipeTransform {
    transform(value: number): number;
}
