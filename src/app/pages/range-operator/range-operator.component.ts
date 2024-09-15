import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, queueScheduler, range } from 'rxjs';

@Component({
  selector: 'app-range-operator',
  templateUrl: './range-operator.component.html',
  styleUrls: ['./range-operator.component.css'],
})
export class RangeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('start Scripting');
    let source$ = range(4, 100, asyncScheduler);

    source$.subscribe((data) => {
      console.log(data);
    });
    console.log('end Scripting');
  }
  // here the range will print the values from starting number to ending number,
  // Generally if there is no scheduler means the code will consider into the defualt one queue schedule which runs synchromously,
  // if there is no schduler or queueScheduler, then there is blocking in code execution for "end scripting"
  // so lets use asyncScheduler to control the flow of observable execution.
  // so, the output here is start Scripting end scripting and the observable execution will follow
}
