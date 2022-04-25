import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.scss']
})
export class DemoHomeComponent implements OnInit {

  public title : string = 'Démonstration';
  public description : string = `Bienvenu dans la partie démonstration. Ici vous retrouverez l'ensemble des démonstrations vues en cours.`;

  constructor() { }

  ngOnInit(): void {
  }

}
