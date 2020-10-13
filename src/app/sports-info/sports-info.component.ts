import { SportsViewDetailModel } from './../models/sports-view-detail.model';
import { SportsService } from './../services/sports.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports-info',
  templateUrl: './sports-info.component.html',
  styleUrls: ['./sports-info.component.scss']
})
export class SportsInfoComponent implements OnInit {
  id: any;
  constructor(
    private router: ActivatedRoute,
    private sportsService: SportsService
  ) { }

  leagueData:SportsViewDetailModel[]
  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.GetLeagueInfo();
  }
  GetLeagueInfo() {
    if (this.id > 0) {
      this.sportsService.getLeaguesData(this.id).subscribe(
        response => {
          if (response) {
            this.leagueData = <SportsViewDetailModel[]>response["Body"];
            console.log(response);
          }
        }, error => {
          console.log(error)
        });
    } else {
      console.log('id not found  !!')
    }
  }


}
