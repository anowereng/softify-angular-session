import { SportsService } from './../services/sports.service';
import { Component, OnInit } from '@angular/core';
import { SportsViewModel } from '../models/sports-view.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsData: SportsViewModel[];
  constructor(
    private _sportsService: SportsService
  ) { }

  ngOnInit() {
    this.GetSportsData()
  }
  
  GetSportsData() {
    this._sportsService.getSportsData().subscribe(
      response => {
        this.sportsData = <SportsViewModel[]>response["Body"];
        console.log(response)
      }, error => {
        console.log(error)
      });
  }


}


