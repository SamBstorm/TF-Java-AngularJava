import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-storages',
  templateUrl: './demo-storages.component.html',
  styleUrls: ['./demo-storages.component.scss']
})
export class DemoStoragesComponent implements OnInit {

  public message! : string;
  public searchList : string[] = [];
  public searchTerm : string = '';

  constructor() { }

  ngOnInit(): void {
    this.message = localStorage.getItem('message') ?? '';
    this.searchList = JSON.parse(sessionStorage.getItem('list')??'[]');
  }

  changeMessage(): void{
    this.message = 'Voici un nouveau titre';
    localStorage.setItem('message',this.message);
  }

  addSearchTerm(){
    this.searchList.unshift(this.searchTerm);
    sessionStorage.setItem('list', JSON.stringify(this.searchList));
    this.searchTerm = '';
  }
}
