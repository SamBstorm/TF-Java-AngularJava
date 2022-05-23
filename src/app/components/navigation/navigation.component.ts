import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/demo/services/login.service';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menu : Link[] = [
    new Link('Accueil','/home',undefined, true),
    new Link('Démonstrations','/demo',[
      new Link('Démo - Bindings','/binding',undefined, false),
      new Link('Démo - Pipes','/pipe',undefined, false),
      new Link('Démo - Intervals (JS)','/interval',undefined, false),
      new Link('Démo - Directives Composants','/directCompo',undefined, false),
      new Link('Démo - Directives Structurelles','/directStruct',undefined, false),
      new Link('Démo - Directives Personnalisées','/directCustom',undefined, false),
      new Link('Demo - Input & Output', '/communication', undefined, false),
      new Link('Demo - Services', '/login', undefined, false),
      new Link('Demo - Formulaires', '/formulaire', undefined, false),
      new Link('Demo - Formulaires 2', '/formulaire2', undefined, false),
      new Link('Demo - Routing', '/routing', undefined, false),
      new Link('Demo - Page Privée', '/private', undefined),
      new Link('Demo - Storages', '/storages', undefined),
    ],false),
    new Link('Exercices','/exo',[
      new Link('Exercice - Chronomètre','/chrono',undefined,false),
      new Link('Exercice - ShoppingList', '/shopping', undefined, false),
      new Link('Exercice - ShoppingList avec Service', '/service', undefined, false),
      new Link('Exercice - TodoList', '/todo-list', undefined, false),
    ],false)
  ];
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  toggleVisible(index : number) : void {
    this.menu[index].isVisible = !this.menu[index].isVisible;
  }

}
