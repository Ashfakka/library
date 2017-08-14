import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  
   gotocontact(){
    this.router.navigateByUrl('/welcomepage/contact');
  }
  gotoabout(){
    this.router.navigateByUrl('/welcomepage/about');
  }
  gotohome(){
     this.router.navigateByUrl('/welcomepage/home');
  }
gotosignin(){
  this.router.navigateByUrl('/login');
}
gotosignup(){
  this.router.navigateByUrl('/signup');
}
}
