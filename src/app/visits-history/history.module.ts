import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsHistoryComponent } from './visits-history.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VisitsHistoryComponent]
})
export class HistoryModule { }
