import { Component, OnInit } from '@angular/core';
import { count, isEmpty, Observable, of } from 'rxjs';

@Component({
  selector: 'app-is-empty-operator',
  templateUrl: './is-empty-operator.component.html',
  styleUrls: ['./is-empty-operator.component.css'],
})
export class IsEmptyOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = new Observable((observer) => {
      observer.next(1);
      setTimeout(() => {
        observer.next(2);
        observer.complete();
      }, 4000);
    });
    // isEmpty() will return as soon as it get the emitted value from the observable.

    source$.pipe(isEmpty()).subscribe((data) => {
      if (data) {
        console.log('empty Observable by isempty');
      } else {
        console.log('not empty Observable by isempty');
      }
    });

    // count() will wait till to complete the observable.
    source$.pipe(count()).subscribe((data) => {
      if (data) {
        console.log('not empty Observable by count');
      } else {
        console.log('empty Observable by count');
      }
    });
  }
}
