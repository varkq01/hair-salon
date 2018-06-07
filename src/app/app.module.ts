import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './core/session.service';
import { GlobalService } from './core/global.service';
import { AlertService } from './core/alert-box/alert.service';
import { ServicesService } from './services/services.service';
import { ContactService } from './contact/contact.service';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { VisitsModule } from './visits/visits.module';
import { VisitsService } from './visits/visits.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { AdminGuardService } from './shared/admin-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ServicesModule,
    ContactModule,
    VisitsModule,
    EmployeeModule,
  ],
  providers: [
    SessionService,
    GlobalService,
    AlertService,
    ServicesService,
    ContactService,
    EmployeeService,
    VisitsService,
    AuthGuardService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
