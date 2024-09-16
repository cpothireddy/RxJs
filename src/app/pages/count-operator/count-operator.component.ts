import { Component, OnInit } from '@angular/core';
import { count, of } from 'rxjs';

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.css'],
})
export class CountOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5, 6, 7);
    // count will give the total number of values emitted by the observable.

    source$.pipe(count((val, index) => val > 6)).subscribe((data) => {
      console.log(data);
    });
    // in above we have consition that to count the number of outputs which are greater than 6.
  }
}
