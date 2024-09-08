import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from './services/Observer4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css'],
})
export class NewObservableComponent {
  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
      next: (data: number) => console.log('observer 1' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('all done complete'),
    };
    newObservable.subscribe(observer);

    newObservable.subscribe({
      next: (data: number) => console.log('observer 2' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('all done complete'),
    });

    newObservable.subscribe(
      (data) => console.log('onserver 3' + data),
      (error) => console.log(error),
      () => console.log('complete Done')
    );

    newObservable.subscribe(new Observer4());

  }
}
