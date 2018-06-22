import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { VisitsHistoryComponent } from './visits-history/visits-history.component';
import { CreateVisitComponent } from './create-visit/create-visit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesListComponent } from './create-visit/categories-list/categories-list.component';
import { EmployeeSelectListComponent } from './create-visit/employee-select-list/employee-select-list.component';
import { AppointmentDateComponent } from './create-visit/appointment-date/appointment-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationComponent } from './create-visit/confirmation/confirmation.component';
import { AllVisitsComponent } from './all-visits/all-visits.component';
import { CancelVisitModalComponent } from './cancel-visit-modal/cancel-visit-modal.component';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [
    VisitsHistoryComponent,
    CreateVisitComponent,
    CategoriesListComponent,
    EmployeeSelectListComponent,
    AppointmentDateComponent,
    ConfirmationComponent,
    AllVisitsComponent,
    CancelVisitModalComponent
  ],
  entryComponents: [CancelVisitModalComponent]
})
export class VisitsModule {}
