import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  public title : string = "Voici un texte qui défile...";
  public interval : any;
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval( () => {
      this.moveCharacters();
    } , 100);
  }

  moveCharacters(){
    let array: string[] = this.title.split('');
    let firstChar: string = array.shift() ?? '';
    array.push(firstChar);
    this.title = array.join('');
  }

  stopInterval(){
    clearInterval(this.interval);
  }
}
