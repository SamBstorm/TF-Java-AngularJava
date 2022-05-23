import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-com-enfant',
  templateUrl: './demo-com-enfant.component.html',
  styleUrls: ['./demo-com-enfant.component.scss']
})
export class DemoComEnfantComponent implements OnInit {

  @Input() nomParent : string = '';

  @Output() direBonjour : EventEmitter<string>;

  prenomEnfant : string = "";
  constructor() { 
    this.direBonjour = new EventEmitter<string>();
  }

  ngOnInit(): void {
    
  }

  saluer(){
    //On veut, lors du click sur le bouton, émettre une valeur depuis notre
    //EventEmitter pour notifier le parent
    this.direBonjour.emit(`Bonjour, je m'appelle ${this.prenomEnfant}`);
  }

}
