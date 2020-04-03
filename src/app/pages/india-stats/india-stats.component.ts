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


  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getIndiaStatus().subscribe((country: {}) => {
      this.indiastatus = country;
    });

    this.apiService.getIndiastateStatus().subscribe((state) => {
      this.indianstate = state;
    });


    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

}
