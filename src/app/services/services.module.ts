import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HairdressingComponent } from 'src/app/services/hairdressing/hairdressing.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  declarations: [
    ServicesComponent,
    HairdressingComponent,
    ServicesListComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class ServicesModule {}
