import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-communication',
  templateUrl: './demo-communication.component.html',
  styleUrls: ['./demo-communication.component.scss']
})
export class DemoCommunicationComponent implements OnInit {

  monPrenom : string = "Aude";
  messageEnfant : string = "En attente d'une salutation";
  constructor() { }

  ngOnInit(): void {
  }

  afficherBonjour(event : string)
  {
    this.messageEnfant = event;
  }

}
