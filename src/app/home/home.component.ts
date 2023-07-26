import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { timeInterval } from 'rxjs-compat/operator/timeInterval';
import { errorObject } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription!: Subscription;
  private custonSubs!: Subscription;
  constructor() {}
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
    this.custonSubs.unsubscribe();
  }

  ngOnInit() {
    this.firstSubscription = interval(1000).subscribe((count) => {
      //console.log(count);
    });
    const customSubscription = Observable.create((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Something went wrong'));
        }
        count++;
      }, 1000);
    });
    //customSubscription.pipe(map((data: number) => data * 4));
    this.custonSubs = customSubscription
      .pipe(map((data: number) => data * 4))
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (errorObject: Error) => {
          console.log(errorObject);
        },
        () => {
          console.log('Completed');
        }
      );
  }
}
