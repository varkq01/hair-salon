import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './services/services.component';
import { HairdressingComponent } from './services/hairdressing/hairdressing.component';
import { ContactComponent } from './contact/contact.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { VisitsHistoryComponent } from 'src/app/visits/visits-history/visits-history.component';
import { AdminGuardService } from './shared/admin-guard.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { CreateVisitComponent } from './visits/create-visit/create-visit.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { AllVisitsComponent } from './visits/all-visits/all-visits.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [{ path: '', component: HairdressingComponent }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuardService],
    children: [
      {path: 'employees', component: EmployeeListComponent},
      {path: 'services', component: ServiceListComponent},
      {path: 'visits', component: AllVisitsComponent},
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
    ]
  },
  { path: 'employee/add', component: AddEmployeeComponent, canActivate: [AdminGuardService] },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: VisitsHistoryComponent, canActivate: [AuthGuardService] },
  { path: 'visits/add', component: CreateVisitComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
