import { SportsViewModel } from './../models/sports-view.model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { UrlService } from '../../environments/url.service';
import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {

  private employees: Employee[]  = [
    { name:"Anower Hussain",code: 'C8090', contactPreference: 'anower', dateOfBirth: new Date(), email: 'a@mail.com', gender:'male',phoneNumber:'333333'},
    { name:"Jahangir Alam",code: 'C8091', contactPreference: 'jahanara', dateOfBirth: new Date(), email: 'j@mail.com', gender:'female',phoneNumber:'1252525'},
    { name:"Milon Khan",code: 'C8092', contactPreference: 'Shamim', dateOfBirth: new Date(), email: 's@mail.com', gender:'male',phoneNumber:'43545'},
    { name:"Ashiqur Rahman",code: 'C8093', contactPreference: 'jahangir', dateOfBirth: new Date(), email: 'k@mail.com', gender: 'male', phoneNumber: '7878787' },
  ]
  constructor() {

  }

  getEmployess(): Employee[] {
    return this.employees;
  }

  //getSportsData():any {
  //  return this.http.get(UrlService.getSportsUrl + this.urlservice.commonparam).pipe(
  //    catchError(e => {
  //      throw new Error(e);
  //    })
  //  );
  //}

  //getLeaguesData(id:number):any {
  //  return this.http.get(UrlService.getLeaguesUrl + this.urlservice.commonparam+'&Sports='+id).pipe(
  //    catchError(e => {
  //      throw new Error(e);
  //    })
  //  );
  //}

 

}
export class Employee {
  name: string;
  code: string;
  gender: string;
  dateOfBirth: Date;
  contactPreference:string
  phoneNumber:string
  email: string
}




