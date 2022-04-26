import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoView'
})
export class ChronoViewPipe implements PipeTransform {

  transform(value: number): string {
    let seconds: number = value % 60;
    let minuts: number = Math.floor(value / 60);
    return `${(minuts < 10) ? '0' + minuts : minuts} minute${(minuts <=1)?'':'s'} ${(seconds < 10) ? '0' + seconds : seconds} seconde${(seconds <=1)?'':'s'}`;
  }

}
