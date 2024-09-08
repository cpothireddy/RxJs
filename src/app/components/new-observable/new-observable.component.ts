import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css'],
})
export class NewObservableComponent {
  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        if (i === 4) {
          observer.error('Unknown error: I value is 4');
        }
        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log('all done complete'),
    };

    newObservable.subscribe(observer);
  }
}
