import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { exhaustMap, filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.css'],
})
export class ExhaustMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 3, 4)
    //   .pipe(
    //     exhaustMap((id) => {
    //       return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data.response);
    //   });
      // In above example of is the outer observable is emiting multiple values 1,2,3,4.
      // exhaustMap is taking the fast value from of observable and it is running the API call. while running the API call it receives some more values like 2,3,4
      // so exhaust map will ignore all other emited values when ever it is already serving with previous request.
      // here 2,3,4 will ignore, so we can see only one emiited value from exhaust map
      
    interval(10)
      .pipe(
        filter((id) => id > 0),
        tap((id) => {
          console.log(id);// tap operator is used to just print the value here.
        }),
        exhaustMap((id) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
        }),
        take(5)
      )
      .subscribe((data) => {
        console.log(data.response);
      });
  }
}
