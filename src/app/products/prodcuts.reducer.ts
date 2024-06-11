import {ProductsState} from "./products.state";
import {createReducer, on} from "@ngrx/store";
import {
  createAddAction,
  createLoadFailedAction,
  createLoadProductsAction,
  createLoadSuccessAction,
  createRemoveAction, createUpdateAction
} from "./products.actions";

const initialState: ProductsState = {
  products: [],
  isLoading: false
};

const productsReducer = createReducer(
  initialState,
  on(createLoadProductsAction, (state, action) =>
    ({...state, isLoading: true})),
  on(createLoadSuccessAction, (state, action) =>
    ({products: action.products, isLoading: false})),
  on(createLoadFailedAction, (state, action) =>
    ({products: state.products, isLoading: false})),
  on(createRemoveAction, (state, action) =>
    ({...state, products: state.products.filter(product => product.id !== action.product.id)})
  ),
  on(createAddAction, (state, action) =>
    ({...state, products: [...state.products, {...action.product}]}),
  ),
  on(createUpdateAction, (state, action) =>
    ({...state, products: state.products.map(product => product.id == action.product.id ? {...product, ...action.product} : product)})
  )
);

export default productsReducer;
