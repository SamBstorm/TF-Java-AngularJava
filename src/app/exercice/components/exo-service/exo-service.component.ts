import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-exo-serice',
  templateUrl: './exo-service.component.html',
  styleUrls: ['./exo-service.component.scss']
})
export class ExoServiceComponent implements OnInit {

  productToAdd : string = '';

  constructor(private _shoppingService : ShoppingService) { }

  ngOnInit(): void {
  }

  ajouter(){
    if(this.productToAdd != ''){
      let newProduct = new Product(this.productToAdd, 1);
      this._shoppingService.addProduct(newProduct);
      // this._shoppingService.addProduct(new Product(this.productToAdd, 1));
      this.productToAdd = '';
    }
    
  }

}
