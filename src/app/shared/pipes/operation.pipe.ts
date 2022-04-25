import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operation'
})
export class OperationPipe implements PipeTransform {

  transform(value: number[], operator: string): number {
    let result : number = 0;
    switch (operator) {
      case '+':
          for (const nb of value) {
            result += nb;
          }
        break;
      case '-':
        for (const nb of value) {
          result -= nb;
        }
        break;
      case '*':
        result = 1;
        for (const nb of value) {
          result *= nb;
        }
        break;
      case '/':
        for (let i = 0; i < value.length; i++) {
          if(i == 0) result = value[i];
          else result /= value[i];
        }
        break;
      default:
        throw new Error("Bad operator");
        break;
    }
    return result;
  }

}
