import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css'],
})
export class CancellingObservableComponent {
  //What is a Subscription? A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription. In previous versions of RxJS, Subscription was called "Disposable".
  timerSubscription!: Subscription;
  constructor() {}
  ngOnInit(): void {
    // interval: Creates an Observable that emits sequential numbers every specified interval of time
    const newObservable = interval(1000);
    this.timerSubscription = newObservable.subscribe((data) => {
      console.log(data);
    });
  }

  cancelTimer() {
    console.log('cancel the observer');
    this.timerSubscription.unsubscribe();
  }
}
