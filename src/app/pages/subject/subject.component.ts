import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.observable();
    this.subjectAsObservable();
  }

  observable() {
    let observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 1 complete');
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log('observer 2' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 2 complete');
      },
    };
    observable$.subscribe(observer1); //1,2,3,complete
    observable$.subscribe(observer2); //1,2,3, complete
    // Here the observable$ is executing two times, i.e one for observer1 and another one is for observer2. that means one observer will execute one time is called unicasting.
  }

  subjectAsObservable() {
    let observable$ = of(1, 2, 3, 4, 5); //execute one tinme
    let subject = new Subject<number>();

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 1 complete');
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log('observer 2' + data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('observer 2 complete');
      },
    };
    subject.subscribe(observer1);
    subject.subscribe(observer2);

    observable$.subscribe(subject);
    //Here, the subject is subscribing to observable, and so that data will pass to subject, and observers are subscribing to suject, so subject will send that data to mulitple observers at a time
    // output is
    //observer 11 21 12 22, so all values are sharing equally to the observers. that is sharing the data to multiple observers at a time is called multi casting.
  }
}
