import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.css'],
})
export class FirstOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );
    // in above code, the first element 1 will print and then observable will complete

    // of(1, 2, 3, 4, 5)
    //   .pipe(first((value) => value % 2 === 0))
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );
    // in above, we have the even number logic, here it will print the first satified value i.e 2


    // of(1, 3, 5)
    //   .pipe(first((value) => value % 2 === 0))
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );
    // in above we have even number logic, but there is no any value to match that category, this case it will trow error

    of(1, 3, 5)
      .pipe(first((value) => value % 2 === 0, 10)) // if nothing match 10 is the default value we are supplying that 10 will be the output here.
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
      // In above, none of the value statisfied this case we are passing the default value, here it is 10.
  }
}
