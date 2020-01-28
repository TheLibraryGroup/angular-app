export class Book {

  id: number;
  title: string;
  language: string;
  isbn: number;
  publicationDate: Date;
  numberOfPages: number;


  constructor(id: number,
              title: string,
              language: string,
              isbn: number,
              publicationDate: Date,
              numberOfPages: number) {
    this.id = id;
    this.title = title;
    this.language = language;
    this.isbn = isbn;
    this.publicationDate = publicationDate;
    this.numberOfPages = numberOfPages;
  }
}
