import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit {

  public title : string = `Bindings`;
  public input_value : string = ``;
  public input_color : string = `#FF0000`;
  public count : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public addOne(){
    this.count ++;
  }

  public add(nb : number){
    this.count += nb;
  }

}
