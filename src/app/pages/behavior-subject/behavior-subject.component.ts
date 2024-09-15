import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let behaviorSubject$ = new BehaviorSubject(0);

    behaviorSubject$.subscribe((data) => {
      console.log('observer 1' + data);
    });
    // Here we have a subscriber observer1, before emit the value.
    // it will recevie the 0 value which we are sending in Behaviour Subject
    // that means the subscriber is receving the deafault value from the behaviour subject, before actual emit.

    behaviorSubject$.next(1); 
    // Now the actual emit happend with the value 1, so here the behaviour Subject will hold the previous emitted value in buffer and that will share to the next subscriptions.

    behaviorSubject$.subscribe((data) => {
      console.log('observer 2' + data);
    });
    // In above console, we will recive the data from 1 value, which was stored in buffer

    behaviorSubject$.next(2);
  }
}
