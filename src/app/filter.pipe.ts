import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, formStatus: string, property: string): any {
    if (value.length == 0 || formStatus === '') {
      return value;
    }
    const resultArray = [];
    for (const server of value) {
      if (server[property] === formStatus) {
        resultArray.push(server);
      }
    }
    return resultArray;
  }
}
