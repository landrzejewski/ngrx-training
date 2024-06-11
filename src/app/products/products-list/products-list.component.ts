import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product.type";
import {select, Store} from "@ngrx/store";
import {ProductsState} from "../products.state";
import {isLoading, products} from "../products.selectors";
import {createAddAction, createLoadProductsAction, createRemoveAction, createUpdateAction} from "../products.actions";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;

  defaultProduct: Product = {
    id: -1,
    name: '',
    price: 0
  };
  selectedProduct: Product

  constructor(private store: Store<ProductsState>) {
    this.selectedProduct = this.defaultProduct;
    this.products$ = store.select(products);
    this.isLoading$ = store.select(isLoading);
    store.dispatch(createLoadProductsAction());
  }

  select(product: Product) {
    this.selectedProduct = {...product};
  }

  remove(product: Product) {
    this.store.dispatch(createRemoveAction({product}));
    this.reset();
  }

  reset() {
    this.selectedProduct = this.defaultProduct;
  }

  save() {
    if (this.selectedProduct.id === -1) {
      const product: Product = {...this.selectedProduct,  id: Math.random()};
      this.store.dispatch(createAddAction({product}));
    } else {
      this.store.dispatch(createUpdateAction({product: this.selectedProduct}));
    }
    this.reset();
  }

}
