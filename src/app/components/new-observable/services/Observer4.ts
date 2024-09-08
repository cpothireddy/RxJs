import { Observer } from 'rxjs';

export class Observer4 implements Observer<number> {
  next(data: number) {
    console.log('Observer 4' + data);
  }
  error(error: string) {
    console.log(error);
  }

  complete() {
    console.log('complete done from observer4 class');
  }
}
