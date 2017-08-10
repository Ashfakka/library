import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
gotoLogin() {
   this.router.navigateByUrl('/login');
  }
  gotoHome() {
    this.router.navigateByUrl('/welcomepage/home');
  }
}
