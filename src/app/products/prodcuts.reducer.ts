import {ProductsState} from "./products.state";
import {createReducer, on} from "@ngrx/store";
import {createLoadProductsAction} from "./products.actions";

const initialState: ProductsState = {
  products: [],
  isLoading: false
};

const productsReducer = createReducer(
  initialState,
  on(createLoadProductsAction, (state, action) => ({...state, isLoading: true}))
);

export default productsReducer;
