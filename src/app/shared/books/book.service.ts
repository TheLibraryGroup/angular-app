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

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.urlGetBooks).pipe(map( httpResponse => httpResponse));
  }
}
