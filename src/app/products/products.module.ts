import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
