import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-zero-to-hero';
  numbers = [400, 401, 402, 403, 404, 405, 406, 407, 408, 423];
  evenNumber = [400, 402, 404, 406, 408];
  oddNumber = [401, 403, 405, 407, 423];
  onlyOdd = false;

  changeState() {
    this.onlyOdd = !this.onlyOdd;
  }
}
