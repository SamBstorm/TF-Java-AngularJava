import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/demo/data/data';

@Component({
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.scss']
})
export class DemoDetailsComponent implements OnInit {

  product: any;

  reponseMeteo: any;

  constructor(
    // service permettant de récuréper les paramètres de la route
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // id envoyé depuis la route
    const id = this.route.snapshot.params['id'];

    this.reponseMeteo = this.route.snapshot.data['val'];

    this.product = data.find(p => p.id == id);
  }

}
