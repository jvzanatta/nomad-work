import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray'
})
export class NumToArrayPipe implements PipeTransform {

  /**
   * Returns an array whose length matches the value parameter (array is filled with 1s)
   * @param value The array length that must be returned
   */
  transform(value: number): any {
    return new Array(value).fill(1);
  }

}
