import {Component, OnInit} from '@angular/core';
import {CovidApiService} from '../../services/covid-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any;

  constructor(private apiService: CovidApiService) {
  }

  ngOnInit() {

    this.apiService.getNews().subscribe((news) => {
      this.news = news;

      console.log(news);

    });
  }

}
