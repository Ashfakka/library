import { Injectable } from '@angular/core';

@Injectable()
export class CommonUserDetailService {
private userDetail: any;
  constructor() { }
  setUser(requestObj) {
    this.userDetail = requestObj
  }
  getUser(){
    return this.userDetail;
  }
}
