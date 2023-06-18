import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formdetails: string = 'Form Details';
  username: string = '';
  password: string = '';

  submitEnabled: boolean = true;
  isFormFilled: boolean = false;
  serverStatus: string = 'offline';
  users: any = [];
  constructor() {
    // setTimeout(()=>{
    //   this.submitEnabled=false;
    // },2000);
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  onSubmit() {
    this.isFormFilled = true;
    this.users.push(this.username);
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
