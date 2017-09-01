import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routing.module';
import { Router } from '@angular/router';
import { BookDetailService } from '../../services/book-detail/book-detail.service';
import { CommonUserDetailService } from '../../services/common-user-detail/common-user-detail.service';
import { IssueService } from '../../services/issue/issue.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
public bookDetails: any;
public name: any;
public auth: any;
public copies: any;
  constructor(private router: Router,
    private bookDetailService: BookDetailService,
    private commonUserDetailService: CommonUserDetailService,
    private issueService: IssueService) { }

  ngOnInit() {
    this.bookDetails = {
      bookName: '',
      author: '',
      available: ''
    };
    this.bookDetails = JSON.parse(localStorage.getItem('bookDetails'));
    this.name = this.bookDetails.bookName;
    this.auth = this.bookDetails.author;
    this.copies = this.bookDetails.available;
    }

   gotoIssue() {
     alert('Your request has been send');
   }
   gotoReserve() {
      alert('Your request has been send');
   }
}
