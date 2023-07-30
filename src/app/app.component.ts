import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;
  genders: string[] = ['Male', 'female'];
  title = 'angular-zero-to-hero';
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  constructor() {}
  suggestedName() {
    this.signUpForm.setValue({
      userData: { username: 'Shiva' },
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
