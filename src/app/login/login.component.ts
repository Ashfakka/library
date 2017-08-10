import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotohome(){
   this.router.navigateByUrl('/welcomepage/home');
   
}
gotouser(){
   this.router.navigateByUrl('/user/userhome');
   
}
}
