import { Component, OnInit } from '@angular/core';
import { last, of, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.css'],
})
export class ReduceOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5);

    source$
      .pipe(
        scan((acc, val) => {
          console.log('scan accumulator ' + acc);
          console.log('scan Value ' + val);
          return acc + val;
        }, 0)
      )
      .subscribe((data) => {
        console.log('scan result ' + data);
      });
    // scan will return result for every return but reduce will return the result only once that is last. scan with last operator will eork exactly same like reduce.
    // source$
    // .pipe(
    //   scan((acc, val) => {
    //     console.log('scan accumulator ' + acc);
    //     console.log('scan Value ' + val);
    //     return acc + val;
    //   }, 0),
    //last()
    // )
    // .subscribe((data) => {
    //   console.log('scan result ' + data);
    // });

    source$
      .pipe(
        reduce((acc, val) => {
          console.log('reduce accumulator ' + acc);
          console.log('reduce Value ' + val);
          return acc + val;
        }, 0) // here the default accumulator value is 0, and acc is the accumulator and val is the every emit value from the observable.
      )
      .subscribe((data) => {
        console.log('reduce result ' + data);
      });
  }
}
