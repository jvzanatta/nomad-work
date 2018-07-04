import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Place } from './place';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placesUrl = 'http://localhost:8000/api/places';

  constructor(private http: HttpClient) { }

  /** GET places from the API */
  searchPlaces(pageNumber = 1, sortOrder = 'asc', filter = ''):  Observable<any> {

    return this.http.get(this.placesUrl, {
        params: new HttpParams()
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('page', pageNumber.toString())
      });
  }


  /** GET place by id */
  getPlace(id: number): Observable<any> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  /* GET Places whose name contains search term */
  // searchPlaces(term: string): Observable<Place[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty place array.
  //     return of([]);
  //   }
  //   return this.http.get<Place[]>(`${this.placesUrl}/?name=${term}`).pipe(
  //     catchError(this.handleError<Place[]>('searchPlaces', []))
  //   );
  // }


  /** Store a new place */
  addPlace (place: any): Observable<any> {
    return this.http.post<any>(this.placesUrl, place, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Handle failed Http operation.
   * @param operation - operation name
   * @param result - the observable result
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }

}
