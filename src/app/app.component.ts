import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-zero-to-hero';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() {}

  onIntervalFired(lastNumer: number) {
    if (lastNumer % 2 === 0) {
      this.evenNumbers.push(lastNumer);
    } else {
      this.oddNumbers.push(lastNumer);
    }
  }
}
