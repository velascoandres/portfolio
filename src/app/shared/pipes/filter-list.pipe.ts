import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform<T>(list: T[], type: keyof T, value: any): T[] {
    return list.filter(item => item[type] === value);
  }

}
