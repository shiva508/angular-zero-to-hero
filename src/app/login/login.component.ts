import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('email') emailNew!: ElementRef;
  @ViewChild('password') passwordNew!: ElementRef;
  constructor() {}
  ngOnInit(): void {}

  @Output() addUserEvent = new EventEmitter<{
    email: string;
    password: string;
  }>();

  addUser() {
    this.addUserEvent.emit({
      email: this.emailNew.nativeElement.value,
      password: this.passwordNew.nativeElement.value,
    });
  }
}
