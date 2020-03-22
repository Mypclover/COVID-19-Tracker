import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {Latestupdate} from '../../modeles/latestupdate';
import covid from 'novelcovid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  // currentUpdate: Latestupdate[];
  currentUpdate: any;
  // currentUpdate: {};

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {
    /*this.apiService.getLatestUpdate().subscribe((res: any[]) => {
      this.currentUpdate = res;

      console.log('latest Update' + this.currentUpdate);
    });*/

    this.apiService.getLatestUpdate().subscribe((res: Latestupdate) => {
      this.currentUpdate = res;

      console.log('latest Update' + this.currentUpdate);
    });


    /*this.apiService.getLatestUpdate().subscribe((data: {}) => {
      this.currentUpdate = data;
    });

    console.log('test naveen ' + this.currentUpdate);*/

    this.data = covid.all()
      .then((data) => console.log('naveen' + data))
      .catch((err) => console.error(err));

  }


}
