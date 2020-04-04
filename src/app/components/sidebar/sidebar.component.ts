import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Global Statistics', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/india', title: 'India Statistics', icon: 'ni-bulb-61 text-orange', class: ''},
  {path: '/district-level-update', title: 'District Level Update', icon: 'ni-map-big text-blue', class: ''},
  {path: '/travel-alert', title: 'Travel Alert', icon: 'ni-spaceship text-green', class: ''},
  {path: '/protect', title: 'How To Protect', icon: 'ni-favourite-28 text-red', class: ''},
  {path: '/help-line', title: 'Help Line', icon: 'ni-planet text-blue', class: ''},
  {path: '/test-center', title: 'Test centers', icon: 'ni-pin-3 text-orange', class: ''},
  {path: '/faq', title: 'FAQ', icon: 'ni-support-16 text-purple', class: ''},
  // {path: '/news', title: 'News', icon: 'ni-world-2 text-teal', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
