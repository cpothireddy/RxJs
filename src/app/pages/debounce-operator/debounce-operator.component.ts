import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.css'],
})
export class DebounceOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
  //   interval(1000)
  //     .pipe(debounce((value) => interval(value * 100)))
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
    // output: 0->1->2-.3 -....9.... ()
    // in above code, the main interval will call for every 1000 milliseconds, if the value is 10 in debonce then the debounce wait time will become 1000,and if the value is 11 the timer will become 1100, from the value 10, debounce timer will become more than the main interval data, so it will not emit anything after the value 9.
  }

  ngAfterViewInit() {
    let buttonEvent = fromEvent(
      document.getElementById('button_debounce')!,
      'click'
    );
    buttonEvent.pipe(debounce((value) => interval(1000))).subscribe((data) => {
      console.log(data);
    });
    // the above code will execute after clicking on the button with 1000 milliseconds of waiting time.
    // it will not call by default but it will happend for every click and then 1000 milli seconds waiting time.
    // this will reduce the execution from unnessaray clicks
  }
}
