import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-zero-to-hero';
  userActivated = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.activatedEmmiter.subscribe((didUserActivated) => {
      this.userActivated = didUserActivated;
    });
  }
}
