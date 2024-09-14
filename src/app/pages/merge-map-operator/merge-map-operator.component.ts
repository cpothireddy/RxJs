import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.css'],
})
export class MergeMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          );
        }, 2)
        // Generally mergeMap will return the emited value but its not sure about the order, in this example mergeMap will emit the value, whenever it recevie the response in Ajax observable
        // we can use concurent value that will say that howmany calls we can do ata time to avaid above confusion
        // here we mentioned 2 right, 2 calls will happen ata time, once we receive the output then next two will emit.
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
