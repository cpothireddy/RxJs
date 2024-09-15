import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.css'],
})
export class SchedulersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('script starting');
    let queueScheduler$ = of('Queue Scheduler', queueScheduler);
    let asyncScheduler$ = of('Async Scheduler', asyncScheduler);
    let asapScheduler$ = of('Asap Scheduler', asapScheduler);

    merge(asyncScheduler$, queueScheduler$, asapScheduler$).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log('script Ending');
  }
  // output:
  // script starting
  // Queue Scheduler
  // script Ending
  // Asap Scheduler
  // Async Scheduler
  // explanation: line by line is a synchronous code, in every JS, synchronous code will execute first the same way, first script starting and then the queue scheduler is a synchronous execution so, it follows and then script ending
  // after that execution will check in micro task, so asap will have the high priority it will execute and then async scheduler will execute.
}
