import { Component, OnInit } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'app-delay-operator',
  templateUrl: './delay-operator.component.html',
  styleUrls: ['./delay-operator.component.css'],
})
export class DelayOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4);

    source$.pipe(delay(2000)).subscribe((data) => {
      console.log(data);
    });
    // the above one will wait for 2 sec for source observble, the output will diaplay after two seconds, the will wait on entire source observable.

    source$
      .pipe(concatMap((value) => of(value).pipe(delay(2000))))
      .subscribe((data) => {
        console.log(data);
      });
      // the above one will wait 2 sec for every value, emited by the source observable.
  }
}
