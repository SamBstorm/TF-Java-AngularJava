import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-demo-services',
  templateUrl: './demo-services.component.html',
  styleUrls: ['./demo-services.component.scss']
})
export class DemoServicesComponent implements OnInit {

  // connected : boolean = false;
  connectedUser : User | undefined = undefined;

  prenom : string = '';
  password : string = '';

  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
  
  }

  login()
  {
    this.connectedUser = this._loginService.connexion(this.prenom, this.password);
    if(this.connectedUser)
    {
      this.prenom = '';
      this.password = '';
    }
  }

  logout(){
    this.connectedUser = this._loginService.deconnexion();
  }
}
