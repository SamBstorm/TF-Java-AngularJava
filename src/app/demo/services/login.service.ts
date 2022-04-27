import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private _users : string[] = ['Khun', 'Steve', 'Samuel', 'Aude'];
  // private _api : string = "https://www.maSuperApi/products";
  private _users : User[] = [
    {login : 'Khun', password : 'k123'},
    {login : 'Steve', password : 's123'},
    {login : 'Sam', password : 's123'},
    {login : 'Aude', password : 'a123'}
  ]

  private _connectedUser : User | undefined;

  constructor() { }

  // connexion(prenom : string) : boolean{
  //   if(this._users.indexOf(prenom) >= 0)
  //   {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
  getConnectedUser(){
    return this._connectedUser;
  }

  connexion(login : string, password : string) : User | undefined {
    this._connectedUser = this._users.find(user => user.login === login && user.password === password);

    return this._users.find(user => user.login === login && user.password === password);
  }

  // deconnexion() : boolean {
  //   return false;
  // }

  deconnexion() : undefined {
    this._connectedUser = undefined;
    return undefined;
    //En cas réel, on enlève l'utilisateur du session/local Storage ici
  }
}
