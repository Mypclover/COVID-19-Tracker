import {Component, OnInit, ViewChild} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {Globalupdate} from '../../modeles/globalupdate';
import {ModalDirective} from 'ngx-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: CovidApiService) {
  }

  update: any;
  indiastatus: any;
  currentUpdate: any;
  lastupdate: any;

  globalupdate: Globalupdate[] = [];

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  public modalStep = 1;

  dtOptions: DataTables.Settings = {};
  showModal(): void {
    this.modalStep = 1;
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
  nextStep() {
    this.modalStep += 1;
  }
  close(dontShow) {
    if (dontShow) {
      localStorage.setItem('dontShow', 'true');
    }
    this.hideModal();
  }

  ngOnInit() {

    if (!localStorage.getItem('dontShow')) {
      this.showModal();
    }

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
