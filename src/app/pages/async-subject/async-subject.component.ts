import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let asyncSubject$ = new AsyncSubject();

    asyncSubject$.subscribe((data) => {
      console.log('observer 1 ' + data);
    });

    asyncSubject$.next(1);
    asyncSubject$.next(2);
    asyncSubject$.next(3);
    // asyncSubject will never send any value without complete the observable.

    setTimeout(() => {
      asyncSubject$.subscribe((data) => {
        console.log('observer 2 ' + data);
      });
      asyncSubject$.complete();
      // asyncSubject will emit the last value, when it complets 
    }, 3000);
  }
}
