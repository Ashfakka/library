import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { ApiurlService } from '../../utilities/apiurl/apiurl.service';
import { CommonUserDetailService } from '../../services/common-user-detail/common-user-detail.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class BookDetailService {
  private book: any;
  private bookDetails: any;
  constructor(private apicallService: ApicallService,
    private apiurlService: ApiurlService,
    private commonUserDetailService: CommonUserDetailService
  ) { }
  successSearch(successCallback, errorCallback) {
    // this.book = this.commonUserDetailService.getBookDetails();
    this.book = JSON.parse(localStorage.getItem('book'));

    let apiUrl = 'http://localhost:8080/library/bookDetails?bookName={?}';
    apiUrl = this.apiurlService.beautifyUrl(apiUrl, [this.book.bookName]);
    this.apicallService.doGetAPIAction(apiUrl, response => {
      successCallback(JSON.parse(response._body));
    }, error => {
      errorCallback(error);
    });
  }
}

