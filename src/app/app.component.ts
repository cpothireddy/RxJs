import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxJS-Basics';
  postArray = [
    { title: 'Chandra 1', description: 'chandra description1' },
    { title: 'Chandra 2', description: 'chandra description2' },
    { title: 'Chandra 3', description: 'chandra description3' },
  ];
  //from is a method in RxJs, will be used to convert to observable
  // postArrayObservable$ = from(this.postArray);

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Resolve the promise.sending Data');
  //   }, 3000);
  // });
  // promiseObservable$ = from(this.promise);

  // constructor() {
  //   this.postArrayObservable$.subscribe({
  //     next: (data) => console.log(data),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('complete done!'),
  //   });
  //   this.promiseObservable$.subscribe({
  //     next: (data) => console.log(data),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('Promise done!'),
  //   });
  // }
  // // fromEvent will used to convert DOM events to observable
  // ngAfterViewInit(): void {
  //   fromEvent(document.getElementById('click-button')!, 'click').subscribe({
  //     next: (data) => console.log(data),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('Promise done!'),
  //   });
  // }
}
