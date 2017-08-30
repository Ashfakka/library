import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { ApiurlService } from '../../utilities/apiurl/apiurl.service';
import { CommonUserDetailService } from '../../services/common-user-detail/common-user-detail.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class LoginService {
private userDetail: any;
  constructor(private apicallService: ApicallService, 
    private apiurlService: ApiurlService,
    private commonUserDetailService: CommonUserDetailService
  ) { }
  sucesslogin(successCallback, errorCallback) {
   this.userDetail = this.commonUserDetailService.getUser();
      let apiUrl = 'http://localhost:8080/library/login?emailID={?}&password={?}';
      apiUrl = this.apiurlService.beautifyUrl(apiUrl,[this.userDetail.emailID,this.userDetail.password]);
      this.apicallService.doGetAPIAction(apiUrl, response => {
          successCallback(JSON.parse(response._body))
      }, error => {
          errorCallback(error)
      });  
}
}
