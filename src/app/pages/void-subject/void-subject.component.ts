import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  templateUrl: './void-subject.component.html',
  styleUrls: ['./void-subject.component.css'],
})
export class VoidSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let subject$ = new Subject<number>();
    // the above suject will accept number data only

    subject$.subscribe((data) => {
      console.log(data);
    });

    subject$.next(1);
    subject$.next(2);
    

    let subject2$ = new Subject<any>();

    subject2$.subscribe((data) => {
      console.log(data);
    });

    subject2$.next('Hai Leela');
    subject2$.next(2);
    // subject2$.next();
    // sending empty data in subject is not possible here, so we have void option

    let subject3$ = new Subject<void>();

    subject3$.subscribe((data) => {
      console.log(data); // undefined
    });

    subject3$.next();
    // using void, we can send the empty data but observable is notified.
  }
}
