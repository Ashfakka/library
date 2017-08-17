import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
gotoReturnBook() {
  alert('Your request has been send');
}
}
