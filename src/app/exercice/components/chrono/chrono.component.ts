import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public count : number = 0;
  public isRunning : boolean = false;
  public interval : any;

  constructor() { }

  ngOnInit(): void {
  }

  public startChrono(): void{
    if(!this.isRunning){
      this.interval = setInterval(
        ()=>{
          this.count++;
        },
        1000
      );
      this.isRunning=true;
    }
  }

  public pauseChrono(): void{
    clearInterval(this.interval);
    this.isRunning = false;
  }

  public resetChrono(): void{
    this.count = 0;
  }

}
