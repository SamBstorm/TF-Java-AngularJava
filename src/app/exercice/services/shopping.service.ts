import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _products : Product[] = [
    new Product("Patates", 1),
    // {name : "Patates", quantity : 1}
    new Product("Mirabelles", 16),
  ];

  constructor() { }

  getAll() : Product[] {
    return this._products;
  }

  addProduct(product : Product) : void {
    let existingProduct = this._products.find(produit => produit.name.toLowerCase() == product.name.toLowerCase());
    if(existingProduct)
    {
      existingProduct.quantity ++;
    }
    else {
      this._products.push(product);
    }
  }

  deleteProduct(index : number) : void {
    this._products.splice(index, 1);
  }

  upQty(index : number) : void {
    this._products[index].quantity++;
    //this._products[index].quantity = this._products[index].quantity + 1;
  }

  downQty(index : number) : void {
    this._products[index].quantity--;
    if(this._products[index].quantity == 0){
      this.deleteProduct(index);
    }
    //this._products[index].quantity = this._products[index].quantity - 1;
  }
}
