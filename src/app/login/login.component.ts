import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor() {}
  ngOnInit(): void {}

  @Output() addUserEvent = new EventEmitter<{
    email: string;
    password: string;
  }>();

  addUser() {
    this.addUserEvent.emit({
      email: this.email,
      password: this.password,
    });
  }
}
