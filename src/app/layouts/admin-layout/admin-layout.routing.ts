import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {HelplineComponent} from '../../pages/helpline/helpline.component';
import {TestCentersComponent} from '../../pages/test-centers/test-centers.component';
import {AboutUsComponent} from '../../pages/about-us/about-us.component';
import {HowToProtectComponent} from '../../pages/how-to-protect/how-to-protect.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'help-line',      component: HelplineComponent },
    { path: 'test-center',    component: TestCentersComponent },
    { path: 'about-us',       component: AboutUsComponent},
    { path: 'protect',       component: HowToProtectComponent}
];
