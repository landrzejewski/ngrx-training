import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {StoreModule} from "@ngrx/store";
import productsReducer from "./prodcuts.reducer";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
    FormsModule
  ]
})
export class ProductsModule { }
