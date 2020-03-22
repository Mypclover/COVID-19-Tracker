import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Current Update',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/protect', title: 'How To Protect',  icon:'ni-favourite-28 text-red', class: '' },
    { path: '/help-line', title: 'Help Line',  icon:'ni-planet text-blue', class: '' },
    { path: '/test-center', title: 'Test centers',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/about-us', title: 'About Us',  icon:'ni-single-02 text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
