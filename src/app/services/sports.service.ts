import { SportsViewModel } from './../models/sports-view.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { UrlService } from '../../environments/url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
  
export class SportsService {

  private urlservice =  UrlService
  constructor(private http: HttpClient) {

  }


  getSportsData():any {
    return this.http.get(UrlService.getSportsUrl + this.urlservice.commonparam).pipe(
      catchError(e => {
        throw new Error(e);
      })
    );
  }

  getLeaguesData(id:number):any {
    return this.http.get(UrlService.getLeaguesUrl + this.urlservice.commonparam+'&Sports='+id).pipe(
      catchError(e => {
        throw new Error(e);
      })
    );
  }

 

}




