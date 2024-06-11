import {ProductsState} from "./products/products.state";
import {RouterReducerState} from "@ngrx/router-store";

export interface AppState {
  router: RouterReducerState<any>;
  productsState: ProductsState
}
