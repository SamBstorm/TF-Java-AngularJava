import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-direct-struct',
  templateUrl: './demo-direct-struct.component.html',
  styleUrls: ['./demo-direct-struct.component.scss']
})
export class DemoDirectStructComponent implements OnInit {

  public isChecked : boolean = true;
  public names : string[] = ["Alexandre","Abdul","Loïc","Stephanie","Houda","Amaury","Yvan","Tommy","Thomas","Zakaria"];
  public repas : string = "";

  public students : any[] = [
    { className : 'Java', firstname : "Alexandre"},
    { className : 'Java', firstname : "Abdul"},
    { className : 'Java', firstname : "Loïc"},
    { className : 'Java', firstname : "Stephanie"},
    { className : 'Java', firstname : "Houda"},
    { className : 'Java', firstname : "Amaury"},
    { className : 'Java', firstname : "Yvan"},
    { className : 'Java', firstname : "Tommy"},
    { className : 'Java', firstname : "Thomas"},
    { className : 'Java', firstname : "Zakaria"},
    { className : 'dotNet', firstname : 'Samuel'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
