import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { ApiurlService } from '../../utilities/apiurl/apiurl.service';
import { CommonUserDetailService } from '../../services/common-user-detail/common-user-detail.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class BooksearchService {
private book: any;
  constructor(private apicallService: ApicallService, 
    private apiurlService: ApiurlService,
    private commonUserDetailService: CommonUserDetailService
  ) { }
  successSearch(successCallback, errorCallback) {
   this.book = this.commonUserDetailService.getbookName();
      let apiUrl = 'http://localhost:8080/library//user/bookSearch?bookName={?}';
      apiUrl = this.apiurlService.beautifyUrl(apiUrl, [this.book.bookName]);
      this.apicallService.doGetAPIAction(apiUrl, response => {
          successCallback(JSON.parse(response._body))
      }, error => {
          errorCallback(error)
      });  
}
}
