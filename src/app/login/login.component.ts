import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';
import { LoginService} from '../services/login/login.service';
import { CommonUserDetailService } from '../services/common-user-detail/common-user-detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userDetail: any;
  constructor(private router: Router,
    private loginService: LoginService,
    private commonUserDetailService: CommonUserDetailService) { }

  ngOnInit() {
    this.userDetail = {
      emailID: '',
      password: ''
    };
  }

  gotoHome() {
   this.router.navigateByUrl('/welcomepage/home');
  }
  gotoUser() {
    this.commonUserDetailService.setUser(this.userDetail);
      this.loginService.sucesslogin(response => {
      if (response.responseCode === 2) {
        this.router.navigateByUrl('/user/userhome');
      } else {
        this.router.navigateByUrl('welcomepage/home');
      }
    }, error => {
      // TODO Show toast message on server errors
    });
  }
}
