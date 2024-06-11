import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {StoreModule} from "@ngrx/store";
import productsReducer from "./prodcuts.reducer";
import {FormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {ProductsService} from "./products.service";

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
    EffectsModule.forFeature([ProductsService]),
    FormsModule
  ]
})
export class ProductsModule { }
