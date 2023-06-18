import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formdetails:string="Form Details"
  username:string="";
  password:string="";

  submitEnabled:boolean=true;
  constructor(){
    // setTimeout(()=>{
    //   this.submitEnabled=false;
    // },2000);
  }

  onSubmit(){
    console.log(this.username)
    console.log(this.password)
    console.log("Adding to server")
    this.username='';
    this.password='';
  }
}
