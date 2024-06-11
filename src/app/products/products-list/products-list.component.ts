import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product.type";
import {select} from "@ngrx/store";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;
  selectedProduct: Product = {
    id: -1,
    name: '',
    price: 0
  };

  select(product: Product) {

  }

  remove(product: Product) {

  }

  reset() {

  }

  save() {

  }

}
