import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-shopping',
  templateUrl: './exo-shopping.component.html',
  styleUrls: ['./exo-shopping.component.scss']
})
export class ExoShoppingComponent implements OnInit {

  //Liste de produits définie côté parent
  products : string[] = ["Patates", "Cornichons", "Bananes"];
  productToAdd : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addToList(){
    if(this.productToAdd != '')
    {
      //push : ajoute à la fin du tableau l'élément fourni en paramètre
      this.products.push(this.productToAdd);
      this.productToAdd = '';
    }
  }

  deleteFromList(index : number){
    //console.log(index);
    //.splice(indexDepart, nombreElementASupprimer)
    //Attention .splice(indexDepart) supprime de indexDepart jusqu'à la fin du tableau
      //n'oubliez pas de préciser le nombre d'éléments à supprimer ;)
    this.products.splice(index, 1);
  }

}
