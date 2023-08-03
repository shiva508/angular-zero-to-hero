import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenlen',
})
export class ShortenlenPipe implements PipeTransform {
  transform(value: string, maxLimit: number): string {
    if (value.length > maxLimit) {
      return value.substring(0, maxLimit) + '...';
    }
    return value;
  }
}
