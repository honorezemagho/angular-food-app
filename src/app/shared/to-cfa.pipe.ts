import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCFA'
})
export class ToCFAPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
