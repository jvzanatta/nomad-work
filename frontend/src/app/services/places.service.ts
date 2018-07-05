import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// The HTTP options that will be send with the request
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
  /**
   * The url to call
   * TODO: Create enrironment config file to encapsulate the server's adreess
   */
  private placesUrl = 'http://localhost:8000/api/places';

  constructor(private http: HttpClient) { }

  /**
   * GET paginated places from the API
   * @param pageNumber the page number (starts at 1)
   * TODO: Add sorting parameter
   */
  getPlaces(pageNumber = 1):  Observable<any> {
    return this.http.get(this.placesUrl, {
        params: new HttpParams()
            .set('page', pageNumber.toString())
      });
  }

  /**
   * GET the place by it's id
   * @param id the id of the place
   */
  getPlace (id: number | string): Observable<any> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Store a new place into the server
   * @param place the place object that will be stored
   */
  addPlace (place: any): Observable<any> {
    return this.http.post<any>(this.placesUrl, place, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Handle failed Http operations
   * @param operation - operation name
   * @param result - the observable result
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      console.error(
        `Erro no servidor código ${error.status}, ` +
        `mensagem: ${error.error}`);
    }

    return throwError(
      'Algo deu errado, por favor tente novamente mais tarde.');
  }

}
