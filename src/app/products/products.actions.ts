import {createAction, props} from "@ngrx/store";
import {Product} from "./product.type";

const createLoadProductsAction = createAction('[Products] LOAD');

const createLoadSuccessAction = createAction('[Products] LOAD_SUCCESS', props<{products: Product[]}>());

const createLoadFailedAction = createAction('[Products] LOAD_FAILED', props<{message: string}>());

const createRemoveAction = createAction('[Products] REMOVE', props<{product: Product}>());

export {
  createLoadProductsAction, createLoadSuccessAction, createLoadFailedAction, createRemoveAction
}
