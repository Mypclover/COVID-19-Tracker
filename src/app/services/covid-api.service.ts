import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Model
import {Latestupdate} from '../modeles/latestupdate';
import {IndiaStatus} from '../modeles/india-status';
import {Globalupdate} from '../modeles/globalupdate';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  // baseUrl = 'https://coronavirus-tracker-api.herokuapp.com/v2/';
  baseUrl = 'https://corona.lmao.ninja/';

  constructor(private http: HttpClient) { }

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
    return this.http.get('https://corona.lmao.ninja/countries/india');
  }

  getGlobalStatus(): Observable<Globalupdate[]> {
    return this.http.get<Globalupdate[]>(this.baseUrl + 'countries');
  }
}
