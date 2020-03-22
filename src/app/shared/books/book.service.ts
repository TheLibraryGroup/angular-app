import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urlGetBooks = environment.baseUrl.catalog.getBooks;
  urlGetBookById = environment.baseUrl.catalog.getBookById;

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
    , this.urlGetBooks);
    return this.httpClient.get<Book[]>(this.urlGetBooks).pipe(map( httpResponse => httpResponse));
  }

  getBookById(id: number): Observable<Book> {
    console.log('Class: BookService, Function: getBooks, Line 18 this.urlGetBooks(): '
      , this.urlGetBooks);
    return this.httpClient.get<Book>(this.urlGetBookById + '/' + id).pipe(map( httpResponse => httpResponse));
  }
}
