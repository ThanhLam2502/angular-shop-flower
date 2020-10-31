import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Flower } from './Flower';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private flowersUrl = 'api/flowers';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  getFlowers(): Observable<Flower[]> {
    return this.http.get<Flower[]>(this.flowersUrl)
      .pipe(
        tap(_ => this.log('fetched flowers')),
        catchError(this.handleError<Flower[]>('getFlowers', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getFlower(id: number): Observable<Flower> {
    const url = `${this.flowersUrl}/${id}`;
    return this.http.get<Flower>(url).pipe(
      tap(_ => this.log(`fetched flower id=${id}`)),
      catchError(this.handleError<Flower>(`getHero id=${id}`))
    );
  }

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
