import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css'],
})
export class BufferOperatorComponent implements OnInit, AfterViewInit {
  intervalData: number[] = [];
  showData$!: Observable<Event>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click');
    // Here, we have created a showData$, that will be create on button click action.
  }

  startInterval() {
    interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        buffer(this.showData$)
      )
      .subscribe((data: number[]) => {
        this.intervalData.push(...data);
      });
  }
  // Interval is a observable will emits the value for every one second, that we can see in the console with tap operator, whenever we click on the button, the showData$ observable will fire, buffer will collect all the previous values and emit at the time of showData$ fire.
}
