import { Component, OnInit } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.css'],
})
export class MergeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = interval(1000);
    let source2$ = of('a', 'b');
    let source3$ = of(100, 200, 300);
    let source4$ = new Observable((observer) => {
      observer.next('leeela');
      observer.error('error');
    });

    merge(source1$, source2$, source3$, source4$).subscribe((data) => {
      console.log(data);
    });
    // merge will emit the output once it receive the emit from any of the observable, it will not wait to till finish the complete other observables.
    // whoever the observable emits the values, those will forward to output automatically, no order on printing the output
    // if any of the observable throws errors, means it will stop the remaining execution and finish the merge operation.
  }
}
