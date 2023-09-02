import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoggedIn = true;
  onSwithchMode = () => {
    this.isLoggedIn = !this.isLoggedIn;
  };

  onSubmit = (authForm: NgForm) => {
    console.log(authForm.value);
    authForm.reset();
  };
}
