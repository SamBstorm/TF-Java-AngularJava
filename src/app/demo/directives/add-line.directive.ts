import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddLine]'
})
export class AddLineDirective {

  constructor(private _el: ElementRef) {
    this._el.nativeElement.innerText = "Veuillez cliquer pour ajouter une ligne";
  }

  @HostListener('click')
  public onClick(){
    let li : HTMLElement = document.createElement('li');
    li.innerText = "Nouvelle ligne";
    this._el.nativeElement.appendChild(li);
  }
}
