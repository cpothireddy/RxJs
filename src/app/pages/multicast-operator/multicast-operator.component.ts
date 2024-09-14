import { Component, OnInit } from '@angular/core';
import {
  connectable,
  ConnectableObservable,
  interval,
  multicast,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-multicast-operator',
  templateUrl: './multicast-operator.component.html',
  styleUrls: ['./multicast-operator.component.css'],
})
export class MulticastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source = interval(1000).pipe(
    //   multicast(new Subject())
    // ) as ConnectableObservable<number>;
    // source.subscribe((data) => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   source.subscribe((data) => {
    //     console.log(data);
    //   });
    // }, 3000);
    // source.connect();

    // Creates an observable that multicasts once connect() is called on it.
    // Connectable<T>: A "connectable" observable, that has a connect() method, that you must call to connect the source to all consumers through the subject provided as the connector.
    let source = connectable(interval(1000));
    source.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      source.subscribe((data) => {
        console.log(data);
      });
    }, 3000);

    source.connect();
  }
}
