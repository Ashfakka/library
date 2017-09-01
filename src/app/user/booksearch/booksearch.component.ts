import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routing.module';
import { Router } from '@angular/router';
import { BookDetailService } from '../../services/book-detail/book-detail.service';
import { BooksearchService } from '../../services/booksearch/booksearch.service';
import { CommonUserDetailService } from '../../services/common-user-detail/common-user-detail.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  public book: any;
  public name: any;
  public bookDetails: any;
  constructor(private router: Router,
    private bookDetailService: BookDetailService,
    private bookService: BooksearchService,
    private commonUserDetailService: CommonUserDetailService) { }

  ngOnInit() {
    this.book = {
      bookName: ''
    };
    this.bookDetails = {
      bookName: '',
      author: '',
      available: ''
    };
  }
  gotoSearch() {
    this.commonUserDetailService.setBookName(this.book);
    this.bookService.successSearch(response => {
      if (response.responseCode === 6) {
        localStorage.setItem('book', JSON.stringify(response.response));
        this.bookDetails = JSON.parse(localStorage.getItem('book'));
        this.name = this.book.bookName;
        this.router.navigateByUrl('user/booksearch');
      } else {
        alert('Book not found');
       this.router.navigateByUrl('user/userhome');
      }
    }, error => {
      // TODO Show toast message on server errors
    });
  }

  gotoBookDetails() {

    this.commonUserDetailService.setBookDetails(this.bookDetails);
    this.bookDetailService.successSearch(response => {
      if (response.responseCode === 8) {
        localStorage.setItem('bookDetails', JSON.stringify(response.response));
        this.router.navigateByUrl('user/book-details');
      } else {
        this.router.navigateByUrl('user/booksearch');
      }
    }, error => {
      // TODO Show toast message on server errors
    });

  }
}
