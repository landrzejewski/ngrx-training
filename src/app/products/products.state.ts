import {Product} from "./product.type";

export interface ProductsState {
  products: Product[],
  isLoading: boolean
}
