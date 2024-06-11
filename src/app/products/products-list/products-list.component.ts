import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product.type";
import {select, Store} from "@ngrx/store";
import {ProductsState} from "../products.state";
import {isLoading, products} from "../products.selectors";
import {createLoadProductsAction} from "../products.actions";

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

  constructor(private store: Store<ProductsState>) {
    this.products$ = store.select(products);
    this.isLoading$ = store.select(isLoading);
    store.dispatch(createLoadProductsAction());
  }

  select(product: Product) {

  }

  remove(product: Product) {

  }

  reset() {

  }

  save() {

  }

}
