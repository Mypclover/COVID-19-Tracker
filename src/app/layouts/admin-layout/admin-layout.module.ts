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
import {CountupComponent} from '../../pages/countup/countup.component';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import {environment} from '../../../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TravelAlertComponent} from '../../pages/travel-alert/travel-alert.component';

// import { ToastrModule } from 'ngx-toastr';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};



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
    PerfectScrollbarModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),

  ],
  declarations: [
    DashboardComponent,
    HelplineComponent,
    TestCentersComponent,
    HowToProtectComponent,
    IndiaStatsComponent,
    FaqComponent,
    NewsComponent,
    CountupComponent,
    TravelAlertComponent
  ],
  providers: [CovidApiService, DatePipe, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})

export class AdminLayoutModule {}
