import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumer = 0;
  constructor() {}
  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumer + 1);
      this.lastNumer++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
