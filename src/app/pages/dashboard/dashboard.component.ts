import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {Latestupdate} from '../../modeles/latestupdate';
import {Globalupdate} from '../../modeles/globalupdate';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  update: any;
  indiastatus: any;
  currentUpdate: any;
  lastupdate: any;

  globalupdate: Globalupdate[] = [];

  test = [

    {
      'country': 'China',
      'cases': 81054,
      'todayCases': 46,
      'deaths': 3261,
      'todayDeaths': 6,
      'recovered': 72440,
      'active': 5353,
      'critical': 1845,
      'casesPerOneMillion': 56
    },
    {
      'country': 'Italy',
      'cases': 53578,
      'todayCases': 0,
      'deaths': 4825,
      'todayDeaths': 0,
      'recovered': 6072,
      'active': 42681,
      'critical': 2857,
      'casesPerOneMillion': 886
    },
    {
      'country': 'USA',
      'cases': 26900,
      'todayCases': 2693,
      'deaths': 348,
      'todayDeaths': 46,
      'recovered': 178,
      'active': 26374,
      'critical': 708,
      'casesPerOneMillion': 81
    },
    {
      'country': 'Spain',
      'cases': 25496,
      'todayCases': 0,
      'deaths': 1381,
      'todayDeaths': 0,
      'recovered': 2125,
      'active': 21990,
      'critical': 1612,
      'casesPerOneMillion': 545
    },
    {
      'country': 'Germany',
      'cases': 22364,
      'todayCases': 0,
      'deaths': 84,
      'todayDeaths': 0,
      'recovered': 209,
      'active': 22071,
      'critical': 2,
      'casesPerOneMillion': 267
    },
    {
      'country': 'Iran',
      'cases': 20610,
      'todayCases': 0,
      'deaths': 1556,
      'todayDeaths': 0,
      'recovered': 7635,
      'active': 11419,
      'critical': 0,
      'casesPerOneMillion': 245
    },
    {
      'country': 'France',
      'cases': 14459,
      'todayCases': 0,
      'deaths': 562,
      'todayDeaths': 0,
      'recovered': 1587,
      'active': 12310,
      'critical': 1525,
      'casesPerOneMillion': 222
    },
  ];

  dtOptions: DataTables.Settings = {};

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getLatestUpdate().subscribe((res) => {
      this.currentUpdate = res;
      this.lastupdate = new Date(this.currentUpdate.updated);
      console.log('latest Update' + this.currentUpdate);
    });


    this.apiService.getIndiaStatus().subscribe((country: {}) => {
      this.indiastatus = country;
    });

    this.apiService.getGlobalStatus().subscribe((global) => {
      this.globalupdate = global;

      console.log('global data' + JSON.stringify(this.globalupdate));
    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }


}
