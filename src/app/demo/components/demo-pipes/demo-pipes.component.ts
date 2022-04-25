import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {

  public title : string = "Démonstration pipes angular";
  public today : Date = new Date();
  public price : number = 39.99;
  public prices : number[] = [1.2, 2.3, 3.4, 4.5];

  constructor() { }

  ngOnInit(): void {
  }

}
