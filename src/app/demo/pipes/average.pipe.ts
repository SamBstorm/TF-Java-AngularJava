import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: number[]): number {
    let result : number = 0;
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      result += element;
    }
    return result/value.length;
  }

}
