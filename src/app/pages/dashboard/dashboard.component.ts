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

  update: any;
  indiastatus: any;
  // currentUpdate: Latestupdate[];
  currentUpdate: any;
  lastupdate: any;

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {
    /*this.apiService.getLatestUpdate().subscribe((res: any[]) => {
      this.currentUpdate = res;

      console.log('latest Update' + this.currentUpdate);
    });*/

    this.apiService.getLatestUpdate().subscribe((res: Latestupdate) => {
      this.currentUpdate = res;
      this.lastupdate = new Date(this.currentUpdate.updated);
      console.log('latest Update' + this.currentUpdate);
    });


    /*this.apiService.getLatestUpdate().subscribe((data: {}) => {
      this.currentUpdate = data;
    });

    console.log('test naveen ' + this.currentUpdate);*/

    /*covid.all()
      .then((data) => {
        this.update = data;
      })
      .catch((err) => console.error(err));*/


   /* covid.countries('india')
      .then((data) => {
        this.country = data;
        console.log('naveen' + JSON.stringify(this.country));
      })
      .catch((err) => console.error(err));*/

    this.apiService.getIndiaStatus().subscribe((country: {}) => {
      this.indiastatus = country;
    });


  }


}
