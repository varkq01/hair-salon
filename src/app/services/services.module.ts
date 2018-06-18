import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HairdressingComponent } from 'src/app/services/hairdressing/hairdressing.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddServiceComponent } from './add-service/add-service.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServicesComponent,
    HairdressingComponent,
    ServicesListComponent,
    ServiceListComponent,
    AddServiceComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  entryComponents: [
    AddServiceComponent
  ]
})
export class ServicesModule {}
