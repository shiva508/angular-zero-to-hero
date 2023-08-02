import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-zero-to-hero';
  genders: string[] = ['Male', 'Female'];
  forbiddenUserNames: string[] = ['Geetha', 'Kousar'];

  signUpForm!: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind
      ),
      gender: new FormControl('Male'),
      hobbies: new FormArray([]),
    });
    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signUpForm.setValue({
      username: 'shiva508',
      email: '',
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      username: 'shiva408',
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getHobbies(): FormArray {
    return this.signUpForm.get('hobbies') as FormArray;
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null!;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'geetha@gmail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
