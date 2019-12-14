/**
 * Created by yarivkatz on 23/12/2017.
 */


import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'zigzag'
})
export class ZigZagPipe implements PipeTransform {
  public transform(value: string): string {
    let result = '';
    let index = 0;
    for (let char of value) {
      if (index % 2 === 0) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
      index++;
    }
    return result;
  }
}
