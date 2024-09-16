import { Component, OnInit } from '@angular/core';
import { concatMap, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer-operator',
  templateUrl: './timer-operator.component.html',
  styleUrls: ['./timer-operator.component.css'],
})
export class TimerOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(5000).subscribe((data) => {
      console.log(data);
    });

    timer(5000, 5000).subscribe((data) => {
      console.log(data);
    });
    // the above two same that, both will emit the data after 5 seconds.

    let source$ = timer(1000, 2000);// here the first value will emit after 1 second and then the next value will emit for every 2 seconds.
    source$.subscribe((data) => {
      console.log(data);
    });
    let data$ = of('a', 'b', 'c');
    setTimeout(() => {
      data$.subscribe((data) => {
        console.log(data);
      });
    }, 3000);

    // here we have a data$ observable, that we should trigger after 3 seconds, we can do that by using the setTimeOut and the same way timer() also will emit.

    timer(3000)
      .pipe(concatMap(() => data$))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
