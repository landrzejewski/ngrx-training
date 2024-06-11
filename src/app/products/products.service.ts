import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createLoadFailedAction, createLoadProductsAction, createLoadSuccessAction} from "./products.actions";
import {catchError, map, Observable, of, switchMap, tap} from "rxjs";
import {Product} from "./product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  load$ = createEffect(() => this.actions$
    .pipe(
      ofType(createLoadProductsAction),
      switchMap(() => this.loadProducts()
        .pipe(
          map(products => createLoadSuccessAction({products})),
          catchError((err) => of(createLoadFailedAction({message: err.message})))
        ))
    )
  )

  log$ = createEffect(() => this.actions$
    .pipe(
      //ofType(createLoadProductsAction),
      tap(action => console.log('Executing action: ' + action.type))
    ), {dispatch: false}
  )

  constructor(private httpClient: HttpClient, private actions$: Actions) {
  }

  private loadProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }


}
