import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from './book.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: Book[];

  book: Book;

  constructor(public bookService: BookService, private keycloakService: KeycloakService) { }

  ngOnInit() {

    try {
      const userDetails = this.keycloakService.getKeycloakInstance().tokenParsed['userDetails'];
    } catch (e) {
      console.log('Failed to load user details', e);
    }

    this.bookService.getBooks().subscribe((httpResponse: Book[]) => {
      this.bookList = httpResponse;
    }, error => {
      console.log('Class: BooksComponent, Function: bookService.getBooks(), Line 20 error(): '
      , error);
    });
  }

  onClickBook() {
    this.bookService.getBookById(1).subscribe((httpResponse: Book) => {
      this.book = httpResponse;
    }, error => {
      console.log('Class: BooksComponent, Function: bookService.getBooks(), Line 20 error(): '
        , error);
    });
  }

}
