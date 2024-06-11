import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from "./products.state";

const productFeatureSelector = createFeatureSelector<ProductsState>('products');

const products = createSelector(productFeatureSelector, state => state.products);
const isLoading = createSelector(productFeatureSelector, state => state.isLoading);

export {
  products, isLoading
};
