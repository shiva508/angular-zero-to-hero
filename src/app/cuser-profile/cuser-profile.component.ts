import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuser-profile',
  templateUrl: './cuser-profile.component.html',
  styleUrls: ['./cuser-profile.component.css'],
})
export class CuserProfileComponent implements OnInit {
  @Input('logUser') user: { email: string; password: string } = {
    email: '',
    password: '',
  };
  constructor() {
    console.log("constructor")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
