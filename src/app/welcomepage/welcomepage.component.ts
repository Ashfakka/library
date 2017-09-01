import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoContact() {
    this.router.navigateByUrl('/welcomepage/contact');
  }
  gotoAbout() {
    this.router.navigateByUrl('/welcomepage/about');
  }
  gotoHome() {
    this.router.navigateByUrl('/welcomepage/home');
  }
  gotoSignIn() {
    this.router.navigateByUrl('/login');
  }
  gotoSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
