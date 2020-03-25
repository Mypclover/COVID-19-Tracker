import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';

@Component({
  selector: 'app-fqa',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq: any;

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getFaqdata().subscribe((faq) => {
      this.faq = faq;

      console.log(faq);

    });
  }

}
