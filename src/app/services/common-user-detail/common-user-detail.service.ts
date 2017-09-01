import { Injectable } from '@angular/core';

@Injectable()
export class CommonUserDetailService {
private userDetail: any;
private bookDetails: any;
private bookName: any;
  constructor() { }
  setUser(requestObj) {
    this.userDetail = requestObj;
  }
  getUser() {
    return this.userDetail;
  }

  setBookName(requestObj) {
    this.bookName = requestObj;
  }
  getbookName() {
    return this.bookName;
  }

  setBookDetails(requestObj) {
    this.bookDetails = requestObj;
  }
  getBookDetails() {
    return this.bookDetails;
  }
}
