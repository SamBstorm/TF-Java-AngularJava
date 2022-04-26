import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighline]'
})
export class HighlineDirective {

  constructor(private _el : ElementRef) {
    this._el.nativeElement.style.backgroundColor = 'yellow';
    this._el.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('mouseenter')
  public onMouseEnter(){
    this._el.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  public onMouseLeave(){
    this._el.nativeElement.style.fontWeight = 200;
  }

}
