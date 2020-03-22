import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: DashboardComponent },
    { path: 'tables',         component: DashboardComponent },
    { path: 'icons',          component: DashboardComponent },
    { path: 'maps',           component: DashboardComponent }
];
