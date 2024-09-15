import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.css'],
})
export class RetryOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error('error');
    });

    source$
      .pipe(
        retry(2),// it will re run the source observable when error occure, here 2 times will occur
        catchError((error) => {
          return of('a', 'b');
        })
        // catchError is returning the another observable if there is an error
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
