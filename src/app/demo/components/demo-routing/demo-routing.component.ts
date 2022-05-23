import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';


@Component({
  templateUrl: './demo-routing.component.html',
  styleUrls: ['./demo-routing.component.scss']
})
export class DemoRoutingComponent implements OnInit {

  products: any[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
