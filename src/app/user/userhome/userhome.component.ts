import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app.routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  
    navigateTo(path){
    this.router.navigateByUrl(path);
  }

}
