import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample-operator',
  templateUrl: './sample-operator.component.html',
  styleUrls: ['./sample-operator.component.css'],
})
export class SampleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(500) // this will emit for every half second
      .pipe(sample(interval(1000))) // sample operator will hold to finish 1 second and it will execute output, that means alternative value will print here, that means the recent emit emited value before sample observable
      .subscribe((data) => {
        console.log(data);
      });
  }
}
