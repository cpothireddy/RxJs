import { Component, OnInit } from '@angular/core';
import { defer, EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-defer-operator',
  templateUrl: './defer-operator.component.html',
  styleUrls: ['./defer-operator.component.css'],
})
export class DeferOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = defer(() => {
      if (Math.random() > 0.5) {
        // return of('a', 'b', 'c');
        return EMPTY;
      } else {
        return of('a', 'b', 'c');
      }
    });
    // Here the defer method is returning two types of observables, based on the condition.but here the speciality is that observable will create only when it is subscribed.

    source$.subscribe((data) => {
      console.log(data);
    });

    source$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
