import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.css'],
})
export class ThrottleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        throttle((value) => interval(2000), { leading: true, trailing: true })
      )
      .subscribe((data) => {
        console.log(data);
      });

    // Here leading is a first value and trailing is a last value, for every one second the main interval will run 0,1,2,3,4,5,6,7,....

    // 0 is the first value in the wmit right, so it will print

    // now 1,2 will be in the interval mode, since it will hold for every two seconds right, now last value in the interval is 2 so it will print.

    // now 3,4 will come into the interval, 4 is the last value it will print
    // this process will repeat for every interval execution.

    // output : 0, 2, 4, 6
  }
}
