import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CovidApiService} from '../../services/covid-api.service';
import {DataTablesModule} from 'angular-datatables';
import {HelplineComponent} from '../../pages/helpline/helpline.component';
import {TestCentersComponent} from '../../pages/test-centers/test-centers.component';
import {HowToProtectComponent} from '../../pages/how-to-protect/how-to-protect.component';
import {IndiaStatsComponent} from '../../pages/india-stats/india-stats.component';
import {FaqComponent} from '../../pages/faq/faq.component';
import {NewsComponent} from '../../pages/news/news.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ModalModule} from 'ngx-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    PerfectScrollbarModule
  ],
  declarations: [
    DashboardComponent,
    HelplineComponent,
    TestCentersComponent,
    HowToProtectComponent,
    IndiaStatsComponent,
    FaqComponent,
    NewsComponent
  ],
  providers: [CovidApiService, DatePipe]
})

export class AdminLayoutModule {}
