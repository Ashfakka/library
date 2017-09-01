import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class IssueService {

  constructor(private apicallService: ApicallService) { }

  issueBook(user, successCallback, errorCallback) {
      const apiUrl = 'http://localhost:8080/library/signup'
      this.apicallService.doPostAPIAction(apiUrl, user, response => {
          successCallback(JSON.parse(response._body));
      }, error => {
          errorCallback(error);
      });
  

  }
}
