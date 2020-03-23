import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {KeycloakSecurityService} from '../../auth/keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urlGetBooks = environment.baseUrl.book.getBooks;
  urlGetBookById = environment.baseUrl.book.getBookById;

  constructor(private httpClient: HttpClient,
              private keycloakService: KeycloakSecurityService) { }

  getBooks(): Observable<Book[]> {
    console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
    , this.urlGetBooks);
    return this.httpClient.get<Book[]>(
      this.urlGetBooks, {
      headers: new HttpHeaders({Authorization: 'Bearer ' + this.keycloakService.kcInstance.token})
      }
    ).pipe(map( httpResponse => httpResponse));
  }

  // getBooks(): Observable<Book[]> {
  //   console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
  //     , this.urlGetBooks);
  //   return this.httpClient.get<Book[]>(
  //     this.urlGetBooks
  //   ).pipe(map( httpResponse => httpResponse));
  // }


  getBookById(id: number): Observable<Book> {
    console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
      , this.urlGetBooks);
    return this.httpClient.get<Book>(this.urlGetBookById + '/' + id).pipe(map( httpResponse => httpResponse));
  }
}
