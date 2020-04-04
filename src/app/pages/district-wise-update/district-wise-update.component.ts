import {Component, OnInit, ViewChild} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {StateDetails} from '../../modeles/state.model';
import {DistrictDetails} from '../../modeles/district.model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-district-wise-update',
  templateUrl: './district-wise-update.component.html',
  styleUrls: ['./district-wise-update.component.scss']
})
export class DistrictWiseUpdateComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent) public directiveScroll: PerfectScrollbarComponent;
  allStateData: any;
  stateDetailedList: Array<StateDetails> = [];
  countryCodes: string[] = [];
  selectedCountry: any;

  constructor(private apiService: CovidApiService) { }

  ngOnInit() {
    this.apiService.getDistrictData().subscribe( res => {

      this.allStateData = res;
      _.map(this.allStateData, (value, key) => {
        const stateObject = new StateDetails();
        stateObject.name = key;
        stateObject.details = this._decryptStateDetails(value);
        this.stateDetailedList.push(stateObject);
      });
      this.stateDetailedList.forEach((element) => {
        this.countryCodes.push(element.name);
      });
    });
  }

  private _decryptStateDetails(stateData: any): Array<DistrictDetails> {
    const districtArray: Array<DistrictDetails> = [];
      _.map(stateData.districtData, (val, key) => {
      const districtDetails = new DistrictDetails();
      districtDetails.name = key;
      districtDetails.details.active = val.active;
      districtDetails.details.confirmed = val.confirmed;
      districtDetails.details.deaths = val.deaths;
      districtDetails.details.recovered = val.recovered;
      districtDetails.details.lastupdatedtime = val.lastupdatedtime;
      districtDetails.details.delta.confirmed = val.delta.confirmed;

      districtArray.push(districtDetails);
    });
    return districtArray;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.countryCodes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
