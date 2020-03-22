import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Latestupdate} from '../modeles/latestupdate';

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
  getLatestUpdate(): Observable<Latestupdate> {
    return this.http.get<Latestupdate>(this.baseUrl + 'all');
  }

  getIndiaStatus(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'all');
  }


}
