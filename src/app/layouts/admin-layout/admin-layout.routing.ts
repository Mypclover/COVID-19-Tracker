import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {HelplineComponent} from '../../pages/helpline/helpline.component';
import {TestCentersComponent} from '../../pages/test-centers/test-centers.component';
import {HowToProtectComponent} from '../../pages/how-to-protect/how-to-protect.component';
import {IndiaStatsComponent} from '../../pages/india-stats/india-stats.component';
import {FaqComponent} from '../../pages/faq/faq.component';


export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'help-line', component: HelplineComponent},
  {path: 'test-center', component: TestCentersComponent},
  {path: 'protect', component: HowToProtectComponent},
  {path: 'india', component: IndiaStatsComponent},
  {path: 'faq', component: FaqComponent}
];
