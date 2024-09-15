import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.css'],
})
export class CombineLatestOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      let number = 0;
      for (let i = 1000; i < 10000; i += 1000) {
        setTimeout(() => {
          if (number === 6) {
            observer.error('error');
          }
          observer.next(number++);
        }, i);
      }
    });

    let source2$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(10);
      }, 5000);
    });

    //source1$ observable it will emit the value for every second and in source2$ observable it will emit the data after 5 seconds.
    // here the combineLatest nature is to wait for the atlease one emitted value from each and every observable
    // so, after 5 seconds source2$ emitted right, now the combineLatest will consider the latest value from source1$, when ever the source2$ emit the data.
    // so, it will wait till last emit from each an devery observable and then it will consider the lastest emited values from the other observables.

    combineLatest([source1$, source2$]).subscribe((data) => {
      console.log(data);
    });
    // 1. atleast one value should be emit from the all observables.
    // 2. it will consider the latest data.
    // 3. if there is any error in any of the observable then entire combineLatest opeation will stop the execution.
  }
}
