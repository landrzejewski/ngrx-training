import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./app.state";
import {routerReducer} from "@ngrx/router-store";
import ProductsReducer from "./products/prodcuts.reducer";

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  productsState: ProductsReducer
};
