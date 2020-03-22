import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, Observer, of} from 'rxjs';
import {Book} from '../../model/book';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
// import {KeycloakService} from 'keycloak-angular';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // urlGetBooks = environment.baseUrl.catalog.getBooks;
  //
  // // constructor(private httpClient: HttpClient) { }
  //
  // public backendServiceApiUrl =
  //   environment.baseUrl.catalog.getBooks;

  constructor(private httpClient: HttpClient,
              private oauthService: OAuthService/*,
              private keycloakService: KeycloakService*/) {}

  // getBooks(): Observable<Book[]> {
  //   console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
  //   , this.urlGetBooks);
  //   return this.httpClient.get<Book[]>(this.urlGetBooks).pipe(map( httpResponse => httpResponse));
  // }

  public getBooks(): Observable<Book[]>  {
    const url = 'http://localhost:8081/THELIBRARY-MS-BOOK/api/books';
    const urlNoGateway = 'http://localhost:8090/api/books';

    const headers = new HttpHeaders({
    });
    headers.set('Accept', 'text/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    return this.httpClient.get<Book[]>(urlNoGateway, {headers} ).pipe(map(httpResponse => httpResponse));
  }

  public getBooksById(id: number): Observable<Book>  {
    const url = 'http://localhost:8081/THELIBRARY-MS-BOOK/api/book/' + id;
    const urlNoGateway = 'http://localhost:8090/api/book/' + id;

    const headers = new HttpHeaders();
    headers.set('Accept', 'text/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    return this.httpClient.get<Book>(urlNoGateway, {headers} ).pipe(map(httpResponse => httpResponse));
  }

  // async upload(formData: FormData): Promise<any> {
  //   await this.getAccessToken2Header();
  //   const postHttpOptions = {
  //     headers: this.httpHeaderWithToken
  //   };
  //   return this.httpClient
  //     .post(`${this. backendServiceApiUrl}/upload`,
  //       formData, postHttpOptions)
  //     .pipe(
  //       catchError(this.handleError('ServiceName',
  //         'upload',
  //         []))
  //     ).toPromise();
  // }
  //
  // getAccessToken2Header(): Promise<any> {
  //   const promise = new Promise((resolve, reject) => {
  //     this.keycloakService.addTokenToHeader()
  //       .toPromise().then(
  //       httpHeaders => {
  //         this.httpHeaderWithToken = httpHeaders;
  //         resolve();
  //       }, msg => {
  //         reject(msg);
  //       }
  //     );
  //   });
  //   return promise;
  // }
  //
  // handleError<T>(serviceName = '',
  //                operation = 'operation',
  //                result = {} as T) {
  //
  //   return (error: HttpErrorResponse): Observable<T> => {
  //     console.error(error); // log to console instead
  //
  //     const message = (error.error instanceof ErrorEvent) ?
  //       error.error.message :
  //       `{error code: ${error.status},
  //            body: "${error.message}"}`;
  //
  //     // -> Return a safe result.
  //     return of( result );
  //   };
  // }

}
