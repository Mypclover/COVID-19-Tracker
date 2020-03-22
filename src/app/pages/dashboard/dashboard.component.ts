import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {Latestupdate} from '../../modeles/latestupdate';
import {Globalupdate} from '../../modeles/globalupdate';

declare let $: any;

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

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getLatestUpdate().subscribe((res: Latestupdate) => {
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

  }


}
