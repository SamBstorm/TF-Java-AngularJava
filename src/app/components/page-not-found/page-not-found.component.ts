import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    // service qui permet de naviguer vers d'autres pages
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  backToHomePage() {
    this.router.navigateByUrl('/home');
    //this.router.navigate(['/home']);
  }

}
