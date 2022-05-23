import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/exercice/services/shopping.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

  productList : Product[] = [];

  constructor(private _shoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.productList = this._shoppingService.getAll();
  }

  supprimer(index : number){
    this._shoppingService.deleteProduct(index)
  }

  addQty(index : number) : void {
    this._shoppingService.upQty(index);
  }

  removeQty(index : number) : void {
    this._shoppingService.downQty(index);
  }
}
