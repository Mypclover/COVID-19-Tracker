export class Latestupdate {

  // For API Version 1

  /*confirmed: number;
  deaths: number;
  recovered: number;*/

  cases:      number;
  deaths:     number;
  recovered:  number;
  updated:    number;


  constructor(cases, deaths, recovered, updated) {
    this.cases = cases;
    this.deaths = deaths;
    this.recovered = recovered;
    this.updated = updated;
  }
}
