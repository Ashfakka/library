import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
//    opennav() {
//     document.getElementById('mySidebar').style.display = 'block';
// }
//  closenav() {
//     document.getElementById('mySidebar').style.display = 'none';
// }
  // tslint:disable-next-line:one-line
  gotoContact() {
    this.router.navigateByUrl('/user/usercontact');
  }

  gotoAbout() {
    this.router.navigateByUrl('/user/userabout');
  }
  gotoHome() {
     this.router.navigateByUrl('/user/userhome');
  }




   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

}
