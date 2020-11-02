import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cart } from './domain/Cart';
import { Flower } from './domain/Flower';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private flowersUrl = 'api/flowers';  // URL to web api
  // private cartUrl = 'api/carts';  // URL to web api
  carts: Cart[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }

  /** GET flowers from the server */
  getFlowers(): Observable<Flower[]> {
    return this.http.get<Flower[]>(this.flowersUrl)
  }

  /** GET flower by id. Will 404 if id not found */
  getFlower(id: number): Observable<Flower> {
    const url = `${this.flowersUrl}/${id}`;
    return this.http.get<Flower>(url);
  }

  addCart(cart: Cart): void {
    // return this.http.post<Cart>(this.cartUrl, cart, this.httpOptions);
    let itemInCarts = this.carts.find(_ => _.flowerID === cart.flowerID)
    if(itemInCarts)
      itemInCarts.quatity += cart.quatity;
    else
      this.carts.push(cart);
  }


  getCarts(): Observable<Cart[]> {
    // return this.http.get<Cart[]>(this.cartUrl);
    console.log(this.carts);
    return of(this.carts);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
