import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { Http, Response } from '@angular/http';


@Injectable()
export class SignupService {

  constructor(private apicallService: ApicallService) { }

  registerUser(user, successCallback, errorCallback){
      const apiUrl = 'http://localhost:8080/library/signup'
      this.apicallService.doPostAPIAction(apiUrl, user, response => {
          successCallback(JSON.parse(response._body))
      }, error => {
          errorCallback(error)
      });
  

  }
}
