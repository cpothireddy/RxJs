import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.css'],
})
export class ForkJoinOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let source1$ = of(1, 2, 3, 4);
    // let source2$ = of('a', 'b');
    // forJoin in array form
    // forkJoin([source1$, source2$]).subscribe((data) => {
    //   console.log(data);
    // });

    let source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error();
    });

    let source2$ = of('a', 'b');

    forkJoin({ source1: source1$, source2: source2$ }).subscribe((data) => {
      console.log(data);
    });
    // forkJoin should expect atleast one value should emit from every observable, if no emitted data on any one observable, then it will stop the execution and keep on waiting to receive the update from that observable.
    // if any error in any of the observable the complete forkJoin will throw an error
  }
}
