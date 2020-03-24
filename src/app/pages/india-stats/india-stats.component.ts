import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';

@Component({
  selector: 'app-india-stats',
  templateUrl: './india-stats.component.html',
  styleUrls: ['./india-stats.component.css']
})
export class IndiaStatsComponent implements OnInit {

  indiastatus: any;

  indianstate: any;

  dtOptions: DataTables.Settings = {};

  test = {
    'data': {
      'Bihar': {
        'totalIndianCases': 2,
        'totalForeignCases': 0,
        'totalRecovered': 0,
        'totalDeaths': 1,
        'newCasesToday': 0
      },
      'Chhattisgarh': {
        'totalIndianCases': 1,
        'totalForeignCases': 0,
        'totalRecovered': 0,
        'totalDeaths': 0,
        'newCasesToday': 0
      }
    }
  }

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getIndiaStatus().subscribe((country: {}) => {
      this.indiastatus = country;
    });

    this.apiService.getIndiastateStatus().subscribe((state) => {
      this.indianstate = state;

      console.log('nnnnnnn' + this.indianstate);
    });


    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

}
