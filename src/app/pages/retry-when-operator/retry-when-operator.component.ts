import { Component, OnInit } from '@angular/core';
import { delay, of, retry, retryWhen, tap } from 'rxjs';

@Component({
  selector: 'app-retry-when-operator',
  templateUrl: './retry-when-operator.component.html',
  styleUrls: ['./retry-when-operator.component.css'],
})
export class RetryWhenOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let usersData = {
      responseStatus: '500',
      users: [
        { id: 1, name: 'Leela' },
        { id: 2, name: 'Leela2' },
      ],
    };

    of(...usersData.users)
      .pipe(
        delay(1000),
        tap((user) => {
          if (!usersData.responseStatus.startsWith('2')) {
            throw usersData.responseStatus;
          }
          // if the response is not starts with 2. i.e 200 then it will throw error and that error will catch retryWhen
        }),
        // retry(3), // retry will work but we are not sure to run howmany time, so we should use retryWhen
        // the below code we have a condition in the retryWhen, such a way that if we receive the status code other than 500 then
        retryWhen((error) => {
          return error.pipe(
            tap((status) => {
              if (!status.startsWith('5')) {
                throw 'error';
              }
              console.log('retrying');
            })
          );
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });

    setTimeout(() => {
      if (Math.random() < 0.5) {
        usersData.responseStatus = '200';
      } else {
        usersData.responseStatus = '400';
      }
    }, 5000);
  }
}
