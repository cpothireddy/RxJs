import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.css'],
})
export class ColdObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let number = Math.random();

    // let observable$ = new Observable((observer) => {
    //   observer.next(Math.random());
    // });
    // if we execute Math.random() inside the producer function then we will different output for each subscriber, since every time the observable is executing.
    // that means, the logic executing inside the producer function here, this is called cold observable are uni casting 

    let observable$ = new Observable((observer) => {
      observer.next(number);
    });
    // here we are calling Math.random() outside of the producer function so, the same value will share to all observers, this is some what we can say the conversion of cold to hot observables.

    observable$.subscribe((value) => {
      console.log('observer 1' + value);
    });
    observable$.subscribe((value) => {
      console.log('observer 2' + value);
    });



    let documentEvent$ = fromEvent(document, 'click');
    // fromEvent is the example for hot observable, here the event will happen outside of the producer funciton

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });
    // the data event will happen after the click on the document, so the same value will share to all the subscribers.

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    let interval$ = interval(1000); //coldobservable
    let subject$ = new Subject();

    interval$.subscribe(subject$);

    subject$.subscribe((data) => {
      console.log('Observer 1 ' + data);
    });

    setTimeout(() => {
      subject$.subscribe((data) => {
        console.log('observer 2 ' + data);
      });
    }, 2000);
  }
}
