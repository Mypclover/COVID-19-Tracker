import {Component, OnInit, ViewChild} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-travel-alert',
  templateUrl: './travel-alert.component.html',
  styleUrls: ['./travel-alert.component.scss']
})
export class TravelAlertComponent implements OnInit {

  @ViewChild(PerfectScrollbarComponent) public directiveScroll: PerfectScrollbarComponent;
  travel: any;
  // model: any[];
  jsonValue: any[];
  countryCodes: string[] = [];
  sorted: any[];
  selectedCountry: any;
  public resultData: any[] = [];

  constructor(private  apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getTravelAlert().subscribe((travel: {}) => {
      this.travel = travel;
      this.jsonValue = this.travel;

      this.jsonValue.forEach((element) => {
        this.countryCodes.push(element.countryName);
        this.sorted = this.countryCodes.sort();
      });

      this.travel.forEach((item) => {
        const result = this.getFormAttedData(item);
        this.resultData.push(result);
      });
    });
  }

  getFormAttedData(item) {
    const str = item.alertMessage;
    const arr = str.split('|').filter((el) => el !== ''); // splits the string and removes empty element
    const newArr = arr.map((el) => el.replace('\n' , '')); // removes \n from string

    const formattedValues = {
      title : newArr[0],  // first element is title
      subtitle : newArr[1], // second is subtitle
      options : newArr.slice(2) // rest is option
    };
    item['messageData'] = formattedValues; // assign the formatted value

    return item;
  }

  // onChange(element: any) {
  //   this.selectedCountry = element;
  //   console.log(this.selectedCountry);
  // }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.countryCodes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


}
