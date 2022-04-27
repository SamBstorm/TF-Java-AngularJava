import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  //Avec l'input, on déclare une variable listToShow qui va accueillir la liste du parent
  @Input() listToShow : string[] = [];

  //Avec l'ouput, on va déclarer un évènement qui enverra 
  //l'index de l'élément cliqué au parent
  @Output() toDelete : EventEmitter<number>;

  constructor() { 
    this.toDelete = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  sendIndex(indexToSend : number) : void {
    this.toDelete.emit(indexToSend);
  }
}
