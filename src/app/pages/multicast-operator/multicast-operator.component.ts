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
    // multicast operator is used to convert cold to hot observable with the help of subject, when ever we add a multicast here right, then it will return a connectableObservable, it will execute once you will call the connect method.
    // ConnectableObservable : By using ConnectableObservables, we can only convert the cold observable into hot observable by using its publish and connect methods and various variants like refCount, autoConnect and replay etc.
    // source.subscribe((data) => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   source.subscribe((data) => {
    //     console.log(data);
    //   });
    // }, 3000);
    // source.connect();

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
