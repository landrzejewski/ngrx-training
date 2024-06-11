import {ProductsState} from "./products.state";
import {createReducer} from "@ngrx/store";

const initialState: ProductsState = {
  products: [],
  isLoading: false
};

const productsReducer = createReducer(
  initialState,
);

export default productsReducer;
