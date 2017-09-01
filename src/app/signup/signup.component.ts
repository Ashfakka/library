import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private user: any;
  constructor(private router:Router, private signupService: SignupService) {
  
   }

  ngOnInit() {
    this.user = {
      userName: '',
      emailID: '',
      password: '',
      phoneNo: '',
    };
  }
gotoLogin() {
  this.signupService.registerUser(this.user, response => {
      if (response.responseCode === 0) {
        this.router.navigateByUrl('/login');
      } else {
        alert('Error');
        this.router.navigateByUrl('welcomepage/home');
      }
    }, error => {
      // TODO Show toast message on server errors
    });
  }
  
  gotoHome() {
    this.router.navigateByUrl('/welcomepage/home');
  }
}
