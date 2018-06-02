import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CosmeticComponent } from 'src/app/services/cosmetic/cosmetic.component';
import { HairdressingComponent } from 'src/app/services/hairdressing/hairdressing.component';
import { ServicesComponent } from 'src/app/services/services.component';

@NgModule({
  declarations: [
    ServicesComponent,
    HairdressingComponent,
    CosmeticComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class ServicesModule {}
