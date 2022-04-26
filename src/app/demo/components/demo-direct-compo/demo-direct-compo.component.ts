import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-direct-compo',
  templateUrl: './demo-direct-compo.component.html',
  styleUrls: ['./demo-direct-compo.component.scss']
})
export class DemoDirectCompoComponent implements OnInit {

  public couleur : string = "#000000";
  public fontSize : number = 16;
  public blinkingSize : number = 16;
  public isGrowing : boolean = true;

  public objet1 : boolean = false;
  public objet2 : boolean = false;
  public objet3 : boolean = false;
  public total : number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=>{
      if(this.isGrowing){
        this.blinkingSize ++;
        if(this.blinkingSize>32) this.isGrowing = false;
      }
      else{
        this.blinkingSize --;
        if(this.blinkingSize<2) this.isGrowing = true;
      }
    }, 200);
  }

  public refreshTotal(): void{
    this.total = document.querySelectorAll('.selected')?.length ?? 0;
  }
}
