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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [{ path: '', component: HairdressingComponent }]
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
