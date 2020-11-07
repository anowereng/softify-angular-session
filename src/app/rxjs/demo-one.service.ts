import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
const source = of(1, 2, 3, 4, 5);

@Injectable({
  providedIn: 'root'
})


export class DemoOneService {


  constructor() { }

  getNumberData():any{
    debugger;
    source.pipe(
              // map(item=>item*2),
              tap(item=>console.log(item),
              take(2)
               )
    ).subscribe(console.log)
  }
}
