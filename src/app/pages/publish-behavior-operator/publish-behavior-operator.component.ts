import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  connectable,
  ConnectableObservable,
  interval,
  publishBehavior,
} from 'rxjs';

@Component({
  selector: 'app-publish-behavior-operator',
  templateUrl: './publish-behavior-operator.component.html',
  styleUrls: ['./publish-behavior-operator.component.css'],
})
export class PublishBehaviorOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source$ = interval(1000).pipe(
    //   publishBehavior(100)
    // ) as ConnectableObservable<number>;
    // // the publishBehavior is nothing but the behavior Subject which containes the initial value, here the initial value is 100.
    // // this operator also a multicast operator it uses ConnectableObservable to convert cold to hot observable, it will execute once you will call the connect method.
    // // ConnectableObservable : By using ConnectableObservables, we can only convert the cold observable into hot observable by using its publish and connect methods and various variants like refCount, autoConnect and replay etc.
    // source$.subscribe((data) => {
    //   console.log('observer 1 ' + data);
    // });
    // setTimeout(() => {
    //   source$.subscribe((data) => {
    //     console.log('observer 2 ' + data);
    //   });
    // }, 4000);
    // source$.connect();

    let source$ = connectable(interval(1000), {
      connector: () => new BehaviorSubject(100),
    });
    // Creates an observable that multicasts once connect() is called on it.


    source$.subscribe((data) => {
      console.log('observer 1 ' + data);
    });
    setTimeout(() => {
      source$.subscribe((data) => {
        console.log('observer 2 ' + data);
      });
    }, 4000);

    source$.connect();
  }
}
