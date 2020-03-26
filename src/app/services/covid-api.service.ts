import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Model
import {Latestupdate} from '../modeles/latestupdate';
import {Globalupdate} from '../modeles/globalupdate';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  today = new Date().toLocaleDateString();

  naveen: any;

  // baseUrl = 'https://coronavirus-tracker-api.herokuapp.com/v2/';
  baseUrl = 'https://corona.lmao.ninja/';

  constructor(private http: HttpClient, private  datepipe: DatePipe) {
    this.naveen = this.datepipe.transform(this.today, 'yyyy-MM-dd');
  }

  /*getLatestUpdate(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'latest');
  }*/

  getLatestUpdate(): Observable<Latestupdate[]> {
    return this.http.get<Latestupdate[]>(this.baseUrl + 'all');
  }

  /* getIndiaStatus(): Observable<IndiaStatus> {
     return this.http.get<IndiaStatus>(this.baseUrl + 'countries/india');
   }*/


  getIndiaStatus() {
    return this.http.get('https://corona.lmao.ninja/countries/india?strict=true');
  }

  getIndiastateStatus() {
    return this.http.get('https://ameerthehacker.github.io/corona-india-status/covid19-indian-states.json');
  }

  getGlobalStatus(): Observable<Globalupdate[]> {
    return this.http.get<Globalupdate[]>(this.baseUrl + 'countries');
  }

  getFaqdata() {
    return this.http.get('https://api.covid19india.org/faq.json');
  }

  getNews() {
    return this.http.get('http://newsapi.org/v2/everything?q=COVID-19&from=' + this.naveen + '&sortBy=publishedAt&apiKey=43f80027f3d5427c8a487fededb5e53e');
  }
}
