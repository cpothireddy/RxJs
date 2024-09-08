import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css'],
})
export class CancellingObservableComponent {
  //What is a Subscription? A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription. In previous versions of RxJS, Subscription was called "Disposable".
  timerConsoleSubscription!: Subscription;
  timerBrowserSubscription!: Subscription;
  timers:number[] = [];
  constructor() {}
  ngOnInit(): void {
    const newObservable = new Observable<number>((obsever) => {
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval executing');
        obsever.next(i++);
      }, 1000);
      // the below function will called when observer is unsubscribed and
      // the below method will execute whenever the error will occured.
      return () => {
        console.log('called when observer is unsubscribed');
        clearInterval(interval);
      };
    });
    this.timerConsoleSubscription = newObservable.subscribe((data) => {
      console.log(new Date().toLocaleDateString() + '' + data);
    });

    this.timerBrowserSubscription = newObservable.subscribe((data) => {
      this.timers.push(data);
    });

    // we can club two subscrtiptions like below
    this.timerConsoleSubscription.add(this.timerBrowserSubscription)
  }

  cancelTimer() {
    console.log('cancel the observer');
    this.timerConsoleSubscription.unsubscribe();
    //this.timerBrowserSubscription.unsubscribe();
  }
}
