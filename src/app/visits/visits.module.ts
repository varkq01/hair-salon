import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { VisitsHistoryComponent } from './visits-history/visits-history.component';
import { CreateVisitComponent } from './create-visit/create-visit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesListComponent } from './create-visit/categories-list/categories-list.component';
import { EmployeeSelectListComponent } from './create-visit/employee-select-list/employee-select-list.component';
import { AppointmentDateComponent } from './create-visit/appointment-date/appointment-date.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, SharedModule],
  declarations: [
    VisitsHistoryComponent,
    CreateVisitComponent,
    CategoriesListComponent,
    EmployeeSelectListComponent,
    AppointmentDateComponent
  ]
})
export class VisitsModule {}
