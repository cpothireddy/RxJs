import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.css'],
})
export class TakeLastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // interval(500)
    //   .pipe(takeLast(5))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
      // In above code, the observable will never finish the execution, that means takeLast operator will wait till finishing the observable and then it will emit, but here this is a inifinate loop, so it will never finish the execution.

      interval(500)
      .pipe(take(10), takeLast(5))
      .subscribe((data) => {
        console.log(data);
      });
      // Here we are first considering 10 values and then takeLast operator will perform 5 out of ten, which was already filterd with take operator.
  }
}
