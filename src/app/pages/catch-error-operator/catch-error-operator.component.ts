import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-catch-error-operator',
  templateUrl: './catch-error-operator.component.html',
  styleUrls: ['./catch-error-operator.component.css'],
})
export class CatchErrorOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = new Observable((observer) => {
      observer.next('a');
      observer.next('b');
      observer.error('error occured');
    });

    source$
      .pipe(
        catchError((error, caught) => {
          //throw 'error message goes here'; // we can just return the error
          return caught;
          // here return caught means we are re running the source observable again and again, by default it is infinite times utill get the success.
        }),
        take(5)
        // here the take(5), will consider that the source will execute 5 tiumes only
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
