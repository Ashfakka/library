import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSearch() {
    this.router.navigateByUrl('user/details');
  }
}
