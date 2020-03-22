import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {

  statehelpline = [
    {
      'State': 'Andhra Pradesh',
      'Helpline Number': '0866-2410978'
    },
    {
      'State': 'Arunachal Pradesh',
      'Helpline Number': '9536055743'
    },
    {
      'State': 'Assam',
      'Helpline Number': '6913347770'
    },
    {
      'State': 'Bihar',
      'Helpline Number': '104'
    },
    {
      'State': 'Chhattisgarh',
      'Helpline Number': '077122-35091'
    },
    {
      'State': 'Goa',
      'Helpline Number': '104'
    },
    {
      'State': 'Gujarat',
      'Helpline Number': '104'
    },
    {
      'State': 'Haryana',
      'Helpline Number': '8558893911'
    },
    {
      'State': 'Himachal Pradesh',
      'Helpline Number': '104'
    },
    {
      'State': 'Jharkhand',
      'Helpline Number': '104'
    },
    {
      'State': 'Karnataka',
      'Helpline Number': '104'
    },
    {
      'State': 'Kerala',
      'Helpline Number': '0471-2552056'
    },
    {
      'State': 'Madhya Pradesh',
      'Helpline Number': '0755-2527177'
    },
    {
      'State': 'Maharashtra',
      'Helpline Number': '020-26127394'
    },
    {
      'State': 'Manipur',
      'Helpline Number': '3852411668'
    },
    {
      'State': 'Meghalaya',
      'Helpline Number': '9366090748'
    },
    {
      'State': 'Mizoram',
      'Helpline Number': '102'
    },
    {
      'State': 'Nagaland',
      'Helpline Number': '7005539653'
    },
    {
      'State': 'Odisha',
      'Helpline Number': '9439994859'
    },
    {
      'State': 'Punjab',
      'Helpline Number': '104'
    },
    {
      'State': 'Rajasthan',
      'Helpline Number': '0141-2225624'
    },
    {
      'State': 'Sikkim',
      'Helpline Number': '104'
    },
    {
      'State': 'Tamil Nadu',
      'Helpline Number': '044-29510500'
    },
    {
      'State': 'Telangana',
      'Helpline Number': '104'
    },
    {
      'State': 'Tripura',
      'Helpline Number': '0381-2315879'
    },
    {
      'State': 'Uttarakhand',
      'Helpline Number': '104'
    },
    {
      'State': 'Uttar Pradesh',
      'Helpline Number': '18001805145'
    },
    {
      'State': 'West Bengal',
      'Helpline Number': '3323412600'
    }
  ];

  uthelpline = [
    {
      'Union Territory': 'Andaman and Nicobar Islands',
      'Helpline Number': '03192-232102'
    },
    {
      'Union Territory': 'Chandigarh',
      'Helpline Number': '9779558282'
    },
    {
      'Union Territory': 'Dadra and Nagar Haveli and Daman & Diu',
      'Helpline Number': '104'
    },
    {
      'Union Territory': 'Delhi',
      'Helpline Number': '011-22307145'
    },
    {
      'Union Territory': 'Jammu & Kashmir',
      'Helpline Number': '1912520982  |  0194-2440283'
    },
    {
      'Union Territory': 'Ladakh',
      'Helpline Number': '1982256462'
    },
    {
      'Union Territory': 'Lakshadweep',
      'Helpline Number': '4896263742'
    },
    {
      'Union Territory': 'Puducherry',
      'Helpline Number': '104'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
